<script lang="ts">
    export const prerender = true;
	import { fade } from 'svelte/transition';
	import { page } from '$app/stores';
	import Nav from '$lib/components/Nav.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import '../styles/global.css';
</script>

<Nav />
{#key $page.url.pathname}
	<main in:fade={{ duration: 300 }}>
		<slot />
	</main>
{/key}
<br />
<Footer />
