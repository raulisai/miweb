<script>
  import About from './About.svelte';
  import Projects from './Projects.svelte';
  import Experience from './Experience.svelte';
  import Blog from './Blog.svelte';
  import Contact from './Contact.svelte';
  import dataPersonal from '$lib/data/dataPersonal.json';
</script>

<section class="flex flex-col items-center justify-center min-h-[60vh] gap-3 py-8">
<div class="absolute top-0 right-0  z-0 pointer-events-none overflow-hidden">
  <img 
    src="/eva01.png" 
    alt="Eva-01" 
    class="object-cover object-right h-full w-full opacity-30"
    style="mix-blend-mode: luminosity;"
  />
</div>

<img src="/yo.jpg" alt="foto del dev" class="w-28 h-28 rounded-full border-4 shadow-md" style="border-color: var(--eva-green);" />
<h2 class="text-3xl font-mecha" style="color: var(--eva-green);">{dataPersonal.name}</h2>
<h3 class="text-lg font-mecha" style="color: var(--eva-accent);">{dataPersonal.title}</h3>
<p class="max-w-md text-center font-medium" style="color: var(--text-primary);">
  Apasionado por la tecnología, el aprendizaje autodidacta y la mejora continua.
  </p>
  <nav class="flex flex-wrap gap-3 mt-4">
    <a href="#about" class="px-4 py-2 rounded-md bg-eva01-green text-eva01-dark font-bold hover:opacity-90 transition-all shadow-sm">Sobre mí</a>
    <a href="#projects" class="px-4 py-2 rounded-md bg-eva01-green text-eva01-dark font-bold hover:opacity-90 transition-all shadow-sm">Proyectos</a>
    <a href="#experience" class="px-4 py-2 rounded-md bg-eva01-green text-eva01-dark font-bold hover:opacity-90 transition-all shadow-sm">Experiencia</a>
    <a href="#blog" class="px-4 py-2 rounded-md bg-eva01-green text-eva01-dark font-bold hover:opacity-90 transition-all shadow-sm">Blog</a>
    <a href="#contact" class="px-4 py-2 rounded-md bg-eva01-green text-eva01-dark font-bold hover:opacity-90 transition-all shadow-sm">Contacto</a>
  </nav>
</section>

<About />
<Projects />
<Experience />
<Blog />
<Contact />
