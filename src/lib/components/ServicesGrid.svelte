<script>
	const services = [
  {
    title: "Opportunity Audit",
    time: "3–4 weeks",
    desc: "A rapid evaluation of your product lines, backlog, and goals to expose risks, align leadership, and surface AI-ready opportunities. The result is a clear, investable plan tied to measurable outcomes.",
    inc: "Backlog rescue • Design artifacts • Executive roadmap with success metrics"
  },
  {
    title: "Innovation Pilot(s)",
    time: "12–16 weeks",
    desc: "The most promising opportunities are advanced into production-ready pilots, run safely outside the mainline so core team delivery is never slowed. Each pilot is created in tight collaboration with existing processess, governed, validated with customers, and built to prove value or risk before major investment.",
    inc: "KPI tracking • Design and UI components • Requirements documentation • QA and compliance reviews"
  },
  {
    title: "Signal-Driven Iteration",
    time: "Monthly",
    desc: "Winning pilots are folded back into the product with collaborative iteration, and priorities are recalibrated to keep execution aligned with strategy and market signals.",
    inc: "Feature validation • Experience refinements • Outcome tracking • Iteration reviews"
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
