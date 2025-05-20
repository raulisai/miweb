<script lang="ts">
  let posts = [
    {
      title: 'Introducción a SvelteKit',
      date: '2024-06-01',
      href: '/blog/introduccion-sveltekit',
      content: `
        <p>SvelteKit es un framework moderno para construir aplicaciones web ultra rápidas. En esta nota veremos cómo comenzar y por qué deberías probarlo.</p>
        <ul>
          <li>Rendimiento sobresaliente</li>
          <li>Desarrollo sencillo</li>
          <li>SSR y generación estática</li>
        </ul>
      `
    },
    {
      title: 'Productividad con VSCode',
      date: '2024-05-20',
      href: '/blog/productividad-vscode',
      content: `
        <p>Descubre algunos plugins y atajos que harán tu experiencia en VSCode mucho más rápida y agradable.</p>
        <ol>
          <li>Atajos de teclado esenciales</li>
          <li>Extensiones para la productividad</li>
          <li>Temas para cuidar tu vista</li>
        </ol>
      `
    },
    {
      title: 'Cómo usar Git como un Pro',
      date: '2024-05-10',
      href: '/blog/git-como-pro',
      content: `
        <p>Aprende comandos avanzados de Git y flujos de trabajo para proyectos colaborativos.</p>
        <ul>
          <li>Rebase vs Merge</li>
          <li>Buenas prácticas de commits</li>
          <li>Solución de conflictos</li>
        </ul>
      `
    }
  ];

  function irAlBlog() {
    window.location.href = '/blog';
  }
</script>

<section id="blog" class="py-14 px-2 md:px-8 max-w-6xl mx-auto">
  <h2 class="text-2xl md:text-3xl font-mecha font-bold mb-12 text-center tracking-widest"
    style="color: var(--eva-green);letter-spacing:0.14em;">Blog</h2>
  <div class="grid gap-8 md:gap-10 md:grid-cols-3">
    {#each posts as post}
      <a href={post.href} class="group relative block rounded-xl border border-[var(--eva-green)] bg-[#191926]/70 hover:bg-[#21213a]/80 transition-all shadow-xl hover:shadow-2xl focus:ring-2 focus:ring-[var(--eva-accent)] ring-inset outline-none duration-200 overflow-hidden">
        <div class="absolute -top-7 left-1/2 -translate-x-1/2 w-12 h-6 bg-[var(--eva-green)] rounded-t-xl flex items-center justify-center font-bold text-[#181825] shadow-md border-b-4 border-[var(--eva-accent)] text-xl opacity-80 select-none pointer-events-none">
          📒
        </div>
        <div class="p-6 flex flex-col h-full">
          <h3 class="font-mecha text-lg md:text-xl mt-7 mb-2 font-semibold group-hover:underline group-hover:decoration-[var(--eva-accent)] transition"
            style="color: var(--eva-accent);letter-spacing:0.05em;">
            {post.title}
          </h3>
          <time class="block text-xs mb-3 uppercase tracking-widest" style="color: var(--eva-yellow);letter-spacing:0.08em;">{post.date}</time>
          <div class="prose prose-invert mt-1 line-clamp-4 min-h-[4.5em] text-[var(--eva-text)]/90" style="font-size:0.97em;">{@html post.content}</div>
        </div>
        <span class="absolute right-4 bottom-4 text-[var(--eva-accent)] opacity-70 group-hover:opacity-100 transition text-xs font-mecha">Leer nota →</span>
      </a>
    {/each}
  </div>
  <div class="flex justify-center mt-14">
    <button
      class="btn-eva px-7 py-3 rounded-lg border border-[var(--eva-green)] font-mecha text-base font-semibold bg-transparent text-[var(--eva-green)] hover:bg-[var(--eva-green)] hover:text-[#181825] transition-all duration-300 shadow-none focus:ring-2 focus:ring-[var(--eva-accent)] ring-inset"
      on:click={irAlBlog}
    >
      Ver más notas
    </button>
  </div>
</section>


