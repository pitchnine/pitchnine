<script>
	import Nav from '$lib/components/Nav.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import HeroBg from '$lib/components/HeroBg.svelte';
	import ServicesGrid from '$lib/components/ServicesGrid.svelte';
	import Diagnostics from '$lib/components/Diagnostics.svelte';
	import ProductLifecycleForm from '$lib/components/ProductLifecycleForm.svelte';
	import ProductCurveSVG from '$lib/components/ProductCurveSVG.svelte';
	import Form from '$lib/components/Form.svelte';

	export const load = async () => {
		return {
			seo: {
				title: 'Pitch Nine',
				description:
					'Turn product backlogs into roadmaps and deliver AI innovation with discipline in the toughest industries.',
				image: 'https://pitchnine.com/images/social-share.jpg'
			}
		};
	};
</script>

<!--Hero and Nav-->

<div class="relative">
	<HeroBg
		headline="Healthcare innovation, validation and workflow design."
		bodyText="Pitch Nine accelerates health innovation and development through early validation, design, and FDA-aware product workflows built for hospitals and regulated environments."
		primaryCtaHref="/contact"
		primaryCtaLabel="Schedule a conversation"
	/>
	<div class="absolute inset-x-0 top-0 z-20">
		<Nav />
	</div>
</div>

<!-- Overview + Logo Credentials -->
<section class="mx-auto max-w-7xl my-64 md:my-88 px-6 md:px-12">
	<h2 class="h2 px-4 text-center md:px-0 md:text-left">
		Pitch Nine is the alternative to trend-driven product consultancies, helping established product
		teams innovate with discipline in compliance-driven industries.
	</h2>

	<!-- Responsive, centered on mobile and left-aligned on desktop -->
	<ul
		aria-label="Client logos"
		class="mt-14 grid grid-cols-2 items-center justify-items-center gap-x-8 gap-y-10 px-4
           sm:grid-cols-3 md:mt-24 md:grid-cols-4 md:justify-items-start md:px-0 lg:grid-cols-5 xl:grid-cols-6"
	>
		<li>
			<img
				src="/images/logo-origent.png"
				alt="Origent"
				class="h-12 object-contain opacity-70 grayscale transition hover:opacity-100 hover:grayscale-0 sm:h-14 md:h-16"
			/>
		</li>

		<li>
			<img
				src="/images/logo-aetna.png"
				alt="Aetna"
				class="h-12 object-contain opacity-70 grayscale transition hover:opacity-100 hover:grayscale-0 sm:h-14 md:h-16"
			/>
		</li>

		<li>
			<img
				src="/images/logo-aws.png"
				alt="Amazon Web Services"
				class="h-12 object-contain opacity-70 grayscale transition hover:opacity-100 hover:grayscale-0 sm:h-14 md:h-16"
			/>
		</li>

		<li>
			<img
				src="/images/logo-who.png"
				alt="World Health Organization"
				class="h-12 object-contain opacity-70 grayscale transition hover:opacity-100 hover:grayscale-0 sm:h-14 md:h-16"
			/>
		</li>

		<li>
			<img
				src="/images/logo-techstars.png"
				alt="Techstars"
				class="h-12 object-contain opacity-70 grayscale transition hover:opacity-100 hover:grayscale-0 sm:h-14 md:h-16"
			/>
		</li>

		<li>
			<img
				src="/images/logo-cleveland.png"
				alt="Cleveland Clinic"
				class="h-12 object-contain opacity-70 grayscale transition hover:opacity-100 hover:grayscale-0 sm:h-14 md:h-16"
			/>
		</li>

		<li>
			<img
				src="/images/logo-cgi.png"
				alt="CGI"
				class="h-12 object-contain opacity-70 grayscale transition hover:opacity-100 hover:grayscale-0 sm:h-14 md:h-16"
			/>
		</li>

		<li>
			<img
				src="/images/logo-parsyl.png"
				alt="Parsyl"
				class="h-12 object-contain opacity-70 grayscale transition hover:opacity-100 hover:grayscale-0 sm:h-14 md:h-16"
			/>
		</li>

		<li>
			<img
				src="/images/logo-bluesight.png"
				alt="Bluesight"
				class="h-12 object-contain opacity-70 grayscale transition hover:opacity-100 hover:grayscale-0 sm:h-14 md:h-16"
			/>
		</li>

		<li>
			<img
				src="/images/logo-nih.png"
				alt="NIH"
				class="h-12 object-contain opacity-70 grayscale transition hover:opacity-100 hover:grayscale-0 sm:h-14 md:h-16"
			/>
		</li>
	</ul>
</section>

<!-- Opportunity Audit -->
<section class="mx-auto max-w-7xl my-64 md:my-88 px-6 md:px-12">
	<h2 class="h2 w-full px-3 md:max-w-6xl">
		Every engagement begins with an <i>Opportunity Audit</i> that turns overloaded backlog into a disciplined
		plan leaders can trust and fund with confidence.
	</h2>
	<Diagnostics />
</section>

<!--Product Lifecycle Lead Gen-->

<div class="md:my-88 mx-auto my-64 max-w-7xl px-9 md:px-12">
	<ProductLifecycleForm />
</div>

<!-- Services and approach/process -->
<section class="mx-auto max-w-7xl my-64 md:my-88 px-6 md:px-12" id="services">
	<h2 class="h2 mb-6 text-center">
		We leverage what you have to uncover openings, prove opportunity, and execute with precision.
	</h2>
	<ServicesGrid />
</section>

<!-- 
Case studies or proof in the work
<section class="relative h-screen">
	<h2 class="inter mb-24 header-text">
		Seasoned strategists, at your disposal.
	</h2>
	<p>Origent: assisted a pivot in a risky space</p>
	<p>NIH: awarded SBIR grant for patient outcomes</p>
	<p>Aetna: Unified design during a $69B merger.</p>
	<p>WHO: united standards of vaccine delivery across continents.</p>
</section> 
-->

<!--About us -->
<section class="mx-auto flex flex-col items-center justify-centermax-w-7xl my-64 md:my-88 px-6 md:px-12">
	<h2 class="h2 mb-8 text-center">Veteran judgement.</h2>
	<p class="body mb-9 max-w-4xl text-center">
		We built products inside hospitals, insurers, and global supply chains and have shipped
		award-winning products under HIPAA, SOC 1, and ISO 27001. We plug into your team, turn backlog
		into AI-enabled delivery, and produce outcomes that withstand audits, customers, and the board.
	</p>

	<div class="flex justify-center">
		<a href="/about" data-cta="primary" class="primary-cta"> Read about us </a>
	</div>
</section>

<!--CTA-->
<section class="mx-auto max-w-7xl my-64 md:my-88 px-6 md:px-12">
	<Form />
</section>

<Footer />
