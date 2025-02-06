<script lang="ts">
    import { slide } from 'svelte/transition';
  import { createEventDispatcher } from 'svelte';

  const dispatch = createEventDispatcher();

  interface SidebarSection {
    title: string;
    items: Array<{
      icon: string;
      text: string;
    }>;
  }

  interface Section {
    title: string;
    isOpen: boolean;
    items: Array<{icon: string; text: string;}>;
  }

  const sectionsBase: SidebarSection[] = [
    {
      title: 'personal-info',
      items: [
        { icon: '📁', text: 'bio' },
        { icon: '📁', text: 'interests' },
        { icon: '📁', text: 'education' }
      ]
    },
    {
      title: 'contacts',
      items: [
        { icon: '✉️', text: 'davide_simone1996@proton.me' },
        { icon: '📞', text: '+39 392 86 08 006' }
      ]
    }
  ];

  let sections: Section[] = [
    {
      title: 'personal-info',
      isOpen: true,
      items: [
        { icon: '📁', text: 'bio' },
        { icon: '📁', text: 'interests' },
        { icon: '📁', text: 'education' }
      ]
    },
    {
      title: 'contacts',
      isOpen: true,
      items: [
        { icon: '✉️', text: 'davide_simone1996@proton.me' },
        { icon: '📞', text: '+39 392 86 08 006' }
      ]
    }
  ];

  function toggleSection(index: number) {
    sections[index].isOpen = !sections[index].isOpen;
    sections = sections;
  }

  function handleItemClick(section: string, item: string) {
    dispatch('select', { section, item });
  }
</script>

<aside class="sidebar">
  {#each sections as section, i}
    <div class="sidebar-section">
      <button 
        class="sidebar-title" 
        on:click={() => toggleSection(i)}
      >
        <span class="arrow" class:open={section.isOpen}>▶</span>
        {section.title}
      </button>
      
      {#if section.isOpen}
        <div class="sidebar-content" transition:slide={{ duration: 100 }}>
          {#each section.items as item}
            <button 
              class="sidebar-item"
              on:click={() => handleItemClick(section.title, item.text)}
            >
              <span>{item.icon}</span>
              <span>{item.text}</span>
            </button>
          {/each}
        </div>
      {/if}
    </div>
  {/each}
</aside>

<style>
  .sidebar {
    width: 250px;
    background: var(--panel-bg);
    border-right: 1px solid var(--border);
    padding: 1rem;
  }
  .sidebar-title {
    width: 100%;
    text-align: left;
    background: none;
    border: none;
    border-bottom: 1px solid var(--border);
    color: inherit;
    cursor: pointer;
    padding: 0.5rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
  .arrow {
    transition: transform 0.2s;
  }
  .arrow.open {
    transform: rotate(90deg);
  }
  .sidebar-item {
    width: 100%;
    text-align: left;
    background: none;
    border: none;
    color: inherit;
    padding: 0.50rem 1rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    cursor: pointer;
  }
  .sidebar-item:hover {
    color: var(--text-highlight);
    border-bottom: 2px solid var(--secondary);
    background: var(--bg-dark-2);
  }
  .sidebar-item:active {
    color: var(--text-highlight);
    border-bottom: 2px solid var(--secondary);
    background: var(--bg-dark);
  }
  @media (max-width: 768px) {
    .sidebar {
      width: 100%;
      border-right: none;
      border-bottom: 1px solid var(--border);
    }
  }
</style>