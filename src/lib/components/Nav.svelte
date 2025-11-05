<script>
	import { page } from '$app/stores';

	$: currentPath = $page.url.pathname;

	const items = [
		{ href: '/about', label: 'About' },
		{ href: '/contact', label: 'Contact' }
	];
</script>
<nav class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div
		class="flex items-center justify-between py-4
			   sm:flex-row sm:justify-between
			   flex-col gap-6 sm:gap-0"
	>
	<a href="/" class="logo-link" aria-label="Pitch Nine home">
		{#if currentPath === '/'}
			<!-- SELECTED -->
			
				<span class="inter text-xl font-bold tracking-tight text-gray-50">PITCH</span><span
					class="inter text-xl font-bold tracking-tight text-gray-50/50">NINE</span
				>
	
		{:else}
			<!-- DEFAULT -->
			<span class="inter text-xl font-bold tracking-tight text-gray-50/50">PITCH</span><span
				class="inter text-xl font-bold tracking-tight text-gray-50/25">NINE</span
			>
		{/if}
	</a>

	<div class="flex gap-4">
		{#each items as { href, label }}
			<a {href} class={currentPath === href ? 'nav-link-active' : 'nav-link'}>
				{label}
			</a>
		{/each}
	</div>
</div>
</nav>