<script lang="ts">
	import { slideIn } from '$lib/transitions';
	import { skillGroups } from '$lib/data/skills';
</script>

<aside class="skills-panel">
    <span class="panel-info">Level of knowledge and experience from 1 to 10.</span>
    <div class="skills-container">
        {#each skillGroups as group}
            <div class="skills-group">
                <h3 class="skills-title">// {group.title}</h3>
                {#each group.skills as skill, i}
                    <div class="skill-item" in:slideIn={{ delay: i * 100 }}>
                        <span class="skill-checkbox" class:skill-checked={skill.checked}></span>
                        {skill.name}
                        <span class="skill-level">{skill.level}</span>
                    </div>
                {/each}
            </div>
        {/each}
    </div>
</aside>

<style>
	.skills-panel {
		width: 300px;
		background: var(--panel-bg);
		border-left: 1px solid var(--border);
		padding-left: 1rem;
    padding-right: 1rem;
    margin-top: 1rem;
    margin-bottom: 1rem;
		display: flex;
		flex-direction: column;
	}

	.panel-info {
		font-size: 0.9rem;
		color: var(--text);
		margin-bottom: 0.5rem;
		display: block;
	}

	/* Sección desplazable */
	.skills-container {
		overflow-y: auto;
		max-height: 85vh;
		padding-right: 5px;
		scrollbar-width: thin;
		scrollbar-color: var(--primary) transparent;
	}

	/* Personalizar scrollbar */
	.skills-container::-webkit-scrollbar {
		width: 6px;
	}

	.skills-container::-webkit-scrollbar-thumb {
		background: var(--primary);
		border-radius: 4px;
	}

	.skills-group {
		margin-bottom: 1.5rem;
	}

	.skills-title {
		margin-bottom: 0.8rem;
		padding-left: 1rem;
		border-left: 2px solid var(--primary);
		color: var(--primary);
		font-size: 1rem;
	}

	.skill-item {
		display: flex;
		align-items: center;
		gap: 0.5rem;
		padding: 0.5rem;
		background: var(--panel-bg-light);
		border-radius: 4px;
		margin-bottom: 5px;
	}

	.skill-checkbox {
		width: 16px;
		height: 16px;
		border: 1px solid #4f5666;
	}

	.skill-checked {
		background: var(--primary);
	}

	.skill-level {
		margin-left: auto;
		font-size: 0.8rem;
		opacity: 0.8;
		background: var(--primary);
		padding: 0.2rem 0.5rem;
		border-radius: 4px;
		color: var(--border);
		font-weight: bold;
	}

	/* Responsive */
	@media (max-width: 1024px) {
		.skills-panel {
			width: 100%;
			border-left: none;
			border-top: 1px solid var(--border);
		}

		.skills-container {
			max-height: 50vh;
		}
	}
</style>
