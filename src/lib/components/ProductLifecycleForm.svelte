<script lang="ts">
  import ProductCurveSVG from "./ProductCurveSVG.svelte";
  let svgRef: any;

  // Reuse the same check icon for consistency
  const CheckIcon = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" width="20" height="20" fill="currentColor" aria-hidden="true">
  <path d="M16.707 5.293a1 1 0 0 1 0 1.414l-7.25 7.25a1 1 0 0 1-1.414 0l-3-3a1 1 0 1 1 1.414-1.414l2.293 2.293 6.543-6.543a1 1 0 0 1 1.414 0z"/>
</svg>`;

  function handleSubmit(e: SubmitEvent) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget as HTMLFormElement);
    const answers = ["q1","q2","q3"].map(n => fd.get(n) as "A"|"B"|"C"|"D");
    svgRef.plotFromAnswers(answers);
  }
</script>

<section class="max-w-7xl mx-auto px-2 py-10">
  <h2 class="h2 max-w-3xl text-left mb-8">Find where your product falls.</h2>
  <p class="body text-left max-w-2xl mb-12">
    Markets move, priorities shift, and intuition blurs. This framework gives you a structured way to sanity-check where your product is today — without the noise.
  </p>

  <div class="mt-8 flex flex-col gap-8 lg:flex-row lg:justify-between">

     <div class="md:basis-1/2 md:max-w-xl">
    <!-- FORM (styled like "Interests") -->
   <form class="space-y-8" on:submit={handleSubmit}>
  <!-- Q1 -->
  <div>
    <label for="q1" class="inter block text-sm text-gray-50 mb-2">1. Current sales trajectory</label>
    <select
      id="q1"
      name="q1"
      required
      class="inter block w-full rounded-xl border border-gray-700 bg-gray-900/60 px-4 py-3 text-gray-100
             focus:border-emerald-500/50 focus:outline-none focus:ring-1 focus:ring-emerald-500/50"
    >
      <option value="" disabled selected>Select one…</option>
      <option value="A">Low sales, high costs</option>
      <option value="B">Sales rising, rivals enter</option>
      <option value="C">Sales plateau, market full</option>
      <option value="D">Sales shrinking, customers exit</option>
    </select>
  </div>

  <!-- Q2 -->
  <div>
    <label for="q2" class="inter block text-sm text-gray-50 mb-2">2. Team’s current focus</label>
    <select
      id="q2"
      name="q2"
      required
      class="inter block w-full rounded-xl border border-gray-700 bg-gray-900/60 px-4 py-3 text-gray-100
             focus:border-emerald-500/50 focus:outline-none focus:ring-1 focus:ring-emerald-500/50"
    >
      <option value="" disabled selected>Select one…</option>
      <option value="A">Iterating fast, experimenting</option>
      <option value="B">Adding features, scaling</option>
      <option value="C">Defending share, optimizing</option>
      <option value="D">Supporting legacy, sunsetting</option>
    </select>
  </div>

  <!-- Q3 -->
  <div>
    <label for="q3" class="inter block text-sm text-gray-50 mb-2">3. Competitive environment</label>
    <select
      id="q3"
      name="q3"
      required
      class="inter block w-full rounded-xl border border-gray-700 bg-gray-900/60 px-4 py-3 text-gray-100
             focus:border-emerald-500/50 focus:outline-none focus:ring-1 focus:ring-emerald-500/50"
    >
      <option value="" disabled selected>Select one…</option>
      <option value="A">Few or no rivals</option>
      <option value="B">Rivals increasing, differentiating</option>
      <option value="C">Crowded market, price pressure</option>
      <option value="D">Rivals exiting, consolidating</option>
    </select>
  </div>

  <div class="border-t border-white/10"></div>

  <div class="pt-2">
    <button
      type="submit"
      class="inter primary-cta w-full sm:w-auto"
      aria-label="See your position on the lifecycle curve"
    >
      See my position
    </button>
  </div>
</form>

    </div>
  
     <!-- SVG -->
     <div class="md:basis-1/2">
    <ProductCurveSVG bind:this={svgRef} />
  </div>
  
  </div>
</section>
