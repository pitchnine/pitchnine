<script lang="ts">
  import { createEventDispatcher } from 'svelte';

  export let title = 'Access analysis';
  export let answers: ('A'|'B'|'C'|'D'|null)[] = [];

  // parent-driven props
  export let submitting: boolean = false;
  export let serverError: string = '';

  const dispatch = createEventDispatcher<{
    close: void;
    submit: { email: string; company: string; consent: boolean; answers: ('A'|'B'|'C'|'D'|null)[] };
  }>();

  let email = '';
  let company = '';
  let consent = false;

  // simple per-field errors
  let emailError = '';
  let companyError = '';
  let consentError = '';

  function handleClose() {
    dispatch('close');
  }

  function validate() {
    emailError = '';
    companyError = '';
    consentError = '';

    const emailOk = /\S+@\S+\.\S+/.test(email);

    if (!email) emailError = 'Please enter your work email.';
    else if (!emailOk) emailError = 'Enter a valid email (you@company.com).';

    if (!company) companyError = 'Please enter your company.';
    if (!consent) consentError = 'Please check the box to continue.';

    return !(emailError || companyError || consentError);
  }

  function handleSubmitClick() {
    if (!validate()) return;
    dispatch('submit', { email, company, consent, answers });
  }
</script>

<div class="relative h-full w-full">
  <form class="flex h-full items-center justify-center px-6" on:submit|preventDefault={handleSubmitClick}>
    <div class="w-full max-w-md rounded-lg border border-gray-700/40 bg-gray-900/70 p-6 backdrop-blur">
      <div class="w-full flex flex-row justify-between align-top">
        <h3 class="text-2xl font-semibold text-gray-50 mb-3">{title}</h3>
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

      <!-- Optional server error -->
      {#if serverError}
        <div class="mb-4 rounded-md border border-red-500/30 bg-red-900/30 px-3 py-2 text-sm text-red-200">
          {serverError}
        </div>
      {/if}

      <div class="mt-6 space-y-8">
        <!-- Email -->
        <div>
          <label for="email" class="inter block text-sm text-gray-50">Work email</label>
          <input
            id="email"
            type="email"
            class={`inter mt-2 text-sm block w-full rounded-md border px-4 py-3 text-gray-100 placeholder-gray-500 focus:outline-none focus:ring-1
              ${emailError ? 'border-red-500/60 bg-red-900/20 focus:ring-red-500/50' : 'border-gray-700 bg-gray-900/60 focus:border-emerald-500/50 focus:ring-emerald-500/50'}`}
            placeholder="you@company.com"
            bind:value={email}
          />
          {#if emailError}
            <p class="mt-1 text-xs text-red-300">{emailError}</p>
          {/if}
        </div>

        <!-- Company -->
        <div>
          <label for="company" class="inter block text-sm text-gray-50">Company name</label>
          <input
            id="company"
            type="text"
            class={`inter mt-2 text-sm block w-full rounded-md border px-4 py-3 text-gray-100 placeholder-gray-500 focus:outline-none focus:ring-1
              ${companyError ? 'border-red-500/60 bg-red-900/20 focus:ring-red-500/50' : 'border-gray-700 bg-gray-900/60 focus:border-emerald-500/50 focus:ring-emerald-500/50'}`}
            placeholder="Name of organization"
            bind:value={company}
          />
          {#if companyError}
            <p class="mt-1 text-xs text-red-300">{companyError}</p>
          {/if}
        </div>

        <!-- Consent -->
        <label class="flex items-start gap-3 text-sm text-gray-300">
          <input
            id="consent"
            type="checkbox"
            class={`mt-1 h-4 w-4 rounded border ${consentError ? 'border-red-500 bg-red-900/30' : 'border-gray-600 bg-gray-900'} text-emerald-500/50 focus:ring-emerald-500`}
            bind:checked={consent}
          />
          <span>I agree to receive extremely brief and very rare communications from Pitch Nine.</span>
        </label>
        {#if consentError}
          <p class="mt-1 text-xs text-red-300">{consentError}</p>
        {/if}
      </div>

      <!-- Submit -->
      <div class="mt-6">
        <button
          type="submit"
          class="inter primary-cta w-full mt-6 disabled:opacity-50 disabled:cursor-not-allowed"
          aria-label="submit"
          disabled={submitting}
        >
          {#if submitting}Submitting…{/if}
          {#if !submitting}Access my analysis{/if}
        </button>
      </div>
    </div>
  </form>
</div>
