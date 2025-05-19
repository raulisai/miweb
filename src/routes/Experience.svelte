<script lang="ts">
  import dataPersonal from '$lib/data/dataPersonal.json';
</script>

<section id="experience" class="py-10 px-4 md:px-6 max-w-screen-lg mx-auto">
  <!-- Experience Header -->
  <h2 class="text-3xl md:text-4xl font-bold mb-8 text-center text-[#39FF14] font-mono tracking-wider">
    EXPERIENCIA LABORAL
  </h2>
  
  <!-- Work Experience Cards -->
  <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
    {#each dataPersonal.experience as job (job.company)}
      <div class="bg-[#181825] border-l-4 border-[#39FF14] p-5 rounded-lg shadow-lg hover:shadow-[#39FF1433] transition-all duration-300">
        <div class="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-1 mb-2">
          <h3 class="text-xl font-bold text-[#FF2052]">{job.company}</h3>
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
  <div>
    <h3 class="text-2xl font-bold mb-8 text-center text-[#39FF14] font-mono tracking-wider">
      SKILLS TÉCNICAS
    </h3>
    
    <!-- Honeycomb container -->
    <div class="mb-2 text-center text-[#39FF14] font-semibold">PROFICIENT WITH</div>
    <div class="flex flex-wrap justify-center mb-10 honeycomb-container">
      {#each dataPersonal.skills.technical.proficient_with as skill, i}
        <div class="honeycomb-item" style="--delay: {i * 0.1}s">
          <div class="honeycomb" style="animation-delay: {i * 0.1}s">
            <div class="honeycomb-content bg-[#181825] border-2 border-[#39FF14] text-[#39FF14]">
              {skill}
            </div>
          </div>
        </div>
      {/each}
    </div>
    
    <div class="mb-2 text-center text-[#FF2052] font-semibold">FAMILIAR WITH</div>
    <div class="flex flex-wrap justify-center honeycomb-container">
      {#each dataPersonal.skills.technical.familiar_with as skill, i}
        <div class="honeycomb-item" style="--delay: {i * 0.1}s">
          <div class="honeycomb" style="animation-delay: {i * 0.1}s">
            <div class="honeycomb-content bg-[#181825] border-2 border-[#FF2052] text-[#FF2052]">
              {skill}
            </div>
          </div>
        </div>
      {/each}
    </div>
  </div>
</section>


<style>
  /* Honeycomb Layout */
  .honeycomb-container {
    padding: 1rem;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin: 0 auto;
    max-width: 100%;
    gap: 10px;
  }
  
  .honeycomb-item {
    margin: 0 6px 12px;
    transform: translateY(var(--delay));
    transition: all 0.3s ease;
  }
  
  .honeycomb {
    position: relative;
    transition: all 0.3s ease;
  }
  
  .honeycomb:hover {
    transform: translateY(-5px);
  }
  
  .honeycomb-content {
    width: 100px;
    height: 86px;
    clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    padding: 1rem 0.5rem;
    font-size: 0.78rem;
    font-weight: 500;
    transition: all 0.3s ease;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  }
  
  /* Make it responsive */
  @media (max-width: 640px) {
    .honeycomb-content {
      width: 90px;
      height: 78px;
      font-size: 0.7rem;
    }
  }
  
  @media (max-width: 480px) {
    .honeycomb-content {
      width: 80px;
      height: 69px;
      font-size: 0.65rem;
    }
  }
</style>