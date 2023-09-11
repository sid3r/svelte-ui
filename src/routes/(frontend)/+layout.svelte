<script lang="ts">
	import type { PageData } from './$types';
	export let data: PageData;
	import { page } from '$app/stores';

	// reactive active link page
	let activePage = '/';
	$: {
		if ($page.url.pathname !== '/') {
			activePage = $page.url.pathname.split('/')[1];
		} else {
			activePage = '/';
		}
	}
</script>

<nav class="bg-base-200">
	<div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
		<div class="relative flex h-16 items-center justify-between">
			<div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
				<!-- Mobile menu button-->
				<button
					type="button"
					class="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
					aria-controls="mobile-menu"
					aria-expanded="false"
				>
					<span class="sr-only">Open main menu</span>
					<svg
						class="block h-6 w-6"
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						stroke-width="1.5"
						stroke="currentColor"
						aria-hidden="true"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
						/>
					</svg>
					<svg
						class="hidden h-6 w-6"
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						stroke-width="1.5"
						stroke="currentColor"
						aria-hidden="true"
					>
						<path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
					</svg>
				</button>
			</div>
			<div class="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
				<div class="flex flex-shrink-0 items-center">
					<img
						class="block h-8 w-auto"
						src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
						alt="Your Company"
					/>
				</div>
				<div class="hidden sm:ml-6 sm:block">
					<div class="flex space-x-4">
						<!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->
						<a
							href="/"
							class="{activePage === '/'
								? 'bg-base-300'
								: 'text-base-content'} hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium"
							aria-current="page">Home</a
						>

						<a
							href="/about"
							class="{activePage === 'about'
								? 'bg-base-300'
								: 'text-base-content'} hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium"
							>About</a
						>

						<a
							href="/contact"
							class="{activePage === 'contact'
								? 'bg-base-300'
								: 'text-base-content'} hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium"
							>Contact</a
						>
					</div>
				</div>
			</div>
			<div
				class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0"
			>
				<a href="auth/login" class="btn btn-primary btn-sm rounded-md"> Log in </a>
			</div>
		</div>
	</div>

	<!-- Mobile menu, show/hide based on menu state. -->
	<div class="sm:hidden" id="mobile-menu">
		<div class="space-y-1 px-2 pt-2 pb-3">
			<!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->
			<a
				href="/"
				class="bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium"
				aria-current="page">Home</a
			>
			<a
				href="/about"
				class="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
				>About</a
			>
			<a
				href="/contact"
				class="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
				>Contact</a
			>
		</div>
	</div>
</nav>

<main>
	<slot />
	<!-- place footer here -->
	<div class="text-center">
		<h1>{data.message}</h1>
	</div>
</main>
