<script lang="ts">
  const socials = [
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/devalexanderdaza/', icon: 'fa-brands fa-linkedin' },
    { name: 'GitHub', url: 'https://github.com/devalexanderdaza', icon: 'fa-brands fa-github' },
  ];
</script>

<footer class="social-links">
  <div class="social-group">
    <span>Find me in:</span>
    {#each socials as social}
      <a href={social.url} target="_blank" rel="noopener"><i class={social.icon}></i> {social.name}</a>
    {/each}
  </div>
  <a href="https://github.com/devalexanderdaza" target="_blank" rel="noopener" class="github-link"><i class="fa-brands fa-github"></i> @devalexanderdaza</a>
</footer>

<style>
  .social-links {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    padding: 1rem;
    display: flex;
    justify-content: space-between;
    background: var(--bg-dark);
    border-top: 1px solid var(--border);
  }
  .social-group {
    display: flex;
    gap: 1rem;
    align-items: center;
  }
  a {
    color: var(--text);
    text-decoration: none;
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
  a:hover {
    color: var(--primary);
    text-decoration: none;
  }
  @media (max-width: 768px) {
    .social-links {
      flex-direction: column;
      align-items: center;
    }
  }
  @media (max-width: 480px) {
    .github-link {
      display: none;
    }
  }
  @media (max-width: 320px) {
    .social-group {
      display: none;
    }
  }
</style>