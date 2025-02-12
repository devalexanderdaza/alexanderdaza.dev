<script lang="ts">
	import { fade, slide } from 'svelte/transition';
	import { onMount, onDestroy } from 'svelte';
	import { type IExperience } from '$lib/data/index';

	export let experience: IExperience;
	let isModalOpen = false;

	// Convierte la descripción en HTML con <p> y <br />
	function generateResumeFromExperience(experienceDescription: string): string {
		return experienceDescription.split('\n').map(line => `<p>${line}</p>`).join('<br />');
	}

	function cutString(str: string, length: number): string {
		return str.length > length ? str.substring(0, length) + '...' : str;
	}

	// Manejo del cierre con la tecla Escape
	function handleKeyDown(event: KeyboardEvent) {
		if (event.key === 'Escape' && isModalOpen) {
			isModalOpen = false;
		}
	}

	function handleScroll() {
		if (isModalOpen && (window.scrollY > 100 || window.scrollY < -100)) {
			isModalOpen = false;
		}
	}

	onMount(() => {
		window.addEventListener('keydown', handleKeyDown);
		window.addEventListener('scroll', handleScroll);
	});

	onDestroy(() => {
		window.removeEventListener('keydown', handleKeyDown);
		window.removeEventListener('scroll', handleScroll);
	});
</script>

<!-- Tarjeta de experiencia -->
<div class="certificate" transition:slide>
	<div class="certificate-header">
		<div class="provider-info">
			<h3>{experience.name.split('\n')[0]}</h3>
		</div>
	</div>

	<div class="certificate-body">
		<span class="company">💼 {experience.company.split('\n')[0].split(' · ')[0].toUpperCase()}</span>
		<br />
		<br />
		<p class="expedition">📆 Work time: {experience.workDates} 🕘 {experience.company.split('\n')[0].split(' · ')[1]}</p>
		<div class="skills">
			<p class="description">{cutString(experience.workDescription, 220)}</p>
		</div>
	</div>

	<div class="certificate-footer">
		<button class="download-btn" on:click={() => isModalOpen = true}>
			<i class="fa-solid fa-file-pdf"></i> View Work Experience
		</button>
	</div>
</div>

<!-- Modal de detalles -->
{#if isModalOpen}
	<!-- svelte-ignore a11y_click_events_have_key_events -->
	<div class="modal-overlay" transition:fade on:click={() => isModalOpen = false}>
		<!-- svelte-ignore a11y_click_events_have_key_events -->
		<div class="modal" transition:slide on:click={(e) => e.stopPropagation()}>
			<div class="modal-header">
				<h2>🤓 {experience.name.split('\n')[0].toUpperCase()}</h2>
				<p class="company">💼 {experience.company.split('\n')[0].split(' · ')[0].toUpperCase()}</p>
				<br>
				<p class="expedition">📅 {experience.workDates.toUpperCase()}</p>
				<p class="expedition">🕘 {experience.company.split('\n')[0].split(' · ')[1].toUpperCase()}</p>	
			</div>
			<hr>
			<div class="modal-content">
				<h3>📋 Description:</h3>
				<br>
				{@html generateResumeFromExperience(experience.workDescription)}
				<hr>
				<span class="skills-container">{@html generateResumeFromExperience(experience.skills)}</span>
			</div>
			<button class="close-btn" on:click={() => isModalOpen = false}>Close</button>
		</div>
	</div>
{/if}

<style>
	.modal-header {
		display: flex;
		flex-direction: column;
		align-items: center;
		font-size: 1.2rem;
	}

	hr {
		border: 0;
		border-top: 1px solid var(--border);
		margin: 1rem 0;
	}

	.skills-container {
		display: flex;
		flex-wrap: wrap;
		gap: 0.5rem;
		text-align: center;
		color: var(--secondary);
	}

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
		cursor: pointer;
	}

	.download-btn:hover {
		background: var(--primary);
		transform: scale(1.05);
	}

	/* Modal */
	.modal-overlay {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background: rgba(0, 0, 0, 0.6);
		display: flex;
		justify-content: center;
		align-items: center;
		z-index: 1000;
	}

	.modal {
		background: var(--bg-dark);
		color: var(--text);
		padding: 2rem;
		border-radius: 10px;
		width: 50%;
		max-height: 80vh; /* Asegura que el modal no sea más alto que la pantalla */
		overflow: hidden; /* Evita desbordamiento */
		box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
		display: flex;
		flex-direction: column;
	}

	.modal h2 {
		margin: 0 0 1rem;
		color: var(--primary);
	}

	.modal-content {
		flex-grow: 1; /* Permite que el contenido crezca y llene el espacio */
		overflow-y: auto; /* Habilita scroll si el contenido es muy largo */
		padding-right: 1rem; /* Evita que el contenido pegue al borde */
		max-height: 60vh; /* Ajusta la altura máxima en móviles */
	}

	.close-btn {
		margin-top: 1rem;
		background: transparent;
		color: var(--primary);
		text-decoration: none;
		border: 1px solid var(--primary);
		border-radius: 5px;
		padding: 0.7rem 1.5rem;
		cursor: pointer;
		font-weight: bold;
		transition: all 0.2s;
		display: inline-block;
		width: 100%;
		text-align: center;
	}

	.close-btn:hover {
		background: var(--primary);
		color: var(--bg-dark);
		transform: scale(1.01);
	}

	@media (max-width: 768px) {
		.modal {
			width: 90%;
			padding: 1.5rem;
			max-height: 85vh; /* Aumenta la altura en móviles */
		}

		.modal-content {
			max-height: 70vh; /* Ajusta para permitir más scroll */
		}
	}
</style>
