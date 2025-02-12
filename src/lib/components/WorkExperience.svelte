<script lang="ts">
  import { workExperiences } from '$lib/data/workExperience';
	import { fade } from 'svelte/transition';
	import Work from './Work.svelte';
</script>

<svelte:head>
    <title>Alexander Daza | Work Experience</title>
    <meta name="description" content="Alexander Daza | Work Experience">
    <meta name="keywords" content="Alexander Daza, Work Experience, Full Stack Developer, Mobile Developer, Blockchain Engineer">
    <meta name="author" content="Alexander Daza">
</svelte:head>

<div class="certificates-grid" in:fade>
 {#each workExperiences as experience}
   <Work {experience} />
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