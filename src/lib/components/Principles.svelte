<script>
  import { onMount, onDestroy } from 'svelte';
  import { browser } from '$app/environment';

  export let principles = [];

  let sectionEl;
  let rowEls = [];
  let progress = 0;   // 0..100 height of emerald fill
  let activeIdx = -1; // highest index that has “lit”

  function computeProgress() {
    if (!browser || !sectionEl) return;
    const rect = sectionEl.getBoundingClientRect();
    const vh = window.innerHeight;
    const start = window.scrollY + rect.top - vh * 0.8;
    const end   = start + rect.height + vh * 0.5;
    const now   = window.scrollY;
    const pct   = ((now - start) / (end - start)) * 100;
    progress = Math.max(0, Math.min(100, pct));
  }

  let io;
  function setupIO() {
    if (!browser) return;
    io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const idx = Number(entry.target.dataset.idx);
          if (entry.isIntersecting && entry.intersectionRatio > 0.5) {
            activeIdx = Math.max(activeIdx, idx);
          }
        });
      },
      { root: null, threshold: [0.25, 0.5, 0.75] }
    );
    rowEls.forEach((el) => el && io.observe(el));
  }

  let ticking = false;
  function onScroll() {
    if (!browser) return;
    if (!ticking) {
      ticking = true;
      requestAnimationFrame(() => {
        computeProgress();
        ticking = false;
      });
    }
  }

  onMount(() => {
    if (!browser) return;
    computeProgress();
    setupIO();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', computeProgress);
  });

  onDestroy(() => {
    if (!browser) return;
    window.removeEventListener('scroll', onScroll);
    window.removeEventListener('resize', computeProgress);
    if (io) io.disconnect();
  });
</script>

<section
  bind:this={sectionEl}
  aria-label="principles"
  class="mx-auto max-w-7xl px-6 sm:px-8 py-10"
>
  <!-- Timeline -->
  <div class="relative mt-3">
    <!-- Rail (now visible on mobile; smaller left offset) -->
    <div class="block" aria-hidden="true">
      <!-- full track -->
      <div
        class="absolute top-0 bottom-0 w-[2px] bg-gray-50/25 z-0 rounded-full left-[12px] sm:left-3"
      ></div>

      <!-- filled portion -->
      <div
        class="absolute top-0 w-[2px] bg-emerald-600 z-0 transition-[height] duration-150 rounded-full left-[12px] sm:left-3"
        style="height: {progress}%"
      ></div>
    </div>

    <!-- Rows -->
    <ol class="space-y-20 sm:space-y-32">
      {#each principles as p, i (i)}
        <li
          class="relative pl-12 sm:pl-20 flex md:flex-row md:justify-between flex-col gap-4"
          bind:this={rowEls[i]}
          data-idx={i}
        >

          <!-- Text -->
          <h3 class="h3 md:pr-6">{p.title}</h3>
          <p class="body w-full md:max-w-2xl">{p.desc}</p>
        </li>
      {/each}
    </ol>
  </div>
</section>

