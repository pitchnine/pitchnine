<script>
	import Nav from '$lib/components/Nav.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import Coder from '$lib/components/Coder.svelte';
  import ServicesGrid from '$lib/components/ServicesGrid.svelte';
</script>

<Nav />

<!--1. Hero-->

<Coder />

<!--2. ICP Statement + Logo Cred -->
<section class="relative mb-32 py-16">
	<h2 class="inter mb-24 px-3 text-center text-3xl font-bold tracking-tight md:px-10 md:text-5xl">
		Pitch Nine brings disciplined momentum to complex products in high-stakes industries, where precision and compliance is everything.
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

<!--3. What we actually do-->
<section class="relative py-64">
	<h2 class="inter mb-24 px-3 text-center text-3xl font-bold tracking-tight md:px-10 md:text-5xl">Every engagement begins with a diagnostic and opportunity assessment, delivered in 9 slides.</h2>
	<p>Every engagement begins with an executive review and consultation to determine best overall approach for our collaboration. This includes a 2 week, evidence-first assessment across product experience, backlog, industry signals, delivery process, and governance. We identify opportunity themes, constraints, and risk posture; recommend modules tailored to your circumstances; and return a board-ready plan to move forward with.</p>
	<!-- Primary CTA -->
    <div class="mt-10">
      <a
        href="/contact"
        data-cta="primary"
        class="nav-link-active"
      >
        Assemble my engagement
      </a>
    </div>
	<ServicesGrid />
</section>

<!--4. Case studies-->
<section class="relative h-screen">
	<h2 class="text-3xl">Proof in case studies</h2>
	<p>Aetna: unified design during a $69B merger.</p>
	<p>Origent: productized award-winning algorithms for ALS research.</p>
	<p>Hoth? Viasana?</p>
</section>

<!--5. Differentiator-->
<section class="relative h-screen">
	<h2 class="text-3xl">How we're different than competition</h2>
	<p>
		“We thrive where the stakes are highest: regulated, risk-sensitive industries where delay or
		failure isn’t an option.
	</p>
</section>

<!--5. Testimonials-->
<section class="relative h-screen">
	<h2 class="text-3xl">Quotes from people</h2>
	<p>Something something</p>
</section>

<!--6. CTA-->
<section class="relative h-screen">
	<h2 class="text-3xl">Stagnation is worse than wrong steps.</h2>
	<p>Start the conversation</p>
	<form>
		<div class="bg-teal-100">Name</div>
		<div class="bg-teal-100">Email</div>
	</form>
</section>

<Footer />
