<script lang="ts">
 import type { Post } from '$lib/types';
 import { marked } from 'marked';
  export let data: { post: Post };
  let post = data.post;
  console.log('posts', post);
</script>


<article>
  <div class="eva-terminal">
    <div class="eva-terminal-content">
      <h1>{post.title}</h1>
      <p><em>Date: {post.date}</em></p>
      {@html marked(post.content)}
      <span class="terminal-blink"></span>
    </div>
  </div>
</article>

<style>
  .eva-terminal {
    background-color: #1a1a1a;
    border: 3px solid #5d3b94;
    border-radius: 8px;
    box-shadow: 0 0 10px #76ff03, 0 0 20px rgba(118, 255, 3, 0.3);
    color: #e0e0e0;
    font-family: 'Courier New', monospace;
    margin: 2rem auto;
    max-width: 800px;
    padding: 1.5rem;
    position: relative;
  }

  .eva-terminal::before {
    background-color: #5d3b94;
    content: 'NERV TERMINAL - EVA-01 CLASSIFIED DATA';
    color: #76ff03;
    display: block;
    font-weight: bold;
    margin: -1.5rem -1.5rem 1.5rem -1.5rem;
    padding: 0.5rem 1rem;
    text-transform: uppercase;
  }

  .eva-terminal::after {
    background: linear-gradient(90deg, transparent, #76ff03, transparent);
    content: '';
    height: 2px;
    left: 0;
    position: absolute;
    top: 2.5rem;
    width: 100%;
  }

  .eva-terminal h1 {
    color: #76ff03;
    font-size: 1.8rem;
    margin-top: 0.5rem;
    text-shadow: 0 0 5px #76ff03;
  }

  .eva-terminal p em {
    color: #a580e0;
    font-style: italic;
  }

  .eva-terminal-content {
    line-height: 1.6;
    overflow-x: auto;
  }

  .eva-terminal-content :global(pre),
  .eva-terminal-content :global(code) {
    background-color: #2d2d2d;
    border-left: 3px solid #76ff03;
    font-family: 'Courier New', monospace;
    padding: 0.5rem;
  }

  .eva-terminal-content :global(a) {
    color: #76ff03;
    text-decoration: none;
    border-bottom: 1px dotted #76ff03;
  }

  .eva-terminal-content :global(a:hover) {
    text-shadow: 0 0 3px #76ff03;
  }

  .terminal-blink {
    animation: blink 1s infinite;
    display: inline-block;
    height: 1em;
    width: 0.5em;
    background-color: #76ff03;
    margin-left: 0.5em;
    vertical-align: middle;
  }

  @keyframes blink {
    0%, 100% { opacity: 1; }
    50% { opacity: 0; }
  }
</style>


