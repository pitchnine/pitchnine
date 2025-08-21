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
  export let density = 9;       // how many snippets to render across the field
  export let minFont = 10;       // px (smallest snippet text)
  export let maxFont = 14;       // px (largest snippet text)
  export let maxSkew = 0;        // deg random rotation (+/-)
  export let codeOpacity = 0.15; // base opacity for code
  export let blur = 0.2;         // subtle blur in px

  // Typing timings (each node gets randomized around these)
  export let speedFactor = 2; 
  export let baseTypeMs = 75;
  export let baseEraseMs = 60;
  export let baseHoldMs = 2000;
  export let baseGapMs = 800; 

  // Prefers reduced motion?
  let reduced = false;
  if (typeof window !== 'undefined' && window.matchMedia) {
    reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  }

  // Internal "nodes" – each one is a background snippet instance with its own loop
  let nodes = [];

  const flush = () => { nodes = nodes; };


    console.log('prefers-reduced-motion:', reduced);

  function rand(min, max) { return Math.random() * (max - min) + min; }
  function choice(arr) { return arr[Math.floor(Math.random() * arr.length)]; }
  const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

  function makeNode(i) {
    const x = rand(4, 96);   
    const y = rand(6, 90);   
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
      opacity: 0,        // fade in/out
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

 // --- Rect halo controls ---
  export let rectPadX = 32;   // px padding left/right around the text block
  export let rectPadY = 32;   // px padding top/bottom around the text block
  export let rectRadius = 24; // px corner radius
  export let rectFeather = 32;// px blur softness
  export let rectOpacity = .75;
  export let rectColor = `rgba(3, 7, 18, ${rectOpacity})`;

  let sectionEl;      // the hero section (positioning context)
  let contentEl;      // your foreground content wrapper

  let rect = { left: 0, top: 0, width: 0, height: 0 };

  function updateRect() {
    if (!sectionEl || !contentEl) return;
    const s = sectionEl.getBoundingClientRect();
    const c = contentEl.getBoundingClientRect();
    rect = {
      left: c.left - s.left - rectPadX,
      top:  c.top  - s.top  - rectPadY,
      width:  c.width  + rectPadX * 2,
      height: c.height + rectPadY * 2
    };
  }

  onMount(() => {
    // Keep the rectangle synced to content size/position
    const ro = new ResizeObserver(updateRect);
    ro.observe(contentEl);
    // also recalc on viewport changes/scroll (hero usually full-screen but safe)
    window.addEventListener('resize', updateRect);
    window.addEventListener('scroll', updateRect, { passive: true });
    // initial
    setTimeout(updateRect, 0);

    return () => {
      ro.disconnect();
      window.removeEventListener('resize', updateRect);
      window.removeEventListener('scroll', updateRect);
    };
  });
</script>

<section bind:this={sectionEl} class="relative h-screen overflow-hidden bg-gray-950 text-white flex items-center justify-center">

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
    class="pointer-events-none absolute z-[5]"
    style="
      left: {rect.left}px;
      top: {rect.top}px;
      width: {rect.width}px;
      height: {rect.height}px;
      border-radius: {rectRadius}px;
      background: {rectColor};
    "
  ></div>

  <div
    class="pointer-events-none absolute z-[5]"
    style="
      left: {rect.left}px;
      top: {rect.top}px;
      width: {rect.width}px;
      height: {rect.height}px;
      border-radius: {rectRadius + 2}px;
      background: {rectColor};
      filter: blur({rectFeather}px);
      opacity: 0.6; /* feather strength */
    "
  ></div>

   <!-- Foreground content -->
  <div bind:this={contentEl} class="relative z-10 text-center px-6">
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
