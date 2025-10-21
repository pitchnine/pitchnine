<script lang="ts">
  import { fade } from 'svelte/transition';
  import { tick } from 'svelte';
  import ProductLifecycleChart from './ProductLifecycleChart.svelte';
  import LifecycleLeadGen from './LifecycleLeadGen.svelte';
  import LifecycleResult from './LifecycleResult.svelte';

  // ---- Formspree: use your direct endpoint URL (no env var needed) ----
  const FORMSPREE_URL = 'https://formspree.io/f/xldpkawp';

  // Refs & state
  let svgRef: any;

  let currentStep = 1;
  let q1: 'A' | 'B' | 'C' | 'D' | null = null;
  let q2: 'A' | 'B' | 'C' | 'D' | null = null;
  let q3: 'A' | 'B' | 'C' | 'D' | null = null;

  let showLeadForm = false;
  let showResult = false;

  // Focus refs for legends
  let legend1: HTMLLegendElement;
  let legend2: HTMLLegendElement;
  let legend3: HTMLLegendElement;

  type LeadDetail = {
    email: string;
    company: string;
    consent: boolean;
    answers: ('A'|'B'|'C'|'D'|null)[];
  };

  // Quiz interactions
  async function onPick(step: number, value: 'A' | 'B' | 'C' | 'D') {
    if (step === 1) q1 = value;
    if (step === 2) q2 = value;
    if (step === 3) q3 = value;

    plotStep(step);

    if (step < 3) {
      await new Promise(r => setTimeout(r, 140));
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
      const answers = [q1, q2, q3] as Array<'A'|'B'|'C'|'D'|null>;
      try { svgRef.plotFromAnswers(answers); } catch {}
    }
  }

  function plotFromCurrentAnswers() {
    const answers = [q1, q2, q3] as Array<'A'|'B'|'C'|'D'|null>;
    if (answers.every(Boolean) && svgRef?.plotFromAnswers) {
      try { svgRef.plotFromAnswers(answers as ('A'|'B'|'C'|'D')[]); } catch {}
      return;
    }
    if (svgRef?.plotPoint) {
      if (q1) svgRef.plotPoint(1, q1);
      if (q2) svgRef.plotPoint(2, q2);
      if (q3) svgRef.plotPoint(3, q3);
    }
  }

  // Analyze CTA -> show lead form
  function handleSubmit(e: SubmitEvent) {
    e.preventDefault();
    showLeadForm = true;
  }

  // Lead form submit -> POST to Formspree, then show result view
  async function handleLeadSubmit(e: CustomEvent<LeadDetail>) {
    const payload = e.detail;

    try {
      const res = await fetch(FORMSPREE_URL, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email: payload.email,
          company: payload.company,
          consent: payload.consent,
          source: 'product-lifecycle-quiz',
          answers: payload.answers
        })
      });

      if (!res.ok) {
        // Log the server's response to debug 4xx/5xx if needed
        console.warn('Formspree non-OK', res.status, await res.text());
      }
    } catch (err) {
      console.error('Formspree submission error', err);
      // We’ll add user-facing errors in the next pass
    }

    showLeadForm = false;
    showResult = true;
  }

  // Result -> restart assessment
  async function restartAssessment() {
    q1 = q2 = q3 = null;
    currentStep = 1;
    showResult = false;
    showLeadForm = false;
    if (svgRef?.reset) { try { svgRef.reset(); } catch {} }
    else { await tick(); }
  }

  // Helpers
  function inertFor(condition: boolean): Record<string, true> | Record<string, never> {
    return condition ? { inert: true } : {};
  }

  // Reactive UI flags
  $: canBack = currentStep > 1;
  $: canForward = currentStep === 1 ? !!q1 : currentStep === 2 ? !!q2 : false;
  $: ctaEnabled = currentStep === 3;

  // Options
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
</script>




<section class="mx-auto max-w-7xl px-2 py-10">
  <h2 class="h2 mx-auto text-center">Inflection points require modernization.</h2>
    {#if showLeadForm}
  <div class="mt-24">
    <LifecycleLeadGen
      title="Access analysis"
      answers={[q1, q2, q3]}
      on:close={async () => {
        showLeadForm = false;
        await tick();
        plotFromCurrentAnswers();
      }}
      on:submit={handleLeadSubmit}
    />
  </div>

{:else if showResult}
  <div class="mt-24">
    <LifecycleResult onRestart={restartAssessment} />
  </div>

{:else}
    <!-- Original quiz + chart layout -->
    <div class="mt-24 flex flex-col items-center gap-12">
      <!-- Form column (quiz questions + arrows + CTA) -->
      <div class="w-full md:flex-1 md:basis-0">
        <form class="space-y-6" on:submit={handleSubmit}>
          <!-- STEP 1 -->
          <fieldset
            class="space-y-3"
            aria-hidden={currentStep !== 1}
            {...inertFor(currentStep !== 1)}
            hidden={currentStep !== 1}
          >
            <legend bind:this={legend1} tabindex="-1" class="inter mb-2 block text-sm text-gray-50 focus:outline-none">
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

          <!-- STEP 2 -->
          <fieldset
            class="space-y-3"
            aria-hidden={currentStep !== 2}
            {...inertFor(currentStep !== 2)}
            hidden={currentStep !== 2}
          >
            <legend bind:this={legend2} tabindex="-1" class="inter mb-2 block text-sm text-gray-50 focus:outline-none">
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

          <!-- STEP 3 -->
          <fieldset
            class="space-y-3"
            aria-hidden={currentStep !== 3}
            {...inertFor(currentStep !== 3)}
            hidden={currentStep !== 3}
          >
            <legend bind:this={legend3} tabindex="-1" class="inter mb-2 block text-sm text-gray-50 focus:outline-none">
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

          <!-- Nav row -->
          <div class="flex items-center gap-3 pt-4">
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
  {/if}
</section>

