<script lang="ts">
  import Nav from '$lib/components/Nav.svelte';
  import Footer from '$lib/components/Footer.svelte';
  import '../styles/global.css';

  export const prerender = true;
    export const ssr = false;
</script>

<Nav />
<slot />
<Footer />