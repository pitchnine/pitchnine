<script lang="ts">
  import { createEventDispatcher } from 'svelte';

  const dispatch = createEventDispatcher();

  const CheckIcon = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" width="20" height="20" fill="currentColor" aria-hidden="true">
  <path d="M16.707 5.293a1 1 0 0 1 0 1.414l-7.25 7.25a1 1 0 0 1-1.414 0l-3-3a1 1 0 1 1 1.414-1.414l2.293 2.293 6.543-6.543a1 1 0 0 1 1.414 0z"/>
</svg>`;

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
    <header class="space-y-2 mb-12">
      {#if title}<h2 class="inter header-form mb-9">{title}</h2>{/if}
      {#if subtitle}<p class="inter font-medium ">{subtitle}</p>{/if}
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
      <label for="name" class="inter block text-sm text-gray-50">Name *</label>
      <input
        id="name"
        name="name"
        type="text"
        class="mt-2 inter block w-full rounded-xl bg-gray-900/60 border border-gray-700 focus:outline-none focus:ring-1 focus:ring-emerald-500/50 focus:border-emerald-500/50 px-4 py-3 text-gray-100 placeholder-gray-500"
        placeholder="Full name"
        bind:value={form.name}
        on:blur={() => (touched.name = true)}
        aria-invalid={touched.name && !required(form.name)}
        aria-describedby="name-help"
        required
      />
      {#if touched.name && !required(form.name)}
        <p class="mt-2 p-1 text-xs inter text-rose-400">Please enter your name.</p>
      {/if}
    </div>

    <!-- Email -->
    <div class="col-span-1">
      <label for="email" class="block text-sm font-medium text-gray-200">Email *</label>
      <input
        id="email"
        name="email"
        type="email"
        class="mt-2 inter block w-full rounded-xl bg-gray-900/60 border border-gray-700 focus:outline-none focus:ring-1 focus:ring-emerald-500/50 focus:border-emerald-500/50 px-4 py-3 text-gray-100 placeholder-gray-500"
        placeholder="you@company.com"
        bind:value={form.email}
        on:blur={() => (touched.email = true)}
        aria-invalid={touched.email && !emailOk(form.email)}
        aria-describedby="email-help"
        required
      />
      {#if touched.email && !emailOk(form.email)}
        <p class="mt-2 p-1 text-xs inter text-rose-400">Please enter a valid email.</p>
      {/if}
    </div>

    <!-- Company -->
    <div class="col-span-1">
      <label for="company" class="block text-sm font-medium text-gray-200">Company *</label>
      <input
        id="company"
        name="company"
        type="text"
        class="mt-2 inter block w-full rounded-xl bg-gray-900/60 border border-gray-700 focus:outline-none focus:ring-1 focus:ring-emerald-500/50 focus:border-emerald-500/50 px-4 py-3 text-gray-100 placeholder-gray-500"
        placeholder="Acme Corp"
        bind:value={form.company}
        on:blur={() => (touched.company = true)}
        aria-invalid={touched.company && !required(form.company)}
        required
      />
      {#if touched.company && !required(form.company)}
        <p class="mt-2 p-1 text-xs inter text-rose-400">Please enter your company.</p>
      {/if}
    </div>

<!-- Interests (checkbox pill grid matching nav-link styles) -->
<div class="col-span-1 md:col-span-2">
  <label class="block text-sm font-medium text-gray-200">Interests *</label>

  <fieldset class="mt-2">
    <legend class="sr-only">Select one or more interests</legend>
    <p class="mt-1 mb-4 text-xs inter text-gray-500">Select one or many.</p>

    <div class="mt-2 grid grid-cols-1 max-w-2xl sm:grid-cols-2 lg:grid-cols-3 gap-3">
      {#each interestsOptions as opt, i}
        <div>
          <input
            id={"interest-" + i}
            type="checkbox"
            name="interests"
            value={opt}
            class="peer sr-only"
            bind:group={form.interests}
            on:blur={() => (touched.interests = true)}
          />

          <!-- Use utilities, not class toggle -->
  <label
  for={"interest-" + i}
  class="grid-link cursor-pointer select-none transition
         peer-checked:border-emerald-50/50 peer-checked:text-emerald-50
         peer-checked:ring-1 peer-checked:ring-emerald-200/15
         gap-3
         [&_.badge-check]:opacity-0           
         peer-checked:[&_.badge-check]:opacity-100 
  "
>
  <!-- Badge stays visible; icon fades in INSIDE the badge -->
  <span
    class="inline-flex items-center justify-center w-6 h-6 rounded-full
           bg-gray-900/50 text-emerald-300/50
           transition-colors duration-200
           peer-checked:bg-emerald-400 peer-checked:text-emerald-300"
    aria-hidden="true"
  >
    <span
      class="badge-check transition-opacity duration-150
             [&_svg]:w-4 [&_svg]:h-4"
    >
      {@html CheckIcon}
    </span>
  </span>

  <span class="inter text-sm font-medium">{opt}</span>
</label>


        </div>
      {/each}
    </div>
  </fieldset>

  {#if touched.interests && form.interests.length === 0}
    <p class="mt-2 p-1 text-xs inter text-rose-400">Select at least one interest.</p>
  {/if}
</div>



  </div>

  <!-- Submit -->
  <div class="pt-2">
    <button
      type="submit"
      class="inter nav-link"
      disabled={!isValid}
    >
      Request a consultation
    </button>
  </div>
</form>
