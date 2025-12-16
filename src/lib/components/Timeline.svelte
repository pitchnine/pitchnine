<script lang="ts">
	import { onMount } from 'svelte';

	type Milestone = {
		label: string;
		t: number;
		system: string;
	};

	// Example milestones (set your real ones + tune t values to match your deck)
	const milestones: Milestone[] = [
		{ label: 'Introductions', t: 0.02, system: 'EMRS' },
		{ label: 'Demos', t: 0.24, system: 'PACS' },
		{ label: 'Proposal', t: 0.4, system: 'HCPCS' },
		{ label: 'IT/IS Review', t: 0.5, system: 'HL7' },
		{ label: 'BAA', t: 0.58, system: 'FHIR' },
		{ label: 'Implementation', t: 0.8, system: 'CPT' },
		{ label: 'Go-live', t: 0.96, system: 'OAUTH' }
	];

	let sectionEl: HTMLElement;
	let progress = 0; // 0..1
	let prefersReducedMotion = false;

	const clamp01 = (n: number) => Math.max(0, Math.min(1, n));

	function updateProgress() {
		if (!sectionEl) return;

		const rect = sectionEl.getBoundingClientRect();
		const vh = window.innerHeight;

		const total = rect.height - vh;
		const scrolled = -rect.top;

		progress = total <= 0 ? 1 : clamp01(scrolled / total);

		// CSS var for line fill, glow, etc.
		sectionEl.style.setProperty('--p', String(progress));
	}

	function currentMilestone(p: number) {
		let current = milestones[0];
		for (const m of milestones) {
			if (p >= m.t) current = m;
		}
		return current;
	}

let activeMilestone: Milestone = milestones[0];
$: activeMilestone = currentMilestone(progress);

	onMount(() => {
		prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

		const onScroll = () => {
			if (prefersReducedMotion) return;
			requestAnimationFrame(updateProgress);
		};

		updateProgress();
		window.addEventListener('scroll', onScroll, { passive: true });
		window.addEventListener('resize', updateProgress);

		return () => {
			window.removeEventListener('scroll', onScroll);
			window.removeEventListener('resize', updateProgress);
		};
	});

	const labelWindow = 0.1;
	const leftPad = 0;
	const rightPad = 1000;
</script>

<section bind:this={sectionEl} class="relative bg-[#04090F] text-slate-100" style="--p: 0;">
	<!-- Make the section tall so the animation has room -->

	<!-- Scroll window -->
	<div class="relative h-[180vh]">
		<!-- Sticky stage: stays in view while user scrolls this window -->
		<div class="sticky top-0 flex h-screen items-center">
			<div class="w-full max-w-7xl px-6">
				<h2 class="h2 mb-4 text-left">
					Healthcare products must work within complex, interwoven systems and protocals like
<span class="systemSlot" aria-live="polite">
  {#key activeMilestone.system}
    <span class="systemWord">
      {activeMilestone.system}
    </span>
  {/key}
</span>
while product teams must survive a feast-and-famine implementation cycle.
				</h2>
				<div class="items-left grid grid-cols-1 gap-10 md:grid-cols-10">
					<!-- Timeline graphic -->
					<div class="md:col-span-10">
						<div>
         
							<svg viewBox="0 0 1000 220" class="h-auto w-full overflow-visible">
								<!-- Base line -->
								<line
									x1={leftPad}
									y1="110"
									x2={rightPad}
									y2="110"
									stroke="rgba(255,255,255,0.18)"
									stroke-width="3"
									stroke-linecap="round"
								/>

								<!-- Progress line (reveals as you scroll) -->
								<line
									x1={leftPad}
									y1="110"
									x2={leftPad + (rightPad - leftPad) * progress}
									y2="110"
									stroke="rgba(52, 211, 153, 0.9)"
									stroke-width="3"
									stroke-linecap="round"
								/>

								<!-- Ticks -->

								{#each milestones as m (m.label)}
									{@const x = leftPad + (rightPad - leftPad) * m.t}
									{@const active = progress >= m.t}
									{@const visible = Math.abs(progress - m.t) <= labelWindow}

									<g>
										<!-- Label ABOVE tick -->
										<text
											{x}
											y="78"
											text-anchor="middle"
											class={active ? 'tickLabel tickLabelActive' : 'tickLabel'}
											opacity={visible ? 1 : 0}
										>
											{m.label}
										</text>

										<!-- Tick stem -->
										<line
											x1={x}
											y1="90"
											x2={x}
											y2="130"
											stroke={active ? 'rgba(52, 211, 153, 0.95)' : 'rgba(255,255,255,0.22)'}
											stroke-width="2"
											stroke-linecap="round"
										/>

										<!-- Tick glow dot -->
										<circle
											cx={x}
											cy="110"
											r={active ? 7 : 5}
											fill={active ? 'rgba(52, 211, 153, 0.95)' : 'rgba(255,255,255,0.22)'}
											class={active ? 'glow' : ''}
										/>
									</g>
								{/each}
							</svg>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>

	<style>
		/* Glow effect for active milestones */
		.glow {
			filter: drop-shadow(0 0 10px rgba(52, 211, 153, 0.55))
				drop-shadow(0 0 22px rgba(52, 211, 153, 0.35));
		}

		/* Active label row styling */
		:global(.activeRow) {
			border-color: rgba(52, 211, 153, 0.25);
			background: rgba(52, 211, 153, 0.08);
		}

		.tickLabel {
			font-size: 12px;
			fill: rgba(226, 232, 240, 0.55);
			transition: opacity 180ms ease;
		}

		.tickLabelActive {
			fill: rgba(226, 232, 240, 0.9);
		}

.systemSlot {
  display: inline-block;
  vertical-align: baseline;
  white-space: nowrap;
  text-align: left;
  width: 5ch;          /* mobile/default */
  margin-inline: 0.75ch; /* small “space” on both sides */
}

.systemWord {
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
  color: #cbd5e1;
  opacity: 0.5;
  font-weight: 600; /* matches your h2 weight vibe */
  letter-spacing: 0.01em; /* tiny counter to tracking-tight */
  transition: opacity 250ms ease, transform 250ms ease;
}

	</style>
</section>
