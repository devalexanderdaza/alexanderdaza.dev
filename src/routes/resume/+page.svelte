<script lang="ts">
	import Education from '$lib/components/Education.svelte';
	import WorkExperience from '$lib/components/WorkExperience.svelte';
	import { workExperience, skillGroups, education, certificates } from '$lib/data/index';
	import { slide } from 'svelte/transition';
</script>

<div class="resume" in:slide>
	<!-- Header -->
	<section class="header">
		<h1>Neyib Alexander Daza Guerrero</h1>
		<h2>Sr. Full Stack Developer | Mobile Developer | Blockchain Engineer</h2>
		<div class="contact">
			<a href="mailto:contacto@alexanderdaza.dev"><i class="fa-solid fa-envelope"></i> contacto@alexanderdaza.dev</a>
			<a href="tel:+573212191184"><i class="fa-solid fa-phone"></i> +57 321 219 1184</a>
			<a href="https://linkedin.com/in/devalexanderdaza" target="_blank"><i class="fa-brands fa-linkedin"></i> LinkedIn</a>
			<a href="https://github.com/devalexanderdaza" target="_blank"><i class="fa-brands fa-github"></i> GitHub</a>
		</div>
	</section>

	<div class="download-resume">
		<a href="https://drive.google.com/file/d/16O12wFWuz6-UCb33XuvyH6fUh8WC7uFk/view?usp=drive_link" target="_blank"><i class="fa-solid fa-file-pdf"></i> Download Resume</a>
	</div>

	<!-- Experience -->
	<section class="experience">
		<h3><i class="fa-solid fa-briefcase"></i> Work Experience</h3>
		<div class="timeline">
			<WorkExperience />
		</div>
	</section>
	<br>
	<br>
	<br>

	<!-- Skills -->
	<section class="skills">
		<h3><i class="fa-solid fa-screwdriver-wrench"></i> Technical Skills</h3>
		<div class="skills-grid">
			{#each skillGroups as group}
				<div class="skill-group">
					<h4>{group.title}</h4>
					<br>
					<div class="skill-items">
						{#each group.skills as skill}
							<div class="skill-item">
								<span class="skill-name">{skill.name}</span>
								<div class="skill-level" style="--level: {skill.level}0%"></div>
							</div>
						{/each}
					</div>
				</div>
			{/each}
		</div>
	</section>
	<br>
	<br>
	<br>
	<!-- Education -->
	<section class="education">
		<h3><i class="fa-solid fa-graduation-cap"></i> Education & Certifications</h3>
		<div class="education-grid">
			<div class="formal-education">
				<h4>Formal Education</h4>
				<br>
				<Education />
			</div>
			<div class="certifications">
				<h4>Professional Certifications</h4>
				<br>
				<div class="cert-grid">
					{#each certificates as certification}
						<div class="cert-item">
							<span class="cert-name"><a href={certification.url} target="_blank">{certification.name}</a></span><span class="cert-provider">{certification.provider}</span>
						</div>
					{/each}
				</div>
			</div>
		</div>
	</section>
	<br>
	<br>
	<br>
	<br>
	<br>
	<br>
	<br>
</div>

<style>
	.resume {
		max-width: 1200px;
		margin: 0 auto;
		padding: 2rem;
		color: var(--text-color);
	}

	.header {
		text-align: center;
		margin-bottom: 3rem;
	}

	.header h1 {
		font-size: 2.5rem;
		margin-bottom: 0.5rem;
	}

	.header h2 {
		font-size: 1.5rem;
		margin-bottom: 0.5rem;
	}

	.contact {
		display: flex;
		justify-content: center;
		gap: 2rem;
		margin-top: 1rem;
	}

	.timeline {
		display: grid;
		gap: 2rem;
	}

	.cert-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
		gap: 2rem;
	}

	.cert-item {
		display: flex;
		justify-content: space-between;
		align-items: center;
		gap: 1rem;
		border-bottom: 1px solid var(--border);
		padding-bottom: 1rem;
		font-family:'Courier New', Courier, monospace
	}

	.cert-name {
		font-weight: bold;
	}

	.cert-provider {
		font-size: 1rem;
		color: var(--text-color);
		font-family:'Courier New', Courier, monospace;
		font-weight: bold;
	}

	a {
		color: var(--primary);
		text-decoration: none;
	}

	.skills-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
		gap: 2rem;
	}

	.skill-level {
		height: 4px;
		background: var(--primary);
		width: var(--level);
		border-radius: 2px;
	}

	.education-grid {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 2rem;
	}

	@media (max-width: 768px) {
		.education-grid {
			grid-template-columns: 1fr;
		}

		.contact {
			flex-direction: column;
			gap: 0.5rem;
		}
	}

	h3 {
		color: var(--primary);
		margin-bottom: 1.5rem;
		border-bottom: 2px solid var(--border);
		padding-bottom: 0.5rem;
	}

	h4 {
		color: var(--text-highlight);
	}

	.download-resume {
		text-align: center;
		margin-bottom: 5rem;
	}

	.download-resume a {
		background: var(--primary);
		color: var(--border);
		padding: 0.5rem 1rem;
		border-radius: 4px;
		text-decoration: none;
		font-family:'Courier New', Courier, monospace;
		font-weight: bold;
		cursor: pointer;
		padding-top: 1rem;
	}

	.download-resume a:hover {
		background: var(--secondary);
	}

	.download-resume a:active {
		background: var(--secondary);
	}

	.download-resume a:focus {
		background: var(--secondary);
	}

	.download-resume a:visited {
		background: var(--secondary);
	}
</style>
