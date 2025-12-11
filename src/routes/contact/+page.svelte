<script>
	import Nav from '$lib/components/Nav.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import HeroBg from '$lib/components/HeroBg.svelte';
	import Form from '$lib/components/Form.svelte';

	export const load = async () => {
		return {
			seo: {
				title: 'Contact',
				description: 'Product consultation starts with a free conversation.',
				image: 'https://pitchnine.com/images/social-share.jpg' // optional override
			}
		};
	};
</script>

<div class="relative">
	<HeroBg
		headline="Contact Pitch Nine"
		bodyText="Whether you're validating a new healthcare product, designing a clinical workflow, or accelerating development for an AI, AR/VR, or medical device solution, Pitch Nine can help."
		primaryCtaHref="#contact"
		primaryCtaLabel="Contact us"
	/>
	<div class="absolute inset-x-0 top-0 z-20">
		<Nav />
	</div>
</div>

<section
  id="contact"
  class="mx-auto max-w-7xl my-64 md:my-88 px-6 md:px-12 scroll-mt-40 md:scroll-mt-56"
>

	<Form />
</section>

<Footer />
