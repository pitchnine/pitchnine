<script>
  // what the Diagnostic delivers (left-aligned grid items)
  const diagnosticArtifacts = [
    { title: "9-slide board brief", meta: "Evidence-backed 360 review of product positioning, process, opportunities, risks and custom recommendations to fit unique goals and constraints." },
    { title: "Opportunity themes", meta: "3–5 executive themes with quantified impact" },
    { title: "90-day sequenced plan", meta: "owners, milestones, measures" },
    { title: "Executive-grade prototypes", meta: "interactive concepts that demonstrate the target experience and value." },
    { title: "Data & integration view", meta: "PII/PHI handling, integration patterns" },
    { title: "Evidence pack", meta: "customer signals, market/industry inputs" },
    { title: "Risks & constraints", meta: "regulatory, operational, technical" },
    { title: "Experience unification", meta: "something something about ux wihtout ux" },
    { title: "Success metrics & SLOs", meta: "leading and lagging indicators" }
  ];

  const Check = `
    <svg viewBox="0 0 24 24" class="w-4 h-4 mt-[2px]" fill="none" stroke="currentColor" stroke-width="1.8">
      <path d="M20 6L9 17l-5-5" stroke-linecap="round" stroke-linejoin="round" />
    </svg>`;
</script>

<section class="relative mb-24 py-16" id="diagnostic">
  <!-- Headline with the sentiment baked in -->
  <h2 class="inter header-text mb-8 text-left text-3xl md:text-5xl font-semibold tracking-tight">
    Every engagement begins with a two-week fixed fee review, an evidence-first audit that is delivered as a 9-slide board brief with additional supporting research.
  </h2>

  <!-- Artifact grid: left-aligned, checkmarks, thin borders like services (border-white/5) -->
  <div class="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
    {#each diagnosticArtifacts as a}
      <div class="border border-white/5 rounded-xl p-4 text-left">
        <div class="flex items-start gap-3">
          <span class="text-emerald-300" aria-hidden="true">{@html Check}</span>
          <div>
            <p class="text-lg font-semibold">{a.title}</p>
            {#if a.meta}
              <p class="mt-1 text-sm">{a.meta}</p>
            {/if}
          </div>
        </div>
      </div>
    {/each}
  </div>

  <!-- Centered CTAs -->
  <div class="mt-8 flex items-center justify-center gap-4">
    <a
      href="/contact?service=Executive%20Diagnostic"
      data-cta="primary"
      class="primary-cta"
    >
      Start the Executive Diagnostic
    </a>

  </div>
  <p class="mt-6 text-center text-xs text-white/50 italic">
    No commitment beyond the diagnostic
  </p>
</section>