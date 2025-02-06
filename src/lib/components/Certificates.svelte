<script lang="ts">
 import { fade } from 'svelte/transition';
 import { certificates } from '$lib/data/certificates';
 import Certificate from './Certificate.svelte';

 let certificatesData = $state(certificates);
</script>

<svelte:head>
	<title>Alexander Daza | Certificates</title>
	<meta name="description" content="Alexander Daza | Certificates">
	<meta name="keywords" content="Alexander Daza, Certificates, Full Stack Developer, Mobile Developer, Blockchain Engineer">
	<meta name="author" content="Alexander Daza">
</svelte:head>

<div class="certificates-grid" in:fade>
 {#each certificatesData as certificate}
   <Certificate {certificate} />
 {/each}
</div>

<style>
 .certificates-grid {
   display: grid;
   grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
   gap: 2rem;
   padding: 2rem;
 }

 @media (max-width: 768px) {
   .certificates-grid {
     grid-template-columns: 1fr;
     padding: 1rem;
   }
 }
</style>