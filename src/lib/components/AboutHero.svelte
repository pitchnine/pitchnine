<script>
  export let tagline = "Seasoned and skilled";
</script>

<section class="relative flex items-center justify-center h-screen overflow-hidden">
  <h1 class="text-5xl md:text-7xl font-bold tracking-tight leading-tight animate-fadeUp">
    {tagline}
  </h1>
</section>

<style>
  @keyframes fadeUp {
    0% { opacity: 0; transform: translateY(20px); }
    100% { opacity: 1; transform: translateY(0); }
  }
  .animate-fadeUp {
    animation: fadeUp 1.2s ease forwards;
  }
</style>
