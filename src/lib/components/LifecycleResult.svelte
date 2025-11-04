<script lang="ts">
  import type { ResultContent, MaybeLetter } from '$lib/results/content.ts';
  import { selectContent } from '$lib/results/content.ts';

export let onRestart: () => void = () => {};
  export let answers: MaybeLetter[] = [];

    const content: ResultContent = selectContent(answers);
</script>

<div class="relative w-full">
  <div class="flex h-full items-start justify-center">
    <article class="w-full max-w-5xl rounded-lg border border-gray-700/40 bg-gray-900/70 p-6 md:p-12 backdrop-blur">

      <h3 class="h4">{content.title}</h3>
      <p class="mt-6 fine whitespace-pre-line">{content.summary}</p>
      <h3 class="mt-9 text-sm tracking-wide uppercase font-semibold opacity-50">Side Effects</h3>
      <p class="mt-3 fine whitespace-pre-line">{content.sideEffects}</p>
        <h3 class="mt-9 text-sm tracking-wide uppercase font-semibold opacity-50">Pitch Nine Alignment</h3>
      <p class="mt-3 fine whitespace-pre-line">{content.help}</p>

      <div class="mt-16 flex flex-col gap-6 md:flex-row justify-between">
        {#if content.cta}
          <a href={content.cta.href} class="inter secondary-cta">{content.cta.label}</a>
        {/if}
        <button
          type="button"
          class="secondary-cta"
          on:click={onRestart}
        >
          Restart
        </button>
      </div>
    </article>
  </div>
</div>
