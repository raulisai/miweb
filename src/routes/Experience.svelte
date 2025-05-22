<script lang="ts">
  import dataPersonal from '$lib/data/dataPersonal.json';
  import { onMount } from 'svelte';
  import { fly } from 'svelte/transition';
  import { cubicOut } from 'svelte/easing';
  
  let mounted = false;
  
  onMount(() => {
    mounted = true;
  });
</script>

<section id="experience" class="py-10 px-4 md:px-6 max-w-screen-lg mx-auto">
  <!-- Experience Header -->
  <h2 class="text-3xl md:text-4xl font-bold mb-8 text-center text-white dark:text-white font-mono tracking-wider"
         in:fly="{{ y: 20, duration: 800, delay: 200, easing: cubicOut }}">
    EXPERIENCIA LABORAL
  </h2> 
  
  <!-- Work Experience Cards -->
  <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
    {#each dataPersonal.experience as job (job.company)}
      <div class="bg-[#181825] border-l-4 border-[#39FF14] p-5 rounded-lg shadow-lg hover:shadow-[#39FF1433] transition-all duration-300"
           in:fly="{{ y: 20, duration: 800, delay: 200, easing: cubicOut }}"  >
        <div class="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-1 mb-2">
          <h3 class="text-xl font-bold">{job.company}</h3>
          <span class="text-[#FFD600] text-sm font-mono">{job.period}</span>
        </div>
        <h4 class="font-semibold text-[#39FF14] mb-2">{job.role}</h4>
        <p class="text-gray-300 text-sm">{job.description}</p>
        <div class="mt-3 text-xs text-gray-500">{job.location}</div>
      </div>
    {/each}
  </div>
  
  <!-- Divider -->
  <div class="h-px bg-gradient-to-r from-[#FF2052] to-[#39FF14] my-10 opacity-70"></div>
  
  <!-- Skills Section -->
  <div class="relative min-h-[500px] flex items-center justify-center">
    <!-- Honeycomb superior izquierda (Proficient) -->
    <div class="absolute left-0 top-0 z-10 flex flex-col items-start -p-4 sm:p-6" style="pointer-events:none;">
      <div class="honeycomb-grid">
        {#if mounted}
          {#each dataPersonal.skills.technical.proficient_with as skill, i}
            <div class="honeycomb-item nerv-proficient"
                 style="animation-delay: {0.2 + i * 0.1}s">
              <span class="text-black">{skill}</span>
            </div>
          {/each}
        {/if}
      </div>
      <div class="honeycomb-label text-[#39FF14] mt-2 font-mono font-bold tracking-wider">PROFICIENT</div>
    </div>

    <!-- Ondas mecha central animadas -->
    <div class="z-0 flex flex-col items-center justify-center relative">
      <div class="relative w-44 h-44 flex items-center justify-center">
        {#each Array(4) as _, i}
          <span
            class="absolute rounded-full border-2 border-[#39FF14] opacity-60 animate-wave-mecha"
            style="
              width: {6 + i * 4}rem;
              height: {6 + i * 4}rem;
              left: 50%; top: 50%;
              transform: translate(-50%, -50%);
              animation-delay: {i * 0.5}s;
              z-index: 0;
            "
          ></span>
        {/each}
        <span class="absolute w-16 h-16 rounded-full bg-[#181825] border-2 border-[#FFD600] flex items-center justify-center font-mecha text-2xl text-[#39FF14] z-10 shadow-[0_0_16px_#39FF1480]">
          <svg class="w-8 h-8" fill="none" stroke="#39FF14" stroke-width="2" viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="10" />
            <path d="M12 8v4l2.5 2.5" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </span>
      </div>
      <div class="text-center mt-4 text-[#39FF14] font-mono text-lg tracking-widest">SKILLS</div>
    </div>

    <style>
      @keyframes wave-mecha {
        0% { transform: translate(-50%, -50%) scale(0.8); opacity: 0.7; }
        70% { opacity: 0.3; }
        100% { transform: translate(-50%, -50%) scale(1.4); opacity: 0; }
      }
      .animate-wave-mecha {
        animation: wave-mecha 2.5s cubic-bezier(.7,-0.3,.3,1.5) infinite;
      }
    </style>

    <!-- Honeycomb inferior derecha (Familiar) -->
    <div class="absolute right-0 bottom-0 z-10 flex flex-col items-end -p-4 sm:p-6" style="pointer-events:none;">
      <div class="honeycomb-grid">
        {#if mounted}
          {#each dataPersonal.skills.technical.familiar_with as skill, i}
            <div class="honeycomb-item nerv-familiar"
                 style="animation-delay: {0.2 + i * 0.1}s">
              <span class="text-black">{skill}</span>
            </div>
          {/each}
        {/if}
      </div>
      <div class="honeycomb-label text-[#FF2052] mt-2 font-mono font-bold tracking-wider">FAMILIAR</div>
    </div>
  </div>
</section>


<style>
/* Honeycomb grid layout */
.honeycomb-grid {
  display: grid;
  grid-template-columns: repeat(3, 78px);
  grid-auto-rows: 78px;
  gap: 4px;
  /* Hex offset effect */
}
.honeycomb-grid .honeycomb-item:nth-child(4),
.honeycomb-grid .honeycomb-item:nth-child(5),
.honeycomb-grid .honeycomb-item:nth-child(6) {
  margin-left: 24px;
}

.honeycomb-item {
  width: 80px;
  height: 80px;
  background: greenyellow;
  clip-path: polygon(25% 6%, 75% 6%, 100% 50%, 75% 94%, 25% 94%, 0% 50%);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.8rem;
  font-weight: bold;
  border: 3px solid #333;
  box-shadow: 0 0 16px #000a;
  margin: 2px;
  color: #fff;
  position: relative;
  animation: nerv-pop 0.8s cubic-bezier(.7,-0.3,.3,1.5) both;
}
.nerv-proficient {
  border-color: #39FF14;
  color: #39FF14;
  box-shadow: 0 0 12px #39FF1455, 0 0 2px #000a;
  background: greenyellow;
}
.nerv-familiar {
  border-color: #ffde20;
  color: #FF2052;
  box-shadow: 0 0 12px #FF205266, 0 0 2px #000a;
  background: rgb(253, 150, 32);
}
.honeycomb-label {
  letter-spacing: 0.15em;
  font-size: 0.95rem;
  text-shadow: 0 0 8px #222, 0 0 2px #000;
}

@keyframes nerv-pop {
  0% { transform: scale(0.2) rotate(-10deg); opacity: 0; }
  80% { transform: scale(1.1) rotate(2deg); opacity: 1; }
  100% { transform: scale(1) rotate(0deg); opacity: 1; }
}

/* Responsividad */
@media (max-width: 640px) {
  .honeycomb-grid {
    grid-template-columns: repeat(2, 75px);
    grid-auto-rows: 75px;
  }
  .honeycomb-item {
    width: 75px;
    height: 75px;
    font-size: 0.8rem;
  }
}


</style>