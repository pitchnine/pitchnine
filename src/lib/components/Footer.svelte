<script>
	const year = new Date().getFullYear();

	const footerLinks = [
		{ href: '/about', label: 'About' },
		{ href: '/contact', label: 'Contact' }
	];
</script>

<footer class="border-t border-gray-50/25 mt-24 md:mt-64">
	<div class="mx-auto max-w-7xl p-3 flex flex-col md:flex-row items-center justify-between gap-6 mt-8">
		
		<!-- Logo -->
		<a href="/" class="logo-link" aria-label="Pitch Nine home">
			<span class="inter text-2xl font-bold tracking-tight text-gray-50">PITCH</span>
			<span class="inter text-2xl font-bold tracking-tight text-gray-50/60">NINE</span>
		</a>

		<!-- Links -->
		<nav class="flex gap-6">
			{#each footerLinks as { href, label }}
				<a {href} class="text-sm text-gray-400 hover:text-gray-100 transition">
					{label}
				</a>
			{/each}
		</nav>
	</div>

	<!-- Bottom line -->
	<div class="max-w-7xl p-3 text-xs text-center sm:text-left opacity-50">
		<p>© {year} Pitch Nine. <br> Pitch Nine is based in the United States. <br>All rights reserved.</p>
	</div>
</footer>
