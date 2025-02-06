<script lang="ts">
    import { slideIn } from '$lib/transitions';

  interface ContactItem {
    label: string;
    value: string;
    comment: string;
  }

  const contacts: ContactItem[] = [
    { label: 'telephoneNum', value: '392 86 08 006', comment: 'my number' },
    { label: 'email', value: 'davide_simone1996@proton.me', comment: 'my e-mail' },
    { label: 'githubLink', value: 'https://github.com/daveinthehood', comment: 'Github page' },
    { label: 'behanceLink', value: 'https://www.behance.net/davidefemale', comment: 'Behance' },
    { label: 'linkedinPage', value: 'https://www.linkedin.com/in/davide-simone-a2823619a/', comment: 'LinkedIn' }
  ];
</script>

<div class="contact-info">
  {#each contacts as {label, value, comment}, i}
    <p class="line" in:slideIn={{ delay: i * 150 }}>
      <span class="comment">// {comment}</span><br />
      <span class="constant">const</span> {label} = <span class="string">"{value}"</span>;
    </p>
  {/each}
</div>

<style>
  .contact-info {
    margin-top: 3rem;
  }
  .line {
    margin: 0.5rem 1rem;
  }
  .constant { color: #c678dd; }
  .string { color: #98c379; }
  .comment { color: var(--text); }
</style>