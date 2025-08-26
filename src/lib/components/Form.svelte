<script lang="ts">
	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();

	const CheckIcon = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" width="20" height="20" fill="currentColor" aria-hidden="true">
  <path d="M16.707 5.293a1 1 0 0 1 0 1.414l-7.25 7.25a1 1 0 0 1-1.414 0l-3-3a1 1 0 1 1 1.414-1.414l2.293 2.293 6.543-6.543a1 1 0 0 1 1.414 0z"/>
</svg>`;

	// ---- Public props (customize per page) ----
	export let title = 'Learn more.';
	export let subtitle = 'Complete the form to begin the conversation. All responses are returned within 1 business day.';
	// If `action` is provided, the form POSTs to that URL. Otherwise, it will dispatch("submit", { form })
	export let action: string | null = null;
	export let method: 'POST' | 'GET' = 'POST';

	// Tailwind size variant: "base" | "compact"
	export let density: 'base' | 'compact' = 'base';

	// Options for the multi-select
	export let interestsOptions: string[] = [
		'Executive Diagnostic',
		'AI Readiness',
		'Innovation Audit',
		'Backlog Remediation',
        'Governance Blueprint',
        'Pilot Enablement',
		'Data & Integrations',
        'Vendor Diligence',
		'General Consultation'
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


<div class="w-full flex flex-col md:flex-row items-start justify-between gap-12 md:gap-40">
      
      <!-- Left column: text -->
      <div class="w-full md:w-1/3">
        <h2 class="inter header-form mb-12">{title}</h2>
        {#if subtitle}
          <p class="inter text-lg text-gray-300 leading-relaxed mb-3">
            {subtitle}
          </p>
        {/if}
        <p class="inter text-gray-500">
          Or reach us directly at <a href="mailto:hello@pitchnine.com" class="text-emerald-500 hover:underline hover:underline-offset-4">hello@pitchnine.com</a>
        </p>
      </div>

      <!-- Right column: form -->
      <form
        class={`w-full md:w-2/3 ${density === 'compact' ? 'space-y-4' : 'space-y-9'}`}
        {method}
        action={action ?? undefined}
        on:submit={handleSubmit}
        novalidate
      >
        <!-- Fields -->
        <div class="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6">
          <!-- Name -->
          <div>
            <label for="name" class="inter block text-sm text-gray-50">Name *</label>
            <input
              id="name"
              name="name"
              type="text"
              class="inter mt-2 block w-full rounded-xl border border-gray-700 bg-gray-900/60 px-4 py-3 text-gray-100 placeholder-gray-500 focus:border-emerald-500/50 focus:outline-none focus:ring-1 focus:ring-emerald-500/50"
              placeholder="Full name"
              bind:value={form.name}
              required
            />
          </div>

          <!-- Email -->
          <div>
            <label for="email" class="block text-sm font-medium text-gray-200">Email *</label>
            <input
              id="email"
              name="email"
              type="email"
              class="inter mt-2 block w-full rounded-xl border border-gray-700 bg-gray-900/60 px-4 py-3 text-gray-100 placeholder-gray-500 focus:border-emerald-500/50 focus:outline-none focus:ring-1 focus:ring-emerald-500/50"
              placeholder="you@company.com"
              bind:value={form.email}
              required
            />
          </div>

          <!-- Company -->
          <div>
            <label for="company" class="block text-sm font-medium text-gray-200">Company *</label>
            <input
              id="company"
              name="company"
              type="text"
              class="inter mt-2 block w-full rounded-xl border border-gray-700 bg-gray-900/60 px-4 py-3 text-gray-100 placeholder-gray-500 focus:border-emerald-500/50 focus:outline-none focus:ring-1 focus:ring-emerald-500/50"
              placeholder="Acme Corp"
              bind:value={form.company}
              required
            />
          </div>

          <!-- Interests -->
          <div class="md:col-span-2">
            <label class="block text-sm font-medium text-gray-200">Interests *</label>
            <fieldset class="mt-2">
              <legend class="sr-only">Select one or more interests</legend>
              <div class="mt-2 grid grid-cols-1 gap-6 sm:grid-cols-2">
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
  class="grid-link w-full h-12 flex items-center justify-start gap-3 cursor-pointer
         transition peer-checked:border-emerald-50/50 peer-checked:text-emerald-50
         peer-checked:ring-1 peer-checked:ring-emerald-200/15
         [&_.badge-check]:opacity-0
         peer-checked:[&_.badge-check]:opacity-100"
>
  <span
    class="inline-flex h-6 w-6 items-center justify-center rounded-full
           bg-gray-900/50 text-emerald-300/50
           transition-colors duration-200
           peer-checked:bg-emerald-400 peer-checked:text-emerald-900"
    aria-hidden="true"
  >
    <span class="badge-check transition-opacity duration-150 [&_svg]:h-4 [&_svg]:w-4">
      {@html CheckIcon}
    </span>
  </span>

  <span class="inter text-sm font-medium">{opt}</span>
</label>

                  </div>
                {/each}
              </div>
            </fieldset>
          </div>
        </div>

        <div class="border border-b-[0.5] border-emerald-50/10 rounded-full"></div>
    <!-- Honeypot -->
        <div class="hidden">
          <label>
            Do not fill this out
            <input name="website" bind:value={form.website} autocomplete="off" />
          </label>
        </div>
        <!-- Submit -->
        <div class="pt-4">
          <button type="submit" class="inter primary-cta w-full md:w-auto" disabled={!isValid}>
            Request a consultation
          </button>
        </div>
      </form>


</div>

