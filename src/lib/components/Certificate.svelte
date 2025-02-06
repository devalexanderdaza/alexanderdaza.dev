<script lang="ts">
 import { slide } from 'svelte/transition';
 
 export let certificate;
</script>

<div class="certificate" transition:slide>
 <div class="certificate-header">
   <img src={certificate.providerLogo} alt={certificate.provider} />
   <div class="provider-info">
     <h3>{certificate.name}</h3>
     <span>{certificate.provider}</span>
   </div>
 </div>
 
 <div class="certificate-body">
   <p class="expedition">Obtained: {certificate.expedition.split(' ')[0].charAt(0).toUpperCase() + certificate.expedition.split(' ')[0].slice(1)} {certificate.expedition.split(' ')[1]}</p>
   <div class="skills">
     {#each certificate.skills.split(',') as skill}
       <span class="skill-tag">{skill.trim()}</span>
     {/each}
   </div>
 </div>
 
 <div class="certificate-footer">
   <a href={certificate.url} target="_blank" class="download-btn">
     <i class="fa-solid fa-file-pdf"></i> View Certificate
   </a>
 </div>
</div>

<style>
  .certificate {
   position: relative;
   display: flex; 
   flex-direction: column;
   background: var(--panel-bg);
   border: 1px solid var(--border);
   border-radius: 8px;
   padding: 1.5rem;
   transition: transform 0.2s;
   min-height: 300px;
 }

 .certificate-footer {
   margin-top: auto;
   text-align: center;
 }

 .certificate:hover {
   transform: translateY(-5px);
   box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
 }

 .certificate-header {
   display: flex;
   align-items: center;
   gap: 1rem;
   margin-bottom: 1rem;
 }

 img {
   width: 60px;
   height: 60px;
   border-radius: 8px;
   object-fit: contain;
 }

 .provider-info h3 {
   font-size: 1.2rem;
   margin: 0;
   color: var(--primary);
 }

 .provider-info span {
   font-size: 0.9rem;
   color: var(--text);
 }

 .certificate-body {
   margin: 1rem 0;
 }

 .expedition {
   font-size: 0.9rem;
   color: var(--text);
   margin-bottom: 1rem;
 }

 .skills {
   display: flex;
   flex-wrap: wrap;
   gap: 0.5rem;
 }

 .skill-tag {
   background: var(--bg-dark-2);
   color: var(--text-highlight);
   padding: 0.3rem 0.6rem;
   border-radius: 4px;
   font-size: 0.8rem;
 }

 .download-btn {
   display: inline-block;
   background: var(--primary);
   color: var(--bg-dark);
   padding: 0.8rem 1.2rem;
   border-radius: 4px;
   text-decoration: none;
   font-weight: 500;
   transition: all 0.2s;
 }

 .download-btn:hover {
   background: var(--secondary);
   transform: scale(1.05);
 }
</style>