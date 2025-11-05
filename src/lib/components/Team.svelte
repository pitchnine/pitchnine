<script>
	// Your data as given
	const services = [
		{
			title: 'Andrew Conklin',
			role: 'Full-Stack Development & Data Architecture',
			headshot: '/images/andrew9.png',
			email: 'andrew@pitchnine.com',
			cal: 'https://cal.com/adconk/pitchnine-intros',
			linkedin: 'https://www.linkedin.com/in/adconk/',
			stats: [
				'20+ years bridging engineering and business in regulated markets.',
				'Former CTO for health-tech startups and NIH-funded innovation teams.',
				'Exceptional at turning ideas into full-stack proofs that withstand real-world scrutiny.',
				'CISSP-certified engineer who accelerates delivery without compromising trust.'
			],
			profile:
				'Andrew bridges the gap between innovation and execution. An architecture-minded engineer focused on building speed into safety, he’s led compliant, high-scale platforms across healthcare, insurance, and life sciences. A CISSP-certified technologist and former startup CTO, he excels at turning ideas into full-stack proofs that withstand real-world scrutiny.'
		},
		{
			title: 'Joell Stocchero',
			role: 'Product Management & Front End Development',
			headshot: '/images/joell9.png',
			email: 'joell@pitchnine.com',
			cal: 'https://www.cal.com/joellstocchero/30min',
			linkedin: 'https://www.linkedin.com/in/joellstocchero/',
			stats: [
				'15+ years driving product outcomes in regulated markets.',
				'Techstars and AWS accelerator alum recognized for startup acceleration.',
				'Led NIH-funded SBIR initiatives and enterprise innovation programs for Fortune 100s.',
				'Best in KLAS award-winning designer and zero-to-one specialist with over 10+ years in AI/ML based product experiences.'
			],
			profile:
				'Joell turns uncertainty into clarity. A product leader and designer with a bias for evidence over opinions, she blends research, market insight, and rapid front-end validation to help teams prove what matters early. A Best in KLAS award-winner and Techstars alum, she’s raised capital, led NIH-funded pilots, and guided enterprise teams from discovery to durable delivery.'
		}
	];

	function go(name) {
		window.location.href = `/contact?service=${encodeURIComponent(name)}`;
	}

	function onRowKey(e, name) {
		if (e.key === 'Enter' || e.key === ' ') {
			e.preventDefault();
			go(name);
		}
	}
</script>

<div class="flex flex-col gap-32 md:flex-row md:justify-between p-3 md:p-0 mt-14 md:mt-24">
	{#each services as s}
		<div class="md:max-w-xl">
			<!-- Each person block -->

			<div class="flex items-center gap-4">
				<img
					src={s.headshot}
					alt={`${s.title} headshot`}
					width="300"
					height="300"
					class="rounded-full mx-auto"
					loading="lazy"
				/>
			</div>
			<h4 class="h3 mt-12 text-center">
				{s.title}
			</h4>
			<p class="body mt-4 text-center">
				{s.role}
			</p>
			<!-- CTAs -->
			<div class="mt-4 flex flex-wrap gap-6 mx-auto justify-center">
				<a href={`mailto:${s.email}`} data-cta="module" class="secondary-cta">
					<span>Email</span>
				</a>

				<a href={s.cal} data-cta="module" class="secondary-cta">
					<span>Calendar</span>
				</a>

				<a
					href={s.linkedin}
					target="_blank"
					rel="noopener noreferrer"
					data-cta="module"
					class="secondary-cta"
				>
					<span>Linkedin</span>
				</a>
			</div>

			<!-- Bio-->

			 <div class="h-1 w-12 mx-auto bg-amber-600/70 rounded-full mb-3 mt-9"></div>
			<div class="mt-9 text-center mx-auto">
        <p class="body text-balance">
    {s.profile}
  </p>
</div>

      </div>

	{/each}
</div>

<style>
	@media (prefers-reduced-motion: reduce) {
		.transition,
		.duration-300,
		.ease-out {
			transition: none !important;
		}
	}
</style>
