<script>
  // what the Diagnostic delivers (left-aligned grid items)
const diagnosticArtifacts = [
 
  { 
    title: "Board Brief", 
    meta: "A concise synthesis for executives — highlighting themes, investment priorities, and sequenced actions leaders can act on with confidence." 
  },
  { 
    title: "Friction Map", 
    meta: "A clear view of where leadership ambition and engineering capacity diverge, quantified by impact and paired with pragmatic fixes." 
  },
  { 
    title: "Backlog Rescue", 
    meta: "A disciplined, prioritized backlog that strips noise, aligns with strategy, and ties every initiative to measurable outcomes." 
  },
  { 
    title: "Design Artifacts", 
    meta: "Targeted demonstrations showing how clarified priorities and innovation themes translate into real customer value." 
  },
  { 
    title: "AI Opportunities", 
    meta: "An assessment of where AI can safely accelerate value — with compliance, data integrity, and workflow realities built in." 
  },
  { 
    title: "Evidence Pack", 
    meta: "Supporting research and market analysis that strengthens the business case for investment and next steps." 
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