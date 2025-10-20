<script lang="ts">

  export let title = 'Access analysis';
</script>

<!-- Container matches your chart column footprint; drop this where the chart lives -->
<div class="relative h-full w-full">


  <!-- Centered card -->
  <form class="flex h-full items-center justify-center px-6">
    <div class="w-full max-w-md rounded-lg border border-gray-700/40 bg-gray-900/70 p-6 backdrop-blur">
        <div class="w-full flex flex-row justify-between align-top">
      <h3 class="text-lg font-semibold text-white">{title}</h3>
  <button
    type="button"
    class="rounded-md text-white/50 hover:text-white focus:outline-none focus:ring-2 focus:ring-emerald-400/50"
    aria-label="Close lead form"
  >
    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
    </svg>
  </button>
</div>

      <div class="mt-6 space-y-8">
        <div>
          <label for="email" class="inter block text-sm text-gray-50">Work email</label>
          <input
            id="email"
            type="email"
              class="inter mt-2 text-sm block w-full rounded-md border border-gray-700 bg-gray-900/60 px-4 py-3 text-gray-100 placeholder-gray-500 focus:border-emerald-500/50 focus:outline-none focus:ring-1 focus:ring-emerald-500/50"
            placeholder="you@company.com"
          />
        </div>

        <div>
          <label for="company" class="inter block text-sm text-gray-50">Company name</label>
          <input
            id="company"
            type="text"
            class="inter mt-2 text-sm block w-full rounded-md border border-gray-700 bg-gray-900/60 px-4 py-3 text-gray-100 placeholder-gray-500 focus:border-emerald-500/50 focus:outline-none focus:ring-1 focus:ring-emerald-500/50"
            placeholder="Name of organization"
          />
        </div>

        <label class="flex items-start gap-3 text-sm text-gray-300">
          <input
            id="consent"
            type="checkbox"
            class="mt-1 h-4 w-4 rounded border-gray-600 bg-gray-900 text-emerald-500/50 focus:ring-emerald-500"
          />
          <span>I agree to receive extremely brief and very rare communications from Pitch Nine.</span>
        </label>
      </div>

      <div class="mt-6">
        <button
          type="button"  
          class="inter primary-cta w-full"
          aria-label="submit"
        >
          Access my analysis
        </button>
      </div>
    </div>
  </form>
</div>
