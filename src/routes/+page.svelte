<script>
    import Nav from '$lib/components/Nav.svelte';
    import Footer from '$lib/components/Footer.svelte';
</script>

<Nav />


<!-- Hero -->

<section class="relative h-screen overflow-hidden">
  <div
    class="absolute inset-0 z-0 bg-[url('/images/mountain-bg.jpg')] bg-cover bg-center opacity-0 animate-heroFade"
    aria-hidden="true"
  ></div>
  <div
    class="absolute inset-0 z-10 bg-black/60 opacity-0 animate-overlayFade"
    aria-hidden="true"
  ></div>
  <div class="relative z-20 flex h-full items-center justify-center">
    <h1 class="text-white text-4xl font-semibold">Creating product clarity for your toughest move yet.</h1>
  </div>
</section>

<!-- About statement and logos -->

<section class="relative h-screen flex items-center justify-center">
<h2>Here's the what we do type of section with some social proof callouts and logos
</h2>
</section>

<!-- Specific services with explanation -->

<section class="relative h-screen flex items-center justify-center">
<h2>Our services and menu branded for search
</h2>
<p>Backlog rescue, ai innovation consultation, workflow alignment, product leadership support, risk navigation, innovation delivery etc</p>
</section>

<!-- Work case studies-->

<section class="relative h-screen">
<h2>Work case studies
</h2>
<div class="flex flex-row gap-6">
  <div class="bg-slate-100 w-1/4 h-40 flex flex-col items-center justify-center">
  <p>Origent</p>
  </div>
  <div class="bg-slate-100 w-1/4 h-40 flex flex-col items-center justify-center">
  <p>Viasana?</p>
  </div>
  <div class="bg-slate-100 w-1/4 h-40 flex flex-col items-center justify-center">
  <p>Hoth?</p>
  </div>
</div>
</section>

<!-- How we're different -->

<section class="relative h-screen flex items-center justify-center">
<h2>What's unique about us with link to "About" page
</h2>
</section>

<!-- Testimonials -->

<section class="relative h-screen flex items-center justify-center">
<h2>Quotes from people
</h2>
</section>

<!-- Form -->

<section class="relative h-screen flex flex-col items-center justify-center">
<h2>contact us
</h2>
<form>
<div class="bg-slate-100">Name</div>
<div class="bg-slate-100">Email</div>
<div class="bg-slate-100">Maybe calendly link or schedule embed i duno</div>
</form>
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
