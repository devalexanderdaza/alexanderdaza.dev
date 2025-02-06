<script lang="ts">
    import { slideIn } from '$lib/transitions';
  const skillGroups = [
    {
      title: 'Programming languages I have learned or am learning',
      skills: [
        { name: 'HTML', checked: true },
        { name: 'CSS', checked: true },
        { name: 'JavaScript', checked: true },
        { name: 'React', checked: false },
        { name: 'TypeScript', checked: false }
      ]
    },
    {
      title: 'Operating Systems and other programs',
      skills: [
        { name: 'Windows', checked: true },
        { name: 'Mac OS', checked: true },
        { name: 'Linux', checked: true },
        { name: 'Adobe Suite', checked: true },
        { name: 'Figma', checked: true }
      ]
    }
  ];
</script>

<aside class="skills-panel">
  {#each skillGroups as group}
    <div class="skills-group">
      <h3 class="skills-title">// {group.title}</h3>
      {#each group.skills as skill, i}
        <div class="skill-item" in:slideIn={{ delay: i * 100 }}>
          <span class="skill-checkbox" class:skill-checked={skill.checked} />
          {skill.name}
        </div>
      {/each}
    </div>
  {/each}
</aside>

<style>
  .skills-panel {
    width: 300px;
    background: var(--panel-bg);
    border-left: 1px solid var(--border);
    padding: 1rem;
  }
  .skills-group { margin-bottom: 2rem; }
  .skills-title {
    margin-bottom: 1rem;
    padding-left: 1rem;
    border-left: 2px solid var(--primary);
  }
  .skill-item {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.5rem;
  }
  .skill-checkbox {
    width: 16px;
    height: 16px;
    border: 1px solid #4f5666;
  }
  .skill-checked { background: var(--primary); }

  @media (max-width: 1024px) {
    .skills-panel {
      width: 100%;
      border-left: none;
      border-top: 1px solid var(--border);
    }
  }
</style>