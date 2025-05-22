<script lang="ts">
 import type { Post } from '$lib/types';
 import { marked } from 'marked';
  export let data: { post: Post };
  let post = data.post;
  console.log('posts', post);
</script>



<article>
  <h1>{post.title}</h1>
  <p><em>{post.date}</em></p>
  {@html marked(post.content)}
</article>
