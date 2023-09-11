import type { Actions } from './$types';
import { fail } from '@sveltejs/kit';
import { z } from 'zod';

const validationSchema = z.object({
	email: z
		.string()
		.min(1, {
			message: 'Email is required'
		})
		.email({
			message: 'Email must be a valid email address'
		}),
	password: z
		.string({
			required_error: 'Password is required'
		})
		.min(8, {
			message: 'Password must be at least 8 characters long'
		})
		.max(24)
		.trim()
});

export const actions: Actions = {
	default: async ({ request }) => {
		const formData = Object.fromEntries(await request.formData());

		try {
			const result = validationSchema.parse(formData);
			// save user to database
			console.log(result);
			// eslint-disable-next-line @typescript-eslint/no-explicit-any
		} catch (err: any) {
			const { fieldErrors: errors } = err.flatten();
			// eslint-disable-next-line @typescript-eslint/no-unused-vars
			const { password, ...rest } = formData;
			console.log(errors);
			return fail(400, { data: rest, errors });
		}
	}
};
