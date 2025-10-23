<script lang="ts">
  import { onMount, onDestroy } from 'svelte';

  /**
   * HeroScatterReveal (clean)
   * Minimal S-curve scatter animation for hero backgrounds/accents.
   * Tweaks per request:
   * 1) No internal background (transparent SVG) — parent controls bg.
   * 2) S-curve flows bottom-left → top-right (true lifecycle feel).
   * 3) +50% dots & scatter (denser, livelier field).
   * 4) Slower, more rhythmic pacing.
   */

  // --- Layout ---
  export let width = 1200;
  export let height = 600;
  export let marginX = 40;
  export let marginY = 40;

  // Dots (denser + more scatter)
  export let count = 240;          // was 160 → +50%
  export let rMin = 1.8;
  export let rMax = 4.0;
  export let jitterX = 15;         // was 10 → +50%
  export let jitterY = 42;         // was 28 → +50%

  // Logistic (S-curve)
  export let k = 0.012;
  export let x0 = width * 0.5;     // midpoint
  export let centerBias = 0.75;    // density bias near center

  // Colorway — careful but visible
  export let palette: string[] = [
    '#a7f3d0', // emerald 200
    '#34d399', // emerald 400
    '#059669', // emerald 600
    '#0d9488', // cyan 700
    '#0891b2'  // cyan
  ];
  export let desaturate = 0.06;     // subtle desat to stay classy

  // Animation timings (slower, more rhythmic)
  export let inDuration = 1200;      // per-dot fade-in (was 550)
  export let maxStagger = 1800;     // max delay left→right (was 900)
  export let holdDuration = 1600;   // linger after reveal (was 900)
  export let outDuration = 1600;    // global fade-out (was 800)
  export let loop = false;          // set true for ambient repetition while visible

  // Intersection behavior
  export let rootMargin = '0px 0px -10% 0px';
  export let once = false;

  // Accessibility
  export let ariaLabel = 'Animated scatterplot illustrating product lifecycle curve';

  let container: HTMLElement;
  let observer: IntersectionObserver | null = null;
  let reduceMotion = false;
  let inView = false;
  let phase: 'idle' | 'in' | 'hold' | 'out' = 'idle';
  let phaseTimer: ReturnType<typeof setTimeout> | null = null;

  type Dot = {
    x: number; y: number; r: number; color: string; delay: number; id: number;
  };
  let dots: Dot[] = [];

  function logistic(x: number) {
    return 1 / (1 + Math.exp(-k * (x - x0)));
  }

  // ease for stagger to create more organic pacing (slow start, smooth finish)
  function easeOutCubic(t: number) {
    return 1 - Math.pow(1 - t, 3);
  }

  function sampleX(i: number, n: number) {
    const t = i / (n - 1);
    const u = t < 0.5 ? Math.pow(t * 2, centerBias) / 2 : 1 - Math.pow((1 - t) * 2, centerBias) / 2;
    return marginX + u * (width - marginX * 2);
  }

  function generateDots() {
    const arr: Dot[] = [];
    for (let i = 0; i < count; i++) {
      const x = sampleX(i, count) + (Math.random() * 2 - 1) * jitterX;
      const yCurve = logistic(x);
      // FLIPPED: y decreases as x increases (SVG y grows downward), so invert
      const y = marginY + (1 - yCurve) * (height - marginY * 2) + (Math.random() * 2 - 1) * jitterY;
      const r = rMin + Math.random() * (rMax - rMin);
      const color = palette[i % palette.length];
      const nx = (x - marginX) / Math.max(1, (width - marginX * 2));
      const delay = easeOutCubic(Math.min(1, Math.max(0, nx))) * maxStagger;
      arr.push({ x, y, r, color, delay, id: i });
    }
    dots = arr.sort((a, b) => a.x - b.x);
  }

  function clearTimer() {
    if (phaseTimer) { clearTimeout(phaseTimer); phaseTimer = null; }
  }

  function advancePhases() {
    clearTimer();
    if (!inView) { phase = 'idle'; return; }
    if (reduceMotion) { phase = 'hold'; return; }

    phase = 'in';
    const totalIn = maxStagger + inDuration;
    phaseTimer = setTimeout(() => {
      phase = 'hold';
      clearTimer();
      phaseTimer = setTimeout(() => {
        phase = 'out';
        clearTimer();
        phaseTimer = setTimeout(() => {
          clearTimer();
          if (loop && inView) {
            phase = 'idle';
            phaseTimer = setTimeout(() => { advancePhases(); }, 280);
          }
        }, outDuration);
      }, holdDuration);
    }, totalIn);
  }

  onMount(() => {
    reduceMotion = typeof window !== 'undefined' && window.matchMedia?.('(prefers-reduced-motion: reduce)')?.matches || false;
    generateDots();

    observer = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        if (entry.target === container) {
          const nowInView = entry.isIntersecting && entry.intersectionRatio > 0;
          if (nowInView && !inView) { inView = true; advancePhases(); }
          else if (!nowInView && inView) {
            inView = false; clearTimer(); if (!once) phase = 'idle';
          }
        }
      }
    }, { root: null, rootMargin, threshold: [0, 0.1, 0.5, 1] });

    observer.observe(container);
  });

  onDestroy(() => { observer?.disconnect(); clearTimer(); });
</script>

<style>
  .wrap { position: relative; width: 100%; height: 100%; overflow: hidden; }
  svg { display: block; width: 100%; height: 100%; }

  .dot { opacity: 0; transform: translate3d(0,0,0); will-change: opacity; }
  .dot.in {
    animation-name: fadeIn; animation-fill-mode: both; animation-timing-function: cubic-bezier(.2,.7,.2,1);
  }
  @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }

  .group { opacity: 1; transition: opacity var(--outDuration,1200ms) cubic-bezier(.2,.7,.2,1); }
  .group.out { opacity: 0; }
</style>

<div bind:this={container} class="wrap" role="img" aria-label={ariaLabel}>
  <svg viewBox={`0 0 ${width} ${height}`} preserveAspectRatio="xMidYMid slice" aria-hidden="true">
    <defs>
      <filter id="desat"><feColorMatrix type="saturate" values={(1 - desaturate).toString()} /></filter>
    </defs>

    <!-- Dots group (final fade-out controlled on the group) -->
    <g class="group" class:out={phase === 'out'} style={`--outDuration:${outDuration}ms`} filter="url(#desat)">
      {#each dots as d}
        <circle
          class="dot"
          class:in={phase === 'in' || phase === 'hold'}
          cx={d.x}
          cy={d.y}
          r={d.r}
          fill={d.color}
          style={`animation-duration:${inDuration}ms;animation-delay:${Math.round(d.delay)}ms;`}
        />
      {/each}
    </g>

    <!-- Subtle guide curve (flipped): very faint stroke -->
    <path
      d={`M ${marginX},${marginY + (1 - logistic(marginX)) * (height - marginY*2)} C ${width*0.33},${marginY + (1 - logistic(width*0.33)) * (height - marginY*2)} ${width*0.66},${marginY + (1 - logistic(width*0.66)) * (height - marginY*2)} ${width - marginX},${marginY + (1 - logistic(width - marginX)) * (height - marginY*2)}`}
      fill="none"
      stroke="#ffffff"
      stroke-opacity="0.05"
      stroke-width="2"
    />
  </svg>
</div>


