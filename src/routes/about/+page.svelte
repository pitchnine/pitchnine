<script>
  import Nav from '$lib/components/Nav.svelte';
  import Footer from '$lib/components/Footer.svelte';
  import AboutHero from '$lib/components/AboutHero.svelte';
  import Principles from '$lib/components/Principles.svelte';
  import Team from '$lib/components/Team.svelte';
  import Form from '$lib/components/Form.svelte';

  const Check = `
    <svg viewBox="0 0 24 24" class="w-8 h-8 mt-[2px]" fill="none" stroke="currentColor" stroke-width="1.8">
      <path d="M20 6L9 17l-5-5" stroke-linecap="round" stroke-linejoin="round" />
    </svg>`;

  const stats = [
  {
    value: '40+ years',
    label: 'Collective leadership experience on mission-critical product teams, bringing judgment shaped by decades of real delivery.'
  },
  {
    value: 'Regulated markets',
    label: 'Deep track record across healthcare, pharma, clinical trials, government, and logistics—where every iteration carries consequences.'
  },
  {
    value: 'Recognized impact',
    label: 'Contributors to NIH-funded research and recipients of Best in KLAS, Innovator of the Year, and other industry awards for outcomes that matter.'
  },
  {
    value: 'Senior-only model',
    label: 'Every engagement is led by staff and principal-level talent. U.S. based, remote-first, with hubs in Washington, D.C. and Colorado.'
  }
];


const principles = [
  { 
    title: 'Discipline', 
    desc: 'Focus stays on the material. Risk is framed in context, priorities are precise, and only moves that compound value advance.' 
  },
  { 
    title: 'Governance', 
    desc: 'Innovation runs under control. Initiatives stay off the mainline until proven—bound by guardrails, audit trails, explicit graduation criteria, and AI data/model governance.' 
  },
  { 
    title: 'Prioritization', 
    desc: 'Noise is stripped to reveal signal. Requests resolve into a sequenced plan that surfaces dependencies, constraints, and expected return.' 
  },
  { 
    title: 'Evidence', 
    desc: 'Decisions demand proof. Demos aren’t enough to prove value and instead we leverage evaluation harnesses, telemetry, and customer signals (including AI quality metrics) determine what advances.' 
  },
  { 
    title: 'Rigor', 
    desc: 'Compliance and experience advance together. Solutions are built to withstand audits with privacy-by-design, security reviews, and AI safety checks all without compromising value or speed.' 
  },
  { 
    title: 'Transferability', 
    desc: 'Capability outlasts the engagement. Artifacts, enablement, and operating rituals remain so teams can run and continue scaling the product and work without us.' 
  }
];


export const load = async () => {
  return {
    seo: {
      title: 'About',
      description: 'Senior-only product leadership for high-stakes teams.',
      image: 'https://pitchnine.com/images/social-share.jpg' // optional override
    }
  };
};

</script>


<Nav />
<AboutHero />

<section class="mx-auto max-w-7xl my-64 md:my-88 px-6 md:px-12">
  <!-- Hero / Philosophy -->
  <header class="mx-auto max-w-7xl">
    <h2 class="h2 mb-6 text-center md:text-left">
      Pitch Nine is an embedded product agency with a focus on establishing a dual-track product rhythm, preparing organizations for AI adoption, and serving as fractional builders to accelerate development.
    </h2>
  </header>

  <!-- Proof / Stats -->
    <div class="mt-14 md:mt-24 mb-12 md:mb-32 grid grid-cols-1 sm:grid-cols-2 justify-between max-w-7xl mx-auto gap-12 md:gap-20">
    {#each stats as s}
      <div class="text-left">
        <div class="flex items-start gap-3">
          <span class="text-emerald-300" aria-hidden="true">{@html Check}</span>
          <div>
            <p class="h3">{s.value}</p>
            {#if s.label}
              <p class="mt-4 meta max-w-lg">{s.label}</p>
            {/if}
          </div>
        </div>
      </div>
    {/each}
  </div>
  </section>


  <!-- Principles grid -->
<section aria-label="principles" class="mx-auto max-w-7xl my-56 md:my-80">
  <h2 class="h2 mb-12 text-center md:text-left">
      We operate as an embedded product team, not an agency side-show with a focus on outcomes, governance, and long-term capability.
    </h2>
  <Principles {principles} />
</section>

  <!-- Founders -->
<section class="mx-auto max-w-7xl my-56 md:my-80">
  <h2 class="h2 mb-24 text-center">
      Fast when it counts, and safe where it matters, we have decades of experience turning hypotheses into validated, viable products.
    </h2>
  <Team />
</section>



  <!-- CTA / Contact -->
  <section aria-label="cta" class="mx-auto max-w-7xl my-64 md:my-88 px-9 md:px-12">
    <Form />
  </section>

<Footer />
