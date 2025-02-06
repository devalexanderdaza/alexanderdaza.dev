<script lang="ts">
  import ContactInfo from '$lib/components/ContactInfo.svelte';
</script>

<main class="main">
  <div class="intro">
    <p>Hi all. I am</p>
    <h1>Davide Simone</h1>
    <p class="role">> Front-end developer</p>
  </div>
  <ContactInfo />
</main>

<style>
  .main {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: calc(100vh - 120px);
  }
  .intro h1 {
    font-size: 3rem;
    margin: 1rem 0;
  }
  .role {
    color: var(--primary);
    font-size: 1.2rem;
  }
</style>