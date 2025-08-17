<script>
    import Nav from '$lib/components/Nav.svelte';
    import Footer from '$lib/components/Footer.svelte';
</script>

<Nav />



<section class="relative h-screen overflow-hidden">
  <!-- BG image -->
  <div
    class="absolute inset-0 z-0 bg-[url('/images/mountain-bg.jpg')] bg-cover bg-center opacity-0 animate-heroFade"
    aria-hidden="true"
  ></div>

  <!-- Dark overlay (fades in a beat later) -->
  <div
    class="absolute inset-0 z-10 bg-black/60 opacity-0 animate-overlayFade"
    aria-hidden="true"
  ></div>

  <!-- Your hero content -->
  <div class="relative z-20 flex h-full items-center justify-center">
    <h1 class="text-white text-4xl font-semibold">Creating product clarity for your toughest move yet.</h1>
  </div>
</section>

<Footer />

<style>
  /* image fade */
  @keyframes heroFade {
    0%   { opacity: 0; transform: scale(1.04); }
    60%  { opacity: 1; transform: scale(1); }
    100% { opacity: 1; }
  }
  .animate-heroFade {
    animation: heroFade 1500ms ease-out forwards;
  }

  /* overlay fade (slight delay) */
  @keyframes overlayFade {
    0%   { opacity: 0; }
    30%  { opacity: 0; }
    100% { opacity: 1; }
  }
  .animate-overlayFade {
    animation: overlayFade 1800ms ease forwards;
    animation-delay: 200ms;
  }
</style>
