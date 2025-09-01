<script>
	import Nav from '$lib/components/Nav.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import Coder from '$lib/components/Coder.svelte';
	import ServicesGrid from '$lib/components/ServicesGrid.svelte';
	import Diagnostics from '$lib/components/Diagnostics.svelte';
	import Form from '$lib/components/Form.svelte';
</script>

<Nav />

<!--1. Hero-->

<Coder />

<!--2. ICP Statement + Logo Cred -->
<section class="mx-auto max-w-7xl my-56 md:my-80">
	<h2 class="h2 max-w-5xl mx-auto text-center px-3">
		Pitch Nine advances critical product initiatives with precision, compliance and control.
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

<!--3. Process -->
<section class="mx-auto max-w-7xl my-56 md:my-80" id="diagnostic">
	<h2 class="h2 md:max-w-6xl w-full px-3">
   The <i>Executive Review</i> transforms ambiguity into a leadership-aligned backlog, with execution tied to results that matter.
</h2>
	<Diagnostics />
</section>

<!-- 4. Services list -->
<section class="mx-auto max-w-7xl my-56 md:my-80" id="services">
	<h2 class="h2 mb-6 text-center">The path to progress.</h2>
	<ServicesGrid />
</section>

<!--5. 
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

<!--5. Differentiator linking to about -->
<section class="mx-auto max-w-7xl my-56 md:my-80 flex justify-center items-center flex-col">
	<h2 class="h2 text-center mb-8">Sharpened judgement.</h2>
	<p class="body text-center max-w-4xl mb-12">
		Formed by veteran product leaders, Pitch Nine operates as an alternative to the trend-driven design studio. The approach is grounded in decades of experience across regulated and risk-sensitive industries, where accountability, compliance, and durable value outweigh experiments and delay.
	</p>

	<div class="flex justify-center">
		<a href="/contact?service=Executive%20Diagnostic" data-cta="primary" class="primary-cta">
			Read about us
		</a>
	</div>
</section>

<!--6. CTA-->
<section class="mx-auto max-w-7xl my-56 md:my-80">
	<Form />
</section>

<Footer />
