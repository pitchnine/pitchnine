<script>
    import Nav from '$lib/components/Nav.svelte';
    import Footer from '$lib/components/Footer.svelte';
    import ContactHero from '$lib/components/ContactHero.svelte';
    import Form from '$lib/components/Form.svelte';

    export const load = async () => {
  return {
    seo: {
      title: 'Contact',
      description: 'Product consultation starts with a free conversation.',
      image: 'https://pitchnine.com/images/social-share.jpg' // optional override
    }
  };
};
</script>


<Nav />

<ContactHero />

<div class="mx-auto max-w-7xl my-64 md:my-88 px-9 md:px-12" id="contact">
    <Form />
</div>

<Footer />