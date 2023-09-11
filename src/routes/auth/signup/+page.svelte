<script lang="ts">
	import type { ActionData } from './$types';
	import { enhance } from '$app/forms';

	export let form: ActionData;
</script>

<div class="flex justify-center">
	<div class="w-80 my-24">
		<div class="text-center mb-6">
			<h1 class="text-3xl font-bold mb-2">Sign up</h1>
			<p>
				Already have an account? <a href="/auth/login" class="link">Log in</a>
			</p>
		</div>
		{#if form?.userExists}
			<div class="alert alert-error shadow-lg">
				<div>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="stroke-current flex-shrink-0 h-6 w-6"
						fill="none"
						viewBox="0 0 24 24"
						><path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
						/></svg
					>
					<span>An account with this email already exists!</span>
				</div>
			</div>
		{/if}
		<form method="POST" use:enhance>
			<div class="form-control">
				<label class="label" for="first_name">
					<span class="label-text">First name</span>
				</label>
				<input
					type="text"
					name="first_name"
					id="first_name"
					placeholder=""
					class="input {form?.errors?.first_name ? 'input-error' : 'input-bordered'}"
					value={form?.data?.first_name ?? ''}
				/>
				{#if form?.errors?.first_name}
					<label class="label" for="first_name">
						<span class="label-text-alt text-error">{form?.errors?.first_name[0]}</span>
					</label>
				{/if}
			</div>
			<div class="form-control">
				<label class="label" for="name">
					<span class="label-text">Last name</span>
				</label>
				<input
					type="text"
					name="last_name"
					id="last_name"
					placeholder=""
					class="input {form?.errors?.last_name ? 'input-error' : 'input-bordered'}"
					value={form?.data?.last_name ?? ''}
				/>
				{#if form?.errors?.last_name}
					<label class="label" for="last_name">
						<span class="label-text-alt text-error">{form?.errors?.last_name[0]}</span>
					</label>
				{/if}
			</div>
			<div class="form-control">
				<label class="label" for="email">
					<span class="label-text">Email</span>
				</label>
				<input
					type="text"
					name="email"
					id="email"
					placeholder=""
					class="input {form?.errors?.email ? 'input-error' : 'input-bordered'}"
					value={form?.data?.email ?? ''}
					autocomplete="email"
				/>
				{#if form?.errors?.email}
					<label class="label" for="email">
						<span class="label-text-alt text-error">{form?.errors?.email[0]}</span>
					</label>
				{/if}
			</div>
			<div class="form-control">
				<label class="label" for="password">
					<span class="label-text">Password</span>
				</label>
				<input
					type="password"
					name="password"
					id="password"
					placeholder=""
					class="input {form?.errors?.password ? 'input-error' : 'input-bordered'}"
				/>
				{#if form?.errors?.password}
					<label class="label" for="password">
						<span class="label-text-alt text-error">{form?.errors?.password[0]}</span>
					</label>
				{/if}
			</div>
			<div class="form-control">
				<label class="label" for="passwordConfirm">
					<span class="label-text">Confirm password</span>
				</label>
				<input
					type="password"
					name="password_confirm"
					id="passwordConfirm"
					placeholder=""
					class="input {form?.errors?.password_confirm ? 'input-error' : 'input-bordered'}"
				/>
				{#if form?.errors?.password_confirm}
					<label class="label" for="passwordConfirm">
						<span class="label-text-alt text-error">{form?.errors?.password_confirm[0]}</span>
					</label>
				{/if}
			</div>
			<div class="form-control mt-2">
				<label for="terms" class="label cursor-pointer">
					<input
						type="checkbox"
						name="terms"
						id="terms"
						class="checkbox {form?.errors?.terms ? 'checkbox-error' : ''}"
					/>
					<span class="label-text"
						>I accept <a
							class="link"
							href="/terms"
							target="_blank
                        ">the terms and conditions</a
						></span
					>
				</label>
				{#if form?.errors?.terms}
					<label class="label" for="terms">
						<span class="label-text-alt text-error">{form?.errors?.terms[0]}</span>
					</label>
				{/if}
			</div>
			<div class="form-control mt-6">
				<button type="submit" class="btn btn-primary w-full">Create account</button>
			</div>
			<div class="text-center mt-4">
				<a href="/" class="label-text-alt link link-hover">Go to home page</a>
			</div>
		</form>
	</div>
</div>
