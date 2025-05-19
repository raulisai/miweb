<script lang="ts">
	import '../app.css';
	import { onMount } from 'svelte';
	let dark = false;

	onMount(() => {
		const stored = localStorage.getItem('theme-dark');
		if (stored === 'true' || (!stored && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
			dark = true;
			document.documentElement.classList.add('dark');
		} else {
			dark = false;
			document.documentElement.classList.remove('dark');
		}
	});

	function toggleDark() {
		dark = !dark;
		localStorage.setItem('theme-dark', dark ? 'true' : 'false');
		if (dark) document.documentElement.classList.add('dark');
		else document.documentElement.classList.remove('dark');
	}
</script>

<svelte:head>
	
	<title>Portafolio ML Engineer -ISAI MONRROY </title>
	<meta name="description" content="Portafolio minimalista y blog de un ingeniero de Machine Learning, inspirado en Evangelion Eva-01." />
	<meta property="og:title" content="Portafolio ML Engineer - Eva-01" />
	<meta property="og:description" content="Portafolio minimalista y blog de un ingeniero de Machine Learning, inspirado en Evangelion Eva-01." />
	<meta property="og:image" content="/eva01-og.png" />
	<meta name="viewport" content="width=device-width, initial-scale=1" />
</svelte:head>

<header class="flex flex-col items-center py-6 bg-eva01-dark text-eva01-green border-b-4 border-eva01-green shadow-md">
	<h1 class="text-4xl font-mecha tracking-widest">エンジニア・ソフトウェア </h1>
	<p class="text-eva01-accent mt-1 text-sm font-medium">Portafolio & Blog</p>
	<button 
		class="absolute top-4 right-4 px-3 py-1 rounded-md bg-eva01-green text-eva01-dark font-bold transition-all hover:opacity-90 shadow-sm"
		on:click={toggleDark} 
		aria-label="Cambiar modo oscuro"
	>
		{dark ? '☀️' : '🌙'}
	</button>
</header>

<main class="max-w-3xl mx-auto px-4">
	<slot />
</main>
