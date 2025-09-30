<script lang="ts">
  import { createEventDispatcher } from 'svelte';

  const dispatch = createEventDispatcher();

  const CheckIcon = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" width="20" height="20" fill="currentColor" aria-hidden="true">
  <path d="M16.707 5.293a1 1 0 0 1 0 1.414l-7.25 7.25a1 1 0 0 1-1.414 0l-3-3a1 1 0 1 1 1.414-1.414l2.293 2.293 6.543-6.543a1 1 0 0 1 1.414 0z"/>
</svg>`;

  // ---- Public props ----
  export let title = 'Start with a conversation.';
  export let action: string = "https://formspree.io/f/xblapjvv";
  export let method: 'POST' | 'GET' = 'POST';
  export let density: 'base' | 'compact' = 'base';

  export let interestsOptions: string[] = [
    'Executive Review',
    'AI Readiness',
    'Innovation Audit',
    'Backlog Remediation',
    'Customer Insights',
    'Pilot Enablement',
    'Data & Integrations',
    'Process Support',
    'General Consultation'
  ];

  let form = {
    name: '',
    email: '',
    company: '',
    interests: [] as string[],
    website: '' 
  };

  const emailOk = (e: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e.trim());
  const required = (s: string) => s.trim().length > 0;

  $: isValid =
    required(form.name) &&
    emailOk(form.email) &&
    required(form.company) &&
    form.website === '';

  async function handleSubmit(e: Event) {
    if (!action) {
      e.preventDefault();
      if (!isValid) return;
      dispatch('submit', { form });
    }
  }
</script>

<section class="w-full mb-48">
  <!-- Header band (single column) -->
  <header class="mx-auto max-w-7xl px-3">
    <h2 class="h2 mb-6">{title}</h2>

    <p class="body mb-3">
      Complete the form below or <a href="https://cal.com/joellstocchero/30min" class="text-emerald-500 hover:underline hover:underline-offset-4">schedule an introduction</a> at your convenience. 
    </p>
    <p class="body">Replies received within one business day.</p>
  </header>

  <!-- Form card (centered, responsive grid within) -->
  <form
    class={`mx-auto mt-16 w-full max-w-7xl rounded-2xl border border-emerald-50/10 p-8 backdrop-blur
            ${density === 'compact' ? 'space-y-6' : 'space-y-12'}
            sm:p-10`}
    {method}
    aria-describedby="contact-subtitle"
    action={action ?? undefined}
    on:submit={handleSubmit}
    novalidate
  >
    <!-- Top inputs -->
    <div class="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-12">
      <!-- Name -->
      <div>
        <label for="name" class="inter block text-sm text-gray-50">* Name:</label>
        <input
          id="name"
          name="name"
          type="text"
          class="inter text-sm mt-2 block w-full rounded-md border border-gray-700 bg-gray-900/60 px-4 py-3 text-gray-100 placeholder-gray-500 focus:border-emerald-500/50 focus:outline-none focus:ring-1 focus:ring-emerald-500/50"
          placeholder="Full name"
          bind:value={form.name}
          required
        />
      </div>

      <!-- Email -->
      <div>
        <label for="email" class="inter block text-sm text-gray-50">* Email:</label>
        <input
          id="email"
          name="email"
          type="email"
          class="inter mt-2 text-sm block w-full rounded-md border border-gray-700 bg-gray-900/60 px-4 py-3 text-gray-100 placeholder-gray-500 focus:border-emerald-500/50 focus:outline-none focus:ring-1 focus:ring-emerald-500/50"
          placeholder="you@company.com"
          bind:value={form.email}
          required
        />
      </div>

      <!-- Company -->
      <div class="md:col-span-2">
        <label for="company" class="inter block text-sm text-gray-50">* Company:</label>
        <input
          id="company"
          name="company"
          type="text"
          class="inter text-sm mt-2 block w-full rounded-md border border-gray-700 bg-gray-900/60 px-4 py-3 text-gray-100 placeholder-gray-500 focus:border-emerald-500/50 focus:outline-none focus:ring-1 focus:ring-emerald-500/50"
          placeholder="Acme Corp"
          bind:value={form.company}
          required
        />
      </div>
    </div>

<!-- Interests -->
<div>
  <label class="inter block text-sm text-gray-50">Interests</label>
  <fieldset class="mt-2">
    <legend class="sr-only">Select one or more interests</legend>
    <div class="mt-2 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
      {#each interestsOptions as opt, i}
        <div>
          <input
            id={'interest-' + i}
            type="checkbox"
            name="interests"
            value={opt}
            class="peer sr-only"
            bind:group={form.interests}
          />
          <label
            for={'interest-' + i}
            class="grid-link flex w-full cursor-pointer items-center gap-2 whitespace-nowrap
                   rounded-md border border-gray-700 bg-gray-900/60 px-4 py-3 text-left
                   transition
                   peer-checked:border-emerald-500/50 peer-checked:text-emerald-50
                   peer-checked:ring-1 peer-checked:ring-emerald-200/25
                   peer-checked:[&_.dot]:opacity-100"
          >
            <!-- Green dot (hidden by default) -->
            <span
              class="dot h-2 w-2 rounded-full bg-emerald-400 opacity-0 transition"
              aria-hidden="true"
            ></span>

            <!-- choice text -->
            <span class="text-sm">{opt}</span>
          </label>
        </div>
      {/each}
    </div>
  </fieldset>
</div>


    <!-- Divider -->
    <div class="border-t border-white/10"></div>

    <!-- Honeypot -->
    <div class="hidden">
      <label>
        Do not fill this out
        <input name="website" bind:value={form.website} autocomplete="off" />
      </label>
    </div>

    <!-- Submit -->
    <div class="pt-2">
      <button type="submit" class="inter primary-cta w-full sm:w-auto" disabled={!isValid}>
        Request a consultation
      </button>
    </div>
  </form>
</section>
