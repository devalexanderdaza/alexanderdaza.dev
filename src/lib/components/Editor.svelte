<script lang="ts">
  const content = `/**
* About Davide-Simone
* Benvenuto nel mio portfolio.
*
* [Diploma] Tecnico commerciale in "Amministrazione
* Finanza e Marketing".
* [Triennale] Scienze Politiche - Relazioni
* Internazionali
* [Programmazione] Da marzo 2023 sono uno studente
* nel corso di Full Stack di DevelHope.
* I linguaggi che ho appreso sono: HTML, CSS, SCSS,
* JAVASCRIPT, REACT (jsx e redux), TYPESCRIPT, NODE
* e conoscenza base di Tailwindcss e Vite.js.
*
* [WhoIsdave] Sono una persona molto curiosa,
* mi trovo molto bene a lavorare in team e se
* sono davanti ad una difficoltà cerco il modo
* migliore per trovare la soluzione più ottimale.
*/`;

  $: lines = content.split('\n');
</script>

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