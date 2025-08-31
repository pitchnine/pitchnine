<script>
	const services = [
  {
  title: "Executive Review",
  time: "2-4 weeks",
    desc: "A structured evaluation of the product portfolio, delivery processes, backlog condition, and competitive landscape, with explicit consideration of AI readiness and adoption pathways. Friction between leadership objectives and engineering execution is surfaced and translated into 3–5 strategic initiatives supported by a sequenced implementation plan and rationalized backlog. The engagement culminates in an executive brief with supporting artifacts that align strategic intent, customer value and innovation recommendations.",
  inc: "Backlog remediation • AI readiness evaluation • Cadence reset • Strategic roadmap with success metrics",
  result: "Friction converted into an investment-grade roadmap with executive theme alignment, measurable outcome markers, and a backlog positioned for effective execution and AI-enabled growth."
},
{
  title: "AI & Innovation Enablement",
  time: "12-16 weeks",
  desc: "Strategic opportunities identified in prior review phases are advanced into production-ready capabilities, with disciplined execution ensuring regulatory, operational, and customer compliance. Progress against leadership objectives is paired with structured engineering engagement, incorporating feedback loops, quality reviews, and change controls. Deliverables are supported by approved design artifacts, documented requirements, and hardened components, ensuring innovation is realized without introducing unmanaged risk.",
  inc: "Experience and design artifacts • UI components and controls • Requirements documentation • QA and accessibility conformance",
  result: "Disciplined momentum established across leadership and engineering, producing measurable innovation while maintaining compliance and operational integrity."
},
{
  title: "Signal-Driven Iteration",
  time: "Monthly",
  desc: "A continuous framework for maintaining alignment between product execution, market signals, and compliance requirements. Features are validated in market, performance measures are tracked, and priorities recalibrated to preserve value realization over time. The result is a living roadmap that adapts to evolving conditions while preserving governance, delivery discipline, and confidence in strategic direction.",
  inc: "Feature validation • Experience design refinements • KPI and outcome tracking • Iteration and control reviews",
  result: "Improved forecasting of value and impact, sustained alignment between product execution and strategy, and strengthened evidence for executive decision-making and customer engagement."
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
	<div class="mx-auto max-w-7xl">
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
						class="grid w-full cursor-pointer grid-cols-1 items-start gap-x-10 gap-y-6 rounded-xl px-12 py-16
                   text-left focus:outline-none focus:ring-2 focus:ring-emerald-500/30 lg:grid-cols-2"
					>
						<!-- Left: title -->
						<div class="flex flex-col gap-3">
							<h4 class="h3">
								{s.title}
							</h4>
							<span class="kicker">{s.time}</span>
						</div>

						<!-- Right: meta + description + fuller copy + CTA -->
						<div class="mt-1 flex max-w-2xl flex-col gap-3 self-start">
							<p class="body">
								{s.desc}
							</p>
							<p class="body">
								<span class="kicker text-orange-400/60">Includes:<br></span>
								{s.inc}
							</p>
							<p class="body">
								<span class="kicker text-emerald-400/60">Results:<br></span>
								{s.result}
							</p>

							<!-- Inline CTA (stops row click) -->
							<div class="mt-3">
								<a
									href="/contact"
									on:click|stopPropagation
									on:keydown|stopPropagation
									data-cta="module"
									aria-label={`Request scope & pricing for ${s.title}`}
									class="primary-cta mt-6"
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

		<p class="mt-8 eyebrow text-center italic">
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
