<script lang="ts">
  import { createEventDispatcher } from 'svelte';

  const dispatch = createEventDispatcher();

  // ---- Public props (customize per page) ----
  export let title = 'Start a conversation';
  export let subtitle = 'Tell us a bit about your team and what you’re aiming to solve.';
  // If `action` is provided, the form POSTs to that URL. Otherwise, it will dispatch("submit", { form })
  export let action: string | null = null;
  export let method: 'POST' | 'GET' = 'POST';

  // Tailwind size variant: "base" | "compact"
  export let density: 'base' | 'compact' = 'base';

  // Options for the multi-select
  export let interestsOptions: string[] = [
    'Executive Diagnostic',
    'AI Readiness Pilot',
    'Innovation Audit',
    'Backlog Remediation',
    'Experience Design',
    'Design Systems',
    'Data & Guardrails',
    'Evaluation Harness',
    'Consultation'
  ];

  // ---- State ----
  let form = {
    name: '',
    email: '',
    company: '',
    interests: [] as string[],
    // honeypot
    website: ''
  };

  const touched = { name: false, email: false, company: false, interests: false };

  const emailOk = (e: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e.trim());
  const required = (s: string) => s.trim().length > 0;

  $: isValid =
    required(form.name) &&
    emailOk(form.email) &&
    required(form.company) &&
    form.interests.length > 0 &&
    form.website === ''; // honeypot must be blank

  async function handleSubmit(e: Event) {
    // If no action is provided, prevent native submit and bubble the event up.
    if (!action) {
      e.preventDefault();
      if (!isValid) return;
      dispatch('submit', { form });
    }
  }
</script>

<form
  class={`w-full ${density === 'compact' ? 'space-y-4' : 'space-y-6'}`}
  method={method}
  action={action ?? undefined}
  on:submit={handleSubmit}
  novalidate
>
  {#if title || subtitle}
    <header class="space-y-2">
      {#if title}<h2 class="inter text-xl md:text-2xl font-semibold tracking-tight">{title}</h2>{/if}
      {#if subtitle}<p class="text-sm text-gray-400">{subtitle}</p>{/if}
    </header>
  {/if}

  <!-- Honeypot (hidden from users, visible to bots) -->
  <div class="hidden">
    <label>
      Do not fill this out
      <input name="website" bind:value={form.website} autocomplete="off" />
    </label>
  </div>

  <div class="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
    <!-- Name -->
    <div class="col-span-1">
      <label for="name" class="block text-sm font-medium text-gray-200">Name *</label>
      <input
        id="name"
        name="name"
        type="text"
        class="mt-2 block w-full rounded-xl bg-gray-900/60 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 px-4 py-3 text-gray-100 placeholder-gray-500"
        placeholder="Full name"
        bind:value={form.name}
        on:blur={() => (touched.name = true)}
        aria-invalid={touched.name && !required(form.name)}
        aria-describedby="name-help"
        required
      />
      <p id="name-help" class="mt-1 text-xs text-gray-500">Who should we address in replies?</p>
      {#if touched.name && !required(form.name)}
        <p class="mt-1 text-xs text-rose-400">Please enter your name.</p>
      {/if}
    </div>

    <!-- Email -->
    <div class="col-span-1">
      <label for="email" class="block text-sm font-medium text-gray-200">Email *</label>
      <input
        id="email"
        name="email"
        type="email"
        class="mt-2 block w-full rounded-xl bg-gray-900/60 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 px-4 py-3 text-gray-100 placeholder-gray-500"
        placeholder="you@company.com"
        bind:value={form.email}
        on:blur={() => (touched.email = true)}
        aria-invalid={touched.email && !emailOk(form.email)}
        aria-describedby="email-help"
        required
      />
      <p id="email-help" class="mt-1 text-xs text-gray-500">We’ll reply within one business day.</p>
      {#if touched.email && !emailOk(form.email)}
        <p class="mt-1 text-xs text-rose-400">Please enter a valid email.</p>
      {/if}
    </div>

    <!-- Company -->
    <div class="col-span-1">
      <label for="company" class="block text-sm font-medium text-gray-200">Company *</label>
      <input
        id="company"
        name="company"
        type="text"
        class="mt-2 block w-full rounded-xl bg-gray-900/60 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 px-4 py-3 text-gray-100 placeholder-gray-500"
        placeholder="Acme Corp"
        bind:value={form.company}
        on:blur={() => (touched.company = true)}
        aria-invalid={touched.company && !required(form.company)}
        required
      />
      {#if touched.company && !required(form.company)}
        <p class="mt-1 text-xs text-rose-400">Please enter your company.</p>
      {/if}
    </div>

    <!-- Interests (multi-select) -->
    <div class="col-span-1">
      <label for="interests" class="block text-sm font-medium text-gray-200">Interests *</label>
      <select
        id="interests"
        name="interests"
        class="mt-2 block w-full rounded-xl bg-gray-900/60 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 px-4 py-3 text-gray-100"
        multiple
        size={Math.min(6, interestsOptions.length)}
        bind:value={form.interests}
        on:blur={() => (touched.interests = true)}
        aria-invalid={touched.interests && form.interests.length === 0}
        required
      >
        {#each interestsOptions as opt}
          <option value={opt}>{opt}</option>
        {/each}
      </select>
      <p class="mt-1 text-xs text-gray-500">Tip: Hold ⌘/Ctrl (desktop) to select multiple.</p>
      {#if touched.interests && form.interests.length === 0}
        <p class="mt-1 text-xs text-rose-400">Select at least one interest.</p>
      {/if}
    </div>
  </div>

  <!-- Submit -->
  <div class="pt-2">
    <button
      type="submit"
      class="inline-flex items-center justify-center h-11 px-6 rounded-full bg-emerald-600 text-white font-semibold tracking-tight shadow-sm hover:bg-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-500 disabled:opacity-50 disabled:cursor-not-allowed"
      disabled={!isValid}
    >
      Request a consultation
    </button>
    <p class="mt-2 text-xs text-gray-500">No pitches. No fluff. We respond with a clear next step.</p>
  </div>
</form>
