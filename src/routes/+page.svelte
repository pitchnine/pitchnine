<script>
  import Nav from '$lib/components/Nav.svelte';
  import Footer from '$lib/components/Footer.svelte';
  import Coder from '$lib/components/Coder.svelte';
</script>

<Nav />

<!--1. Hero-->

<Coder />

<!--2. ICP and Credability-->
<section class="relative py-16">
  <h2 class="text-3xl md:text-5xl font-bold tracking-tight inter">
    Bringing measured momentum and AI innovation to the world’s toughest, most secure sectors.
  </h2>
  <p class="text-lg md:text-xl tracking-tight inter mt-4">
    Pitch Nine balances innovation with compliance to deliver outcomes in high‑risk, mission‑critical industries.
  </p>
  <section class="py-12 border-t border-gray-800">
  <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 items-center">
  
    <!-- Logos - Row 1 -->

      <!-- Origent -->
    <div class="flex items-center justify-center h-20">
      <img src="/images/logo-origent.png" alt="Logo 1"
           class="max-h-full max-w-full object-contain opacity-70 hover:opacity-100 transition grayscale hover:grayscale-0" />
    </div>
    <!-- Aetna -->
    <div class="flex items-center justify-center h-20">
      <img src="/images/logo-aetna.png" alt="Logo 2" class="max-h-full max-w-full object-contain opacity-70 hover:opacity-100 transition grayscale hover:grayscale-0" />
    </div>
    <!-- AWS -->
    <div class="flex items-center justify-center h-20">
      <img src="/images/logo-aws.png" alt="Logo 3" class="max-h-full max-w-full object-contain opacity-70 hover:opacity-100 transition grayscale hover:grayscale-0" />
    </div>
    <!-- WHO -->
    <div class="flex items-center justify-center h-20">
      <img src="/images/logo-who.png" alt="Logo 4" class="max-h-full max-w-full object-contain opacity-70 hover:opacity-100 transition grayscale hover:grayscale-0" />
    </div>
    <!-- Techstars -->
    <div class="flex items-center justify-center h-20">
      <img src="/images/logo-techstars.png" alt="Logo 5" class="max-h-full max-w-full object-contain opacity-70 hover:opacity-100 transition grayscale hover:grayscale-0" />
    </div>
     
  <!-- Logos - Row 2 -->

      <!-- Cleveland -->
    <div class="flex items-center justify-center h-20">
      <img src="/images/logo-cleveland.png" alt="Logo 1"
           class="max-h-full max-w-full object-contain opacity-70 hover:opacity-100 transition grayscale hover:grayscale-0" />
    </div>
    <!-- Origent -->
    <div class="flex items-center justify-center h-20">
      <img src="/images/logo-origent.png" alt="Logo 2" class="max-h-full max-w-full object-contain opacity-70 hover:opacity-100 transition grayscale hover:grayscale-0" />
    </div>
    <!-- Origent -->
    <div class="flex items-center justify-center h-20">
      <img src="/images/logo-origent.png" alt="Logo 3" class="max-h-full max-w-full object-contain opacity-70 hover:opacity-100 transition grayscale hover:grayscale-0" />
    </div>
    <!-- Origent -->
    <div class="flex items-center justify-center h-20">
      <img src="/images/logo-origent.png" alt="Logo 4" class="max-h-full max-w-full object-contain opacity-70 hover:opacity-100 transition grayscale hover:grayscale-0" />
    </div>
    <!-- Origent -->
    <div class="flex items-center justify-center h-20">
      <img src="/images/logo-origent.png" alt="Logo 5" class="max-h-full max-w-full object-contain opacity-70 hover:opacity-100 transition grayscale hover:grayscale-0" />
    </div>
  </div>
</section>




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

<!--5. Differentiator-->
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