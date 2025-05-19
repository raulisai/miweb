<script lang="ts">
  import { onMount } from 'svelte';
  let posts: { title: string, date: string, content: string }[] = [];

  // Carga posts markdown de /blog
  onMount(async () => {
    const modules = import.meta.glob('./blog/*.md');
    posts = await Promise.all(
      Object.entries(modules).map(async ([path, resolver]: any) => {
        const mod = await resolver();
        return {
          title: mod.metadata.title,
          date: mod.metadata.date,
          content: mod.default.render().html
        };
      })
    );
    posts.sort((a, b) => b.date.localeCompare(a.date));
  });
</script>

<section id="blog" class="py-12">
  <h2 class="text-2xl font-mecha mb-4" style="color: var(--eva-green);">Blog</h2>
  <div class="space-y-8">
    {#each posts as post}
      <article class="rounded-lg shadow-lg p-6" style="background-color: #181825; border: 1px solid var(--eva-green);">
        <h3 class="font-mecha text-xl" style="color: var(--eva-accent);">{post.title}</h3>
        <time class="text-xs" style="color: var(--eva-yellow);">{post.date}</time>
        <div class="prose prose-invert mt-2">{@html post.content}</div>
      </article>
    {/each}
    {#if posts.length === 0}
      <p style="color: var(--eva-accent);">No hay posts aún. ¡Pronto habrá contenido!</p>
    {/if}
  </div>
</section>
