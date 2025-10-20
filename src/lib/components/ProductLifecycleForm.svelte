<script lang="ts">
  import { fade } from 'svelte/transition';
  import { tick } from 'svelte';
  import ProductLifecycleChart from './ProductLifecycleChart.svelte';

  let svgRef: any;

  let currentStep = 1;
  let q1: 'A' | 'B' | 'C' | 'D' | null = null;
  let q2: 'A' | 'B' | 'C' | 'D' | null = null;
  let q3: 'A' | 'B' | 'C' | 'D' | null = null;

  // Focus refs for legends to keep the viewport steady on step changes
  let legend1: HTMLLegendElement;
  let legend2: HTMLLegendElement;
  let legend3: HTMLLegendElement;

  async function onPick(step: number, value: 'A' | 'B' | 'C' | 'D') {
    if (step === 1) q1 = value;
    if (step === 2) q2 = value;
    if (step === 3) q3 = value;

    plotStep(step);

    // Let peer styles animate, then advance
    if (step < 3) {
      await new Promise(r => setTimeout(r, 140)); // match fade duration
      currentStep = step + 1;
      await tick();
      focusLegend(currentStep);
    }
  }

  function focusLegend(step: number) {
    const el = step === 1 ? legend1 : step === 2 ? legend2 : legend3;
    el?.focus({ preventScroll: false });
  }

  function plotStep(step: number) {
    if (svgRef?.plotPoint) {
      const value = step === 1 ? q1 : step === 2 ? q2 : q3;
      if (value) svgRef.plotPoint(step, value);
      return;
    }
    if (svgRef?.plotFromAnswers) {
      const answers = [q1, q2, q3] as Array<'A' | 'B' | 'C' | 'D' | null>;
      try { svgRef.plotFromAnswers(answers); } catch {}
    }
  }

  function handleSubmit(e: SubmitEvent) {
    e.preventDefault();
    const answers = [q1, q2, q3] as Array<'A' | 'B' | 'C' | 'D' | null>;
    if (svgRef?.plotFromAnswers) {
      try { svgRef.plotFromAnswers(answers as ('A'|'B'|'C'|'D')[]); } catch {}
    }
    // lead-gen next
  }

  const q1Options = [ { id: 'q1-a', value: 'A', label: 'Low; early days' },
    { id: 'q1-b', value: 'B', label: 'Rising; rivals entering' },
    { id: 'q1-c', value: 'C', label: 'Stalling; market saturated' },
    { id: 'q1-d', value: 'D', label: 'Shrinking; churn rising' } ] as const;
  const q2Options = [   { id: 'q2-a', value: 'A', label: 'High experimentation' },
    { id: 'q2-b', value: 'B', label: 'Steady feature delivery' },
    { id: 'q2-c', value: 'C', label: 'Defending share, optimizing' },
    { id: 'q2-d', value: 'D', label: 'Maintenance-heavy, reactive' } ] as const;
  const q3Options = [   { id: 'q3-a', value: 'A', label: 'Few direct rivals' },
    { id: 'q3-b', value: 'B', label: 'Differentiation critical' },
    { id: 'q3-c', value: 'C', label: 'Crowded with price pressure' },
    { id: 'q3-d', value: 'D', label: 'Exits, consolidation' } ] as const;

  function goBack() {
    if (currentStep > 1) {
      currentStep -= 1;
      focusLegend(currentStep);
    }
  }
  function goForward() {
    if (currentStep < 3) {
      currentStep += 1;
      focusLegend(currentStep);
    }
  }

    function inertFor(condition: boolean): Record<string, true> | Record<string, never> {
  return condition ? { inert: true } : {};
}

  $: canBack = currentStep > 1;
  $: canForward = currentStep === 1 ? !!q1 : currentStep === 2 ? !!q2 : false;
  $: ctaEnabled = currentStep === 3;
</script>


<section class="mx-auto max-w-7xl px-2 py-10">
  <h2 class="h2 mx-auto text-center">Inflection points require modernization.</h2>

  <div class="mt-24 flex flex-col items-center gap-12">
    <!-- Form column -->
    <div class="w-full md:flex-1 md:basis-0">
      <form class="space-y-6" on:submit={handleSubmit}>
        <!-- STEP 1 (always mounted) -->
        <fieldset
          class="space-y-3"
          aria-hidden={currentStep !== 1}
          {...inertFor(currentStep !== 1)}
          hidden={currentStep !== 1}
        >
          <legend
            bind:this={legend1}
            tabindex="-1"
            class="inter mb-2 block text-sm text-gray-50 focus:outline-none"
          >
            Current sales trajectory:
          </legend>

          <div in:fade={{ duration: 150 }} out:fade={{ duration: 150 }}>
            <div class="mt-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2">
              {#each q1Options as opt}
                <div>
                  <input
                    id={opt.id}
                    type="radio"
                    name="q1"
                    value={opt.value}
                    class="peer sr-only"
                    checked={q1 === opt.value}
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
          </div>
        </fieldset>

        <!-- STEP 2 (always mounted) -->
        <fieldset
          class="space-y-3"
          aria-hidden={currentStep !== 2}
          {...inertFor(currentStep !== 2)}
          hidden={currentStep !== 2}
        >
          <legend
            bind:this={legend2}
            tabindex="-1"
            class="inter mb-2 block text-sm text-gray-50 focus:outline-none"
          >
            Team’s current focus:
          </legend>

          <div in:fade={{ duration: 150 }} out:fade={{ duration: 150 }}>
            <div class="mt-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2">
              {#each q2Options as opt}
                <div>
                  <input
                    id={opt.id}
                    type="radio"
                    name="q2"
                    value={opt.value}
                    class="peer sr-only"
                    checked={q2 === opt.value}
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
          </div>
        </fieldset>

        <!-- STEP 3 (always mounted) -->
        <fieldset
          class="space-y-3"
          aria-hidden={currentStep !== 3}
          {...inertFor(currentStep !== 3)}
          hidden={currentStep !== 3}
        >
          <legend
            bind:this={legend3}
            tabindex="-1"
            class="inter mb-2 block text-sm text-gray-50 focus:outline-none"
          >
            Competitive landscape:
          </legend>

          <div in:fade={{ duration: 150 }} out:fade={{ duration: 150 }}>
            <div class="mt-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2">
              {#each q3Options as opt}
                <div>
                  <input
                    id={opt.id}
                    type="radio"
                    name="q3"
                    value={opt.value}
                    class="peer sr-only"
                    checked={q3 === opt.value}
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
          </div>
        </fieldset>

        <!-- Shared nav row -->
        <div class="flex items-center gap-3 pt-4">
          <!-- Back -->
          <button
            type="button"
            on:click={() => canBack && goBack()}
            disabled={!canBack}
            class="rounded-md p-2 transition
                   text-white hover:text-gray-200
                   disabled:text-white/20 disabled:hover:text-white/20 disabled:cursor-not-allowed"
            aria-label="Go back"
            title={canBack ? 'Back' : 'Back (not available)'}
          >
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none"
                 viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <!-- Forward -->
          <button
            type="button"
            on:click={() => canForward && goForward()}
            disabled={!canForward}
            class="rounded-md p-2 transition
                   text-white hover:text-gray-200
                   disabled:text-white/20 disabled:hover:text-white/20 disabled:cursor-not-allowed"
            aria-label="Go forward"
            title={canForward ? 'Next' : 'Next (select an option)'}
          >
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none"
                 viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
            </svg>
          </button>

          <!-- CTA -->
          <button
            type="submit"
            disabled={!ctaEnabled}
            aria-disabled={!ctaEnabled}
            class={`inter ${ctaEnabled ? 'primary-cta' : 'disabled-cta'} ml-auto`}
            title={ctaEnabled ? 'Analyze with AI' : 'Advance to step 3 to analyze'}
          >
            Analyze with AI
          </button> 
        </div>
      </form>
    </div>

    <!-- Chart column -->
    <div class="border rounded-md border-gray-500/15 w-full h-[260px] md:h-[400px] lg:h-[600px] xl:h-[700px]">
      <ProductLifecycleChart bind:this={svgRef} />
    </div>
  </div>
</section>

