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
<section class="relative mb-32 py-16">
	<h2 class="inter header-text mb-24">
		Pitch Nine brings disciplined momentum to complex products in high-stakes industries, where
		precision and compliance is everything.
	</h2>
	<div class="grid grid-cols-2 gap-8 md:grid-cols-4 lg:grid-cols-5">
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
<section class="relative py-24 sm:py-32" id="diagnostic">
	<Diagnostics />
</section>

<!-- 4. Services list -->
<section class="relative py-24 sm:py-32" id="services">
	<h2 class="inter header-text mb-24">Services</h2>
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
<section class="relative h-screen">
	<h2 class="inter header-text mb-24">Other agencies chase trends, we deliver judgement.</h2>
	<p>
		Pitch Nine was built by two seasoned product leaders to be the alternative to typical design
		agencies. We bring disciplined product judgment from decades in regulated, risk-sensitive
		industries—where delays, compliance failures, or half-baked experiments aren’t an option.
	</p>

	<div class="flex justify-center">
		<a href="/contact?service=Executive%20Diagnostic" data-cta="primary" class="nav-link-active">
			Read about us
		</a>
	</div>
</section>

<!--6. CTA-->
<section class="relative flex h-screen justify-between">
	<div>
		<h2 class="inter header-text mb-12">Start the conversation.</h2>
		<p class="inter font-medium underline underline-offset-4 mb-3">hello@pitchnine.com</p>
		<p class="inter font-medium mb-3">Follow us on Linkedin</p>
		<p class="inter font-medium">PO BOX 123 DE?</p>
	</div>
	<div>
		<form>
			<Form />
		</form>
	</div>
</section>

<Footer />
