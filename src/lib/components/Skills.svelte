<script lang="ts">
    import { slideIn } from '$lib/transitions';
    import { skillGroups } from '$lib/data/skills';
</script>

<aside class="skills-panel">
    <span>Level of knowledge and experience from 1 to 10.</span>
    <br>
    <br>
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
</aside>

<style>
  .skills-panel {
    width: 300px;
    background: var(--panel-bg);
    border-left: 1px solid var(--border);
    padding: 1rem;
  }
  .skill-level {
    margin-left: auto;
    font-size: 0.8em;
    opacity: 0.8;
    background: var(--primary);
    padding: 0.2rem 0.5rem;
    border-radius: 4px;
    color: var(--border);
    font-weight: bold;
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