<script lang="ts">
  import { createEventDispatcher, tick } from 'svelte';
  const dispatch = createEventDispatcher();

  // Public props
  export let title = 'Start with a conversation.';
  export let action: string = 'https://formspree.io/f/xblapjvv';
  export let method: 'POST' | 'GET' = 'POST';
  export let density: 'base' | 'compact' = 'base';

  export let interestsOptions: string[] = [
    'Opportunity Audit',
    'AI Readiness',
    'Feature Validation',
    'Backlog Remediation',
    'Customer Alignment',
    'Architecture & Integrations'
  ];

  // Model
  let form = { name: '', email: '', company: '', interests: [] as string[], website: '' };

  // Validation
  const required = (s: string) => s.trim().length > 0;
  const emailOk = (e: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e.trim());

  // State
  let touched: Record<'name'|'email'|'company', boolean> = { name:false, email:false, company:false };
  let showAll = false;

  // Errors (reactive)
  $: errors = {
    name: required(form.name) ? '' : 'Please enter your name.',
    email: !required(form.email)
      ? 'Please enter your email.'
      : (emailOk(form.email) ? '' : 'Enter a valid work email.'),
    company: required(form.company) ? '' : 'Please enter your company.'
  };

  $: isValid = !errors.name && !errors.email && !errors.company && form.website === '';

  // Helpers
  const touch = (field: keyof typeof touched) => (touched[field] = true);
  const showError = (field: keyof typeof touched) => (touched[field] || showAll) && errors[field];

  function focusFirstInvalid() {
    const order: (keyof typeof touched)[] = ['name', 'email', 'company'];
    for (const id of order) {
      if (errors[id]) { document.getElementById(id)?.focus(); break; }
    }
  }

  let formEl: HTMLFormElement;

  // IMPORTANT: await tick() after showAll=true so styles/messages render before focusing
  async function onSubmit(e?: Event) {
    if (e) e.preventDefault();
    if (!isValid) {
      showAll = true;
      // let Svelte apply error classes + messages first
      await tick();
      focusFirstInvalid();
      return;
    }
    if (action) formEl.submit();      // post to Formspree
    else dispatch('submit', { form }); // local mode
  }
</script>

<section class="mb-48 w-full">
  <header class="mx-auto max-w-7xl px-3">
    <h2 class="h2 mb-9">{title}</h2>
    <p class="body">
      Complete the form below or
      <a href="https://cal.com/joellstocchero/30min" class="text-emerald-500 hover:underline hover:underline-offset-4">
        schedule an introduction
      </a>
      at your convenience.
    </p>
  </header>

  <form
    bind:this={formEl}
    method={method}
    action={action ?? undefined}
    on:submit|preventDefault={onSubmit}  
    novalidate
    class={`mx-auto mt-12 w-full max-w-7xl rounded-2xl border border-emerald-50/10 p-8 backdrop-blur
            ${density === 'compact' ? 'space-y-6' : 'space-y-12'}
            sm:p-10`}
    aria-describedby="contact-subtitle"
  >
    <div class="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-12">
      <!-- Name -->
      <div>
        <label for="name" class="inter block text-sm text-gray-50">* Name:</label>
        <input
          id="name" name="name" type="text"
          class={`inter mt-2 block w-full rounded-md border bg-gray-900/60 px-4 py-3 text-sm text-gray-100 placeholder-gray-500 focus:outline-none
                  ${showError('name')
                    ? 'border-rose-400 focus:ring-1 focus:ring-rose-400'
                    : 'border-gray-700  focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/50'}`}
          placeholder="Your name"
          bind:value={form.name}
          on:input={() => touch('name')}
          on:blur={() => touch('name')}
          aria-invalid={!!showError('name')}
          aria-describedby="name-error"
        />
        {#if showError('name')}
          <p id="name-error" role="alert" class="mt-2 text-xs text-rose-400">{errors.name}</p>
        {/if}
      </div>

      <!-- Email -->
      <div>
        <label for="email" class="inter block text-sm text-gray-50">* Email:</label>
        <input
          id="email" name="email" type="email"
          class={`inter mt-2 block w-full rounded-md border bg-gray-900/60 px-4 py-3 text-sm text-gray-100 placeholder-gray-500 focus:outline-none
                  ${showError('email')
                    ? 'border-rose-400 focus:ring-1 focus:ring-rose-400'
                    : 'border-gray-700  focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/50'}`}
          placeholder="you@company.com"
          bind:value={form.email}
          on:input={() => touch('email')}
          on:blur={() => touch('email')}
          aria-invalid={!!showError('email')}
          aria-describedby="email-error"
        />
        {#if showError('email')}
          <p id="email-error" role="alert" class="mt-2 text-xs text-rose-400">{errors.email}</p>
        {/if}
      </div>

      <!-- Company -->
      <div class="md:col-span-2">
        <label for="company" class="inter block text-sm text-gray-50">* Company:</label>
        <input
          id="company" name="company" type="text"
          class={`inter mt-2 block w-full rounded-md border bg-gray-900/60 px-4 py-3 text-sm text-gray-100 placeholder-gray-500 focus:outline-none
                  ${showError('company')
                    ? 'border-rose-400 focus:ring-1 focus:ring-rose-400'
                    : 'border-gray-700  focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/50'}`}
          placeholder="Acme Corp"
          bind:value={form.company}
          on:input={() => touch('company')}
          on:blur={() => touch('company')}
          aria-invalid={!!showError('company')}
          aria-describedby="company-error"
        />
        {#if showError('company')}
          <p id="company-error" role="alert" class="mt-2 text-xs text-rose-400">{errors.company}</p>
        {/if}
      </div>
    </div>

    <!-- Interests -->
    <div>
      <label class="inter block text-sm text-gray-50">Interests</label>
      <fieldset class="mt-2">
        <legend class="sr-only">Select one or more interests</legend>
        <div class="mt-2 grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3">
          {#each interestsOptions as opt, i}
            <div>
              <input id={'interest-' + i} type="checkbox" name="interests" value={opt} class="peer sr-only" bind:group={form.interests} />
              <label
                for={'interest-' + i}
                class="grid-link flex w-full cursor-pointer items-center gap-2 whitespace-nowrap rounded-md border border-gray-700 bg-gray-900/60 px-4 py-3 text-left transition
                       peer-checked:border-emerald-500/50 peer-checked:text-emerald-50 peer-checked:ring-1 peer-checked:ring-emerald-200/25 peer-checked:[&_.dot]:opacity-100"
              >
                <span class="dot h-2 w-2 rounded-full bg-emerald-400 opacity-0 transition" aria-hidden="true"></span>
                <span class="text-sm">{opt}</span>
              </label>
            </div>
          {/each}
        </div>
      </fieldset>
    </div>

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
      <!-- CLICK path (guaranteed) -->
      <button
        type="button"
        on:click={onSubmit}
        class="inter primary-cta w-full sm:w-auto cursor-pointer"
      >
        Connect with Pitch Nine
      </button>
    </div>
  </form>
</section>
