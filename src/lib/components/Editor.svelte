<script lang="ts">
	import { marked } from 'marked';
	import Skills from './Skills.svelte';

	// Contenido en markdown simulando código
	let content = `/**
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

	// Convierte el markdown en HTML en tiempo real
	$: previewHtml = marked.parse(content) as string;
</script>

<svelte:head>
	<title>Alexander Daza | About</title>
	<meta name="description" content="Alexander Daza | About">
	<meta name="keywords" content="Alexander Daza, About, Full Stack Developer, Mobile Developer, Blockchain Engineer">
	<meta name="author" content="Alexander Daza">
</svelte:head>

<div class="container">
	<!-- Editor de código estilo VSCode -->
	<div class="editor">
		<div class="editor-header">
			<div class="editor-controls">
				<span class="circle red"></span>
				<span class="circle yellow"></span>
				<span class="circle green"></span>
			</div>
			<span class="file-name">about.md</span>
		</div>
		<div class="code-content" contenteditable="false" on:input={(e) => content = (e.target as HTMLElement).innerText}>
			<pre>{content}</pre>
		</div>
	</div>

	<!-- Preview de Markdown -->
	<div class="preview">
		<h2>Markdown Preview</h2>
		<div class="preview-content" contenteditable="false" bind:innerHTML={previewHtml}></div>
	</div>
</div>

<!-- <Skills /> -->

<style>
	/* Estilos Generales */
	:root {
		--vscode-bg: #1e1e1e;
		--vscode-border: #3c3c3c;
		--vscode-text: #d4d4d4;
		--vscode-comment: #6a9955;
		--vscode-keyword: #569cd6;
		--vscode-string: #ce9178;
		--vscode-number: #b5cea8;
		--vscode-function: #dcdcaa;
		--vscode-bg-light: #252526;
	}

	/* Contenedor que ocupa toda la pantalla */
	.container {
		display: flex;
		width: auto;
    height: 100%;
		background: var(--vscode-bg);
		overflow: hidden;
	}

	/* Estilos del Editor */
	.editor {
		background: var(--vscode-bg-light);
		padding: 0;
		border-right: 1px solid var(--vscode-border);
		width: 50%;
		overflow-y: auto;
		font-family: 'Fira Code', 'Courier New', monospace;
		color: var(--vscode-text);
		display: flex;
		flex-direction: column;
	}

	.editor-header {
		display: flex;
		align-items: center;
		justify-content: space-between;
		background: var(--vscode-bg);
		padding: 0.5rem 1rem;
		border-bottom: 1px solid var(--vscode-border);
	}

	.editor-controls {
		display: flex;
		gap: 0.5rem;
	}

	.circle {
		width: 12px;
		height: 12px;
		border-radius: 50%;
		display: inline-block;
	}

	.red { background: #ff5f56; }
	.yellow { background: #ffbd2e; }
	.green { background: #27c93f; }

	.file-name {
		color: var(--vscode-text);
		font-weight: bold;
		font-size: 0.9rem;
	}

	/* Contenido del Editor */
	.code-content {
		width: 100%;
		height: 100%;
		padding: 1rem;
		font-family: 'Fira Code', monospace;
		white-space: pre-wrap;
		color: var(--vscode-text);
		outline: none;
		overflow: auto;
	}

	/* Preview */
	.preview {
		width: 50%;
		background: #252526;
		padding: 1rem;
		overflow-y: auto;
		color: var(--vscode-text);
	}

	.preview h2 {
		color: var(--vscode-keyword);
		text-align: center;
	}

	.preview-content {
		font-family: 'Arial', sans-serif;
		line-height: 1.5;
		color: var(--vscode-text);
		padding: 1rem;
		outline: none;
		overflow: auto;
	}

	.preview-content h2,
	.preview-content h3 {
		color: var(--vscode-keyword);
		margin-bottom: 0.5rem;
	}

	.preview-content ul {
		padding-left: 1.5rem;
	}

  .preview-content code {
    background: #333;
    color: var(--vscode-text);
    padding: 0.2rem 0.5rem;
    border-radius: 4px;
  }

  a {
    color: var(--vscode-string);
    text-decoration: none;
    font-weight: bold;
  }

	.preview-content a {
		color: var(--vscode-string);
		text-decoration: none;
		font-weight: bold;
	}

	.preview-content a:hover {
		text-decoration: underline;
	}

	/* Responsive para móviles */
	@media (max-width: 768px) {
		.container {
			flex-direction: column;
			overflow-x: auto; /* Permite scroll horizontal si es necesario */
		}

		.editor,
		.preview {
			width: 100%;
			height: 50vh;
		}

		.preview {
			border-top: 1px solid var(--vscode-border);
		}
	}
</style>
