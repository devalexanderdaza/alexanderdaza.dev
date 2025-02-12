<script lang="ts">
	import { type IExperience } from '$lib/data/index';
	import { slide } from 'svelte/transition';

	export let experience: IExperience;

	function generateResumeFromExperience(experienceDescription: string): string {
		const experienceDescriptionArray = experienceDescription.split('\n');
		let resume = '';
		for (let i = 0; i < experienceDescriptionArray.length; i++) {
			resume += `<p>${experienceDescriptionArray[i]}</p>`;
			resume += '<br />';
		}
		return resume;
	}

	function cutString(str: string, length: number): string {
		return str.length > length ? str.substring(0, length) + '...' : str;
	}
</script>

<div class="certificate" transition:slide>
	<div class="certificate-header">
		<div class="provider-info">
			<h3>{experience.name.split('\n')[0]}</h3>
		</div>
	</div>

	<div class="certificate-body">
		<span class="company">
			💻 {experience.company.split('\n')[0].split(' · ')[0].toUpperCase()}
		</span>
		<br />
		<br />
		<p class="expedition">
			📆 Work time: {experience.workDates} 🕘 {experience.company.split('\n')[0].split(' · ')[1]}
		</p>
		<div class="skills">
			<p class="description">{cutString(experience.workDescription, 220)}</p>
			<!-- {@html generateResumeFromExperience(experience.workDescription)} -->
		</div>
	</div>

	<div class="certificate-footer">
		<a href={experience.company} target="_blank" class="download-btn">
			<i class="fa-solid fa-file-pdf"></i> View Work Experience
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
		border-top: 1px solid var(--border);
		padding-top: 1rem;
	}

	.certificate:hover {
		transform: translateY(-5px);
		box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
	}

	.certificate-header {
		display: flex;
		align-items: center;
		gap: 1rem;
		min-height: 50px;
		padding-bottom: 1rem;
		border-bottom: 1px solid var(--border);
	}

	.company {
		color: var(--secondary);
		font-weight: bold;
		font-size: 1.2rem;
	}

	.provider-info h3 {
		font-size: 1.2rem;
		margin: 0;
		color: var(--primary);
	}

	.provider-info {
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
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

	.download-btn {
		display: inline-block;
		background: var(--secondary);
		color: var(--bg-dark);
		padding: 0.8rem 1.2rem;
		border-radius: 4px;
		text-decoration: none;
		font-weight: bold;
		transition: all 0.2s;
	}

	.download-btn:hover {
		background: var(--primary);
		transform: scale(1.05);
	}
</style>
