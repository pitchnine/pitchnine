<script lang="ts">
  import type { ResultContent, MaybeLetter } from '$lib/results/content.ts';
  import { selectContent } from '$lib/results/content.ts';

export let onRestart: () => void = () => {};
  export let answers: MaybeLetter[] = [];

    const content: ResultContent = selectContent(answers);
</script>

<div class="relative w-full">
  <div class="flex h-full items-start justify-center">
    <article class="w-full max-w-4xl rounded-lg border border-gray-700/40 bg-gray-900/70 p-12 backdrop-blur">
      <div class="flex flex-row w-full justify-between">
      <h3 class="text-3xl font-semibold mb-6">{content.title}</h3>
       <button
          type="button"
          class="secondary-cta mb-6 opacity-75"
          on:click={onRestart}
        >
          Restart
        </button>
        </div>
      <p class="mt-6 text-gray-200">{content.summary}</p>
      <h3 class="mt-6 text-sm font-semibold uppercase tracking-wide text-gray-400">Risks</h3>
      <p class="mt-3 text-gray-200">{content.risks}</p>
      <h3 class="mt-6 text-sm font-semibold uppercase tracking-wide text-gray-400">How Pitch Nine can help</h3>
      <p class="mt-3 text-gray-200">{content.help}</p>

      <div class="mt-12 flex flex-wrap gap-3">
        {#if content.cta}
          <a href={content.cta.href} class="inter secondary-cta opacity-75">{content.cta.label}</a>
        {/if}
      </div>
    </article>
  </div>
</div>
