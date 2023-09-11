import { fail, redirect } from '@sveltejs/kit';
import { z } from 'zod';
import { db } from '$lib/database';
import bcrypt from 'bcrypt';
import type { Actions } from './$types';

// zod validation schema
const validationSchema = z
	.object({
		first_name: z
			.string()
			.min(1, {
				message: 'First name is required'
			})
			.max(64)
			.trim(),
		last_name: z.string().min(1, { message: 'Last name is required' }).max(64).trim(),
		email: z
			.string()
			.min(1, {
				message: 'Email is required'
			})
			.email({
				message: 'Email must be a valid email address'
			}),
		terms: z.enum(['on'], { required_error: 'You must accept the terms and conditions' }),
		password: z
			.string()
			.min(8, {
				message: 'Password must be at least 8 characters long'
			})
			.max(24)
			.trim(),
		password_confirm: z
			.string()
			.min(8, { message: 'Password confirmation must be at least 8 characters long' })
			.max(24)
			.trim()
	})
	.superRefine(({ password_confirm, password }, ctx) => {
		if (password !== password_confirm) {
			ctx.addIssue({
				code: z.ZodIssueCode.custom,
				message: 'Password and Confirm password must match',
				path: ['password_confirm']
			});
			ctx.addIssue({
				code: z.ZodIssueCode.custom,
				message: 'Password and Confirm password must match',
				path: ['password']
			});
		}
	});

// form actions
export const actions: Actions = {
	default: async ({ request }) => {
		const formData = Object.fromEntries(await request.formData());
		// validate the form
		let result: { first_name: string; last_name: string; email: string; password: string };
		try {
			result = validationSchema.parse(formData);
			// eslint-disable-next-line @typescript-eslint/no-explicit-any
		} catch (err: any) {
			const { fieldErrors: errors } = err.flatten();
			// eslint-disable-next-line @typescript-eslint/no-unused-vars
			const { password, password_confirm, terms, ...rest } = formData;
			console.log(errors);
			return fail(400, { data: rest, errors });
		}
		// chech user email doesn't exist
		const user = await db.user.findUnique({
			where: { email: result.email }
		});
		if (user) {
			// eslint-disable-next-line @typescript-eslint/no-unused-vars
			const { password, password_confirm, terms, ...rest } = formData;
			return fail(400, { data: rest, userExists: true });
		}
		// create the new user
		db.user
			.create({
				data: {
					firstname: result.first_name,
					lastname: result.last_name,
					email: result.email,
					password: await bcrypt.hash(result.password, 10)
				}
			})
			.then(() => {
				// console.log(newUser);
				throw redirect(303, '/auth/login');
			})
			.catch((err) => {
				console.log(err);
				return fail(400);
			});
	}
};
