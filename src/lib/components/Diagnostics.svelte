<script>
  // what the Diagnostic delivers (left-aligned grid items)
const diagnosticArtifacts = [
  { 
    title: "Executive Brief", 
    meta: "A 9-slide synthesis translating findings into board-level themes, investment priorities, and sequenced actions." 
  },
  { 
    title: "Friction Map", 
    meta: "3–5 critical points where leadership ambition and engineering capacity diverge, quantified by impact and paired with suggestions for improvement." 
  },
  { 
    title: "Backlog Rationalization", 
    meta: "A cleaned and prioritized backlog aligned to strategic objectives, with owners, milestones, and measurable outcomes." 
  },
  { 
    title: "Experience Concepts", 
    meta: "Target experience demonstrations illustrating how clarified priorities and innovation themes translate into customer value." 
  },
  { 
    title: "AI Readiness Audit", 
    meta: "Assessment of backlog for AI-relevant opportunities, data handling, compliance risks, and integration pathways." 
  },
  { 
    title: "Evidence Pack", 
    meta: "Supporting research including customer interviews, adjacent-persona insights, and market/industry signal analysis." 
  }
];

  const Check = `
    <svg viewBox="0 0 24 24" class="w-6 h-6 mt-[2px]" fill="none" stroke="currentColor" stroke-width="1.8">
      <path d="M20 6L9 17l-5-5" stroke-linecap="round" stroke-linejoin="round" />
    </svg>`;
</script>

  <!-- Artifact grid: left-aligned, checkmarks, thin borders like services (border-white/5) -->
  <div class="mt-16 md:mt-32 mb-12 md:mb-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 md:gap-20">
    {#each diagnosticArtifacts as a}
      <div class="text-left">
        <div class="flex items-start gap-3">
          <span class="text-emerald-300" aria-hidden="true">{@html Check}</span>
          <div>
            <p class="h3">{a.title}</p>
            {#if a.meta}
              <p class="mt-2 meta">{a.meta}</p>
            {/if}
          </div>
        </div>
      </div>
    {/each}
  </div>