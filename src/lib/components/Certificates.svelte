<script lang="ts">
 import { fade } from 'svelte/transition';
 import { certificates } from '$lib/data/certificates';
 import Certificate from './Certificate.svelte';

 let certificatesData = $state(certificates);
</script>

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