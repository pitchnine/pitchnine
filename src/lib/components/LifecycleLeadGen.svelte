<script lang="ts">
import { createEventDispatcher } from 'svelte';
  export let title = 'Access analysis';
  export let answers: ('A'|'B'|'C'|'D'|null)[] = [];
    const dispatch = createEventDispatcher<{
    close: void;
    submit: { email: string; company: string; consent: boolean; answers: ('A'|'B'|'C'|'D'|null)[] };
  }>();
   let email = '';
  let company = '';
  let consent = false;
   function handleClose() {
    dispatch('close');
  }
  function handleSubmitClick() {

    dispatch('submit', { email, company, consent, answers });
  }
</script>

<!-- Container matches your chart column footprint; drop this where the chart lives -->
<div class="relative h-full w-full">


  <!-- Centered card -->
  <form class="flex h-full items-center justify-center px-6">
    <div class="w-full max-w-md rounded-lg border border-gray-700/40 bg-gray-900/70 p-6 backdrop-blur">
        <div class="w-full flex flex-row justify-between align-top">
      <h3 class="text-2xl font-semibold text-gray-50 mb-3">{title}</h3>
  <!-- Close (x) -->
      <button
    type="button"
    class="mb-3 rounded-md text-white/50 hover:text-white focus:outline-none focus:ring-2 focus:ring-emerald-400/50"
    aria-label="Close lead form"
    on:click={handleClose}
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
             bind:value={email}
          />
        </div>

        <div>
          <label for="company" class="inter block text-sm text-gray-50">Company name</label>
          <input
            id="company"
            type="text"
            class="inter mt-2 text-sm block w-full rounded-md border border-gray-700 bg-gray-900/60 px-4 py-3 text-gray-100 placeholder-gray-500 focus:border-emerald-500/50 focus:outline-none focus:ring-1 focus:ring-emerald-500/50"
            placeholder="Name of organization"
            bind:value={company}
          />
        </div>

        <label class="flex items-start gap-3 text-sm text-gray-300">
          <input
            id="consent"
            type="checkbox"
            class="mt-1 h-4 w-4 rounded border-gray-600 bg-gray-900 text-emerald-500/50 focus:ring-emerald-500"
            bind:checked={consent}
          />
          <span>I agree to receive extremely brief and very rare communications from Pitch Nine.</span>
        </label>
      </div>

      <div class="mt-6">
        <button
          type="button"  
          class="inter primary-cta w-full mt-6"
          aria-label="submit"
          on:click={handleSubmitClick}
        >
          Access my analysis
        </button>
      </div>
    </div>
  </form>
</div>
