<script lang="ts">
  const content = `/**
* Bio Alexander Daza
* Sr. Full Stack Developer | Mobile Developer | Blockchain Engineer
*
* With over 14 years of experience in software development, I've led 
* and contributed to numerous high-impact projects across various sectors.
* Starting my journey in 2011 at SAVES SAS, I quickly progressed from 
* developer to Tech Lead, showcasing my ability to not only code but 
* also lead teams and architect solutions.
*
* Throughout my career at companies like INTERCOM, Validation Solutions,
* and currently at ETRAINING SAS, I've consistently delivered innovative
* solutions that have improved efficiency, reduced costs, and enhanced
* user experiences. Some key achievements include:
*
* - Developed REST services enabling 10,000+ certificate signatures for MinTic
* - Optimized banking security systems improving resource efficiency by 30%
* - Led development teams improving project completion rates by 85%
* - Created award-winning educational mobile applications
* - Reduced security vulnerabilities by 7% through improved architectures
*
* My philosophy combines technical expertise with practical problem-solving.
* I believe in continuous learning, team collaboration, and finding optimal
* solutions to complex challenges. This approach has consistently led to
* successful project outcomes and improved client satisfaction.
*
* Currently focused on:
* - Blockchain development with Algorand
* - Cloud architecture and microservices
* - Mobile development (iOS/Android)
* - Team leadership and mentoring
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