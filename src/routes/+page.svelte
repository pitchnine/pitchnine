<script>
  import Nav from '$lib/components/Nav.svelte';
  import Footer from '$lib/components/Footer.svelte';
  import Mountain from '$lib/components/Mountain.svelte';

</script>

<Nav />

<!--1. Hero-->
<Mountain />

<!--2. ICP and Credability-->
<section class="relative h-screen">
  <h2 class="text-3xl">Credability statement</h2>
  <p>We partner with industry leaders who can’t afford product failure.</p>
  <p>Logo</p>
  <p>Logo</p>
  <p>Logo</p>
  <p>Logo</p>
</section>

<!--3. What we actually do-->
<section class="relative h-screen">
  <h2 class="text-3xl">Menu of services</h2>
  <p>Backlog rescue</p>
  <p>Risk navigation</p>
  <p>Innovation delivery</p>
  <p>AI implementations</p>
</section>

<!--4. Case studies-->
<section class="relative h-screen">
  <h2 class="text-3xl">Proof in case studies</h2>
  <p>Aetna: unified design during a $69B merger.</p>
  <p>Origent: productized award-winning algorithms for ALS research.</p>
  <p>Hoth? Viasana?</p>
</section>

<!--5. Differnetiator-->
<section class="relative h-screen">
  <h2 class="text-3xl">How we're different than competition</h2>
  <p>“We thrive where the stakes are highest: regulated, risk-sensitive industries where delay or failure isn’t an option.</p>
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