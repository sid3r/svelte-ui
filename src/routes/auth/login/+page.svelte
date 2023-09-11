<script lang="ts">
	import type { ActionData } from './$types';
	import { enhance } from '$app/forms';
	export let form: ActionData;
</script>

<div class=" flex h-screen items-center justify-center">
	<div class="w-80">
		<div class="text-center mb-6">
			<h1 class="text-3xl font-bold mb-2">Login</h1>
			<p>
				Don't have an account yet? <a href="/auth/signup" class="link">Sign up</a>
			</p>
		</div>
		<form method="POST" use:enhance>
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
				<label class="label" for="password">
					<a href="/forgotpassword" class="label-text-alt link">Forgot password?</a>
				</label>
			</div>
			<div class="form-control mt-6">
				<button type="submit" class="btn btn-primary w-full">Log in</button>
			</div>
			<div class="text-center mt-4">
				<a href="/" class="label-text-alt link link-hover">Go to home page</a>
			</div>
		</form>
	</div>
</div>
