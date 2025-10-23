<script>
	import Diagnostics from '$lib/components/Diagnostics.svelte';
	import Orbit from '$lib/components/Orbit.svelte';
	import ProductLifecycleForm from '$lib/components/ProductLifecycleForm.svelte';
	import ProductCurveSVG from '$lib/components/ProductCurveSVG.svelte';
	import LandingFooter from '$lib/components/LandingFooter.svelte';

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
<section class="relative isolate overflow-hidden">
<!-- BACKGROUND LAYER -->
<div class="absolute inset-0 min-h-90vh -z-10">


<!-- Scatter overlay (subtle) -->
<Orbit
class="absolute inset-0 h-full w-full opacity-90"
count={240}
jitterX={15}
jitterY={100}
inDuration={2200}
maxStagger={2200}
holdDuration={1200}
outDuration={1200}
loop={false}
once={true}
ariaLabel="Animated scatterplot illustrating product lifecycle curve"
/>



</div>


<!-- FOREGROUND CONTENT -->
<div class="relative container text-center px-6 py-24 lg:py-40">
<h1 class="h1">Disciplined innovation, without the theatre.</h1>
<p class="body">
We restore the rhythm between discovery and delivery for product teams in regulated markets.
</p>


<!-- CTA Row -->
<div class="mt-8 flex flex-wrap gap-3">
<a href="#quiz" class="primary-cta mx-auto">Analyze with AI</a>
</div>
</div>
</section>

<!-- Problem framing -->
<section class="mx-auto max-w-7xl my-56 md:my-80">
	<h2 class="h2 max-w-6xl mx-auto text-left px-4 text-center md:px-0 md:text-left">
		Every great product teams, needs two distinct engines running simultaneously: delivery and discovery. This fuels dual-engine provides the momentum that guides every strategic decision.
	</h2>
</section>

<!--Product Lifecycle Lead Gen--> 

<div>
	<ProductLifecycleForm />
</div>

<!--Overview + Logo Credentials -->
<section class="mx-auto max-w-7xl my-56 md:my-80">
	<h2 class="h2 max-w-6xl mx-auto text-left px-4 text-center md:px-0 md:text-left">
		Pitch Nine is an anti-theatre product agency with seasoned strategists and operators who can guide as well as execute.
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
   Every engagement begins with an <i>Opportunity Audit</i> that turns noise into signal and anecdotes into evidence.
</h2>
	<Diagnostics />
</section>



<!--CTA-->
<section class="mx-auto max-w-7xl my-56 md:my-80">
	<LandingFooter/>
</section>
