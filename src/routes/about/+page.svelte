<script>
  import Nav from '$lib/components/Nav.svelte';
  import Footer from '$lib/components/Footer.svelte';
  import AboutHero from '$lib/components/AboutHero.svelte';
  import Principles from '$lib/components/Principles.svelte';

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


  const process = [
    {
      step: '01',
      title: 'Orientation & Stakes',
      meta: '1–2 weeks',
      points: [
        'Executive interviews and constraint mapping',
        'Regulatory and risk framing (HIPAA, SOC2, FDA, etc.)',
        'Define measurable outcomes and “non-negotiables”'
      ]
    },
    {
      step: '02',
      title: 'Signals & Sizing',
      meta: '2–3 weeks',
      points: [
        'Opportunity sizing and feasibility (build/buy/partner)',
        'Data readiness check; governance and HITL design',
        'Decision artifacts: options, trade-offs, and exposure'
      ]
    },
    {
      step: '03',
      title: 'Governed Pilots',
      meta: '4–8 weeks',
      points: [
        'Experiment plans with pass/fail gates',
        'Evaluation harnesses, telemetry, rollback paths',
        'Graduate only what clears ROI and compliance'
      ]
    },
    {
      step: '04',
      title: 'Portfolio & Enablement',
      meta: 'ongoing',
      points: [
        'Backlog to thematic portfolio with funding sequence',
        'Design/tech playbooks, checklists, and training',
        'Executive-ready reporting and decision cadence'
      ]
    }
  ];
</script>

<Nav />
<AboutHero />

<section class="min-h-dvh">
  <!-- Hero / Philosophy -->
  <header class="mx-auto max-w-7xl px-6 sm:px-8 pt-20 pb-16">
    <h2 class="mt-4 header-text">
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

  <!-- Gravitas / Senior-only model / Founders -->
  <section aria-label="model" class="mx-auto max-w-7xl px-6 sm:px-8 py-12">
    <div class="grid lg:grid-cols-12 gap-8 items-start">
      <div class="lg:col-span-7">
        <h2 class="text-2xl sm:text-3xl font-semibold">Senior-only, hands-on</h2>
        <p class="mt-3 text-gray-300 max-w-2xl">
          The people in the pitch are the people doing the work. No layers, no junior hand-offs, no overhead theater—just experienced product minds shipping outcomes.
        </p>
        <div class="bg-emerald-800">IMAGES OF JOELL AND ANDREW</div>
        <div class="mt-6 rounded-2xl border border-emerald-500/20 bg-emerald-500/5 p-6">
          <p class="text-emerald-100">
            When a program requires added capacity, we scale with a trusted network on- and offshore. Governance and quality stay with us.
          </p>
        </div>
      </div>
      <aside class="lg:col-span-5">
        <div class="rounded-2xl border border-gray-800 bg-gray-900/40 p-6">
          <h3 class="font-semibold">Credentials</h3>
          <ul class="mt-3 space-y-2 text-gray-300">
            <li>NIH-funded product work (Phase II)</li>
            <li>Fortune 100 transformation programs</li>
            <li>Design systems and evaluation harnesses for regulated environments</li>
            <li>15+ years each in product leadership</li>
          </ul>
        </div>
      </aside>
    </div>
  </section>

  <!-- CTA / Contact -->
  <section aria-label="cta" class="mx-auto max-w-7xl px-6 sm:px-8 py-16">
    <div class="rounded-3xl border border-emerald-400/25 bg-gradient-to-br from-emerald-500/10 to-gray-900 p-8 md:p-12">
      <h2 class="text-2xl sm:text-3xl font-semibold">Innovation without chaos. Results without excuses.</h2>
      <p class="mt-3 max-w-3xl text-gray-200">If you’re navigating AI, regulation, and a crowded roadmap, we’ll bring clarity, judgment, and a plan you can fund.</p>
      <div class="mt-6 flex flex-wrap gap-3">
        <a href="/contact" class="inline-flex items-center justify-center h-12 px-6 rounded-full border border-emerald-400/30 bg-emerald-400/10 text-emerald-200 hover:bg-emerald-400/20 transition">Schedule a conversation</a>
        <a href="mailto:hello@pitchnine.com" class="inline-flex items-center justify-center h-12 px-6 rounded-full border border-gray-700 text-gray-200 hover:border-gray-500 transition">hello@pitchnine.com</a>
      </div>
    </div>
  </section>
</section>

<Footer />
