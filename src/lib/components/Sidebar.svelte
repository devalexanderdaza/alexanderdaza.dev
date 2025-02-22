<script lang="ts">
	import { slide } from 'svelte/transition';
	import { createEventDispatcher } from 'svelte';
	import { page } from '$app/state';
	import { goto } from '$app/navigation';

	const dispatch = createEventDispatcher();

	interface SectionItem {
		icon: string;
		emoji: string;
		text: string;
		path: string;
		isOpen: boolean;
		hasChildren: boolean;
		isExternal?: boolean;
		items?: SectionItem[];
	}

	interface Section {
		title: string;
		isOpen: boolean;
		items: SectionItem[];
	}

	const icons = {
		folder: 'fa-solid fa-folder',
		'folder-open': 'fa-solid fa-folder-open',
		envelope: 'fa-solid fa-envelope',
		phone: 'fa-solid fa-phone',
		arrow: 'fa-solid fa-arrow-right',
		school: 'fa-solid fa-school',
		university: 'fa-solid fa-university',
		whatsapp: 'fa-brands fa-whatsapp',
		telegram: 'fa-brands fa-telegram'
	} as const;

	const emojis = {
		folder: '📁',
		'folder-open': '📂',
		envelope: '📧',
		phone: '📞',
		arrow: '➡️',
		school: '🏫',
		university: '🎓',
		whatsapp: '📱',
		telegram: '📲'
	} as const;

	let sections: Section[] = [
		{
			title: 'personal-info',
			isOpen: true,
			items: [
				{
					icon: icons.folder,
					emoji: emojis.folder,
					text: 'bio',
					path: '/about/bio',
					isOpen: true,
					hasChildren: false,
					isExternal: false
				},
				{
					icon: icons.folder,
					emoji: emojis.folder,
					text: 'experience',
					path: '/about/experience',
					isOpen: false,
					hasChildren: false,
					isExternal: false
				},
				{
					icon: icons.folder,
					emoji: emojis.folder,
					text: 'education',
					path: '/about/education',
					isOpen: false,
					hasChildren: false,
					isExternal: false
				},
				{
					icon: icons.folder,
					emoji: emojis.folder,
					text: 'certificates',
					path: '/about/certificates',
					isOpen: false,
					hasChildren: false,
					isExternal: false
				}
				// {
				// 	icon: icons.folder,
				// 	emoji: emojis.folder,
				// 	text: 'education',
				// 	path: '/education',
				// 	isOpen: false,
				// 	hasChildren: true,
				// 	isExternal: false,
				// 	items: [
				// 		{
				// 			icon: icons.school,
				// 			emoji: emojis.school,
				// 			text: 'school',
				// 			path: '/education/school',
				// 			isOpen: false,
				// 			hasChildren: false
				// 		},
				// 		{
				// 			icon: icons.university,
				// 			emoji: emojis.university,
				// 			text: 'university',
				// 			path: '/education/university',
				// 			isOpen: false,
				// 			hasChildren: false
				// 		}
				// 	]
				// }
			]
		},
		{
			title: 'contacts',
			isOpen: true,
			items: [
				{
					icon: icons.envelope,
					emoji: emojis.envelope,
					text: 'Send me an email',
					path: 'mailto:contacto@alexanderdaza.dev',
					isOpen: false,
					hasChildren: false,
					isExternal: true
				},
				{
					icon: icons.phone,
					emoji: emojis.phone,
					text: 'Call me',
					path: 'tel:+573212191184',
					isOpen: false,
					hasChildren: false,
					isExternal: true
				},
				{
					icon: icons.whatsapp,
					emoji: emojis.whatsapp,
					text: 'Chat on WhatsApp',
					path: 'https://wa.me/573203999858?text=Hola%20Alexander,%20me%20gustaría%20contactarte%20para%20más%20información.',
					isOpen: false,
					hasChildren: false,
					isExternal: true
				},
				{
					icon: icons.telegram,
					emoji: emojis.telegram,
					text: 'Chat on Telegram',
					path: 'https://t.me/devalexanderdaza?text=Hola%20Alexander,%20me%20gustaría%20contactarte%20para%20más%20información.',
					isOpen: false,
					hasChildren: false,
					isExternal: true
				}
			]
		}
	];

	function toggleSection(section: Section) {
		section.isOpen = !section.isOpen;
		sections = sections;
	}

	function toggleItem(item: SectionItem) {
		item.isOpen = !item.isOpen;
		if (item.hasChildren) {
			item.icon = item.isOpen ? '📂' : '📁';
		} else {
			if (item.isExternal) {
				window.open(item.path, '_blank');
			} else {
				goto(item.path);
			}
		}
		sections = sections;
	}
</script>

<aside class="sidebar">
	{#each sections as section}
		<div class="sidebar-section">
			<button class="sidebar-title" on:click={() => toggleSection(section)}>
				<span class="arrow" class:open={section.isOpen}><i class={icons.arrow}></i></span>
				{section.title}
			</button>

			{#if section.isOpen}
				<div class="sidebar-content" transition:slide={{ duration: 100 }}>
					{#each section.items as item}
						<button
							class="sidebar-item"
							class:has-children={item.hasChildren}
							class:sidebar-item-active={item.path === page.url.pathname}
							on:click={() => toggleItem(item)}
						>
							{#if item.hasChildren}
								<span class="arrow" class:open={item.isOpen}><i class={icons.arrow}></i></span>
							{/if}
							<span class="icon">{item.emoji}</span>
							<span>{item.text}</span>
						</button>

						{#if item.hasChildren && item.isOpen}
							<div class="sub-items" transition:slide={{ duration: 100 }}>
								{#each item.items || [] as subItem}
									<button
										class="sidebar-item sub-item"
										class:sidebar-item-active={subItem.path === page.url.pathname}
										on:click={() => toggleItem(subItem)}
									>
										<span class="icon"><i class={subItem.icon}></i></span>
										<span>{subItem.text}</span>
									</button>
								{/each}
							</div>
						{/if}
					{/each}
				</div>
			{/if}
		</div>
	{/each}
</aside>

<style>
	.sidebar {
		width: 250px;
		background: var(--panel-bg);
		border-right: 1px solid var(--border);
		padding: 1rem;
	}

	.sidebar-title,
	.sidebar-item {
		width: 100%;
		text-align: left;
		background: none;
		border: none;
		color: inherit;
		cursor: pointer;
		display: flex;
		align-items: center;
		gap: 0.5rem;
	}

	.sidebar-item-active {
		color: var(--text-highlight);
		border-bottom: 2px solid var(--secondary);
		background: var(--bg-dark-2);
	}

	.sidebar-title {
		border-bottom: 1px solid var(--border);
		padding: 0.5rem;
	}

	.sidebar-item {
		padding: 0.5rem 1rem;
	}

	.sub-items {
		margin-left: 1rem;
	}

	.sub-item {
		padding-left: 2rem;
	}

	.arrow {
		transition: transform 0.2s;
		min-width: 12px;
	}

	.arrow.open {
		transform: rotate(90deg);
	}

	.sidebar-item:hover {
		color: var(--text-highlight);
		border-bottom: 2px solid var(--secondary);
		background: var(--bg-dark-2);
	}

	.sidebar-item:active {
		background: var(--bg-dark);
	}

	@media (max-width: 768px) {
		.sidebar {
			width: 100%;
			border-right: none;
			border-bottom: 1px solid var(--border);
		}
	}
</style>
