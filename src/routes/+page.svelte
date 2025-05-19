<script>
  import About from './About.svelte';
  import Projects from './Projects.svelte';
  import Experience from './Experience.svelte';
  import Blog from './Blog.svelte';
  import Contact from './Contact.svelte';
  import dataPersonal from '$lib/data/dataPersonal.json';
</script>

<section class="flex flex-col items-center justify-center min-h-[60vh] gap-3">
  <img src="/YO-2llD.jpg" alt="foto del dev" class="w-28 h-28 rounded-full border-4" style="border-color: var(--eva-green);" />
  <h2 class="text-3xl font-mecha" style="color: var(--eva-green);">{dataPersonal.name}</h2>
  <h3 class="text-lg font-mecha" style="color: var(--eva-accent);">{dataPersonal.title}</h3>
  <p class="max-w-md text-center" style="color: var(--eva-yellow);">
    Apasionado por la tecnología, el aprendizaje autodidacta y la mejora continua.
  </p>
  <nav class="flex flex-wrap gap-3 mt-4">
    <a href="#about" class="btn-eva">Sobre mí</a>
    <a href="#projects" class="btn-eva">Proyectos</a>
    <a href="#experience" class="btn-eva">Experiencia</a>
    <a href="#blog" class="btn-eva">Blog</a>
    <a href="#contact" class="btn-eva">Contacto</a>
  </nav>
</section>

<About />
<Projects />
<Experience />
<Blog />
<Contact />
