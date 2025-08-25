<script>
	const services = [
   {
    title: "AI Readiness",
    meta: "6–10 weeks • Pilots • Data/guardrails/metrics",
    desc: "Run governed pilots off-mainline; graduate only what clears risk and proves ROI. Includes executive-grade prototypes to validate interaction, content, and accuracy with human review.",
  }, 
  {
    title: "Innovation Audit",
    meta: "4–8 weeks • Executive themes & direction",
    desc: "From ambiguity to 3–5 executive themes and a sequenced plan you can fund. Includes experience architecture and evidence-backed concepts for decision-making.",
  },
  {
    title: "Backlog Remediation",
    meta: "8–12 weeks • Process audit & thematic portfolio",
    desc: "Convert ticket sprawl into an investment-grade roadmap with owners, dates, and controls. Includes: theme rationalization • decision rules & SLAs • cadence reset • 90-day plan",
  },
  {
    title: "Governance Blueprint",
    meta: "2–4 weeks • Policies • Decision rules • Traceability",
    desc: "Install the control framework to ship faster without exposure (not a certification). Includes: approval workflow • model/use-case guardrails • change control • evidence templates",
  },
  {
    title: "Data & Integration Readiness",
    meta: "3–6 weeks • Data handling • Integration patterns",
    desc: "Inventory data, define PII/PHI handling, and map a governed path into live systems. Includes: data catalog & quality • red/amber/green matrix • integration patterns • risk flags",
  },
  {
  title: "Experience Architecture & Validation",
  meta: "3–6 weeks • Prototypes • Standards • Accessibility",
  desc: "Define the target experience, validate it with evidence, and codify standards so delivery stays consistent and compliant. Includes: executive-grade prototypes • interaction & content patterns • accessibility conformance • measurement plan"
},
  {
    title: "Pilot-to-Production Enablement",
    meta: "4–8 weeks • Hardening • Monitoring • Rollback",
    desc: "Turn winners into hardened features with SLOs, telemetry, and change control. Includes design QA, accessibility conformance, and content standards in code",
  },
   {
    title: "Vendor Diligence",
    meta: "2–3 weeks • LLM/tools scoring & TCO",
    desc: "Score platforms against security, compliance, cost, and fit; select a defendable stack. Includes: scoring rubric • side-by-side • TCO • preferred stack recommendation",
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
