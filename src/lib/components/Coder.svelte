<script>
  import { onMount } from 'svelte';

  /* ---- Foreground content ---- */
  export let headline = "Innovation without Chaos";
  export let subhead = "Seasoned product minds for high‑stakes, legacy industries.";
  export let ctaText = "Schedule a conversation";
  export let ctaHref = "/contact";

  /* ---- Background snippets ----
     Provide more domain‑flavored lines; they'll be randomly assigned to nodes. */
  export let snippets = [
    "pipeline.add(stage('risk-assessment').using('claims_v2').strict(true))",
    "audit.log({ actor:'svc-prod', action:'feature_toggle', id:'predictive-ops' })",
    "system.route('ehr.epic').to('analytics.stream').retries(3).backoff('exp')",
    "policy.enforce({ pii:true, hipaa:true, gdpr:false, soc2:true })",
    "metrics.counter('latency_ms').p95(138).ok()",
    "deploy.plan({ env:'staging', canary:'5%', rollback:'auto' })",
    "ledger.settle({ vendor:'clearinghouse', amount:124500.13, currency:'USD' })",
    "model.serve('triage-v3', { explainer:true, shadow:true })",
    "scheduler.cron('0 */6 * * *').task('reindex-compliance')",
    "access.grant('ops', { scope:['read:claims','write:flags'] })"
  ];

  /* ---- Layout & behavior knobs ---- */
  export let density = 14;       // how many snippets to render across the field
  export let minFont = 10;       // px (smallest snippet text)
  export let maxFont = 14;       // px (largest snippet text)
  export let maxSkew = 0;        // deg random rotation (+/-)
  export let gridOpacity = 0.35; // backdrop grid strength
  export let codeOpacity = 0.15; // base opacity for code
  export let blur = 0.2;         // subtle blur in px

  // Typing timings (each node gets randomized around these)
  export let speedFactor = 1.9; 
  export let baseTypeMs = 50;
  export let baseEraseMs = 40;
  export let baseHoldMs = 1800;
  export let baseGapMs = 600;    // extra pause before next cycle

  // Prefers reduced motion?
  let reduced = false;
  if (typeof window !== 'undefined' && window.matchMedia) {
    reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  }

  // Internal "nodes" – each one is a background snippet instance with its own loop
  let nodes = [];

  const flush = () => { nodes = nodes; }; // reassign to nudge Svelte’s reactivity


    console.log('prefers-reduced-motion:', reduced);

  function rand(min, max) { return Math.random() * (max - min) + min; }
  function choice(arr) { return arr[Math.floor(Math.random() * arr.length)]; }
  const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

  function makeNode(i) {
    // Spread across viewport (bigger safe margins near center so headline stays readable)
    const x = rand(4, 96);   // vw
    const y = rand(6, 90);   // vh
    const avoidCenter = Math.abs(x - 50) < 18 && Math.abs(y - 50) < 16;
    const adjustedX = avoidCenter ? (x < 50 ? x - rand(6, 10) : x + rand(6, 10)) : x;
    const adjustedY = avoidCenter ? (y < 50 ? y - rand(6, 10) : y + rand(6, 10)) : y;

    const fontPx = rand(minFont, maxFont);
    const rot = rand(-maxSkew, maxSkew);

    // Node-specific timings with light randomness
    const typeMs = Math.max(8, baseTypeMs + rand(-6, 6));
    const eraseMs = Math.max(8, baseEraseMs + rand(-4, 6));
    const holdMs = Math.max(500, baseHoldMs + rand(-400, 500));
    const gapMs  = Math.max(120, baseGapMs + rand(-120, 240));

    return {
      id: `n${i}`,
      x: adjustedX,
      y: adjustedY,
      rot,
      fontPx,
      text: choice(snippets),
      shown: "",
      phase: "idle",     // "typing" | "hold" | "erasing"
      opacity: 0,        // we’ll fade in/out
      typeMs, eraseMs, holdMs, gapMs,
      delay: rand(0, 2500),  // initial stagger
      stop: false
    };
  }

  async function runNode(node) {
    if (reduced) {
      // Reduced motion: show static partial lines with gentle fade in/out
      node.shown = node.text.slice(0, Math.floor(rand(18, node.text.length)));
      node.opacity = codeOpacity;
       flush();
      return; // no looping
    }

    await sleep(node.delay);
    while (!node.stop) {
      // Type
      node.phase = 'typing';
      for (let i = 1; i <= node.text.length && !node.stop; i++) {
        node.shown = node.text.slice(0, i);
        node.opacity = codeOpacity;
         flush();
        await sleep(node.typeMs);
      }

      // Hold (fade slightly toward the end)
      node.phase = 'hold';
      const steps = 6;
      for (let s = 0; s < steps && !node.stop; s++) {
        await sleep(node.holdMs / steps);
        node.opacity = codeOpacity * (1 - s / (steps * 8)); 
        flush();
      }

      // Erase
      node.phase = 'erasing';
      for (let i = node.text.length; i >= 0 && !node.stop; i--) {
        node.shown = node.text.slice(0, i);
        await sleep(node.eraseMs);
        flush();
      }

      // Gap & pick a new line
      node.phase = 'idle';
      node.opacity = 0;
      await sleep(node.gapMs);
      node.text = choice(snippets);
    }
  }

   onMount(() => {
    nodes = Array.from({ length: density }, (_, i) => makeNode(i));
    nodes.forEach(runNode);
    return () => { nodes.forEach(n => (n.stop = true)); };
  });

   // --- Text halo ---
  export let haloSize = 'clamp(260px, 32vw, 520px)'; // circle diameter
  export let haloFeather = '28px';                   // soft edge
  export let haloOpacity = 1;                        // 0..1 (use 1 to fully block)
  // Tailwind gray-950 ≈ rgb(3 7 18)
  export let haloColor = `rgba(3, 7, 18, ${haloOpacity})`;
  // If your hero text isn’t perfectly centered, tweak the center point:
  export let haloX = '50%';
  export let haloY = '50%';
</script>

<section class="relative h-screen overflow-hidden bg-gray-950 text-white flex items-center justify-center">
  <!-- Subtle grid backdrop -->
  <div
    class="pointer-events-none absolute inset-0"
    style="
      opacity: {gridOpacity};
      background-image:
        linear-gradient(to right, rgba(255,255,255,0.06) 1px, transparent 1px),
        linear-gradient(to bottom, rgba(255,255,255,0.06) 1px, transparent 1px);
      background-size: 40px 40px;
    "
  ></div>

  <!-- Slow gradient sweep for depth -->
  <div
    class="pointer-events-none absolute inset-0 mix-blend-screen opacity-30 animate-gradientMove"
    style="background: linear-gradient(100deg, transparent 0%, rgba(16,185,129,0.12) 40%, transparent 60%, rgba(56,189,248,0.12) 85%, transparent 100%);"
  ></div>

  <!-- Background "code field" -->
  <div class="absolute inset-0 overflow-hidden">
    {#each nodes as n (n.id)}
      <div
        class="absolute will-change-transform transition-opacity duration-500"
        style="
          left: {n.x}vw;
          top: {n.y}vh;
          transform: translate(-50%, -50%) rotate({n.rot}deg);
          opacity: {n.opacity};
          filter: blur({blur}px);
        "
        aria-hidden="true"
      >
        <pre
          class="font-mono leading-snug whitespace-pre-wrap select-none"
          style="font-size: {n.fontPx}px; color: rgba(167, 243, 208, 0.9);" 
        >{n.shown}_</pre>
      </div>
    {/each}
  </div>

<!-- Halo -->
<div
  class="pointer-events-none absolute inset-0 z-[5]"
  style="
    --halo-size: {haloSize};
    --halo-feather: {haloFeather};
    --halo-color: {haloColor};
    --halo-x: {haloX};
    --halo-y: {haloY};
    background:
      radial-gradient(
        circle at var(--halo-x) var(--halo-y),
        var(--halo-color) 0 calc((var(--halo-size) / 2) - var(--halo-feather)),
        rgba(3,7,18,0) calc((var(--halo-size) / 2))
      );
  "
></div>

  <!-- Foreground content -->
  <div class="relative z-10 text-center px-6">
    <h1 class="text-4xl md:text-6xl font-bold tracking-tight leading-tight mb-4 animate-fadeUp">
      {headline}
    </h1>
    <p class="text-base md:text-lg text-white/70 max-w-2xl mx-auto mb-8 animate-fadeUp" style="animation-delay: 120ms;">
      {subhead}
    </p>
    <a
      href={ctaHref}
      class="inline-flex items-center justify-center h-12 px-6 rounded-full border border-white/20 bg-white/5 hover:bg-white/10 transition
             text-sm md:text-base font-medium backdrop-blur-sm animate-fadeUp"
      style="animation-delay: 220ms;"
    >
      {ctaText}
    </a>
  </div>
</section>

<style>
  @keyframes fadeUp {
    0% { opacity: 0; transform: translateY(12px); }
    100% { opacity: 1; transform: translateY(0); }
  }
  .animate-fadeUp { animation: fadeUp 700ms ease forwards; }

  @keyframes gradientMove {
    0% { background-position: -200% 0; }
    100% { background-position: 200% 0; }
  }
  .animate-gradientMove { background-size: 200% auto; animation: gradientMove 18s linear infinite; }
</style>
