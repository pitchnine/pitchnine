<script>
  // Your data as given
  const services = [
    {
      title: "Andrew Conklin",
      role: "Founder • Data Architecture & Engineering",
      headshot: "/images/andrew9.png",
      email: "andrew@pitchnine.com",
      cal: "https://cal.com/adconk/pitchnine-intros",
      linkedin: "https://www.linkedin.com/in/adconk/",
      stats: [
        "20+ years in enterprise data and engineering for regulated markets",
        "Led Fortune 100 modernization programs in healthcare and insurance",
        "CTO in health-tech startups and NIH-funded research initiatives",
        "CISSP-certified with deep expertise in security and data governance"
      ],
      profile:
        "Architecture-first leader delivering durable, compliant platforms in healthcare, insurance, life sciences, and the public sector. Known for integrating complex systems, governing data flows, and building technology that withstands audits, scale, and scrutiny."
    },
    {
      title: "Joell Stocchero",
      role: "Founder • Product Strategy & Full-Stack Design",
      headshot: "/images/joell9.png",
      email: "joell@pitchnine.com",
      cal: "https://www.cal.com/joellstocchero/30min",
      linkedin: "https://www.linkedin.com/in/joellstocchero/",
      stats: [
        "15+ years driving product strategy in healthcare, pharma, insurance, and government",
        "Led NIH SBIR Phase II product line and Fortune 100 enterprise initiatives",
        "Co-founded and scaled AI and health-tech startups to national recognition",
        "Expert in backlog remediation, AI pilots, and design systems for regulated industries"
      ],
      profile:
        "Product leader specializing in portfolio clarity, governed pilots, and measurable outcomes across healthcare, insurance, logistics and life sciences. Experienced in guiding organizations through backlog chaos, AI readiness, and customer-facing design systems built for regulated environments."
    }
  ];

  function go(name) {
    window.location.href = `/contact?service=${encodeURIComponent(name)}`;
  }

  function onRowKey(e, name) {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      go(name);
    }
  }
</script>

<section class="py-16">
  <div class="mx-auto max-w-7xl">
    <ul class="divide-y divide-white/5">
      {#each services as s}
        <li class="relative isolate w-full">
          <!-- Row container (no more hover overlay / row click) -->
          <div
            class="grid w-full grid-cols-1 items-start gap-x-28 gap-y-12 rounded-xl px-9 py-16
                   text-left lg:grid-cols-2"
          >
            <!-- Left: headshot -->
            <div class="self-start">
              <div class="flex items-center gap-4">
                <img
                  src={s.headshot}
                  alt={`${s.title} headshot`}
                  width="375"
                  height="375"
                  class="h-18 w-18 rounded-full object-cover ring-1 ring-gray-700/60"
                  loading="lazy"
                />
              </div>
            </div>

            <!-- Right: profile + stats + CTAs -->
            <div class="mt-1 flex max-w-6xl flex-col gap-4 self-start">
				<div>
                  <h4 class="h3">
                    {s.title}
                  </h4>
                  <p class="kicker mt-6">
                    {s.role}
                  </p>
                </div>
              <p class="body">
                {s.profile}
              </p>

              <ul class="mt-1 space-y-2">
                {#each s.stats as item}
                  <li class="flex items-start gap-2">
                    <span class="mt-2 h-1.5 w-1.5 rounded-full bg-emerald-400/90"></span>
                    <span class="body">{item}</span>
                  </li>
                {/each}
              </ul>

              <!-- Three CTAs -->
              <div class="mt-4 flex flex-wrap gap-6">
                <!-- Email -->
                <a
                  href={`mailto:${s.email}`}
                  data-cta="module"
                  class="secondary-cta"
                >
                  <span>Email</span>
                </a>

                 <!-- Cal -->
                <a
                  href={s.cal}
                  data-cta="module"
                  class="secondary-cta"
                >
                  <span>Calendar</span>
                </a>

                <!-- LinkedIn -->
                <a
                  href={s.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-cta="module"
                  class="secondary-cta"
                >
                  <span>Linkedin</span>
                </a>
              </div>
            </div>
          </div>
        </li>
      {/each}
    </ul>

    <p class="mt-8 eyebrow text-center italic">
      Founders lead every engagement. When additional capacity is required, trusted partners are added under the same governance and quality bar.
    </p>
  </div>
</section>


<style>
  @media (prefers-reduced-motion: reduce) {
    .transition,
    .duration-300,
    .ease-out {
      transition: none !important;
    }
  }
</style>
