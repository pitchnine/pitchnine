<script lang="ts">
  import { onMount, onDestroy } from 'svelte';

  // Config (tweak freely)
  const {
    maxVisible = 2,             // how many motifs at once
    cycleMs   = 4000,           // how long a motif stays before fading out
    spawnMs   = 1000,            // how often to try adding a motif
    pauseWhenOffscreen = true
  } = $props();

  // Anchors (percent positions around center); add/remove as you like
  const anchors = [
    { x: 16, y: 24 }, { x: 28, y: 14 }, { x: 42, y: 18 },
    { x: 60, y: 16 }, { x: 74, y: 26 }, { x: 86, y: 22 },
    { x: 18, y: 68 }, { x: 32, y: 76 }, { x: 46, y: 72 },
    { x: 60, y: 64 }, { x: 76, y: 78 }, { x: 88, y: 66 }
  ];

  // Import raw SVGs (SvelteKit/Vite): place files in /static/motifs and import with ?raw
  // Replace/extend with your own
import orbit from '$lib/motifs/orbit.svg?raw';
import scatter from '$lib/motifs/scatter.svg?raw';
import star from '$lib/motifs/star.svg?raw';
import whiteboard from '$lib/motifs/whiteboard.svg?raw';

  const motifs: string[] = [orbit, scatter, star, whiteboard];

  type Spawn = { id: number; anchor: number; svg: string; bornAt: number; };
  let pool: Spawn[] = $state([]);
  let tid: number | null = null;
  let root: HTMLElement | null = null;
  let io: IntersectionObserver | null = null;
  let prefersReduced = $state(false);

  function tick() {
    const now = performance.now();
    // Cull expired
    pool = pool.filter(s => now - s.bornAt < cycleMs);
    // Spawn if room
    if (!prefersReduced && pool.length < maxVisible) {
      const anchor = Math.floor(Math.random() * anchors.length);
      const svg = motifs[Math.floor(Math.random() * motifs.length)];
      const id = Math.floor(Math.random() * 1e9);
      pool = [...pool, { id, anchor, svg, bornAt: now }];
    }
  }
  function start() {
    stop();
    if (prefersReduced) return;
    tid = window.setInterval(tick, spawnMs) as unknown as number;
  }
  function stop() { if (tid) clearInterval(tid); tid = null; }

  function styleFor(anchorIdx: number) {
    const a = anchors[anchorIdx % anchors.length];
    const delay = Math.floor(Math.random() * 400);
    const rotate = Math.floor(Math.random() * 8) - 4; // slight variation
    const scale = 1 + (Math.random() * 0.1 - 0.05);
    return `
      left:${a.x}%;
      top:${a.y}%;
      animation-delay:${delay}ms;
      transform: translateZ(0) rotate(${rotate}deg) scale(${scale});
    `;
  }

  function observe() {
    if (!pauseWhenOffscreen || !root) return;
    io = new IntersectionObserver((ents) => {
      const vis = ents.some(e => e.isIntersecting);
      if (vis) start(); else stop();
    }, { threshold: 0.2 });
    io.observe(root);
  }

  onMount(() => {
    prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    // seed a few
    for (let i = 0; i < Math.min(3, maxVisible); i++) tick();
    start();
    observe();
  });
  onDestroy(() => { stop(); if (io) io.disconnect(); });
</script>

<style>
  .motif {
    position: absolute; inset: 0; pointer-events: none; z-index: 2;
  }
  .motif {
    position: absolute;
    width: clamp(40px, 5.5vw, 90px);
    height: auto;
    opacity: 50%;
    filter: drop-shadow(0 0 10px rgba(255,255,255,0.06));
    will-change: opacity, transform;
    mix-blend-mode: screen;
    transition: opacity 800ms ease, transform 800ms ease, filter 800ms ease;
  }
  /* enter/hold/exit via keyframes for buttery fade */
  .motif.enter {
    animation: motif-cycle var(--motif-cycle, 3.2s) ease-in-out forwards;
  }

  @keyframes motif-cycle {
    0%   { opacity: 0; transform: translateY(2px) scale(1); }
    42%  { opacity: 0.9; transform: translateY(-2px) scale(1.02); }
    100% { opacity: 0; transform: translateY(0px)  scale(1); }
  }

  @media (prefers-reduced-motion: reduce) {
    .motif { transition: none !important; animation: none !important; opacity: .25 !important; }
  }
</style>

<div bind:this={root} class="motifs" aria-hidden="true">
  {#each pool as item (item.id)}
    <div
      class="motif enter"
      style={`--motif-cycle:${cycleMs}ms; ${styleFor(item.anchor)}`}
    >
      {@html item.svg}
    </div>
  {/each}
</div>
