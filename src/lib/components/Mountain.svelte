<script>
  import { onMount } from 'svelte';

  /* ---- Tweakables ---- */
  const IMG_SRC = '/images/mountain.jpg'; // 1920×1080 image
  const STROKE = 6;                       // tracer thickness
  const PROGRESS = 0.70;                  // 0..1: how far the tracer draws
  const TRACER_DELAY = 600;               // ms before tracer starts
  const TRACER_DURATION = 2000;           // ms tracer draw time
  const NINE_COLOR = '#011C25';           // color for the “9”

  // Ridge path (1920×1080 coords)
  const RIDGE_D =
    "M4.68035 814.156L110.5 739.156L121.5 725L146 736L166 725L173.5 732.5L210 718L235 718L301 671L367.5 648.5L379.5 652.5L433 623.5L463.5 613.5L514 580.5L536.5 580.5L544 570L554.5 570L645 496L666.5 463.156L671.5 474L718 425.5L728 433.5L759.5 413.5L768 425.5L786.5 392L803 398.5L813 408L845.5 372.5L851 392L892 312L954.68 269.156";

  // Circle, fixed in the same viewBox
  const CIRCLE_CX = 860;
  const CIRCLE_CY = 365;
  const CIRCLE_R  = 32;

  /* ---- Internal ---- */
  let pathEl;

  onMount(() => {
    const img = new Image();
    img.src = IMG_SRC;
    img.onload = () => {
      requestAnimationFrame(() => {
        if (!pathEl) return;
        const L = pathEl.getTotalLength();
        // Initialize hidden
        pathEl.style.strokeDasharray = String(L);
        pathEl.style.strokeDashoffset = String(-drawLen);
        pathEl.style.transition = `stroke-dashoffset ${TRACER_DURATION}ms ease-in-out ${TRACER_DELAY}ms`;
        // Draw to PROGRESS on next frame
        requestAnimationFrame(() => {
          const finalOffset = L * (1 - Math.max(0, Math.min(1, PROGRESS)));
          pathEl.style.strokeDashoffset = String(L-finalOffset);
        });
      });
    };
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
    <image
      href={IMG_SRC}
      x="0" y="0" width="1920" height="1080"
      style="opacity:0"
      class="animate-heroFade"
    />

    <!-- Dark overlay (below the lines) -->
    <rect
      x="0" y="0" width="1920" height="1080"
      fill="black" opacity="0"
      class="animate-overlayOpacity"
    />

    <!-- Subtle static ridge (always visible) -->
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

    <!-- Bright tracer (animates left → up to PROGRESS) -->
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

    <!-- Fixed-position circle + 9 (same coordinate system) -->
    <g class="marker-fixed"
       style={`transition-delay: ${TRACER_DELAY + TRACER_DURATION * PROGRESS - 120}ms;`}>
      <circle cx={CIRCLE_CX} cy={CIRCLE_CY} r={CIRCLE_R} fill="white" />
      <text
        x={CIRCLE_CX} y={CIRCLE_CY + 1}
        text-anchor="middle" dominant-baseline="middle"
        font-size="40" font-weight="700" fill={NINE_COLOR}
        font-family="Playfair Display, serif"
      >9</text>
    </g>
  </svg>

  <!-- Centered logo + headline -->
  <div class="absolute inset-x-0 bottom-64 flex flex-col items-center gap-3 text-center">
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

  /* Marker: fade in slightly before the tracer arrives */
  .marker-fixed { opacity: 0; transition: opacity 260ms ease-out; }
  .marker-fixed { opacity: 1; } /* becomes visible due to transition-delay inline */

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
    .marker-fixed { transition: none !important; opacity: 1 !important; }
  }
</style>
