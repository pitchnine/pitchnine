<script>
	import Nav from '$lib/components/Nav.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import Coder from '$lib/components/Coder.svelte';
	import ServicesGrid from '$lib/components/ServicesGrid.svelte';
	import Diagnostics from '$lib/components/Diagnostics.svelte';
	import ProductLifecycleForm from '$lib/components/ProductLifecycleForm.svelte';
	import ProductCurveSVG from '$lib/components/ProductCurveSVG.svelte';
	import Form from '$lib/components/Form.svelte';

	export const load = async () => {
  return {
    seo: {
      title: 'Pitch Nine',
      description: 'Turn product backlogs into roadmaps and deliver AI innovation with discipline in the toughest industries.',
      image: 'https://pitchnine.com/images/social-share.jpg'
    }
  };
};
</script>


<Nav />

<!--Hero-->

<Coder />

<!--Overview + Logo Credentials -->
<section class="mx-auto max-w-7xl my-56 md:my-80">
	<h2 class="h2 max-w-6xl mx-auto text-left px-4 text-center md:px-0 md:text-left">
		Pitch Nine is the alternative to trend-driven product consultancies, helping established products innovate with discipline in compliance-driven industries.
	</h2>
	<div class="mt-24 grid grid-cols-2 gap-8 md:grid-cols-4 lg:grid-cols-5">
		<!-- Logos - Row 1 -->

		<!-- Origent -->
		<div class="flex h-20 items-center justify-center">
			<img
				src="/images/logo-origent.png"
				alt="Logo 1"
				class="max-h-full max-w-full object-contain opacity-70 grayscale transition hover:opacity-100 hover:grayscale-0"
			/>
		</div>
		<!-- Aetna -->
		<div class="flex h-20 items-center justify-center">
			<img
				src="/images/logo-aetna.png"
				alt="Logo 2"
				class="max-h-full max-w-full object-contain opacity-70 grayscale transition hover:opacity-100 hover:grayscale-0"
			/>
		</div>
		<!-- AWS -->
		<div class="flex h-20 items-center justify-center">
			<img
				src="/images/logo-aws.png"
				alt="Logo 3"
				class="max-h-full max-w-full object-contain opacity-70 grayscale transition hover:opacity-100 hover:grayscale-0"
			/>
		</div>
		<!-- WHO -->
		<div class="flex h-20 items-center justify-center">
			<img
				src="/images/logo-who.png"
				alt="Logo 4"
				class="max-h-full max-w-full object-contain opacity-70 grayscale transition hover:opacity-100 hover:grayscale-0"
			/>
		</div>
		<!-- Techstars -->
		<div class="flex h-20 items-center justify-center">
			<img
				src="/images/logo-techstars.png"
				alt="Logo 5"
				class="max-h-full max-w-full object-contain opacity-70 grayscale transition hover:opacity-100 hover:grayscale-0"
			/>
		</div>

		<!-- Logos - Row 2 -->

		<!-- Cleveland -->
		<div class="flex h-20 items-center justify-center">
			<img
				src="/images/logo-cleveland.png"
				alt="Logo 1"
				class="max-h-full max-w-full object-contain opacity-70 grayscale transition hover:opacity-100 hover:grayscale-0"
			/>
		</div>
		<!-- CGI -->
		<div class="flex h-20 items-center justify-center">
			<img
				src="/images/logo-cgi.png"
				alt="Logo 2"
				class="max-h-full max-w-full object-contain opacity-70 grayscale transition hover:opacity-100 hover:grayscale-0"
			/>
		</div>
		<!-- Parsyl -->
		<div class="flex h-20 items-center justify-center">
			<img
				src="/images/logo-parsyl.png"
				alt="Logo 3"
				class="max-h-full max-w-full object-contain opacity-70 grayscale transition hover:opacity-100 hover:grayscale-0"
			/>
		</div>
		<!-- Bluesight -->
		<div class="flex h-20 items-center justify-center">
			<img
				src="/images/logo-bluesight.png"
				alt="Logo 4"
				class="max-h-full max-w-full object-contain opacity-70 grayscale transition hover:opacity-100 hover:grayscale-0"
			/>
		</div>
		<!-- NIH -->
		<div class="flex h-20 items-center justify-center">
			<img
				src="/images/logo-nih.png"
				alt="Logo 5"
				class="max-h-full max-w-full object-contain opacity-70 grayscale transition hover:opacity-100 hover:grayscale-0"
			/>
		</div>
	</div>
</section>

<!-- Opportunity Audit -->
<section class="mx-auto max-w-7xl my-56 md:my-80" id="diagnostic">
	<h2 class="h2 md:max-w-6xl w-full px-3">
   The <i>Opportunity Audit</i> turns an overloaded backlog into a disciplined plan leaders can trust and fund with confidence. 
</h2>
	<Diagnostics />
</section>

<!-- Phases -->
<section class="mx-auto max-w-7xl my-56 md:my-80" id="services">
	<h2 class="h2 mb-6 text-center">De-risk your next chapter.</h2>
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

<!--Product Lifecycle Lead Gen--> 

<div>
	<ProductLifecycleForm />
</div>

<!--About us -->
<section class="mx-auto max-w-7xl my-56 md:my-80 flex justify-center items-center flex-col">
	<h2 class="h2 text-center mb-8">Veteran judgement.</h2>
	<p class="body text-center max-w-4xl mb-12">
		At Pitch Nine, our cofounders spent their careers inside critical organizations, not on the sidelines. We’ve built and piloted innovation, proven them in the field, and integrated the winners into mainline products — all within HIPAA-regulated, SOC 1, and ISO 27001 environments. We know how to advance what matters without the theater of experimentation.
	</p>

	<div class="flex justify-center">
		<a href="/about" data-cta="primary" class="primary-cta">
			Read about us
		</a>
	</div>
</section>


<!--CTA-->
<section class="mx-auto max-w-7xl my-56 md:my-80">
	<Form />
</section>

<Footer />
