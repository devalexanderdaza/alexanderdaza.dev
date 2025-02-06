<script lang="ts">
  interface Project {
    title: string;
    description: string;
    tech: string[];
    github: string;
  }

  const projects: Project[] = [
    {
      title: 'Portfolio',
      description: 'Personal portfolio website',
      tech: ['Svelte', 'TypeScript', 'CSS'],
      github: 'https://github.com/daveinthehood/portfolio'
    }
  ];
</script>

<div class="projects-container">
  {#each projects as project}
    <div class="project-card">
      <h3>{project.title}</h3>
      <p>{project.description}</p>
      <div class="tech-stack">
        {#each project.tech as tech}
          <span class="tech-tag">{tech}</span>
        {/each}
      </div>
      <a href={project.github} target="_blank" rel="noopener">View on GitHub</a>
    </div>
  {/each}
</div>

<style>
  .projects-container {
    padding: 2rem;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
  }

  .project-card {
    background: rgba(30, 45, 61, 0.5);
    padding: 1.5rem;
    border: 1px solid var(--border);
    border-radius: 4px;
  }
</style>