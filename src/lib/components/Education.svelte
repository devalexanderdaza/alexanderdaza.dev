<script lang="ts">
  import { education } from '$lib/data/education';

  $: lines = education.split('\n');
</script>

<svelte:head>
	<title>Alexander Daza | Education</title>
	<meta name="description" content="Alexander Daza | Education">
	<meta name="keywords" content="Alexander Daza, Education, Full Stack Developer, Mobile Developer, Blockchain Engineer">
	<meta name="author" content="Alexander Daza">
</svelte:head>

<div class="editor">
  <div class="flex">
    <div class="line-numbers">
      {#each lines as _, i}
        <span>{i + 1}</span>
      {/each}
    </div>
    <div class="code-content">
      {#each lines as line}
        <span>{line}</span>
      {/each}
    </div>
  </div>
</div>

<style>
  .editor {
    background: var(--code-bg);
    padding: 1rem;
    border-left: 1px solid var(--border);
    border-right: 1px solid var(--border);
  }
  .flex {
    display: flex;
  }
  .line-numbers {
    color: #4f5666;
    text-align: right;
    user-select: none;
    font-family: 'Courier New', Courier, monospace;
    font-weight: 600;
  }
  .line-numbers span {
    display: block;
  }
  .code-content span {
    display: block;
    padding-left: 1rem;
  }
</style>