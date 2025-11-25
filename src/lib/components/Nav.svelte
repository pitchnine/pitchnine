<script>
	import { page } from '$app/stores';

	$: currentPath = $page.url.pathname;

	const items = [
		{ href: '/about', label: 'About' },
		{ href: '/contact', label: 'Contact' }
	];
</script>

<div class="flex items-center justify-between gap-4 mx-auto max-w-7xl px-6 py-12">
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