<script lang="ts">
  interface SidebarSection {
    title: string;
    items: Array<{
      icon: string;
      text: string;
    }>;
  }

  const sections: SidebarSection[] = [
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
</script>

<aside class="sidebar">
  {#each sections as section}
    <div class="sidebar-section">
      <div class="sidebar-title">▼ {section.title}</div>
      <div class="sidebar-content">
        {#each section.items as item}
          <div class="sidebar-item">
            {item.icon} {item.text}
          </div>
        {/each}
      </div>
    </div>
  {/each}
</aside>