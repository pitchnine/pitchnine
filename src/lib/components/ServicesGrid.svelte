<script>
	const services = [
  {
    title: "Opportunity Audit",
    time: "3 meetings",
    desc: "A rapid assessment of your product vision, backlog, and data landscape to identify where AI can create leverage fast. You’ll leave with a clear, prioritized roadmap that aligns leadership and converts ambition into an investable, measurable plan.",
    inc: "Board brief • Design artifacts • Executive roadmap with success metrics"
  },
  {
    title: "Product Acceleration",
    time: "Scope-based",
    desc: "We transform high-potential ideas into launch-ready product extensions that prove value and technical feasibility without derailing your core team. Every build blends modern AI tooling, strong architecture, and scaleable experiences in tight collaboration with your existing workflows to reach validation, fast.",
    inc: "AI-assisted prototypes • Full-stack delivery • KPI dashboards • QA and compliance reviews"
  },
  {
    title: "Signal-Driven Growth",
    time: "Monthly",
    desc: "Once live, we refine what’s working and expand what’s resonating. Using real usage data and AI-driven insights, we iterate features, validate customer impact, and tune priorities to maintain momentum and market fit.",
    inc: "Feature optimization • Outcome tracking • Customer validation loops • Iteration reviews"
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

<section class="mt-14 md:mt-24">
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
						class="grid w-full cursor-pointer grid-cols-1 items-start gap-x-6 gap-y-6 rounded-xl px-6 py-16
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
								<span class="kicker text-amber-500">Includes:<br></span>
								{s.inc}
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
									<span>Request information</span>
								</a>
							</div>
						</div>
					</div>
				</li>
			{/each}
		</ul>
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
