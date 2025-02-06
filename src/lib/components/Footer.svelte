<script lang="ts">
  const socials = [
    { name: 'Twitter', url: 'https://twitter.com' },
    { name: 'Facebook', url: 'https://facebook.com' }
  ];
</script>

<footer class="social-links">
  <div class="social-group">
    <span>find me in:</span>
    {#each socials as social}
      <a href={social.url} target="_blank" rel="noopener">{social.name}</a>
    {/each}
  </div>
  <a href="https://github.com/daveinthehood" target="_blank" rel="noopener">@daveinthehood</a>
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
  }
  a:hover {
    color: var(--primary);
    border-bottom: 2px solid var(--primary);
  }
</style>