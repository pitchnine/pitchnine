<script>
  import { onMount, onDestroy, tick } from 'svelte';
  import { browser } from '$app/environment';

  export let principles = [];

  let sectionEl;
  let rowEls = [];
  let progress = 0;   // 0..100
  let activeIdx = -1; // if you light rows elsewhere, this is ready

  function computeProgress() {
    if (!browser || !sectionEl) return;

    // Fallback: if rowEls hasn't bound yet, populate it from the DOM
    if (!rowEls.length) {
      const nodes = sectionEl.querySelectorAll('ol > li');
      if (nodes.length) rowEls = Array.from(nodes);
    }

    const last = rowEls[rowEls.length - 1];
    if (!last) return; // nothing to measure yet

    const rect = sectionEl.getBoundingClientRect();
    const vh = window.innerHeight;

    // Last row center in page coords (anchor for 100%)
    const lastRect = last.getBoundingClientRect();
    const lastCenterY = window.scrollY + lastRect.top + lastRect.height / 2;

    // Start just before section enters; finish when last row is ~mid-viewport
    const start = window.scrollY + rect.top - vh * 0.8;
    const end   = lastCenterY + vh * 0.01; // adjust 0.5 earlier/later completion
    const now   = window.scrollY;

    const denom = Math.max(1, end - start);
    const rawPct = ((now - start) / denom) * 100;
    const clamped = Math.max(0, Math.min(100, rawPct));

    if (Number.isFinite(clamped)) {
      progress = clamped;
    }
  }

  let io;
  function setupIO() {
    if (!browser) return;
    io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const idx = Number(entry.target.dataset.idx);
          if (entry.isIntersecting && entry.intersectionRatio >= 0.5) {
            activeIdx = Math.max(activeIdx, idx);
          }
        });
      },
      {
        root: null,
        rootMargin: '0px 0px -20% 0px',
        threshold: [0.5]
      }
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

  onMount(async () => {
    if (!browser) return;
    // Ensure DOM (rowEls + sectionEl) are fully bound before measuring
    await tick();
    await tick(); // extra insurance on fast navigations/hydration
    computeProgress();
    setupIO();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll, { passive: true }); // reuse throttling
  });

  onDestroy(() => {
    if (!browser) return;
    window.removeEventListener('scroll', onScroll);
    window.removeEventListener('resize', onScroll);
    if (io) io.disconnect();
  });
</script>

<section
  bind:this={sectionEl}
  aria-label="principles"
  class="mx-auto max-w-7xl px-6 sm:px-8 py-10"
>
  <div class="relative mt-3">
    <!-- Track -->
    <div class="block" aria-hidden="true">
      <div
        class="absolute top-0 bottom-0 w-[4px] bg-gray-50/25 z-0 rounded-full left-[12px] sm:left-3"
      ></div>

      <!-- Filled portion (scaleY avoids % height quirks) -->
      <div
        class="absolute top-0 bottom-0 w-[4px] bg-emerald-600 z-0 rounded-full left-[12px] sm:left-3 origin-top will-change-transform transition-transform duration-200"
        style="transform: scaleY({Math.max(0.005, progress / 100)})"
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
          <h3 class="h3 md:pr-6">{p.title}</h3>
          <p class="body w-full md:max-w-2xl">{p.desc}</p>
        </li>
      {/each}
    </ol>
  </div>
</section>
