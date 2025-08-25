<script>
	const services = [
		{
			title: 'Backlog Remediation',
			meta: '8–12 weeks • process audit & thematic organization',
			more: 'Alignment of backlog work to executive themes, business value, and customer needs—translating ticket sprawl into a fundable, audit-ready roadmap. Evidence-first review of your backlog and operating model. We de-duplicate, theme, and prioritize under clear decision rules; install cadence discipline; and return a credible 90-day plan with owners, dates, and measures.'
		},
		{
			title: 'AI Readiness',
			meta: '6–10 weeks • Pilot plan • Data/guardrails/metrics',
			desc: 'Run controlled pilots off the mainline, prove ROI, and graduate only what clears risk and compliance into production.',
			more: 'Use-case mapping, data inventory, and governance design. We stand up an evaluation harness, human-in-the-loop controls, and an evidence plan—then convert winners into hardened features with audit trail and rollback.'
		},
		{
			title: 'Innovation Audit',
			meta: '4–8 weeks • Decision artifacts • Executive-ready',
			desc: 'Structured discovery for regulated contexts—frame the problem, quantify opportunity, and return an investment-grade product direction.',
			more: 'Synthesize customer pain, operational constraints, and compliance posture into 3–5 executive themes and a sequenced plan, with decision artifacts your board can approve.'
		}
	];

	function go(service) {
		window.location.href = `/contact?service=${encodeURIComponent(service)}`;
	}

	function onRowKey(e, service) {
		if (e.key === 'Enter' || e.key === ' ') {
			e.preventDefault();
			go(service);
		}
	}
</script>

<section class="py-16">
	<div class="mx-auto max-w-7xl px-6">
		<ul class="divide-y divide-white/5">
			{#each services as s}
				<li class="group relative isolate w-full">
					<!-- Hover overlay -->
					<div
						class="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-r from-white/[0.03] via-emerald-500/10 to-transparent
         opacity-0 transition-opacity duration-300 [-webkit-mask-image:linear-gradient(to_right,transparent,black_10%,black_70%,transparent)]
         [mask-image:linear-gradient(to_right,transparent,black_10%,black_70%,transparent)]
         group-hover:opacity-30"
					></div>

					<!-- Whole row is clickable -->
					<div
						role="link"
						tabindex="0"
						aria-label={`Open ${s.title}`}
						on:click={() => go(s.title)}
						on:keydown={(e) => onRowKey(e, s.title)}
						class="grid w-full cursor-pointer grid-cols-1 items-start gap-x-10 gap-y-6 rounded-xl p-9
                   text-left focus:outline-none focus:ring-2 focus:ring-emerald-500/30 lg:grid-cols-2"
					>
						<!-- Left: title -->
						<div class="self-start">
							<h4 class="text-3xl lg:text-4xl font-semibold tracking-tight text-white">
								{s.title}
							</h4>
						</div>

						<!-- Right: meta + description + fuller copy + CTA -->
						<div class="mt-1 flex max-w-2xl flex-col gap-3 self-start">
							<p class="text-xs font-semibold uppercase tracking-wider text-white/50 md:text-sm">
								{s.meta}
							</p>

							<p class="text-xl text-white/90 sm:text-lg">
								{s.desc}
							</p>

							<p class="border-t border-white/5 pt-4 text-lg text-white/80 sm:text-base">
								{s.more}
							</p>

							<!-- Inline CTA (stops row click) -->
							<div class="mt-3">
								<a
									href="/contact"
									on:click|stopPropagation
									on:keydown|stopPropagation
									data-cta="module"
									aria-label={`Request scope & pricing for ${s.title}`}
									class="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider
                         text-emerald-300/80 hover:text-emerald-200 focus:outline-none"
								>
									<span>Request scope & pricing</span>
									<svg
										viewBox="0 0 24 24"
										class="h-4 w-4 transform-gpu transition-transform duration-200 ease-out
                           hover:translate-x-[4px] focus-visible:translate-x-[4px]
                           group-hover:translate-x-[4px]
                           motion-reduce:transition-none"
										fill="none"
										stroke="currentColor"
										stroke-width="2"
									>
										<path d="M9 6l6 6-6 6" stroke-linecap="round" stroke-linejoin="round" />
									</svg>
								</a>
							</div>
						</div>
					</div>
				</li>
			{/each}
		</ul>

		<p class="mt-8 text-center text-xs font-medium text-white/40">
			Pitch Nine is not a certification body; we install practical controls that align with your
			existing compliance program and industry standards.
		</p>
	</div>
</section>

<style>
	@media (prefers-reduced-motion: reduce) {
		.transition,
		.duration-300,
		.ease-out {
			transition: none !important;
		}
	}
</style>
