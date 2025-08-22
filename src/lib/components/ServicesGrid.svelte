<script>
  const services = [
    {
      title: "Backlog Rescue",
      icon: "box",
      short: "Triage, re‑prioritize, and stabilize delivery without blowing up governance.",
      more: "We clarify scope, define decision rules, and reset cadences so work flows again—fast, compliant, and visible."
    },
    {
      title: "AI Readiness",
      icon: "chip",
      short: "De‑risk AI with use‑cases that clear compliance and create measurable ROI.",
      more: "We map feasible pilots, data needs, guardrails, and an evidence plan your exec team can sign."
    },
    {
      title: "Innovation Sprint",
      icon: "bolt",
      short: "Focused workshops that turn ambiguity into a plan you can fund in weeks.",
      more: "No theater—inputs, artifacts, and decisions tailored for regulated, mission‑critical contexts."
    },
    {
      title: "Product Ops Uplift",
      icon: "controls",
      short: "Lightweight rituals and tooling that align PM, design, and eng around outcomes.",
      more: "We install lean templates, review loops, and metrics that survive real‑world constraints."
    }
  ];

  let open = -1;
  const toggle = (i) => (open = open === i ? -1 : i);

  const icons = {
    box: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" class="w-5 h-5">
            <path stroke-width="1.5" d="M3 7.5 12 3l9 4.5M3 7.5v9L12 21m0-13.5v13.5m9-13.5v9L12 21" />
          </svg>`,
    chip:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" class="w-5 h-5">
            <rect x="6" y="6" width="12" height="12" rx="2" stroke-width="1.5"/>
            <path stroke-width="1.5" d="M9 3v3M15 3v3M21 9h-3M21 15h-3M9 21v-3M15 21v-3M3 9h3M3 15h3"/>
          </svg>`,
    bolt:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" class="w-5 h-5">
            <path stroke-width="1.5" d="M13 2 4 13h6l-1 9 9-11h-6l1-9z" />
          </svg>`,
    controls:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" class="w-5 h-5">
            <circle cx="7" cy="7" r="2.5" stroke-width="1.5"/><path stroke-width="1.5" d="M7 10v10M7 2v2"/>
            <circle cx="12" cy="12" r="2.5" stroke-width="1.5"/><path stroke-width="1.5" d="M12 15v5M12 2v7"/>
            <circle cx="17" cy="17" r="2.5" stroke-width="1.5"/><path stroke-width="1.5" d="M17 20v0M17 2v13"/>
          </svg>`
  };
</script>

<section class="py-14">
  <div class="max-w-6xl mx-auto px-6">
    <div class="grid md:grid-cols-2 gap-5">
      {#each services as s, i}
        <article
          role="button"
          tabindex="0"
          aria-expanded={open === i}
          on:click={() => toggle(i)}
          on:keydown={(e) => (e.key === 'Enter' || e.key === ' ') && (e.preventDefault(), toggle(i))}
          class="group relative isolate rounded-2xl border border-white/5 bg-neutral-950/60 p-5 md:p-6 
                 shadow-[inset_0_1px_0_rgba(255,255,255,0.03)] 
                 transition 
                 hover:border-white/10 hover:shadow-lg
                 focus:outline-none focus:ring-2 focus:ring-emerald-500/30"
        >
          <!-- Soft gradient hover glow -->
          <div
            class="pointer-events-none absolute inset-0 -z-10 rounded-2xl opacity-0 transition-opacity duration-300
                   group-hover:opacity-100"
            style="background: radial-gradient(120% 80% at 10% 0%, rgba(16,185,129,0.12), rgba(0,0,0,0) 55%),
                           radial-gradient(120% 80% at 100% 100%, rgba(16,185,129,0.08), rgba(0,0,0,0) 60%);">
          </div>

          <div class="flex items-start gap-4">
            <div class="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl 
                        bg-white/5 ring-1 ring-white/10 
                        transition group-hover:bg-white/10 group-hover:ring-white/20">
              {@html icons[s.icon]}
            </div>

            <div class="flex-1">
              <div class="flex items-start justify-between gap-3">
                <h3 class="text-base font-semibold tracking-tight text-white">
                  {s.title}
                </h3>
                <div class="hidden md:block text-xs text-white/50">
                  <span class="mr-2">2–4 weeks</span>
                  <span class="opacity-50">•</span>
                  <span class="ml-2">Fixed‑fee</span>
                </div>
              </div>

              <p class="mt-1 text-sm text-white/70 transition group-hover:text-white/90">
                {s.short}
              </p>

              <!-- Expandable detail -->
              <div
                class="grid transition-[grid-template-rows] duration-300 ease-out motion-reduce:transition-none
                       [grid-template-rows:0fr] mt-2"
                class:![grid-template-rows:1fr]={open === i}
              >
                <div class="overflow-hidden">
                  <p class="text-sm text-white/60 pt-2 border-t border-white/5">
                    {s.more}
                  </p>
                </div>
              </div>

              <!-- Mobile meta (below content) -->
              <div class="mt-3 md:hidden text-xs text-white/50">
                <span class="mr-2">2–4 weeks</span>
                <span class="opacity-50">•</span>
                <span class="ml-2">Fixed‑fee</span>
              </div>
            </div>
          </div>

          <!-- Chevron -->
          <div class="absolute right-4 top-4 text-white/40 transition-transform duration-300
                      group-hover:text-white/70"
               style="transform: translateZ(0); will-change: transform;"
          >
            <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.5"
                 class={open === i ? "rotate-90" : ""}>
              <path d="M9 6l6 6-6 6" />
            </svg>
          </div>
        </article>
      {/each}
    </div>
  </div>
</section>

<style>
  /* Respect reduced motion */
  @media (prefers-reduced-motion: reduce) {
    .transition, .duration-300, .duration-500 { transition: none !important; }
  }
</style>
