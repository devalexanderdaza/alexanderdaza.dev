<script lang="ts">
  const content = `/**
* About Alexander Daza
* Welcome to my portfolio.
*
* [Education] System Engineer from CUN
* 2018 - 2024
*
* [Experience] Over 14 years of experience as Full Stack Developer,
* specializing in web and mobile development, blockchain technologies,
* and technical leadership. Currently working as Sr. Full Stack Developer
* at ETRAINING SAS, developing LMS platforms for public sector entities
* using blockchain and Web3.0 technologies.
*
* [Stack] Proficient in multiple languages and frameworks:
* - Backend: NodeJS, Python, Java, GO, PHP
* - Frontend: Angular, React, Vue, Svelte
* - Mobile: Flutter, Swift, Kotlin
* - Cloud: AWS, GCP, Azure, Digital Ocean
* - Blockchain: Algorand, Smart Contracts
*
* [WhoIsAlex] I'm a highly motivated tech professional with
* strong problem-solving skills and leadership experience.
* Passionate about continuous learning and mentoring others.
* Expert in optimizing processes and implementing innovative
* solutions that drive business value.
*
* [Contact]
* - Email: contacto@alexanderdaza.dev
* - Phone: +57 321 219 1184
* - WhatsApp: +57 320 399 9858
* - Telegram: https://t.me/devalexanderdaza
* - LinkedIn: https://www.linkedin.com/in/devalexanderdaza/
* - GitHub: https://github.com/devalexanderdaza
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