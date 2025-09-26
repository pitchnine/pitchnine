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
  <h2 class="h2 text-center mb-8">Find where your product falls.</h2>
 <p class="body text-center max-w-4xl mb-12">
    Markets move, priorities shift, and intuition blurs. This framework gives you a structured way to sanity-check where your product is today — without the noise.
  </p>

  <div class="mt-8 space-y-8">
    <!-- SVG -->
    <ProductCurveSVG bind:this={svgRef} />

    <!-- Form -->
    <form class="space-y-8" on:submit={handleSubmit}>
      <!-- Q1 -->
      <fieldset class="space-y-3">
        <legend class="font-medium">1. Current sales trajectory:</legend>
        <div class="grid gap-2 sm:grid-cols-2">
          <label class="inline-flex items-center">
            <input class="peer sr-only" type="radio" name="q1" value="A" required />
            <span class="w-full peer-checked:ring-2 ring-emerald-500 peer-checked:bg-emerald-50 border border-neutral-200 rounded-lg px-4 py-3 cursor-pointer hover:bg-neutral-50">
              Early, low sales.
            </span>
          </label>
          <label class="inline-flex items-center">
            <input class="peer sr-only" type="radio" name="q1" value="B" />
            <span class="w-full peer-checked:ring-2 ring-emerald-500 peer-checked:bg-emerald-50 border border-neutral-200 rounded-lg px-4 py-3 cursor-pointer hover:bg-neutral-50">
              Accelerating, rivals appearing.
            </span>
          </label>
          <label class="inline-flex items-center">
            <input class="peer sr-only" type="radio" name="q1" value="C" />
            <span class="w-full peer-checked:ring-2 ring-emerald-500 peer-checked:bg-emerald-50 border border-neutral-200 rounded-lg px-4 py-3 cursor-pointer hover:bg-neutral-50">
              Stalling, feelings of saturation
            </span>
          </label>
          <label class="inline-flex items-center">
            <input class="peer sr-only" type="radio" name="q1" value="D" />
            <span class="w-full peer-checked:ring-2 ring-emerald-500 peer-checked:bg-emerald-50 border border-neutral-200 rounded-lg px-4 py-3 cursor-pointer hover:bg-neutral-50">
              Shrinking, customers leaving
            </span>
          </label>
        </div>
      </fieldset>

      <!-- Q2 -->
      <fieldset class="space-y-3">
        <legend class="font-medium">2. Team's current focus:</legend>
        <div class="grid gap-2 sm:grid-cols-2">
          <label class="inline-flex items-center">
            <input class="peer sr-only" type="radio" name="q2" value="A" required />
            <span class="w-full peer-checked:ring-2 ring-emerald-500 peer-checked:bg-emerald-50 border border-neutral-200 rounded-lg px-4 py-3 cursor-pointer hover:bg-neutral-50">
              High expirementation, rapid innovation
            </span>
          </label>
          <label class="inline-flex items-center">
            <input class="peer sr-only" type="radio" name="q2" value="B" />
            <span class="w-full peer-checked:ring-2 ring-emerald-500 peer-checked:bg-emerald-50 border border-neutral-200 rounded-lg px-4 py-3 cursor-pointer hover:bg-neutral-50">
              Adding features with care and scaling
            </span>
          </label>
          <label class="inline-flex items-center">
            <input class="peer sr-only" type="radio" name="q2" value="C" />
            <span class="w-full peer-checked:ring-2 ring-emerald-500 peer-checked:bg-emerald-50 border border-neutral-200 rounded-lg px-4 py-3 cursor-pointer hover:bg-neutral-50">
              Defending market share and optimizing
            </span>
          </label>
          <label class="inline-flex items-center">
            <input class="peer sr-only" type="radio" name="q2" value="D" />
            <span class="w-full peer-checked:ring-2 ring-emerald-500 peer-checked:bg-emerald-50 border border-neutral-200 rounded-lg px-4 py-3 cursor-pointer hover:bg-neutral-50">
              Heavy legacy customer support
            </span>
          </label>
        </div>
      </fieldset>

      <!-- Q3 -->
      <fieldset class="space-y-3">
        <legend class="font-medium">3. Competitive environment:</legend>
        <div class="grid gap-2 sm:grid-cols-2">
          <label class="inline-flex items-center">
            <input class="peer sr-only" type="radio" name="q3" value="A" required />
            <span class="w-full peer-checked:ring-2 ring-emerald-500 peer-checked:bg-emerald-50 border border-neutral-200 rounded-lg px-4 py-3 cursor-pointer hover:bg-neutral-50">
              Few to no direct competitors
            </span>
          </label>
          <label class="inline-flex items-center">
            <input class="peer sr-only" type="radio" name="q3" value="B" />
            <span class="w-full peer-checked:ring-2 ring-emerald-500 peer-checked:bg-emerald-50 border border-neutral-200 rounded-lg px-4 py-3 cursor-pointer hover:bg-neutral-50">
              Rivals appearing, differentiation matters
            </span>
          </label>
          <label class="inline-flex items-center">
            <input class="peer sr-only" type="radio" name="q3" value="C" />
            <span class="w-full peer-checked:ring-2 ring-emerald-500 peer-checked:bg-emerald-50 border border-neutral-200 rounded-lg px-4 py-3 cursor-pointer hover:bg-neutral-50">
              Crowded, price pressure dominates
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
