<script>
  let open = -1;
  const toggle = (i) => (open = open === i ? -1 : i);

  const services = [
    {
      title: "Backlog Rescue",
      desc: "Stabilize delivery: triage, re-prioritize, and re-establish flow without breaking governance.",
      meta: "2–4 weeks • Fixed-fee • Outputs: roadmap, rules, cadences",
      more: "We reset decision rules, clarify scope boundaries, install lean cadences, and surface a credible delivery plan execs can sign."
    },
    {
      title: "AI Readiness",
      desc: "Identify feasible AI use-cases that clear compliance and prove ROI with real constraints.",
      meta: "3–6 weeks • Pilot plan • Data/guardrails/metrics",
      more: "Use-case mapping, data audit, governance design, and a pilot spec with measurable outcomes and risk controls."
    },
    {
      title: "Innovation Sprint",
      desc: "Turn ambiguity into a plan you can fund—tailored workshops for regulated environments.",
      meta: "2 weeks • Decision artifacts • Executive-ready",
      more: "Inputs → decisions → artifacts: aligned problem framing, opportunity sizing, and a de-risked plan with owners and timelines."
    }
  ];

  // Minimal grayscale arrow icon (chevron). Reused for each row.
  const Arrow = `
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
         class="w-8 h-8">
      <path d="M9 6l6 6-6 6" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>`;
</script>

<section class="py-14">
  <div class="max-w-7xl mx-auto px-6">
    <ul class="divide-y divide-white/5">
      {#each services as s, i}
        <li class="group relative isolate w-full">
          <!-- Glossy hover background (also stays on when open) -->
          <div
            class="pointer-events-none absolute inset-0 -z-10 opacity-0 transition-opacity duration-300
                   group-hover:opacity-100"
            class:opacity-100={open === i}
            style="background:
              radial-gradient(130% 80% at 0% 0%, rgba(255,255,255,0.04), rgba(0,0,0,0) 55%),
              radial-gradient(120% 80% at 100% 100%, rgba(16,185,129,0.10), rgba(0,0,0,0) 60%);"
          ></div>

          <!-- Whole row is a button for a11y -->
          <button
            type="button"
            on:click={() => toggle(i)}
            aria-expanded={open === i}
            aria-controls={"svc-" + i}
            class="w-full text-left grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-3 py-8
                   transition-colors duration-300 hover:bg-white/[0.01] focus:bg-white/[0.01]
                   focus:outline-none"
          >
            <!-- Left: rotating grayscale arrow + 5xl title -->
            <div class="flex items-start gap-4">
              <div class="mt-1 flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl
                          bg-white/5 ring-1 ring-white/10 text-white/60 transition
                          group-hover:text-white/80">
                <div class="grayscale transition-transform duration-300 ease-out
                            will-change-transform"
                     class:rotate-90={open === i}
                >
                  {@html Arrow}
                </div>
              </div>

              <h3
                class="font-semibold tracking-tight leading-[1.05]
                       text-4xl sm:text-5xl text-white"
              >
                {s.title}
              </h3>
            </div>

            <!-- Right: description + meta -->
            <div class="flex flex-col gap-2">
              <p class="text-lg sm:text-xl text-white/80 group-hover:text-white/90 transition">
                {s.desc}
              </p>
              <p class="text-sm sm:text-base text-white/55 group-hover:text-white/70 transition">
                {s.meta}
              </p>

              <!-- Expandable panel (smooth height using CSS grid 0fr → 1fr) -->
              <div
                id={"svc-" + i}
                class="grid transition-[grid-template-rows] duration-300 ease-out mt-3
                       [grid-template-rows:0fr]"
                class:![grid-template-rows:1fr]={open === i}
              >
                <div class="overflow-hidden">
                  <div class="pt-4 border-t border-white/5 text-base text-white/70">
                    {s.more}
                  </div>
                </div>
              </div>
            </div>
          </button>
        </li>
      {/each}
    </ul>
  </div>
</section>

<style>
  /* Respect reduced motion */
  @media (prefers-reduced-motion: reduce) {
    .transition, .duration-300, .ease-out { transition: none !important; }
  }
</style>
