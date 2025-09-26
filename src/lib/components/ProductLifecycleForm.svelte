<script lang="ts">
	import ProductCurveSVG from './ProductCurveSVG.svelte';
	let svgRef: any;

	// Reuse the same check icon for consistency
	const CheckIcon = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" width="20" height="20" fill="currentColor" aria-hidden="true">
  <path d="M16.707 5.293a1 1 0 0 1 0 1.414l-7.25 7.25a1 1 0 0 1-1.414 0l-3-3a1 1 0 1 1 1.414-1.414l2.293 2.293 6.543-6.543a1 1 0 0 1 1.414 0z"/>
</svg>`;

	function handleSubmit(e: SubmitEvent) {
		e.preventDefault();
		const fd = new FormData(e.currentTarget as HTMLFormElement);
		const answers = ['q1', 'q2', 'q3'].map((n) => fd.get(n) as 'A' | 'B' | 'C' | 'D');
		svgRef.plotFromAnswers(answers);
	}
</script>

<section class="mx-auto max-w-7xl px-2 py-10">
	<h2 class="h2 mb-8 text-center">Check your product age.</h2>
	<p class="body mb-12 md:mb-16 max-w-4xl text-center mx-auto">
		Markets move, priorities shift, and intuition blurs. Pitch Nine relies on studied frameworks like the <i>Product Lifecycle</i> in partnership with contextualized judgement to help understand current product age without the noise.
	</p>

	<div class="mt-8 flex flex-col gap-8 lg:items-center lg:flex-row lg:gap-24">
		<div class="w-full md:max-w-md">
			<form class="space-y-8 lg:space-y-10" on:submit={handleSubmit}>
				<!-- Q1 -->
				<div>
					<label for="q1" class="inter mb-2 block text-sm text-gray-50">Current sales trajectory:</label>
					<select
						id="q1"
						name="q1"
						required
						class="inter block w-full rounded-xl border border-gray-700 bg-gray-900/60 px-4 py-3 text-gray-100 focus:border-emerald-500/50 focus:outline-none focus:ring-1 focus:ring-emerald-500/50"
					>
						<option value="" disabled selected>Select one…</option>
						<option value="A">Early discovery with low sales</option>
						<option value="B">Sales rising, rivals entering</option>
						<option value="C">Sales stalling with market filling</option>
						<option value="D">Sales shrinking, heavy reliance on legacy accounts</option>
					</select>
				</div>

				<!-- Q2 -->
				<div>
					<label for="q2" class="inter mb-2 block text-sm text-gray-50">Team’s current focus:</label>
					<select
						id="q2"
						name="q2"
						required
						class="inter block w-full rounded-xl border border-gray-700 bg-gray-900/60 px-4 py-3 text-gray-100 focus:border-emerald-500/50 focus:outline-none focus:ring-1 focus:ring-emerald-500/50"
					>
						<option value="" disabled selected>Select one…</option>
						<option value="A">High experimentation and iteration</option>
						<option value="B">Adding validated features, carefully</option>
						<option value="C">Defending market share, optimizing performance</option>
						<option value="D">Reactive with a priority on maintenance</option>
					</select>
				</div>

				<!-- Q3 -->
				<div>
					<label for="q3" class="inter mb-2 block text-sm text-gray-50">Competitive landscape:</label>
					<select
						id="q3"
						name="q3"
						required
						class="inter block w-full rounded-xl border border-gray-700 bg-gray-900/60 px-4 py-3 text-gray-100 focus:border-emerald-500/50 focus:outline-none focus:ring-1 focus:ring-emerald-500/50"
					>
						<option value="" disabled selected>Select one…</option>
						<option value="A">Few or no direct rivals</option>
						<option value="B">Rivals increasing, differentiation becoming critical</option>
						<option value="C">Market is crowded heavy pressure on pricing</option>
						<option value="D">Competitors are exiting and beginning to consolidate</option>
					</select>
				</div>

				<div class="pt-6">
					<button
						type="submit"
						class="inter primary-cta w-full sm:w-auto"
						aria-label="See your position on the lifecycle curve"
					>
						Plot product stage
					</button>
				</div>
			</form>
		</div>

		<!-- SVG -->
		<div class="md:basis-2/3">
			<ProductCurveSVG bind:this={svgRef} />
		</div>
	</div>
</section>
