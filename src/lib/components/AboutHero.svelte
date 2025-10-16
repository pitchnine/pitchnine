<script>
  import { onMount } from 'svelte';

  /* ---- Foreground content ---- */
  export let headline = "Disciplined product leadership.";
  export let subhead = "Innovation delivered responsibly in the most demanding environments.";

  let sectionEl;
  let contentEl;

  onMount(() => {
    if (!sectionEl || !contentEl) {
      console.warn("AboutHero refs not bound yet");
      return;
    }
  });
</script>


<section bind:this={sectionEl} class="relative h-screen overflow-hidden flex items-center justify-center">

   <!-- Foreground content -->
  <div bind:this={contentEl} class="relative z-10 text-center px-6">
    <h1 class="h1 mb-9 animate-fadeUp">
      {headline}
    </h1>
    <p class="lede max-w-4xl mx-auto mb-8 animate-fadeUp" style="animation-delay: 120ms;">
      {subhead}
    </p>
  </div>
</section>

<style>
  @keyframes fadeUp {
    0% { opacity: 0; transform: translateY(12px); }
    100% { opacity: 1; transform: translateY(0); }
  }
  .animate-fadeUp { animation: fadeUp 700ms ease forwards; }

  @keyframes gradientMove {
    0% { background-position: -200% 0; }
    100% { background-position: 200% 0; }
  }
  .animate-gradientMove { background-size: 200% auto; animation: gradientMove 18s linear infinite; }
</style>
