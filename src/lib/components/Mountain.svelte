<script>
  import { onMount } from 'svelte';

  let ready = false;
  let pathEl;

  onMount(() => {
  const img = new Image();
  img.src = '/images/mountain.jpg';
  img.onload = () => {
    // Wait for the path to exist in the DOM
    requestAnimationFrame(() => {
      if (!pathEl) return;
      const L = pathEl.getTotalLength();

      // 1) Initialize length + start fully hidden
      pathEl.style.strokeDasharray = `${L}`;
      pathEl.style.strokeDashoffset = `${L}`;

      // 2) Enable the transition via class
      pathEl.classList.add('outline-draw');

      // 3) Next frame, change the offset to 0 (class handles the transition)
      requestAnimationFrame(() => {
        pathEl.style.strokeDashoffset = '0';
      });
    });
  };
});
</script>

<section class="relative h-screen overflow-hidden">
  <svg
    class="absolute inset-0 h-full w-full"
    viewBox="0 0 1638 2048"
    preserveAspectRatio="xMidYMid slice"
    aria-hidden="true"
  >
    <!-- Image -->
    <image
      href="/images/mountain.jpg"
      x="0" y="0" width="1638" height="2048"
      style="opacity:0"
      class="animate-heroFade"
    />

    <!-- Dark overlay inside SVG (below the line) -->
    <rect x="0" y="0" width="1638" height="2048" fill="black" opacity="0" class="animate-overlayOpacity" />

    <!-- Ridge outline (trace your mountain edge here) -->
    <path
      bind:this={pathEl}
      d="M300,1100 C420,940 520,840 640,740 C760,640 880,560 1020,480 C1160,400 1320,340 1500,300"
      fill="none"
      stroke="white"
      stroke-width="4"
      stroke-linecap="round"
      stroke-linejoin="round"
      vector-effect="non-scaling-stroke"
      style="filter: drop-shadow(0 0 6px rgba(255,255,255,.75));"
    />
  </svg>

  <!-- Centered logo + headline block -->
  <div class="absolute inset-x-0 bottom-16 flex flex-col items-center gap-3 text-center">
    <div class="opacity-0 animate-tagIn px-3 py-1 rounded-md bg-black/40 text-white text-sm font-semibold">
      Pitch Nine
    </div>
    <h1 class="opacity-0 animate-headlineIn text-white text-3xl md:text-4xl font-semibold max-w-[32ch]">
      Creating product clarity for your toughest move yet.
    </h1>
  </div>
</section>

<style>
  /* Image fade */
  @keyframes heroFade {
    0% { opacity: 0; transform: scale(1.04); }
    60% { opacity: 1; transform: scale(1); }
    100% { opacity: 1; }
  }
  .animate-heroFade { animation: heroFade 1500ms ease-out forwards; }

  /* Dark veil fade */
  @keyframes overlayOpacity { from { opacity: 0; } to { opacity: 0.75; } }
  .animate-overlayOpacity { animation: overlayOpacity 2200ms ease 120ms forwards; }

 /* Outline path draw: transition timing only */
.outline-draw {
  transition: stroke-dashoffset 2200ms ease-in-out 600ms;
}

  /* Tag/Headline timing (comes in after the line) */
  @keyframes tagIn { from { opacity: 0; transform: translateY(4px); } to { opacity: 1; transform: translateY(0); } }
  .animate-tagIn { animation: tagIn 320ms ease-out 2600ms forwards; }

  @keyframes headlineIn { from { opacity: 0; transform: translateY(8px); } to { opacity: 1; transform: translateY(0); } }
  .animate-headlineIn { animation: headlineIn 420ms ease-out 2800ms forwards; }

  /* Reduced motion */
  @media (prefers-reduced-motion: reduce) {
    .animate-heroFade,
    .animate-overlayOpacity,
    .animate-tagIn,
    .animate-headlineIn { animation-duration: 1ms !important; animation-delay: 0ms !important; }
    .outline-draw { transition: none !important; stroke-dashoffset: 0 !important; }
  }
</style>
