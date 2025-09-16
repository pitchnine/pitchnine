<script>
  const year = new Date().getFullYear();

  const footerLinks = [
    { href: '/about', label: 'About' },
    { href: '/contact', label: 'Contact' },
    { href: '/privacy', label: 'Privacy Policy'}
  ];
</script>

<footer class="border-t border-gray-50/20 mt-24 md:mt-40">
  <div class="mx-auto max-w-7xl px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-6">
    
    <!-- Logo -->
    <a href="/" class="logo-link flex items-center space-x-1" aria-label="Pitch Nine home">
      <span class="inter text-xl font-bold tracking-tight text-gray-50">PITCH</span>
      <span class="inter text-xl font-bold tracking-tight text-gray-50/60">NINE</span>
    </a>

    <!-- Links -->
    <nav class="flex gap-6">
      {#each footerLinks as { href, label }}
        <a {href} class="text-sm text-gray-400 hover:text-gray-100 transition">
          {label}
        </a>
        
      {/each}
      <a href="mailto:hello@pitchnine.com"
         class="text-sm transition text-emerald-500 hover:underline hover:underline-offset-4">
        hello@pitchnine.com
      </a>
    </nav>
  </div>

  <!-- Bottom line -->
  <div class="mx-auto max-w-7xl px-6 pb-6 text-xs text-gray-400 text-center md:text-left">
    © {year} Pitch Nine. All rights reserved.
  </div>
</footer>
