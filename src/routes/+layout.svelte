<!-- src/routes/+layout.svelte -->
<script>
  import '../app.css'; // global styles
</script>

<main class="min-h-screen bg-gradient-to-b from-gray-950 to-gray-800 text-gray-200">
  <slot />
</main>

<style>
  :root {
    --page-x: 1.25rem; /* ~24px */
    --page-y: 1.75rem; /* ~32px */
  }
  @media (min-width: 768px) {
    :root { --page-x: 2.5rem; --page-y: 3rem; }
  }
  @media (min-width: 1024px) {
    :root { --page-x: 4rem; --page-y: 4rem; }
  }
  @media (min-width: 1280px) {
    :root { --page-x: 6rem; }
  }
  main { padding: var(--page-y) var(--page-x); }
  .full-bleed {
    margin-left: calc(var(--page-x) * -1);
    margin-right: calc(var(--page-x) * -1);
  }
  .narrow { max-width: 72ch; margin-inline: auto; }
</style>
