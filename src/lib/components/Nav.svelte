<script lang="ts">
  import { page } from '$app/stores';
  
  const links = [
    { href: '/', label: '_hello' },
    { href: '/about', label: '_about-me' },
    { href: '/projects', label: '_projects' }
  ];
</script>

<nav>
  <a href="/" class="logo">alexander-daza</a>
  <div class="nav-links">
    {#each links as {href, label}}
      <a {href} class:active={$page.url.pathname === href}>{label}</a>
    {/each}
  </div>
  <a href="#" class="contact-button">_contact-me</a>
</nav>

<style>
  nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 2rem;
    border-bottom: 1px solid var(--border);
    border-top: 1px solid var(--border);
  }
  .logo {
    color: var(--primary);
    font-size: 1.2rem;
    text-decoration: none;
  }
  .nav-links {
    display: flex;
    width: 30%;
  }
  .nav-links a {
    color: var(--text);
    text-decoration: none;
    padding: 1rem 0;
    text-align: center;
    width: 100%;
    border-left: 1px solid var(--border);
    border-right: 1px solid var(--border);
  }
  .nav-links a.active {
    color: var(--text-highlight);
    border-bottom: 2px solid var(--secondary);
    background: var(--panel-bg);
  }
  .contact-button {
    color: var(--primary);
    text-decoration: none;
    padding: 0.5rem 1rem;
    border: 1px solid var(--primary);
    border-radius: 4px;
  }

  @media (max-width: 768px) {
    nav {
      flex-direction: column;
      padding: 1rem;
    }
    .nav-links {
      width: 100%;
      margin: 1rem 0;
    }
  }
</style>