<script lang="ts">
	import '../app.css';
	import { base } from '$app/paths';
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
	<meta property="og:image" content={`${base}/eva01-og.png`} />
	<meta name="viewport" content="width=device-width, initial-scale=1" />
</svelte:head>

<header class="relative flex flex-col items-center justify-center py-8 px-4 bg-eva01-dark text-eva01-green border-b-4 border-eva01-green shadow-lg">
	<h1 class="text-2xl sm:text-4xl md:text-5xl font-mecha tracking-[0.2em] text-center drop-shadow-lg select-none 
		md:leading-tight" 
		style="letter-spacing: 0.15em; text-shadow: 0 2px 12px #39FF1480, 0 1px 0 #111;">
		エンジニア・ソフトウェア
	</h1>
	<p class="text-eva01-accent mt-2 text-base sm:text-lg font-semibold tracking-wide text-center 
		bg-[rgba(34,28,58,0.7)] px-3 py-1 rounded-lg shadow-inner ring-1 ring-eva01-green/60"
		style="backdrop-filter: blur(2px);">
		Portafolio & Blog
	</p>
	<button 
	class="absolute top-4 right-4 group mt-4 px-3 py-1 rounded-full bg-transparent transition-all hover:opacity-90 shadow-none focus:outline-none flex items-center justify-center"
	on:click={toggleDark} 
	aria-label="Cambiar modo oscuro"
	style="width: 85px; height: 85px;"
>
	<svg 
		viewBox="0 0 56 56"
		fill="none"
		class="w-16 h-16 sm:w-16 sm:h-16"
		xmlns="http://www.w3.org/2000/svg"
		style="display: block;"
	>
		<!-- Ojos picudos, angular -->
		<polygon 
			points="17,24 22,19 24,28 21,37 17,32" 
			fill={dark ? '#FFD600' : '#191724'}
			stroke="#39FF14" stroke-width="2"
			filter={dark ? 'drop-shadow(0 0 8px #FFD600)' : ''}
		/>
		<polygon 
			points="39,24 34,19 32,28 35,37 39,32" 
			fill={dark ? '#FFD600' : '#191724'}
			stroke="#39FF14" stroke-width="2"
			filter={dark ? 'drop-shadow(0 0 8px #FFD600)' : ''}
		/>
		{#if dark}
			<polygon points="17,24 22,19 24,28 21,37 17,32" 
				fill="none" stroke="#FFD600" stroke-width="1.2" opacity="0.4" filter="url(#glow)" />
			<polygon points="39,24 34,19 32,28 35,37 39,32" 
				fill="none" stroke="#FFD600" stroke-width="1.2" opacity="0.4" filter="url(#glow)" />
			<defs>
				<filter id="glow" x="0" y="0" width="56" height="56" filterUnits="userSpaceOnUse">
					<feGaussianBlur stdDeviation="4" result="coloredBlur"/>
					<feMerge>
						<feMergeNode in="coloredBlur"/>
						<feMergeNode in="SourceGraphic"/>
					</feMerge>
				</filter>
			</defs>
		{/if}

		<!-- Barbilla angular Eva-01 -->
		<polygon 
			points="24,40 28,46 32,40"
			fill="#39FF14"
			opacity="0.7"
		>
			<animate attributeName="opacity" values="0.5;1;0.6;1;0.5" dur="1.2s" repeatCount="indefinite"/>
		</polygon>
	</svg>
	<span class="absolute bottom-0 left-1/2 -translate-x-1/2 text-xs font-mecha tracking-wider mt-2 text-eva01-accent bg-eva01-dark/70 px-2 py-0.5 rounded shadow pointer-events-none select-none" style="letter-spacing:0.11em;">
		{dark ? 'LIGHT' : 'DARK'}
	</span>
</button>
	<div class="absolute left-4 top-4 hidden sm:flex items-center gap-2">
		<div class="w-4 h-4 bg-eva01-green rounded-sm animate-pulse shadow-eva01-green"></div>
		<span class="text-xs text-eva01-green font-mecha uppercase tracking-widest opacity-80">ACTIVE</span>
	</div>
</header>

<main class="max-w-3xl mx-auto px-4">
	<slot />
</main>
