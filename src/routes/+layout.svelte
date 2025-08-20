<script>
  import '../app.css';
  let { children } = $props();
</script>

<main class="min-h-screen bg-gray-50 text-emerald-950 dark:bg-emerald-950 dark:text-gray-50">
  {@render children()}
</main>

<style>
  /* Global, responsive page gutters */
  :root {
    --page-x: 1.25rem; /* ~24px */
    --page-y: 1.75rem;   /* ~32px */
  }
  @media (min-width: 768px) {  /* md */
    :root { --page-x: 2.5rem; --page-y: 3rem; }
  }
  @media (min-width: 1024px) { /* lg */
    :root { --page-x: 4rem; --page-y: 4rem; }
  }
  @media (min-width: 1280px) { /* xl */
    :root { --page-x: 6rem; }
  }

  /* Apply gutters to the whole app */
  main {
    padding: var(--page-y) var(--page-x);
  }

  /* Special section - full bleed background stuff (edge‑to‑edge) */
  .full-bleed {
    margin-left: calc(var(--page-x) * -1);
    margin-right: calc(var(--page-x) * -1);
  }

  /* Long-form pages like case studies */
  .narrow {
    max-width: 72ch;
    margin-inline: auto;
  }
</style>
