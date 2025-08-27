<script>
    import Nav from '$lib/components/Nav.svelte';
    import Footer from '$lib/components/Footer.svelte';
    import AboutHero from '$lib/components/AboutHero.svelte';
  
  // Optional: you can pass props into sections later or fetch CMS content here
  const stats = [
    { label: 'Years in product', value: '40+ collective' },
    { label: 'Regulated domains', value: 'Healthcare • Insurance • Pharma • Public' },
    { label: 'NIH-funded work', value: 'Principal contributors' },
    { label: 'Delivery model', value: 'Senior-only, hands-on' }
  ];

  const principles = [
    {
      title: 'Disciplined Discovery',
      desc: 'We identify what is material, frame risk, and define the few moves worth making.'
    },
    {
      title: 'Governed Innovation',
      desc: 'Controlled pilots, explicit guardrails, audit trails, and clear graduation criteria.'
    },
    {
      title: 'Backlog → Blueprint',
      desc: 'From noisy requests to an ordered, sequenced plan with real dependencies and ROI.'
    },
    {
      title: 'Evidence Over Theater',
      desc: 'Demos are fine; decisions require data. We build evaluation harnesses first.'
    },
    {
      title: 'Human-Centered, Compliance-Safe',
      desc: 'Great experience and governance are not opposites. We design for both.'
    },
    {
      title: 'Transfer, Not Dependency',
      desc: 'Enablement, artifacts, and operating rituals that outlive the engagement.'
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

<!-- Page wrapper -->
<section class="min-h-dvh bg-gray-950 text-gray-50">
  <!-- Hero / Philosophy -->
  <header class="mx-auto max-w-7xl px-6 sm:px-8 pt-20 pb-16">
    <p class="text-sm uppercase tracking-wider text-gray-400">About • Methods</p>
    <h1 class="mt-4 text-4xl sm:text-5xl md:text-6xl font-semibold leading-tight">
      Built for industries where the margin of error is zero.
    </h1>
    <p class="mt-6 max-w-3xl text-lg text-gray-300">
      Pitch Nine is a product consultancy led by veterans of healthcare, insurance, pharma, and public service—places where delay, risk, or failure aren’t options. We pair seasoned judgment with governed execution to turn ambition into outcomes.
    </p>

    <div class="mt-8 flex flex-wrap items-center gap-3">
      <a href="/contact" class="inline-flex items-center justify-center h-12 px-6 rounded-full border border-emerald-400/30 bg-emerald-400/10 text-emerald-200 hover:bg-emerald-400/20 transition">
        Start a conversation
      </a>
      <a href="#process" class="inline-flex items-center justify-center h-12 px-6 rounded-full border border-gray-700 text-gray-200 hover:border-gray-500 transition">
        See our process
      </a>
    </div>
  </header>

  <!-- Trust / Stats strip -->
  <section aria-label="proof" class="mx-auto max-w-7xl px-6 sm:px-8 pb-14">
    <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {#each stats as s}
        <div class="rounded-2xl border border-gray-800 bg-gray-900/40 p-5">
          <div class="text-sm text-gray-400">{s.label}</div>
          <div class="mt-1 text-xl font-semibold">{s.value}</div>
        </div>
      {/each}
    </div>
  </section>

  <!-- Principles grid -->
  <section aria-label="principles" class="mx-auto max-w-7xl px-6 sm:px-8 py-10">
    <h2 class="text-2xl sm:text-3xl font-semibold">Operating principles</h2>
    <p class="mt-3 max-w-3xl text-gray-300">Timeless methods applied in modern, regulated contexts. No theater. No fads.</p>

    <div class="mt-8 grid md:grid-cols-2 xl:grid-cols-3 gap-6">
      {#each principles as p}
        <article class="rounded-2xl border border-gray-800 bg-gray-900/40 p-6">
          <h3 class="text-lg font-semibold">{p.title}</h3>
          <p class="mt-2 text-gray-300">{p.desc}</p>
        </article>
      {/each}
    </div>
  </section>

  <!-- Gravitas / Senior-only model -->
  <section aria-label="model" class="mx-auto max-w-7xl px-6 sm:px-8 py-12">
    <div class="grid lg:grid-cols-12 gap-8 items-start">
      <div class="lg:col-span-7">
        <h2 class="text-2xl sm:text-3xl font-semibold">Senior-only, hands-on</h2>
        <p class="mt-3 text-gray-300 max-w-2xl">
          The people in the pitch are the people doing the work. No layers, no junior hand-offs, no overhead theater—just experienced product minds shipping outcomes.
        </p>
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

  <!-- Process timeline -->
  <section id="process" aria-label="process" class="mx-auto max-w-7xl px-6 sm:px-8 py-14">
    <h2 class="text-2xl sm:text-3xl font-semibold">How we work</h2>
    <p class="mt-3 max-w-3xl text-gray-300">A four-move cadence tuned to high-stakes teams. Adaptable to your rhythms; firm on evidence.</p>

    <ol class="mt-8 relative">
      <!-- vertical line -->
      <div class="absolute left-4 top-0 bottom-0 w-px bg-gray-800 hidden sm:block"></div>
      {#each process as s}
        <li class="relative sm:pl-16 py-6">
          <div class="hidden sm:block absolute left-0 top-6 w-8 h-8 rounded-full border border-emerald-400/40 bg-emerald-400/10 grid place-items-center text-sm font-semibold">{s.step}</div>
          <div class="rounded-2xl border border-gray-800 bg-gray-900/40 p-6">
            <div class="flex items-center justify-between gap-4">
              <h3 class="text-lg font-semibold">{s.title}</h3>
              <span class="text-sm text-gray-400">{s.meta}</span>
            </div>
            <ul class="mt-3 list-disc pl-5 text-gray-300 space-y-1">
              {#each s.points as pt}
                <li>{pt}</li>
              {/each}
            </ul>
          </div>
        </li>
      {/each}
    </ol>
  </section>

  <!-- Industry focus -->
  <section aria-label="industries" class="mx-auto max-w-7xl px-6 sm:px-8 py-12">
    <div class="rounded-2xl border border-gray-800 bg-gray-900/40 p-6">
      <h2 class="text-2xl font-semibold">Where we do our best work</h2>
      <p class="mt-3 text-gray-300 max-w-3xl">Complex organizations with sensitive data, compliance pressure, and real stakes.</p>
      <div class="mt-6 grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
        <div class="rounded-xl border border-gray-800 p-4 text-gray-200">Healthcare & Life Sciences</div>
        <div class="rounded-xl border border-gray-800 p-4 text-gray-200">Insurance & Risk</div>
        <div class="rounded-xl border border-gray-800 p-4 text-gray-200">Pharma & Clinical</div>
        <div class="rounded-xl border border-gray-800 p-4 text-gray-200">Public Sector</div>
      </div>
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
