<script lang="ts">
  // Svelte 5 runes
  const {
    count = 6,                 // # of motifs rendered
    durationMs = 16000,        // full fade-in/hold/fade-out cycle
baseSize="clamp(140px, 28vw, 280px)"
  } = $props();

  // keep anchors near the hero headline area (center-ish)
  const anchors = [
    { x: 20, y: 70 }, { x: 75, y: 67}, { x: 10, y: 16}, { x: 80, y: 15}
  ];

  // import your white, stroke-only svgs as raw
  import orbit      from '$lib/motifs/orbit.svg?raw';
  import scatter    from '$lib/motifs/scatter.svg?raw';
  import star       from '$lib/motifs/star.svg?raw';
  import whiteboard from '$lib/motifs/whiteboard.svg?raw';

  const library: string[] = [orbit, scatter, star, whiteboard];

  // build a stable set of items (no timers)
  type Item = { svg: string; x: number; y: number; delay: number; scale: number };
  const items: Item[] = Array.from({ length: count }, (_, i) => {
    const a = anchors[i % anchors.length];
    // gentle randomization, but stable for initial render
    const scale = 1 + (Math.random() * 0.04 - 0.02); // -2%..+2%
    const delay = i * (durationMs / count) + Math.random() * 600; // phased offsets
    const svg   = library[i % library.length];
    return { svg, x: a.x, y: a.y, delay, scale };
  });
</script>

<style>
  .motifs {
    position: absolute;
    inset: 0;
    pointer-events: none;
    z-index: 2;             
  }

  .motif {
    position: absolute;
    width: var(--size);
    height: auto;
    opacity: 0;
    filter: drop-shadow(0 0 10px rgba(255,255,255,0.05));
    mix-blend-mode: screen;          /* airy, Enveda-like */
    will-change: opacity, transform;
    animation: fadeFloat var(--dur) cubic-bezier(.22,1,.36,1) infinite; /* easeOutBack-ish */
    animation-delay: var(--delay);
    transform: translateZ(0) scale(var(--scale));
  }

  /* keep strokes elegant even when we scale containers */
  .motif :where(svg) {
+   display: block;
+   width: 100%; 
+   height: auto;
+   vector-effect: non-scaling-stroke;
+   stroke: rgba(255,255,255,0.85);
+   stroke-width: 1.5;
+   fill: none;
  }

  /* long, quiet cycle: slow fade in, long hold, gentle exit */
@keyframes fadeFloat {
  0%   { opacity: 0;   transform: translateY(2px)  scale(var(--scale)); }
  4%   { opacity: .85; transform: translateY(-1px) scale(calc(var(--scale) * 1.005)); }
  10%  { opacity: .85; transform: translateY(-1px) scale(calc(var(--scale) * 1.005)); }
  14%  { opacity: 0;   transform: translateY(0px)  scale(var(--scale)); }
  100% { opacity: 0;   transform: translateY(0px)  scale(var(--scale)); }
}

  @media (prefers-reduced-motion: reduce) {
    .motif { animation: none !important; opacity: .35 !important; }
  }
</style>

<div class="motifs" aria-hidden="true">
  {#each items as it, idx}
    <div
      class="motif"
      style={`
        --dur:${durationMs}ms;
        --delay:${it.delay}ms;
        --size:${baseSize};
        --scale:${it.scale};
        left:${it.x}%;
        top:${it.y}%;
      `}
    >
      {@html it.svg}
    </div>
  {/each}
</div>
