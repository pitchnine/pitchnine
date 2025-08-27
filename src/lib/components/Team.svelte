<script>
  // Your data as given
  const services = [
    {
      title: "Andrew Conklin",
      role: "Founder • Data Architecture & Engineering",
      headshot: "/images/cgi.png",
      email: "andrew@pitchnine.com",
      linkedin: "https://www.linkedin.com/in/adconk/",
      stats: [
        "20+ years building regulated platforms",
        "Fortune 100 modernizations at scale",
        "Security, data, and integration leadership",
        "Systems built to pass audits, not demos"
      ],
      profile:
        "Architecture-first leader focused on durability, integration, and governed delivery in healthcare, insurance, and public sector."
    },
    {
      title: "Joell Stocchero",
      role: "Founder • Product Strategy & Full-Stack Design",
      headshot: "/images/aetna.png",
      email: "joell@pitchnine.com",
      linkedin: "https://www.linkedin.com/in/joellstocchero/",
      stats: [
        "NIH SBIR Phase II product leadership",
        "Backlog to blueprint in high-stakes orgs",
        "Design systems for regulated environments",
        "Evaluation harnesses over theater"
      ],
      profile:
        "Product strategist specializing in portfolio clarity, governed pilots, and measurable outcomes across healthcare, insurance, and logistics."
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
        <li class="group relative isolate w-full">
          <!-- Hover overlay (unchanged) -->
          <div
            class="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-r from-white/[0.03] via-emerald-500/10 to-transparent
                   opacity-0 transition-opacity duration-300 [-webkit-mask-image:linear-gradient(to_right,transparent,black_10%,black_70%,transparent)]
                   [mask-image:linear-gradient(to_right,transparent,black_10%,black_70%,transparent)]
                   group-hover:opacity-30"
          ></div>

          <!-- Whole row clickable (unchanged) -->
          <div
            role="link"
            tabindex="0"
            aria-label={`Open ${s.title}`}
            on:click={() => go(s.title)}
            on:keydown={(e) => onRowKey(e, s.title)}
            class="grid w-full cursor-pointer grid-cols-1 items-start gap-x-10 gap-y-6 rounded-xl px-12 py-16
                   text-left focus:outline-none focus:ring-2 focus:ring-emerald-500/30 lg:grid-cols-2"
          >
            <!-- Left: headshot + name -->
            <div class="self-start">
              <div class="flex items-center gap-4">
                <img
                  src={s.headshot}
                  alt={`${s.title} headshot`}
                  width="72"
                  height="72"
                  class="h-18 w-18 rounded-xl object-cover ring-1 ring-gray-700/60"
                  loading="lazy"
                />
                <div>
                  <h4 class="text-3xl lg:text-4xl font-semibold tracking-tight text-white">
                    {s.title}
                  </h4>
                  <!-- role mapped to your 'meta' spot -->
                  <p class="mt-1 text-xs font-semibold uppercase tracking-wider text-white/60 md:text-sm">
                    {s.role}
                  </p>
                </div>
              </div>
            </div>

            <!-- Right: profile + stats + inline CTAs -->
            <div class="mt-1 flex max-w-2xl flex-col gap-4 self-start">
              <!-- profile mapped to your 'desc' spot -->
              <p class="text-xl text-white/90 sm:text-lg">
                {s.profile}
              </p>

              <!-- stat sheet -->
              <ul class="mt-1 space-y-2 text-white/90">
                {#each s.stats as item}
                  <li class="flex items-start gap-2">
                    <span class="mt-2 h-1.5 w-1.5 rounded-full bg-emerald-400/90"></span>
                    <span>{item}</span>
                  </li>
                {/each}
              </ul>

              <!-- Inline actions (stop row click) -->
              <div class="mt-2 flex flex-wrap gap-6">
                <a
                  href={`mailto:${s.email}`}
                  on:click|stopPropagation
                  on:keydown|stopPropagation
                  class="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider
                         text-emerald-300/80 hover:text-emerald-200 focus:outline-none"
                  aria-label={`Email ${s.title}`}
                >
                  <span>Email</span>
                  <svg viewBox="0 0 24 24" class="h-4 w-4" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M4 6h16v12H4zM22 6l-10 7L2 6" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                </a>

                <a
                  href={s.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  on:click|stopPropagation
                  on:keydown|stopPropagation
                  class="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider
                         text-emerald-300/80 hover:text-emerald-200 focus:outline-none"
                  aria-label={`Open LinkedIn for ${s.title}`}
                >
                  <span>LinkedIn</span>
                  <svg viewBox="0 0 24 24" class="h-4 w-4" fill="currentColor" aria-hidden="true">
                    <path d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM0 8h5v16H0zM8 8h4.8v2.2h.07C13.5 8.9 15.4 8 17.6 8 22.4 8 24 10.9 24 15.4V24h-5v-7.4c0-1.8 0-4.2-2.6-4.2-2.6 0-3 2-3 4V24H8z"/>
                  </svg>
                </a>

                <a
                  href="/contact"
                  on:click|stopPropagation
                  on:keydown|stopPropagation
                  data-cta="module"
                  aria-label={`Request scope & pricing with ${s.title}`}
                  class="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider
                         text-emerald-300/80 hover:text-emerald-200 focus:outline-none"
                >
                  <span>Request scope & pricing</span>
                  <svg viewBox="0 0 24 24"
                       class="h-4 w-4 transform-gpu transition-transform duration-200 ease-out
                              hover:translate-x-[4px] focus-visible:translate-x-[4px] group-hover:translate-x-[4px]"
                       fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M9 6l6 6-6 6" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </li>
      {/each}
    </ul>

    <p class="mt-8 text-center text-xs font-medium text-white/40">
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
