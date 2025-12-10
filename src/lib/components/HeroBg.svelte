<script lang="ts">
  // Text content props
  export let headline: string = 'Healthcare innovation, without the agency theatre.';
  export let bodyText: string =
    "Pitch Nine helps hospitals and healthtech teams validate new products, design clinical pilots, and implement AI, AR/VR, and software medical devices. We build inside real clinical workflows, EMR ecosystems, and FDA-aware pathways—so innovation survives contact with the hospital.";

  // CTA props
  export let primaryCtaHref: string = '#contact';
  export let primaryCtaLabel: string = 'Schedule a discovery call';

</script>

<section
  class="relative min-h-screen bg-[#04090F] text-slate-100 flex items-center"
>
  <!-- Animated gradient background -->
  <div
    class="pointer-events-none absolute inset-0 bg-hero-gradient animate-hero-gradient opacity-90"
    aria-hidden="true"
  ></div>

  <!-- Dark wash to keep text readable -->
  <div
    class="pointer-events-none absolute inset-0 bg-[#04090F]/70 mix-blend-multiply"
    aria-hidden="true"
  ></div>

  <!-- Content -->
  <div class="flex text-left mx-auto max-w-7xl">
    <div class="space-y-6">
     <h1
        class="h1 opacity-0 animate-fade-in-up [animation-delay:120ms]"
      >
        {headline}
      </h1>

      <p
        class="lede opacity-0 animate-fade-in-up [animation-delay:820ms]"
      >
        {bodyText}
      </p>

      <div
        class="primary-cta animate-fade-in-up [animation-delay:1150ms]"
      >
        <a
          href={primaryCtaHref}
        >
          {primaryCtaLabel}
        </a>
      </div>
    </div>
  </div>
</section>

<style>
  .bg-hero-gradient {
    background-image:
      radial-gradient(circle at 40% 60%, #0891b2 0%, #0891b2aa 0%, transparent 30%),
      radial-gradient(circle at 60% 40%, #b45309 5%, #b45309aa 10%, transparent 40%),
      radial-gradient(circle at 50% 50%, #005f5f 10%, #003535aa 25%, transparent 80%),
      linear-gradient(140deg, #04090f 0%, #04090f 45%, #003535 80%, #04090f 100%);
    background-size: 100% 100%;
    background-position: 0% 0%;
  }

  @keyframes hero-gradient {
    0% {
      background-position: 0% 0%;
    }
    50% {
      background-position: 150% 150%;
    }
    100% {
      background-position: 0% 0%;
    }
  }

  .animate-hero-gradient {
    animation: hero-gradient 28s ease-in-out;
  }

  @keyframes fade-in-up {
    from {
      opacity: 0;
      transform: translateY(8px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  .animate-fade-in-up {
    animation: fade-in-up 600ms ease-out forwards;
  }

  @media (prefers-reduced-motion: reduce) {
    .animate-hero-gradient,
    .animate-fade-in-up {
      animation: none !important;
    }

    .animate-fade-in-up {
      opacity: 1 !important;
      transform: none !important;
    }
  }
</style>
