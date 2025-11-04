<script>
	import Diagnostics from '$lib/components/Diagnostics.svelte';
	import ProductLifecycleForm from '$lib/components/ProductLifecycleForm.svelte';
	import ProductCurveSVG from '$lib/components/ProductCurveSVG.svelte';
	import LandingFooter from '$lib/components/LandingFooter.svelte';
	import Motifs from '$lib/components/Motifs.svelte';
</script>

<section class="hero full-bleed full-bleed-top flex flex-col min-h-dvh align-center text-center justify-center">
  <div class="hero__halo" aria-hidden="true">
    <div class="noise"></div>
  </div>
 <Motifs maxVisible={2} cycleMs={1000} spawnMs={1000} />
  <div class="hero__content px-6 max-w-7xl mx-auto">
    <h1 class="h1 mb-9 max-w-6xl">Plan what's next.</h1>
    <p class="body mb-8 max-w-4xl">Get clarity on your blind spots and strategically plan your next move with our custom analysis and short diagnostic.</p>
    <a class="primary-cta" href="/contact">Start free diagnostic</a>
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

<!-- Opportunity Audit -->
<section class="mx-auto max-w-7xl my-56 md:my-80" id="diagnostic">
	<h2 class="h2 md:max-w-6xl w-full px-3">
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
  <p class="eyebrow italic">Introductory calls are always brief and always free.</p>
  </div>
</div>
	</div>
</section>

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

<!--CTA-->
<section class="mx-auto max-w-7xl my-56 md:my-80">
	<LandingFooter/>
</section>