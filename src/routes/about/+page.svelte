<script lang="ts">
  import Sidebar from '$lib/components/Sidebar.svelte';
  import Editor from '$lib/components/Editor.svelte';
  import Skills from '$lib/components/Skills.svelte';
</script>

<div class="main-container">
  <Sidebar />
  <main class="content">
    <Editor />
    <Skills />
  </main>
</div>

<style>
  .main-container {
    display: grid;
    grid-template-columns: 250px 1fr;
    min-height: calc(100vh - 120px);
  }
  .content {
    display: grid;
    grid-template-columns: 1fr 300px;
  }
  @media (max-width: 1024px) {
    .main-container { grid-template-columns: 1fr; }
    .content { grid-template-columns: 1fr; }
  }
</style>