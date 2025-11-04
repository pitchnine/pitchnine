<script>
	import Diagnostics from '$lib/components/Diagnostics.svelte';
	import ProductLifecycleForm from '$lib/components/ProductLifecycleForm.svelte';
	import ProductCurveSVG from '$lib/components/ProductCurveSVG.svelte';
	import LandingFooter from '$lib/components/LandingFooter.svelte';
	import Motifs from '$lib/components/Motifs.svelte';

	const surveyArtifacts = [
 
  { 
    title: "Overview", 
    meta: "A concise synthesis for executives. Investor-ready analysis that can be copied and forwarded." 
  },
  { 
    title: "Risks", 
    meta: "Risk callouts and common symptoms felt and experienced on product teams at similar stages." 
  },
  { 
    title: "Alignment", 
    meta: "A first-look into how Pitch Nine would align with your current standing and the impact our team could make on your ability to scale." 
  }
];


  const Check = `
    <svg viewBox="0 0 24 24" class="w-6 h-6 mt-[2px]" fill="none" stroke="currentColor" stroke-width="1.8">
      <path d="M20 6L9 17l-5-5" stroke-linecap="round" stroke-linejoin="round" />
    </svg>`;
</script>

<section class="hero full-bleed full-bleed-top flex flex-col min-h-dvh align-center text-center justify-center">
  <div class="hero__halo" aria-hidden="true">
    <div class="noise"></div>
  </div>
 <Motifs maxVisible={2} cycleMs={1000} spawnMs={1000} />
  <div class="hero__content px-6 max-w-7xl mx-auto">
    <h1 class="h1 mb-9 max-w-7xl px-12 md:px-4">Move faster, smarter.</h1>
    <p class="body mb-8 max-w-5xl px-12 md:px-4">Uncover blind spots in your product plan and accelerate your next move with Pitch Nine’s custom analysis.</p>
	<div class="flex flex-col md:flex-row items-center justify-center gap-5 md:gap-8">
    <a class="primary-cta" href="#diagnostic">Start free diagnostic</a>
	<a class="secondary-cta" data-cal-link="joellstocchero/30min" data-cal-namespace="30min">
    Talk to a Partner
	</a>
	</div>
	</div>
  
</section>


<!-- what you'll get -->
<section class="mx-auto max-w-7xl my-64 md:my-88 px-9 md:px-12">
  <h2 class="h2 text-center md:text-left">The Pitch Nine diagnostic is free and takes less than 2 minutes to complete. At the end we provide:</h2>
  <div class="mt-16 md:mt-32 mb-16 md:mb-32 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 md:gap-20">
    {#each surveyArtifacts as a}
      <div class="text-left">
        <div class="flex items-start gap-3">
          <span class="text-emerald-300" aria-hidden="true">{@html Check}</span>
          <div>
            <p class="h3">{a.title}</p>
            {#if a.meta}
              <p class="mt-2 meta">{a.meta}</p>
            {/if}
          </div>
        </div>
      </div>
    {/each}
  </div>
</section>

<!--Product Lifecycle Lead Gen--> 

<section id="diagnostic" class="mx-auto max-w-7xl my-64 md:my-88 px-9 md:px-12">
	<ProductLifecycleForm />
	<p class="fine text-center mt-3 text-gray-50/60">Privacy is our default. We don’t share your responses.</p>
</section>

<!--Overview + Logo Credentials -->
<section class="mx-auto max-w-7xl my-64 md:my-88 px-9 md:px-12">
	<h2 class="h2 max-w-7xl text-left md:text-left">
From Fortune 100s to NIH and Techstars, our products have scaled, been funded, and earned their place on the global stage.
	</h2>
	<div class="mt-16 md:mt-24 flex px-1 md:px-4 gap-8 md:gap-16 flex-wrap flex-row max-w-7xl">
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
<section class="mx-auto max-w-7xl my-64 md:my-88 px-9 md:px-12">
	<h2 class="h2 w-full">
   Every engagement begins with an <i>Opportunity Audit</i> that turns noise into signal and anecdotes into evidence.
</h2>
	<Diagnostics />
	<div>
		<!-- CAL embed button and experience-->
<div>
<script type="text/javascript">
  (function (C, A, L) { let p = function (a, ar) { a.q.push(ar); }; let d = C.document; C.Cal = C.Cal || function () { let cal = C.Cal; let ar = arguments; if (!cal.loaded) { cal.ns = {}; cal.q = cal.q || []; d.head.appendChild(d.createElement("script")).src = A; cal.loaded = true; } if (ar[0] === L) { const api = function () { p(api, arguments); }; const namespace = ar[1]; api.q = api.q || []; if(typeof namespace === "string"){cal.ns[namespace] = cal.ns[namespace] || api;p(cal.ns[namespace], ar);p(cal, ["initNamespace", namespace]);} else p(cal, ar); return;} p(cal, ar); }; })(window, "https://app.cal.com/embed/embed.js", "init");
Cal("init", "30min", {origin:"https://app.cal.com"});

  Cal.ns["30min"]("ui", {"hideEventTypeDetails":false,"layout":"month_view"});
  </script>
  <div class="flex flex-col md:flex-row gap-6 items-center">
  <button class="primary-cta md:w-auto w-full" data-cal-link="joellstocchero/30min" data-cal-namespace="30min">Schedule introductions</button>
  <p class="eyebrow italic text-center md:text-left">Introductory calls are brief and always free.</p>
  </div>
</div>
	</div>
</section>


<!--CTA-->
<section class="mx-auto max-w-7xl my-64 md:my-88 px-9 md:px-12">
	<LandingFooter/>
</section>