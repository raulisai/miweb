<script lang="ts">
  import type { PostMeta } from '$lib/types';
  import { base } from '$app/paths';
  export let data: { posts: PostMeta[] };
  let posts = data.posts;
  console.log('posts', posts);
</script>

<h1>Blogwe</h1>
<ul>
  {#each posts as post}
    <li>
      <a href={`${base}/blog/${post.slug}`}>{post.title}</a> — {post.date}
    </li>
  {/each}
</ul>