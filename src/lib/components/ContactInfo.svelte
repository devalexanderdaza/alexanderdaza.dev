<script lang="ts">
    import { slideIn } from '$lib/transitions';

  interface ContactItem {
    label: string;
    value: string;
    comment: string;
    url: string;
  }

  const contacts: ContactItem[] = [
      { label: 'email', value: 'contacto@alexanderdaza.dev', comment: 'My e-mail', url: 'mailto:contacto@alexanderdaza.dev' },
    { label: 'telephoneNum', value: '+57 321 219 1184', comment: 'My phone number', url: 'tel:+573212191184' },
    { label: 'whatsapp', value: 'https://wa.me/573203999858', comment: 'WhatsApp', url: 'https://wa.me/573203999858?text=Hola%20Alexander,%20me%20gustaría%20contactarte%20para%20más%20información.' },
    { label: 'telegram', value: 'https://t.me/devalexanderdaza', comment: 'Telegram', url: 'https://t.me/devalexanderdaza?text=Hola%20Alexander,%20me%20gustaría%20contactarte%20para%20más%20información.' },
    { label: 'githubLink', value: 'https://github.com/devalexanderdaza', comment: 'Github page', url: 'https://github.com/devalexanderdaza' },
    { label: 'linkedinPage', value: 'https://www.linkedin.com/in/devalexanderdaza/', comment: 'LinkedIn', url: 'https://www.linkedin.com/in/devalexanderdaza/' }
  ];

  function handleClick(url: string) {
    if (url) {
      window.open(url, '_blank');
    }
  }
</script>

<div class="contact-info">
  {#each contacts as {label, value, comment}, i}
    <p class="line" in:slideIn={{ delay: i * 150 }}>
      <span class="comment">// {comment}</span><br />
      <span class="constant">const</span> {label} = <span class="string" on:click={() => handleClick(value)}>"{value}"</span>;
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
  .string { color: #98c379; cursor: pointer; }
  .comment { color: var(--text); }
  @media (max-width: 480px) {
    .contact-info {
      font-size: 0.8rem;
    }
  }
  
</style>