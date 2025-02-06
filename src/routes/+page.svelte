<script lang="ts">
  import ContactInfo from '$lib/components/ContactInfo.svelte';
  import { slideIn } from '$lib/transitions';
  import { onMount } from 'svelte';

  const introText = 'Hi all. I am';
  const roles = [
    '> Sr. Full stack Developer 💻',
    '> Ssr. Mobile Developer 📱',
    '> Blockchain Developer 📜',
    '> Technical Lead 📝',
  ];

  let currentRole = 0;
  let roleInterval: number | null = null;

  onMount(() => {
    const intro = document.querySelector('.intro p') as HTMLElement;
    const role = document.querySelector('.role') as HTMLElement;
    slideIn(intro, { delay: 100 });
    slideIn(role, { delay: 200 });
    startRoleAnimation(role);
    writeAndEraseRoles(role);
  });

  function startRoleAnimation(role: HTMLElement) {
    roleInterval = setInterval(() => {
      role.textContent = roles[currentRole];
      currentRole = (currentRole + 1) % roles.length;
    }, 3000);
  }

  function writeAndEraseRoles(role: HTMLElement) {
    if (role) {
      role.textContent = roles[currentRole];
      currentRole = (currentRole + 1) % roles.length;
    }
  }
</script>

<svelte:head>
	<title>Alexander Daza | Home</title>
	<meta name="description" content="Alexander Daza | Home">
	<meta name="keywords" content="Alexander Daza, Home, Full Stack Developer, Mobile Developer, Blockchain Engineer">
	<meta name="author" content="Alexander Daza">
</svelte:head>
<main class="main">
  <div class="intro">
    <p>Hi all 👋. I am</p>
    <h1>Alexander Daza 😎</h1>
    <p class="role">> Sr. Software Engineer</p>
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
  .intro p {
    font-size: 1.2rem;
  }  
</style>