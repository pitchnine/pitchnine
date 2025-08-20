<script>
  import { onMount, onDestroy } from 'svelte';

  // Ridge path (1920×1080 coords)
  const RIDGE_D =
    "M4.68035 814.156L110.5 739.156L121.5 725L146 736L166 725L173.5 732.5L210 718L235 718L301 671L367.5 648.5L379.5 652.5L433 623.5L463.5 613.5L514 580.5L536.5 580.5L544 570L554.5 570L645 496L666.5 463.156L671.5 474L718 425.5L728 433.5L759.5 413.5L768 425.5L786.5 392L803 398.5L813 408L845.5 372.5L851 392L892 312L954.68 269.156";

  // --- knobs ---
  const IMG_SRC = '/images/mountain.jpg';
  const STROKE = 6;
  const PROGRESS = 0.60;        // how far the tracer should draw (0..1)

  // Circle (if you later want a fixed circle at the ridge end)
  const CIRCLE_CX = 954.68;
  const CIRCLE_CY = 269.156;
  const CIRCLE_R  = 32;
  const NINE_COLOR = '#011C25';

  // timings
  const TRACER_DELAY = 600;      // ms before line starts drawing
  const TRACER_DURATION = 2000;  // ms total draw time

  // Refs / state
  let pathEl;
  let overlayEl;

  // NEW: declare marker state so SSR doesn't blow up
  let markerPos = { x: NaN, y: NaN };
  let showMarker = false;

  let timeouts = [];

  onMount(() => {
    // Wait for image to be ready (prevents brief flash before overlay)
    const img = new Image();
    img.src = IMG_SRC;

    img.onload = () => {
      // Defer work to next frame so the DOM is ready
      requestAnimationFrame(() => {
        if (!pathEl) return;

        // Measure path length and set up the dashed stroke
        const L = pathEl.getTotalLength();
        pathEl.style.strokeDasharray = String(L);
        pathEl.style.strokeDashoffset = String(L);
        pathEl.style.transition =
          `stroke-dashoffset ${TRACER_DURATION}ms ease-in-out ${TRACER_DELAY}ms`;

        // Precompute where the marker should sit (at the PROGRESS point)
        const drawLen = L * PROGRESS;
        try {
          const p = pathEl.getPointAtLength(drawLen);
          markerPos = { x: p.x, y: p.y };
        } catch {
          // Fallback if SVG path isn’t ready to report points
          markerPos = { x: NaN, y: NaN };
        }

        // Kick off the draw on the next frame
        requestAnimationFrame(() => {
          const finalOffset = L * (1 - PROGRESS);
          pathEl.style.strokeDashoffset = String(finalOffset);
        });

        // Reveal marker roughly when the tracer reaches it
        const markerWhen = TRACER_DELAY + Math.round(TRACER_DURATION * PROGRESS);
        timeouts.push(setTimeout(() => {
          showMarker = true;
        }, markerWhen));
      });
    };

    return () => {
      // noop (we also clear timeouts in onDestroy)
    };
  });

  onDestroy(() => {
    timeouts.forEach(clearTimeout);
    timeouts = [];
  });
</script>

<section class="relative h-screen overflow-hidden">
  <svg
    class="absolute inset-0 h-full w-full"
    viewBox="0 0 1920 1080"
    preserveAspectRatio="xMidYMid slice"
    aria-hidden="true"
  >
    <!-- Background image -->
    <image href={IMG_SRC} x="0" y="0" width="1920" height="1080"
           style="opacity:0" class="animate-heroFade" />

    <!-- Dark overlay (below the lines) -->
    <rect x="0" y="0" width="1920" height="1080" fill="black" opacity="0" class="animate-overlayOpacity" />

    <!-- 1) Subtle static guide ridge (visible immediately) -->
    <path
      d={RIDGE_D}
      fill="none"
      stroke="white"
      stroke-opacity="0.28"
      stroke-width={Math.max(2, STROKE - 2)}
      stroke-linecap="round"
      stroke-linejoin="round"
      vector-effect="non-scaling-stroke"
      style="filter: drop-shadow(0 0 6px rgba(255,255,255,.45));"
    />

    <!-- 2) Bright tracer that draws from left to PROGRESS -->
    <path
      bind:this={pathEl}
      d={RIDGE_D}
      fill="none"
      stroke="white"
      stroke-width={STROKE}
      stroke-linecap="round"
      stroke-linejoin="round"
      vector-effect="non-scaling-stroke"
      style="filter: drop-shadow(0 0 10px rgba(255,255,255,.85));"
    />

    <!-- 3) Marker circle + "9" (appears as tracer approaches it) -->
    {#if Number.isFinite(markerPos.x) && Number.isFinite(markerPos.y)}
      <g
        class="marker"
        class:marker--visible={showMarker}
        transform={`translate(${markerPos.x}, ${markerPos.y})`}
      >
        <circle r="32" fill="white" />
        <text
          x="0" y="1" text-anchor="middle" dominant-baseline="middle"
          font-size="16" font-weight="700" fill={NINE_COLOR}
          font-family="system-ui, -apple-system, Segoe UI, Roboto, 'Playfair Display', serif"
        >9</text>
      </g>
    {/if}
  </svg>

  <!-- Centered logo + headline -->
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
  /* Photo fade */
  @keyframes heroFade { 0%{opacity:0;transform:scale(1.04)}60%{opacity:1;transform:scale(1)}100%{opacity:1} }
  .animate-heroFade { animation: heroFade 1200ms ease-out forwards; }

  /* Veil fade */
  @keyframes overlayOpacity { from{opacity:0} to{opacity:.75} }
  .animate-overlayOpacity { animation: overlayOpacity 1800ms ease 120ms forwards; }

  /* Marker (circle + 9) */
  @keyframes markerIn { from { opacity: 0; transform: scale(.7) } to { opacity: 1; transform: scale(1) } }
  .marker {
    opacity: 0;
    transform: scale(.7);
    transition: opacity 280ms ease-out, transform 280ms ease-out;
  }
  .marker.marker--visible {
    opacity: 1;
    transform: scale(1);
  }

  /* Tag/Headline timing */
  @keyframes tagIn { from{opacity:0;transform:translateY(4px)} to{opacity:1;transform:translateY(0)} }
  .animate-tagIn { animation: tagIn 320ms ease-out 2400ms forwards; }

  @keyframes headlineIn { from{opacity:0;transform:translateY(8px)} to{opacity:1;transform:translateY(0)} }
  .animate-headlineIn { animation: headlineIn 380ms ease-out 2600ms forwards; }

  /* Reduced motion */
  @media (prefers-reduced-motion: reduce) {
    .animate-heroFade,
    .animate-overlayOpacity,
    .animate-tagIn,
    .animate-headlineIn { animation-duration: 1ms !important; animation-delay: 0ms !important; }
    .marker { transition-duration: 1ms !important; }
  }
</style>
