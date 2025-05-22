<script lang="ts">
  import type { PostMeta } from '$lib/types';
  import { base } from '$app/paths';
  export let data: { posts: PostMeta[] };
  let posts = data.posts;
</script>

<h1 class="eva-title-mecha-metal">
  <span class="eva-title-metal">
    <span class="eva-title-metal-bg">
      <span class="eva-title-metal-text">BLOG</span>
      <span class="eva-title-metal-reflect"></span>
      <span class="eva-title-metal-frame"></span>
    </span>
  </span>
</h1>
<div class="eva-blog-bg">
  <div class="eva-grid">
  {#each posts as post}
    <div class="eva-card">
      <div class="eva-icon">
        <!-- SVG Eva Unit-01 Head Icon (simplified) -->
        <svg width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="19" cy="19" r="18" fill="#222" stroke="#7C3AED" stroke-width="2"/>
          <polygon points="19,6 23,19 19,32 15,19" fill="#39FF14" stroke="#7C3AED" stroke-width="1.5"/>
          <rect x="16" y="13" width="6" height="3" rx="1.5" fill="#7C3AED"/>
        </svg>
      </div>
      <div class="eva-content">
        <a class="eva-link" href={`${base}/blog/${post.slug}`}>{post.title}</a>
        <div class="eva-date">{post.date}</div>
      </div>
    </div>
  {/each}
    </div>
</div>

<style>
.eva-blog-bg {
  position: relative;
  z-index: 0;
  min-height: 60vh;
}
.eva-blog-bg::before {
  content: '';
  position: absolute;
  left: 50%;
  top: 50%;
  width: 100vw;
  height: 100vh;
  
  transform: translate(-50%, -50%) scale(1);
  background: url('/eva01-og.png') no-repeat center center;
  background-size: contain;
  opacity: 0.11;
  filter: grayscale(0.2) blur(0.5px) brightness(1.1) drop-shadow(0 0 24px #7C3AED44);
  pointer-events: none;
  transition: opacity 0.5s, filter 0.5s, transform 1.5s cubic-bezier(.68,-0.55,.27,1.55);
  z-index: 0;
  animation: none;
}
.eva-blog-bg:hover::before {
  opacity: 0.16;
  filter: grayscale(0.05) blur(0.2px) brightness(1.18) drop-shadow(0 0 28px #39FF1444);
  animation: eva-bg-loop 7s linear infinite;
}
@keyframes eva-bg-loop {
  0% { transform: translate(-50%, -50%) scale(1) rotate(0deg); }
  50% { transform: translate(-50%, -52%) scale(1.03) rotate(1.2deg); }
  100% { transform: translate(-50%, -50%) scale(1) rotate(0deg); }
}

.eva-title-mecha-metal {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 2.2rem;
  margin-top: 1.2rem;
  position: relative;
  z-index: 1;
}
.eva-title-metal {
  display: inline-block;
  position: relative;
}
.eva-title-metal-bg {
  display: flex;
  align-items: center;
  position: relative;
  padding: 0.30em 1.5em 0.22em 1.5em;
  border-radius: 1.2em;
  background: linear-gradient(120deg, #23232b 60%, #7C3AED 90%, #39FF14 100%);
  box-shadow: 0 2px 22px #7C3AED44, 0 0 0 4px #23232b, 0 0 0 8px #18181b;
  border: 2.5px solid #39FF14;
  min-width: 220px;
  min-height: 60px;
  overflow: visible;
}
.eva-title-metal-text {
  font-family: 'Orbitron', 'Arial Black', Arial, sans-serif;
  font-size: 2.7rem;
  font-weight: 800;
  letter-spacing: 0.25em;
  background: linear-gradient(90deg, #b2b2c3 15%, #7C3AED 60%, #39FF14 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-shadow: 0 2px 8px #39FF14cc, 0 1px 0 #fff, 0 0 10px #7C3AED, 1px 1px 0 #000a;
  filter: brightness(1.08) contrast(1.08);
  position: relative;
  z-index: 2;
}
.eva-title-metal-reflect {
  content: '';
  position: absolute;
  left: 12%;
  top: 0.34em;
  width: 76%;
  height: 0.23em;
  background: linear-gradient(90deg, #fff7 10%, #39FF1455 60%, #7C3AED22 100%);
  border-radius: 50%;
  opacity: 0.85;
  pointer-events: none;
  z-index: 3;
}
.eva-title-metal-frame {
  content: '';
  position: absolute;
  inset: -7px;
  border: 2.5px solid #7C3AED;
  border-radius: 1.3em;
  box-shadow: 0 0 18px #39FF1455, 0 0 0 2px #23232b;
  z-index: 1;
  pointer-events: none;
}
@media (max-width: 600px) {
  .eva-title-metal-text {
    font-size: 1.35rem;
    letter-spacing: 0.12em;
  }
  .eva-title-metal-bg {
    min-width: 110px;
    min-height: 34px;
    padding: 0.13em 0.6em 0.13em 0.6em;
  }
}

.eva-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 2rem;
  padding: 0 1rem;
}
.eva-card {
  background: linear-gradient(135deg, #18181b 80%, #7C3AED 100%);
  border-radius: 1.3rem;
  border: 2px solid #39FF14;
  box-shadow: 0 4px 24px #7C3AED55, 0 1.5px 0 #39FF14;
  display: flex;
  align-items: center;
  gap: 1.2rem;
  padding: 1.2rem 1.5rem;
  transition: transform 0.25s cubic-bezier(.68,-0.55,.27,1.55), box-shadow 0.2s;
  animation: eva-pop-in 0.7s cubic-bezier(.68,-0.55,.27,1.55);
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
.eva-card:hover {
  transform: translateY(-8px) scale(1.04) rotate(-1deg);
  box-shadow: 0 8px 32px #39FF1480, 0 0 24px #7C3AEDAA;
  border-color: #fff;
}
.eva-icon {
  flex-shrink: 0;
  filter: drop-shadow(0 0 8px #39FF14);
  animation: eva-icon-in 1.2s cubic-bezier(.68,-0.55,.27,1.55);
}
.eva-content {
  flex: 1;
}
.eva-link {
  color: #fff;
  font-size: 1.18rem;
  font-weight: bold;
  text-decoration: none;
  letter-spacing: 1px;
  transition: color 0.2s;
  font-family: 'Orbitron', 'Arial Black', Arial, sans-serif;
}
.eva-card:hover .eva-link {
  color: #39FF14;
  text-shadow: 0 0 8px #7C3AED;
}
.eva-date {
  color: #7C3AED;
  font-size: 0.92rem;
  margin-top: 0.3rem;
  font-family: monospace;
}
@keyframes eva-pop-in {
  0% { opacity: 0; transform: scale(0.7) translateY(30px); }
  80% { opacity: 1; transform: scale(1.05) translateY(-6px); }
  100% { opacity: 1; transform: scale(1) translateY(0); }
}
@keyframes eva-icon-in {
  0% { opacity: 0; transform: scale(0.3) rotate(-30deg); }
  80% { opacity: 1; transform: scale(1.1) rotate(6deg); }
  100% { opacity: 1; transform: scale(1) rotate(0); }
}
</style>