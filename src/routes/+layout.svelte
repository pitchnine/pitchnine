<script>
  import '../app.css'; 

   import { page } from '$app/stores';

  const SITE_NAME = 'Pitch Nine';
  const SITE_URL  = 'https://pitchnine.com';
  const DEFAULT_TITLE = 'Product Innovation for Regulated Industries';
  const DEFAULT_DESC  = 'We turn backlogs into roadmaps, ambiguity into clarity and ship innovation with governance. Healthcare, insurance, and other high-stakes sectors preferred.';
  const DEFAULT_IMAGE = `${SITE_URL}/images/social-share.jpg`;

  $: seo = $page.data?.seo ?? {};
  $: title = seo.title ? `${seo.title} | ${SITE_NAME}` : `${SITE_NAME} | ${DEFAULT_TITLE}`;
  $: desc  = seo.description ?? DEFAULT_DESC;
  $: image = seo.image ?? DEFAULT_IMAGE;

  $: urlObj = $page.url;
  $: canonical = `${SITE_URL}${urlObj.pathname.replace(/\/$/, '') || '/'}`;
</script>

<svelte:head>
  <!-- Primary -->
  <title>{title}</title>
  <meta name="description" content={desc} />

  <!-- Canonical -->
  <link rel="canonical" href={canonical} />

  <!-- Open Graph -->
  <meta property="og:type" content="website" />
  <meta property="og:site_name" content={SITE_NAME} />
  <meta property="og:url" content={canonical} />
  <meta property="og:title" content={title} />
  <meta property="og:description" content={desc} />
  <meta property="og:image" content={image} />

  <!-- Twitter -->
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content={title} />
  <meta name="twitter:description" content={desc} />
  <meta name="twitter:image" content={image} />

  <!-- JSON-LD Organization (edit to taste) -->
  <script type="application/ld+json">
    {JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: SITE_NAME,
      url: SITE_URL,
      logo: `${SITE_URL}/favicon.png`,
      sameAs: [
        'https://www.linkedin.com/company/pitch-nine'
      ]
    })}
  </script>
</svelte:head>

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
</style>
