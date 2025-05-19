<script>
  import About from './About.svelte';
  import Projects from './Projects.svelte';
  import Experience from './Experience.svelte';
  import Blog from './Blog.svelte';
  import Contact from './Contact.svelte';
  import dataPersonal from '$lib/data/dataPersonal.json';
  import { fly } from 'svelte/transition';
  const navLinks = [
    { href: '#about', label: 'Sobre mí' },
    { href: '#projects', label: 'Proyectos' },
    { href: '#experience', label: 'Experiencia' },
    { href: '#blog', label: 'Blog' },
    { href: '#contact', label: 'Contacto' }
  ];
</script>

<section class="flex flex-col items-center justify-center min-h-[55vh] gap-3 py-8">
<div class="absolute top-0 right-0  z-0 pointer-events-none overflow-hidden">
  <img 
    src="/eva01.png" 
    alt="Eva-01" 
    class="object-cover object-right h-full w-full opacity-30"
    style="mix-blend-mode: luminosity;"
  />
</div>

<img src="/yo.jpg" alt="foto del dev" class="w-28 h-28 rounded-full border-4 z-10 shadow-md" style="border-color: var(--eva-green);" />
<h2 class="text-3xl font-mecha" style="color: var(--eva-green);">{dataPersonal.name}</h2>
<h3 class="text-lg font-mecha" style="color: var(--eva-accent);">{dataPersonal.title}</h3>
<p class="max-w-md text-center font-medium" style="color: var(--text-primary);">
  Apasionado por la tecnología, el aprendizaje autodidacta y la mejora continua.
  </p>
  <nav class="flex flex-wrap justify-center gap-2 sm:gap-3 mt-4 w-full px-2">
  {#each navLinks as link, i}
    <a
      href={link.href}
      class="nav-link-mecha group relative flex-1 sm:flex-none min-w-[110px] max-w-full sm:min-w-0 sm:px-4 px-3 py-2 rounded-xl font-mecha shadow-mecha transition-all duration-300 overflow-hidden focus:outline-none text-base sm:text-lg text-center"
      tabindex="0"
      style="min-width: 0;"
    >
      <span class="relative z-10 truncate">{link.label}</span>
      <span class="absolute inset-0 w-0 bg-gradient-to-r from-[#39FF1430] to-[#221c3a80] group-hover:w-full transition-all duration-500 -skew-x-12 transform origin-left"></span>
    </a>
  {/each}
</nav>
</section>

<About />
<Projects />
<Experience />
<Blog />
<Contact />


<style>



.nav-link-mecha {
  color: var(--eva-green);
  text-decoration: none;
  border-bottom: 2.5px dashed var(--eva-green);
  border-image: linear-gradient(90deg, var(--eva-green) 70%, var(--eva-purple) 100%) 1;
  transition: 
    color 0.3s cubic-bezier(.4,0,.2,1),
    border-color 0.3s cubic-bezier(.4,0,.2,1),
    border-bottom-width 0.3s cubic-bezier(.4,0,.2,1),
    transform 0.4s cubic-bezier(.4,0,.2,1),
    opacity 0.4s cubic-bezier(.4,0,.2,1);

  opacity: 0;
  transform: translateY(24px) scale(0.98);
  animation: navLinkMechaFadeIn 0.65s cubic-bezier(.4,0,.2,1) forwards;
  animation-delay: 0.5s;
}

@keyframes navLinkMechaFadeIn {
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}



</style>