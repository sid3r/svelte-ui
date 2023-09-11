<script>
	import { page } from '$app/stores';
</script>

<div class="flex h-screen items-center justify-center">
	<div class="text-center">
		<h1 class="text-7xl">{$page.status}</h1>
		<p>{$page.error?.message}</p>
		<br />
		<a href="/" class="link">Go to home page</a>
	</div>
</div>
