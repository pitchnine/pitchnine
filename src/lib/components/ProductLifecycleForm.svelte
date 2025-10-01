<script lang="ts">
  import { fade } from 'svelte/transition';
  import ProductLifecycleChart from './ProductLifecycleChart.svelte';

  let svgRef: any;

  // Step state
  let currentStep = 1; 
  let q1: 'A' | 'B' | 'C' | 'D' | null = null;
  let q2: 'A' | 'B' | 'C' | 'D' | null = null;
  let q3: 'A' | 'B' | 'C' | 'D' | null = null;

  function onPick(step: number, value: 'A' | 'B' | 'C' | 'D') {
    if (step === 1) q1 = value;
    if (step === 2) q2 = value;
    if (step === 3) q3 = value;

    plotStep(step);

    // Advance one-at-a-time (no back/forward UI yet)
    if (currentStep < 3) currentStep = step + 1;
  }

  function plotStep(step: number) {
    // Fine-grained plotting if available
    if (svgRef?.plotPoint) {
      const value = step === 1 ? q1 : step === 2 ? q2 : q3;
      if (value) svgRef.plotPoint(step, value);
      return;
    }

    // Fallback: aggregate
    if (svgRef?.plotFromAnswers) {
      const answers = [q1, q2, q3] as Array<'A' | 'B' | 'C' | 'D' | null>;
      try {
        svgRef.plotFromAnswers(answers);
      } catch {}
    }
  }

  function handleSubmit(e: SubmitEvent) {
    e.preventDefault();
    const answers = [q1, q2, q3] as Array<'A' | 'B' | 'C' | 'D' | null>;
    if (svgRef?.plotFromAnswers) {
      try { svgRef.plotFromAnswers(answers as ('A'|'B'|'C'|'D')[]); } catch {}
    }
    // Placeholder for your lead-gen flow next
  }

    const q1Options = [
    { id: 'q1-a', value: 'A', label: 'Low; early days' },
    { id: 'q1-b', value: 'B', label: 'Rising; rivals entering' },
    { id: 'q1-c', value: 'C', label: 'Stalling; market saturated' },
    { id: 'q1-d', value: 'D', label: 'Shrinking; churn rising' }
  ] as const;

  const q2Options = [
    { id: 'q2-a', value: 'A', label: 'High experimentation' },
    { id: 'q2-b', value: 'B', label: 'Steady feature delivery' },
    { id: 'q2-c', value: 'C', label: 'Defending share, optimizing' },
    { id: 'q2-d', value: 'D', label: 'Maintenance-heavy, reactive' }
  ] as const;

  const q3Options = [
    { id: 'q3-a', value: 'A', label: 'Few direct rivals' },
    { id: 'q3-b', value: 'B', label: 'Differentiation critical' },
    { id: 'q3-c', value: 'C', label: 'Crowded with price pressure' },
    { id: 'q3-d', value: 'D', label: 'Exits, consolidation' }
  ] as const;

  function goBack() {
  if (currentStep > 1) currentStep -= 1;
}
function goForward() {
  if (currentStep < 3) currentStep += 1;
}

</script>

<section class="mx-auto max-w-7xl px-2 py-10">
  <h2 class="h2 mx-auto text-center">Inflection points require modernization.</h2>

  <!-- Column -->
  <div class="mt-24 flex flex-col items-center gap-12">
    <!-- Form (questions) -->
    <div class="w-full md:flex-1 md:basis-0">
      <form class="space-y-6" on:submit={handleSubmit}>

       <!-- Q1 -->
{#if currentStep === 1}
  <fieldset in:fade={{ duration: 150 }} out:fade={{ duration: 150 }} class="space-y-3">
    <legend class="inter mb-2 block text-sm text-gray-50">Current sales trajectory:</legend>

    <!-- mirror contact form grid -->
    <div class="mt-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2">
      {#each q1Options as opt}
        <div>
          <input
            id={opt.id}
            type="radio"
            name="q1"
            value={opt.value}
            class="peer sr-only"
            on:change={() => onPick(1, opt.value)}
          />
          <label
            for={opt.id}
            class="grid-link flex w-full cursor-pointer items-center gap-2 whitespace-nowrap
                   rounded-md border border-gray-700 bg-gray-900/60 px-4 py-3 text-left
                   transition
                   peer-checked:border-emerald-500/50 peer-checked:text-emerald-50
                   peer-checked:ring-1 peer-checked:ring-emerald-200/25
                   peer-checked:[&_.dot]:opacity-100"
          >
            <span class="dot h-2 w-2 rounded-full bg-emerald-400 opacity-0 transition" aria-hidden="true"></span>
            <span class="text-sm">{opt.label}</span>
          </label>
        </div>
      {/each}
    </div>
  </fieldset>
   <!-- Navigation controls -->
<div class="flex items-center justify-between pt-4">
  <!-- Backward arrow -->
  {#if currentStep > 1}
    <button type="button" on:click={goBack}
      class="rounded-md p-2 text-gray-400 hover:text-gray-200"
      aria-label="Go back">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none"
           viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
      </svg>
    </button>
  {/if}

  <!-- Forward arrow (Q1 + Q2 only, if answered) -->
  {#if currentStep < 3}
    {#if (currentStep === 1 && q1) || (currentStep === 2 && q2)}
      <button type="button" on:click={goForward}
        class="rounded-md p-2 text-gray-400 hover:text-gray-200"
        aria-label="Go forward">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none"
             viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
        </svg>
      </button>
    {/if}
  {/if}

  <!-- Analyze CTA (only step 3) -->
  {#if currentStep === 3}
    <button type="submit"
      class="inter primary-cta ml-auto"
      aria-label="See your position on the lifecycle curve">
      Analyze with AI
    </button>
  {/if}
</div>
{/if}

<!-- Q2 -->
{#if currentStep === 2}
  <fieldset in:fade={{ duration: 150 }} out:fade={{ duration: 150 }} class="space-y-3">
    <legend class="inter mb-2 block text-sm text-gray-50">Team’s current focus:</legend>

    <div class="mt-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2">
      {#each q2Options as opt}
        <div>
          <input
            id={opt.id}
            type="radio"
            name="q2"
            value={opt.value}
            class="peer sr-only"
            on:change={() => onPick(2, opt.value)}
          />
          <label
            for={opt.id}
            class="grid-link flex w-full cursor-pointer items-center gap-2 whitespace-nowrap
                   rounded-md border border-gray-700 bg-gray-900/60 px-4 py-3 text-left
                   transition
                   peer-checked:border-emerald-500/50 peer-checked:text-emerald-50
                   peer-checked:ring-1 peer-checked:ring-emerald-200/25
                   peer-checked:[&_.dot]:opacity-100"
          >
            <span class="dot h-2 w-2 rounded-full bg-emerald-400 opacity-0 transition" aria-hidden="true"></span>
            <span class="text-sm">{opt.label}</span>
          </label>
        </div>
      {/each}
    </div>
  </fieldset>
   <!-- Navigation controls -->
<div class="flex items-center justify-between pt-4">
  <!-- Backward arrow -->
  {#if currentStep > 1}
    <button type="button" on:click={goBack}
      class="rounded-md p-2 text-gray-400 hover:text-gray-200"
      aria-label="Go back">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none"
           viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
      </svg>
    </button>
  {/if}

  <!-- Forward arrow (Q1 + Q2 only, if answered) -->
  {#if currentStep < 3}
    {#if (currentStep === 1 && q1) || (currentStep === 2 && q2)}
      <button type="button" on:click={goForward}
        class="rounded-md p-2 text-gray-400 hover:text-gray-200"
        aria-label="Go forward">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none"
             viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
        </svg>
      </button>
    {/if}
  {/if}

  <!-- Analyze CTA (only step 3) -->
  {#if currentStep === 3}
    <button type="submit"
      class="inter primary-cta ml-auto"
      aria-label="See your position on the lifecycle curve">
      Analyze with AI
    </button>
  {/if}
</div>
{/if}

<!-- Q3 -->
{#if currentStep === 3}
  <fieldset in:fade={{ duration: 150 }} out:fade={{ duration: 150 }} class="space-y-3">
    <legend class="inter mb-2 block text-sm text-gray-50">Competitive landscape:</legend>

    <div class="mt-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2">
      {#each q3Options as opt}
        <div>
          <input
            id={opt.id}
            type="radio"
            name="q3"
            value={opt.value}
            class="peer sr-only"
            on:change={() => onPick(3, opt.value)}
          />
          <label
            for={opt.id}
            class="grid-link flex w-full cursor-pointer items-center gap-2 whitespace-nowrap
                   rounded-md border border-gray-700 bg-gray-900/60 px-4 py-3 text-left
                   transition
                   peer-checked:border-emerald-500/50 peer-checked:text-emerald-50
                   peer-checked:ring-1 peer-checked:ring-emerald-200/25
                   peer-checked:[&_.dot]:opacity-100"
          >
            <span class="dot h-2 w-2 rounded-full bg-emerald-400 opacity-0 transition" aria-hidden="true"></span>
            <span class="text-sm">{opt.label}</span>
          </label>
        </div>
      {/each}
    </div>
  </fieldset>
  <!-- Navigation controls -->
<div class="flex items-center justify-between pt-4">
  <!-- Backward arrow -->
  {#if currentStep > 1}
    <button type="button" on:click={goBack}
      class="rounded-md p-2 text-gray-400 hover:text-gray-200"
      aria-label="Go back">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none"
           viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
      </svg>
    </button>
  {/if}

  <!-- Forward arrow (Q1 + Q2 only, if answered) -->
  {#if currentStep < 3}
    {#if (currentStep === 1 && q1) || (currentStep === 2 && q2)}
      <button type="button" on:click={goForward}
        class="rounded-md p-2 text-gray-400 hover:text-gray-200"
        aria-label="Go forward">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none"
             viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
        </svg>
      </button>
    {/if}
  {/if}

  <!-- Analyze CTA (only step 3) -->
  {#if currentStep === 3}
    <button type="submit"
      class="inter primary-cta ml-auto"
      aria-label="See your position on the lifecycle curve">
      Analyze with AI
    </button>
  {/if}
</div>
{/if}
      </form>
    </div>

    <!-- Chart below questions -->
    <div class="border rounded-md border-gray-500/25 w-full sm:h-[400px] lg:h-[600px] xl:h-[700px]">
      <ProductLifecycleChart bind:this={svgRef} />
    </div>
  </div>
</section>
