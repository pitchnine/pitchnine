<script lang="ts">
	import ProductCurveSVG from './ProductCurveSVG.svelte';
	let svgRef: any;

	function handleSubmit(e: SubmitEvent) {
		e.preventDefault();
		const fd = new FormData(e.currentTarget as HTMLFormElement);
		const answers = ['q1', 'q2', 'q3'].map((n) => fd.get(n) as 'A' | 'B' | 'C' | 'D');
		svgRef.plotFromAnswers(answers);
	}
</script>

<section class="mx-auto max-w-7xl px-2 py-10">
	<h2 class="h2 mx-auto text-center">Inflection points require modernization.</h2>

<div class="mt-16 flex flex-col items-center gap-12
            xl:flex-row xl:items-start xl:gap-8">
		<!-- Form column -->
		  <div class="w-full xl:flex-none xl:max-w-[560px]">
			<form class="space-y-6" on:submit={handleSubmit}>
				<!-- Q1 -->
				<fieldset class="space-y-3">
					<legend class="inter mb-2 block text-sm text-gray-50">Current sales trajectory:</legend>
					<div class="mt-2 grid grid-cols-1 gap-3 xl:grid-cols-2">
						<div>
							<input id="q1-a" type="radio" name="q1" value="A" class="peer sr-only" required />
							<label
								for="q1-a"
								class="grid-link flex w-full cursor-pointer items-center gap-2 whitespace-nowrap
           rounded-md border border-gray-700 bg-gray-900/60 px-4 py-3 text-left
           transition
           peer-checked:border-emerald-500/50 peer-checked:text-emerald-50
           peer-checked:ring-1 peer-checked:ring-emerald-200/25
           peer-checked:[&_.dot]:opacity-100"
							>
								<!-- Green dot (hidden by default) -->
								<span
									class="dot h-2 w-2 rounded-full bg-emerald-400 opacity-0 transition"
									aria-hidden="true"
								></span>
<!-- choice text -->
								<span class="text-sm">Low; early days</span>
							</label>
						</div>

						<div>
							<input id="q1-b" type="radio" name="q1" value="B" class="peer sr-only" />
							<label
								for="q1-b"
								class="grid-link flex w-full cursor-pointer items-center gap-2 whitespace-nowrap
           rounded-md border border-gray-700 bg-gray-900/60 px-4 py-3 text-left
           transition
           peer-checked:border-emerald-500/50 peer-checked:text-emerald-50
           peer-checked:ring-1 peer-checked:ring-emerald-200/25
           peer-checked:[&_.dot]:opacity-100"
							>
							<!-- Green dot (hidden by default) -->
								<span
									class="dot h-2 w-2 rounded-full bg-emerald-400 opacity-0 transition"
									aria-hidden="true"
								></span>
<!-- choice text -->
								<span class="text-sm">Rising; rivals entering</span>
							</label>
						</div>

						<div>
							<input id="q1-c" type="radio" name="q1" value="C" class="peer sr-only" />
							<label
								for="q1-c"
								class="grid-link flex w-full cursor-pointer items-center gap-2 whitespace-nowrap
           rounded-md border border-gray-700 bg-gray-900/60 px-4 py-3 text-left
           transition
           peer-checked:border-emerald-500/50 peer-checked:text-emerald-50
           peer-checked:ring-1 peer-checked:ring-emerald-200/25
           peer-checked:[&_.dot]:opacity-100"
							>
							<!-- Green dot (hidden by default) -->
								<span
									class="dot h-2 w-2 rounded-full bg-emerald-400 opacity-0 transition"
									aria-hidden="true"
								></span>
<!-- choice text -->
								<span class="text-sm">Stalling; market saturated</span>
							</label>
						</div>

						<div>
							<input id="q1-d" type="radio" name="q1" value="D" class="peer sr-only" />
							<label
								for="q1-d"
								class="grid-link flex w-full cursor-pointer items-center gap-2 whitespace-nowrap
           rounded-md border border-gray-700 bg-gray-900/60 px-4 py-3 text-left
           transition
           peer-checked:border-emerald-500/50 peer-checked:text-emerald-50
           peer-checked:ring-1 peer-checked:ring-emerald-200/25
           peer-checked:[&_.dot]:opacity-100"
							>
							<!-- Green dot (hidden by default) -->
								<span
									class="dot h-2 w-2 rounded-full bg-emerald-400 opacity-0 transition"
									aria-hidden="true"
								></span>
<!-- choice text -->
								<span class="text-sm">Shrinking; churn rising</span>
							</label>
						</div>
					</div>
				</fieldset>

				<!-- Q2 -->
				<fieldset class="space-y-3">
					<legend class="inter mb-2 block text-sm text-gray-50">Team’s current focus:</legend>
					<div class="mt-2 grid grid-cols-1 gap-3 xl:grid-cols-2">
						<div>
							<input id="q2-a" type="radio" name="q2" value="A" class="peer sr-only" required />
							<label
								for="q2-a"
								class="grid-link flex w-full cursor-pointer items-center gap-2 whitespace-nowrap
           rounded-md border border-gray-700 bg-gray-900/60 px-4 py-3 text-left
           transition
           peer-checked:border-emerald-500/50 peer-checked:text-emerald-50
           peer-checked:ring-1 peer-checked:ring-emerald-200/25
           peer-checked:[&_.dot]:opacity-100"
							>
							<!-- Green dot (hidden by default) -->
								<span
									class="dot h-2 w-2 rounded-full bg-emerald-400 opacity-0 transition"
									aria-hidden="true"
								></span>
<!-- choice text -->
								<span class="text-sm">High experimentation</span>
							</label>
						</div>

						<div>
							<input id="q2-b" type="radio" name="q2" value="B" class="peer sr-only" />
							<label
								for="q2-b"
								class="grid-link flex w-full cursor-pointer items-center gap-2 whitespace-nowrap
           rounded-md border border-gray-700 bg-gray-900/60 px-4 py-3 text-left
           transition
           peer-checked:border-emerald-500/50 peer-checked:text-emerald-50
           peer-checked:ring-1 peer-checked:ring-emerald-200/25
           peer-checked:[&_.dot]:opacity-100"
							>
							<!-- Green dot (hidden by default) -->
								<span
									class="dot h-2 w-2 rounded-full bg-emerald-400 opacity-0 transition"
									aria-hidden="true"
								></span>
<!-- choice text -->
								<span class="text-sm">Steady feature delivery</span>
							</label>
						</div>

						<div>
							<input id="q2-c" type="radio" name="q2" value="C" class="peer sr-only" />
							<label
								for="q2-c"
								class="grid-link flex w-full cursor-pointer items-center gap-2 whitespace-nowrap
           rounded-md border border-gray-700 bg-gray-900/60 px-4 py-3 text-left
           transition
           peer-checked:border-emerald-500/50 peer-checked:text-emerald-50
           peer-checked:ring-1 peer-checked:ring-emerald-200/25
           peer-checked:[&_.dot]:opacity-100"
							>
							<!-- Green dot (hidden by default) -->
								<span
									class="dot h-2 w-2 rounded-full bg-emerald-400 opacity-0 transition"
									aria-hidden="true"
								></span>
<!-- choice text -->
								<span class="text-sm">Defending share, optimizing</span>
							</label>
						</div>

						<div>
							<input id="q2-d" type="radio" name="q2" value="D" class="peer sr-only" />
							<label
								for="q2-d"
								class="grid-link flex w-full cursor-pointer items-center gap-2 whitespace-nowrap
           rounded-md border border-gray-700 bg-gray-900/60 px-4 py-3 text-left
           transition
           peer-checked:border-emerald-500/50 peer-checked:text-emerald-50
           peer-checked:ring-1 peer-checked:ring-emerald-200/25
           peer-checked:[&_.dot]:opacity-100"
							>
							<!-- Green dot (hidden by default) -->
								<span
									class="dot h-2 w-2 rounded-full bg-emerald-400 opacity-0 transition"
									aria-hidden="true"
								></span>
<!-- choice text -->
								<span class="text-sm">Maintenance-heavy, reactive</span>
							</label>
						</div>
					</div>
				</fieldset>

				<!-- Q3 -->
				<fieldset class="space-y-3">
					<legend class="inter mb-2 block text-sm text-gray-50">Competitive landscape:</legend>
					<div class="mt-2 grid grid-cols-1 gap-3 xl:grid-cols-2">
						<div>
							<input id="q3-a" type="radio" name="q3" value="A" class="peer sr-only" required />
							<label
								for="q3-a"
								class="grid-link flex w-full cursor-pointer items-center gap-2 whitespace-nowrap
           rounded-md border border-gray-700 bg-gray-900/60 px-4 py-3 text-left
           transition
           peer-checked:border-emerald-500/50 peer-checked:text-emerald-50
           peer-checked:ring-1 peer-checked:ring-emerald-200/25
           peer-checked:[&_.dot]:opacity-100"
							>
							<!-- Green dot (hidden by default) -->
								<span
									class="dot h-2 w-2 rounded-full bg-emerald-400 opacity-0 transition"
									aria-hidden="true"
								></span>
<!-- choice text -->
								<span class="text-sm">Few direct rivals</span>
							</label>
						</div>

						<div>
							<input id="q3-b" type="radio" name="q3" value="B" class="peer sr-only" />
							<label
								for="q3-b"
								class="grid-link flex w-full cursor-pointer items-center gap-2 whitespace-nowrap
           rounded-md border border-gray-700 bg-gray-900/60 px-4 py-3 text-left
           transition
           peer-checked:border-emerald-500/50 peer-checked:text-emerald-50
           peer-checked:ring-1 peer-checked:ring-emerald-200/25
           peer-checked:[&_.dot]:opacity-100"
							>
							<!-- Green dot (hidden by default) -->
								<span
									class="dot h-2 w-2 rounded-full bg-emerald-400 opacity-0 transition"
									aria-hidden="true"
								></span>
<!-- choice text -->
								<span class="text-sm">Differentiation critical</span>
							</label>
						</div>

						<div>
							<input id="q3-c" type="radio" name="q3" value="C" class="peer sr-only" />
							<label
								for="q3-c"
								class="grid-link flex w-full cursor-pointer items-center gap-2 whitespace-nowrap
           rounded-md border border-gray-700 bg-gray-900/60 px-4 py-3 text-left
           transition
           peer-checked:border-emerald-500/50 peer-checked:text-emerald-50
           peer-checked:ring-1 peer-checked:ring-emerald-200/25
           peer-checked:[&_.dot]:opacity-100"
							>
							<!-- Green dot (hidden by default) -->
								<span
									class="dot h-2 w-2 rounded-full bg-emerald-400 opacity-0 transition"
									aria-hidden="true"
								></span>
<!-- choice text -->
								<span class="text-sm">Crowded with price pressure</span>
							</label>
						</div>

						<div>
							<input id="q3-d" type="radio" name="q3" value="D" class="peer sr-only" />
						<label
								for="q3-d"
								class="grid-link rounded-md flex w-full cursor-pointer items-center gap-2 whitespace-nowrap border border-gray-700 bg-gray-900/60 px-4 py-3 text-left
           transition
           peer-checked:border-emerald-500/50 peer-checked:text-emerald-50
           peer-checked:ring-1 peer-checked:ring-emerald-200/25
           peer-checked:[&_.dot]:opacity-100"
							>
							<!-- Green dot (hidden by default) -->
								<span
									class="dot h-2 w-2 rounded-full bg-emerald-400 opacity-0 transition"
									aria-hidden="true"
								></span>
<!-- choice text -->
								<span class="text-sm">Exits, consolidation</span>
							</label>
						</div>
					</div>
				</fieldset>

<hr class="w-full bg-gray-700 opacity-15">

				<div class="pt-6">
					<button
						type="submit"
						class="inter primary-cta w-full"
						aria-label="See your position on the lifecycle curve"
					>
						Analyze product stage
					</button>
				</div>
			</form>
		</div>

		<!-- Graph column -->
		   <div class="w-full xl:flex-1">
			<ProductCurveSVG bind:this={svgRef} />
		</div>
	</div>
</section>
