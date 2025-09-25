<script lang="ts">
  import ProductCurveSVG from "./ProductCurveSVG.svelte";
  let svgRef: any;

  function handleSubmit(e: SubmitEvent) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget as HTMLFormElement);
    const answers = ["q1","q2","q3"].map(n => fd.get(n) as "A"|"B"|"C"|"D");
    svgRef.plotFromAnswers(answers);
  }
</script>

<section class="max-w-3xl mx-auto px-4 py-10">
  <h2 class="text-2xl md:text-3xl font-semibold tracking-tight">
    Where is your product on the lifecycle curve?
  </h2>
  <p class="mt-2 text-sm md:text-base text-neutral-600">
    Answer three quick questions to get a directional read based on Investopedia’s lifecycle stages.
    Choose the single best option for each prompt.
  </p>

  <div class="mt-8 space-y-8">
    <!-- SVG -->
    <ProductCurveSVG bind:this={svgRef} />

    <!-- Form -->
    <form class="space-y-8" on:submit={handleSubmit}>
      <!-- Q1 -->
      <fieldset class="space-y-3">
        <legend class="font-medium">1) Market traction</legend>
        <div class="grid gap-2 sm:grid-cols-2">
          <label class="inline-flex items-center">
            <input class="peer sr-only" type="radio" name="q1" value="A" required />
            <span class="w-full peer-checked:ring-2 ring-emerald-500 peer-checked:bg-emerald-50 border border-neutral-200 rounded-lg px-4 py-3 cursor-pointer hover:bg-neutral-50">
              Just launched, sales are low, costs are high
            </span>
          </label>
          <label class="inline-flex items-center">
            <input class="peer sr-only" type="radio" name="q1" value="B" />
            <span class="w-full peer-checked:ring-2 ring-emerald-500 peer-checked:bg-emerald-50 border border-neutral-200 rounded-lg px-4 py-3 cursor-pointer hover:bg-neutral-50">
              Sales are rising quickly and competitors are taking notice
            </span>
          </label>
          <label class="inline-flex items-center">
            <input class="peer sr-only" type="radio" name="q1" value="C" />
            <span class="w-full peer-checked:ring-2 ring-emerald-500 peer-checked:bg-emerald-50 border border-neutral-200 rounded-lg px-4 py-3 cursor-pointer hover:bg-neutral-50">
              Sales have leveled off; market feels saturated
            </span>
          </label>
          <label class="inline-flex items-center">
            <input class="peer sr-only" type="radio" name="q1" value="D" />
            <span class="w-full peer-checked:ring-2 ring-emerald-500 peer-checked:bg-emerald-50 border border-neutral-200 rounded-lg px-4 py-3 cursor-pointer hover:bg-neutral-50">
              Sales are shrinking; customers are moving elsewhere
            </span>
          </label>
        </div>
      </fieldset>

      <!-- Q2 -->
      <fieldset class="space-y-3">
        <legend class="font-medium">2) Backlog & priorities</legend>
        <div class="grid gap-2 sm:grid-cols-2">
          <label class="inline-flex items-center">
            <input class="peer sr-only" type="radio" name="q2" value="A" required />
            <span class="w-full peer-checked:ring-2 ring-emerald-500 peer-checked:bg-emerald-50 border border-neutral-200 rounded-lg px-4 py-3 cursor-pointer hover:bg-neutral-50">
              Getting initial adoption and awareness
            </span>
          </label>
          <label class="inline-flex items-center">
            <input class="peer sr-only" type="radio" name="q2" value="B" />
            <span class="w-full peer-checked:ring-2 ring-emerald-500 peer-checked:bg-emerald-50 border border-neutral-200 rounded-lg px-4 py-3 cursor-pointer hover:bg-neutral-50">
              Adding features and scaling operations
            </span>
          </label>
          <label class="inline-flex items-center">
            <input class="peer sr-only" type="radio" name="q2" value="C" />
            <span class="w-full peer-checked:ring-2 ring-emerald-500 peer-checked:bg-emerald-50 border border-neutral-200 rounded-lg px-4 py-3 cursor-pointer hover:bg-neutral-50">
              Defending market share and improving efficiency
            </span>
          </label>
          <label class="inline-flex items-center">
            <input class="peer sr-only" type="radio" name="q2" value="D" />
            <span class="w-full peer-checked:ring-2 ring-emerald-500 peer-checked:bg-emerald-50 border border-neutral-200 rounded-lg px-4 py-3 cursor-pointer hover:bg-neutral-50">
              Maintaining legacy customers while sunsetting features
            </span>
          </label>
        </div>
      </fieldset>

      <!-- Q3 -->
      <fieldset class="space-y-3">
        <legend class="font-medium">3) Competitive environment</legend>
        <div class="grid gap-2 sm:grid-cols-2">
          <label class="inline-flex items-center">
            <input class="peer sr-only" type="radio" name="q3" value="A" required />
            <span class="w-full peer-checked:ring-2 ring-emerald-500 peer-checked:bg-emerald-50 border border-neutral-200 rounded-lg px-4 py-3 cursor-pointer hover:bg-neutral-50">
              Few direct competitors; product is new to market
            </span>
          </label>
          <label class="inline-flex items-center">
            <input class="peer sr-only" type="radio" name="q3" value="B" />
            <span class="w-full peer-checked:ring-2 ring-emerald-500 peer-checked:bg-emerald-50 border border-neutral-200 rounded-lg px-4 py-3 cursor-pointer hover:bg-neutral-50">
              Competitors are increasing; differentiation matters
            </span>
          </label>
          <label class="inline-flex items-center">
            <input class="peer sr-only" type="radio" name="q3" value="C" />
            <span class="w-full peer-checked:ring-2 ring-emerald-500 peer-checked:bg-emerald-50 border border-neutral-200 rounded-lg px-4 py-3 cursor-pointer hover:bg-neutral-50">
              Market is crowded; price pressure dominates
            </span>
          </label>
          <label class="inline-flex items-center">
            <input class="peer sr-only" type="radio" name="q3" value="D" />
            <span class="w-full peer-checked:ring-2 ring-emerald-500 peer-checked:bg-emerald-50 border border-neutral-200 rounded-lg px-4 py-3 cursor-pointer hover:bg-neutral-50">
              Competitors are exiting or consolidating
            </span>
          </label>
        </div>
      </fieldset>

      <div class="pt-2">
        <button type="submit" class="inline-flex items-center gap-2 rounded-lg bg-emerald-600 text-white px-4 py-2 text-sm font-medium hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-500">
          See my position
        </button>
      </div>
    </form>
  </div>
</section>
