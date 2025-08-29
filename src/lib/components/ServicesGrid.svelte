<script>
	const services = [
  {
    title: "Executive Review",
    meta: "2–4 weeks • Backlog Audit & Value Alignment",
    desc: "A disciplined, end-to-end review of the portfolio, process, backlog, market signals, and competition. Pitch Nine works to separate noise from signal and deliver a 9-slide brief with supporting artifacts that translates the friction into a Strategic Initiative Plan, complete with proposed (cleaned up) Backlog.",
	inc: "backlog remediation, decision criteria, governance rules, cadence reset, and a 90-day operating plan.",
	result: "friction converted into action and outcome markers, investment roadmap with implementation plan and executive theme alignment."
  },
  {
    title: "AI & Innovation Enablement",
    meta: "8–16 weeks • Delivering AI & Innovation, Safely",
    desc: "We take the high-value bets from the diagnostic and convert them into hardened features that meet regulatory, operational, and customer standards. Includes SLOs, telemetry, change control, and compliance guardrails. Every deliverable passes design QA, accessibility conformance, and content standards in code — ensuring innovation without risk exposure.",
	inc: "backlog remediation, decision criteria, governance rules, cadence reset, and a 90-day operating plan.",
	result: "friction converted into action and outcome markers, investment roadmap with implementation plan and executive theme alignment."
  },
  {
    title: "Signal-Driven Iteration",
    meta: "Monthly as requested • Ongoing Monitoring & Adjustment",
    desc: "A standing engagement to keep product execution aligned with market and compliance signals. We monitor, measure, and recalibrate based on outcomes, ensuring the roadmap stays investment-grade over time. Includes backlog refinement, KPI tracking, and iteration controls — giving leadership confidence that product evolution stays in sync with strategy.",
	inc: "backlog remediation, decision criteria, governance rules, cadence reset, and a 90-day operating plan.",
	result: "friction converted into action and outcome markers, investment roadmap with implementation plan and executive theme alignment."
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
							<span class="meta">{s.meta}</span>
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
								<span class="kicker text-emerald-400/60">Results<br></span>
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
