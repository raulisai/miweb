<script lang="ts">
  import type { PostMeta } from '$lib/posts';
  export let data: { posts: PostMeta[] };
  let posts = data.posts;
  console.log('posts', posts);
</script>

<h1>Blogwe</h1>
<ul>
  {#each posts as post}
    <li>
      <a href={`/blog/${post.slug}`}>{post.title}</a> — {post.date}
    </li>
  {/each}
</ul>