<script>
  import Nav from '$lib/components/Nav.svelte';
  import Footer from '$lib/components/Footer.svelte';
  import AboutHero from '$lib/components/AboutHero.svelte';
  import Principles from '$lib/components/Principles.svelte';
  import Team from '$lib/components/Team.svelte';
  import Form from '$lib/components/Form.svelte';

  const Check = `
    <svg viewBox="0 0 24 24" class="w-4 h-4 mt-[2px]" fill="none" stroke="currentColor" stroke-width="1.8">
      <path d="M20 6L9 17l-5-5" stroke-linecap="round" stroke-linejoin="round" />
    </svg>`;

  // ---- keep ALL JS inside this single <script> ----
  const stats = [
    { label: 'Years in product', value: '40+ collective' },
    { label: 'Regulated domains', value: 'Healthcare • Insurance • Pharma • Public' },
    { label: 'NIH-funded work', value: 'Principal contributors' },
    { label: 'Delivery model', value: 'Senior-only, hands-on' }
  ];

 const principles = [
  { 
    title: 'Discipline', 
    desc: 'Attention remains fixed on what is material. Risk is framed in context, priorities are defined with precision, and only the moves that truly matter are advanced.' 
  },
  { 
    title: 'Governance', 
    desc: 'Innovation advances only under control. Pilots and experiments run off the main line, bounded by explicit guardrails, documented audit trails, and unambiguous criteria for graduation and success.' 
  },
  { 
    title: 'Clarity', 
    desc: 'Noise is stripped from decision-making to reveal signal. Disparate requests are resolved into a sequenced blueprint that surfaces dependencies, constraints, and expected return, grounded in research and customer value.' 
  },
  { 
    title: 'Evidence', 
    desc: 'Demonstrations may entertain, but decisions require proof. Flash is avoided; evaluation harnesses and measurable outcomes determine what advances.' 
  },
  { 
    title: 'Integrity', 
    desc: 'Compliance and user experience are treated as inseparable imperatives. Solutions are constructed to uphold both without compromise.' 
  },
  { 
    title: 'Transferability', 
    desc: 'Capability is designed to outlast the engagement. Artifacts, enablement, and operating rituals remain in place to strengthen teams long after external support concludes.' 
  }
];
</script>

<Nav />
<AboutHero />

<section class="min-h-dvh">
  <!-- Hero / Philosophy -->
  <header class="mx-auto max-w-7xl px-6 sm:px-8 pt-20 pb-16">
    <h2 class="h2 mb-6">
      Pitch Nine is a product leadership agency specifically built for bringing disciplined innovation to critical market product teams, where the margin of error is zero.
    </h2>
  </header>

  <!-- Proof / Stats -->
  <div aria-label="proof" class="mx-auto max-w-7xl px-6 sm:px-8 pb-14">
    <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {#each stats as s}
        <div class="border border-white/5 rounded-xl p-4 text-left">
          <div class="flex items-start gap-3">
            <span class="text-emerald-300" aria-hidden="true">{@html Check}</span>
            <div>
              <div class="text-lg font-semibold">{s.label}</div>
              <div class="mt-1 text-sm">{s.value}</div>
            </div>
          </div>
        </div>
      {/each}
    </div>
  </div>

  <!-- Principles grid -->
<section aria-label="principles" class="mx-auto max-w-7xl px-6 sm:px-8 py-10">
  <h2 class="text-sm font-semibold tracking-wider opacity-30 uppercase">
  Principles
</h2>
  <Principles {principles} />
</section>

  <!-- Founders -->
<Team />



  <!-- CTA / Contact -->
  <section aria-label="cta" class="mx-auto max-w-7xl px-6 sm:px-8 py-16">
    <Form />
  </section>
</section>

<Footer />
