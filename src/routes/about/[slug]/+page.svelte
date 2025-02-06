<script lang="ts">
	import Bio from '$lib/components/Bio.svelte';
	import { page } from '$app/state';
	import Editor from '$lib/components/Editor.svelte';
	import WorkExperience from '$lib/components/WorkExperience.svelte';
	import Education from '$lib/components/Education.svelte';
	import Certificates from '$lib/components/Certificates.svelte';
</script>

<div>
	{#if page.url.pathname === '/about/me'}
		<Editor />
	{/if}

    {#if page.url.pathname === '/about/bio'}
		<Bio />
	{/if}

    {#if page.url.pathname === '/about/experience'}
		<WorkExperience />
	{/if}

	{#if page.url.pathname === '/about/education'}
		<Education />
	{/if}

    {#if page.url.pathname === '/about/certificates'}
		<Certificates />
	{/if}
</div>
