<script>
	import Footer from '$lib/components/Footer.svelte';
	import ProductPhaseHero from '$lib/components/ProductPhaseHero.svelte';
	import ServicesGrid from '$lib/components/ServicesGrid.svelte';
	import Diagnostics from '$lib/components/Diagnostics.svelte';
	import ProductLifecycleForm from '$lib/components/ProductLifecycleForm.svelte';
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


<!--Hero-->

<ProductPhaseHero />

<!--Product Lifecycle Lead Gen--> 

<div>
	<ProductLifecycleForm />
</div>

<!-- Opportunity Audit -->
<section class="mx-auto max-w-7xl my-56 md:my-80" id="diagnostic">
	<h2 class="h2 md:max-w-6xl w-full px-3">
   Every engagement begins with an <i>Opportunity Audit</i> that turns overloaded backlog into a disciplined plan leaders can trust and fund with confidence. 
</h2>
	<Diagnostics />
</section>


<!--CTA-->
<section class="mx-auto max-w-7xl my-56 md:my-80">
	<Form />
</section>

<Footer />
