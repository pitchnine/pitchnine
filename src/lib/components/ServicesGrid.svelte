<script>
  // Open state for module rows
  let open = -1;
  const toggle = (i) => (open = open === i ? -1 : i);

  // Open state for the guided plan card
  let planOpen = false;

  const services = [
    {
      title: "Backlog Remediation",
      desc: "Alignment of backlog work to executive themes, business value, and customer needs—translating ticket sprawl into a fundable, audit-ready roadmap.",
      meta: "8–12 weeks • Fixed-fee",
      more:
        "Evidence-first review of your backlog and operating model. We de-duplicate, theme, and prioritize under clear decision rules; install cadence discipline; and return a credible 90-day plan with owners, dates, and measures."
    },
    {
      title: "AI Readiness",
      desc: "Run controlled pilots off the mainline, prove ROI, and graduate only what clears risk and compliance into production.",
      meta: "6–10 weeks • Pilot plan • Data/guardrails/metrics",
      more:
        "Use-case mapping, data inventory, and governance design. We stand up an evaluation harness, human-in-the-loop controls, and an evidence plan—then convert winners into hardened features with audit trail and rollback."
    },
    {
      title: "Innovation Audit",
      desc: "Structured discovery for regulated contexts—frame the problem, quantify opportunity, and return an investment-grade product direction.",
      meta: "4–8 weeks • Decision artifacts • Executive-ready",
      more:
        "Synthesize customer pain, operational constraints, and compliance posture into 3–5 executive themes and a sequenced plan, with decision artifacts your board can approve."
    }
  ];

  // Minimal grayscale arrow icon (chevron)
  const Arrow = `
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" class="w-8 h-8">
      <path d="M9 6l6 6-6 6" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>`;
</script>

<section class="py-16">
  <div class="mx-auto px-6">
    <!-- Header -->
    <div class="mb-8">
      <h2 class="text-sm uppercase font-bold tracking-wide opacity-60">Two ways to engage—pick a module or start with a guided plan.</h2>
    </div>

    <!-- Layout: Modules (left) + Plan (right) -->
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-10">
      <!-- Modules -->
      <div class="lg:col-span-2">
        <h3 class="sr-only">Modules</h3>
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
                <!-- Left: rotating grayscale arrow + huge title -->
                <div class="flex items-start gap-4">
                  <div class="mt-1 flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl
                              bg-white/5 ring-1 ring-white/10 text-white/60 transition
                              group-hover:text-white/80">
                    <div class="grayscale transition-transform duration-300 ease-out will-change-transform"
                         class:rotate-90={open === i}>
                      {@html Arrow}
                    </div>
                  </div>

                  <h4 class="font-semibold tracking-tight leading-[1.05] text-4xl sm:text-5xl text-white">
                    {s.title}
                  </h4>
                </div>

                <!-- Right: description + meta -->
                <div class="flex flex-col gap-2">
                  <p class="text-lg sm:text-xl text-white/80 group-hover:text-white/90 transition">
                    {s.desc}
                  </p>
                  <p class="text-sm sm:text-base text-white/55 group-hover:text-white/70 transition">
                    {s.meta}
                  </p>

                  <!-- Expandable panel (smooth height via inline grid-template-rows) -->
                  <div
                    id={"svc-" + i}
                    class="grid transition-[grid-template-rows] duration-300 ease-out mt-3"
                    style="grid-template-rows: {open === i ? '1fr' : '0fr'};"
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

      <!-- Guided Plan (Right rail; stacks on mobile) -->
      <aside class="lg:col-span-1">
        <div
          class="group relative isolate rounded-2xl border border-white/5 bg-neutral-950/60 p-6
                 shadow-[inset_0_1px_0_rgba(255,255,255,0.03)] transition"
        >
          <!-- soft glow on hover/open -->
          <div
            class="pointer-events-none absolute inset-0 -z-10 rounded-2xl opacity-0 transition-opacity duration-300
                   group-hover:opacity-100"
            class:opacity-100={planOpen}
            style="background: radial-gradient(120% 80% at 10% 0%, rgba(255,255,255,0.05), rgba(0,0,0,0) 55%),
                             radial-gradient(120% 80% at 100% 100%, rgba(16,185,129,0.08), rgba(0,0,0,0) 60%);">
          </div>

          <div class="flex items-start gap-3">
            <div class="mt-1 h-10 w-10 flex items-center justify-center rounded-xl bg-white/5 ring-1 ring-white/10 text-white/70">
              <!-- simple compass icon -->
              <svg viewBox="0 0 24 24" class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="1.5">
                <circle cx="12" cy="12" r="9"></circle>
                <path d="M14 10l-4 4 6-2-2-2z" stroke-linejoin="round"></path>
                <circle cx="12" cy="12" r="1" fill="currentColor" stroke="none"></circle>
              </svg>
            </div>
            <div class="flex-1">
              <h3 class="text-lg font-semibold text-white tracking-tight">Start with a Plan</h3>
              <p class="mt-1 text-white/80">
                Not sure where to start? In 10–15 days, we run an Innovation Audit and return a board-ready, evidence-backed plan with a sequenced path that can use any module.
              </p>

              <!-- meta row -->
              <p class="mt-2 text-sm text-white/55">10–15 days • Fixed-fee • Decision artifacts & roadmap</p>

              <!-- expand sample outputs -->
              <button
                type="button"
                class="mt-4 inline-flex items-center gap-2 text-sm font-medium text-emerald-300 hover:text-emerald-200 focus:outline-none"
                aria-expanded={planOpen}
                aria-controls="plan-expand"
                on:click={() => (planOpen = !planOpen)}
              >
                <span>{planOpen ? "Hide sample outputs" : "See sample outputs"}</span>
                <svg viewBox="0 0 24 24" class="w-4 h-4 transition-transform duration-300" fill="none" stroke="currentColor" stroke-width="1.5"
                     class:rotate-90={planOpen}>
                  <path d="M9 6l6 6-6 6" stroke-linecap="round" stroke-linejoin="round"></path>
                </svg>
              </button>

              <div
                id="plan-expand"
                class="grid transition-[grid-template-rows] duration-300 ease-out mt-3"
                style="grid-template-rows: {planOpen ? '1fr' : '0fr'};"
              >
                <div class="overflow-hidden">
                  <ul class="pt-3 border-t border-white/5 text-sm text-white/70 grid gap-2">
                    <li><span class="text-white/90">Evidence:</span> customer pain, opportunity size, constraints.</li>
                    <li><span class="text-white/90">Governance:</span> guardrails, decision rules, traceability.</li>
                    <li><span class="text-white/90">Outputs:</span> board deck, roadmap, owners, dates, measures.</li>
                  </ul>
                </div>
              </div>

              <!-- CTA -->
              <div class="mt-5">
                <a href="/contact"
                   class="inline-flex items-center justify-center rounded-xl px-4 h-11
                          bg-emerald-500/90 text-gray-950 font-semibold
                          hover:bg-emerald-400 focus:outline-none focus:ring-2 focus:ring-emerald-500/40">
                  Assemble my engagement
                </a>
              </div>
            </div>
          </div>
        </div>
      </aside>
    </div>

    <!-- Assurance line -->
    <p class="mt-8 text-xs text-white/50">
      We are not a certification body; we install practical controls that align with your existing compliance program.
    </p>
  </div>
</section>

<style>
  /* Respect reduced motion */
  @media (prefers-reduced-motion: reduce) {
    .transition, .duration-300, .ease-out { transition: none !important; }
  }
</style>
