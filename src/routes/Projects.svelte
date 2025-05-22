<script lang="ts">
import {base} from '$app/paths';

</script>
<section id="projects" class="py-12">
  <h2 class="text-2xl font-mecha mb-4" style="color: var(--eva-green);">Proyectos</h2>
  <div class="grid gap-8 md:grid-cols-2">
    <!-- Ejemplo de proyecto -->
    <div class="relative rounded-lg shadow-lg p-4 overflow-visible hover:shadow-[#39FF14]/30 transition-all duration-300" style="background-color: #181825; border: 1px solid var(--eva-green);">
      <img src={`${base}/project1.png`} alt="Proyecto 1" class="rounded mb-4 w-full h-48 object-cover -mt-8 transform hover:-translate-y-1 transition-transform shadow-lg" style="background-color: rgba(57,255,20,0.1);" />
      <div class="space-y-3">
        <h3 class="text-lg font-mecha" style="color: var(--eva-accent);">Simulador de examen con asistencia de IA</h3>
        <p class="text-sm leading-relaxed" style="color: var(--eva-yellow);">Sistema de base de datos extraido de forma automatizada extrayendo datos con IA para dar asistencia a los estudiantes para resolver examenes.</p>
        <div class="flex gap-3 mt-4">
          <a href="https://github.com/raulisai/guiaipn-web" target="_blank" class="btn-eva inline-flex items-center gap-1 px-3 py-1.5 rounded-md" style="background-color: rgba(57,255,20,0.2); border: 1px solid var(--eva-green);"><span class="text-[#39FF14]">⌘</span> GitHub</a>
          <a href="https://www.guiaipn.digital/" target="_blank" class="btn-eva inline-flex items-center gap-1 px-3 py-1.5 rounded-md" style="background-color: rgba(255,214,0,0.2); border: 1px solid var(--eva-yellow);"><span class="text-[#FFD600]">◎</span> Demo</a>
        </div>
      </div>
    </div>
    <!-- Añade más proyectos aquí -->
    <div class="relative rounded-lg shadow-lg p-4 overflow-visible hover:shadow-[#39FF14]/30 transition-all duration-300" style="background-color: #181825; border: 1px solid var(--eva-green);">
      <img src={`${base}/poleana.png`} alt="Proyecto 2 poleana" class="rounded mb-4 w-full h-48 object-cover -mt-8 transform hover:-translate-y-1 transition-transform shadow-lg" style="background-color: rgba(57,255,20,0.1);" />
      <div class="space-y-3">
        <h3 class="text-lg font-mecha" style="color: var(--eva-accent);">Game Polaena</h3>
        <p class="text-sm leading-relaxed" style="color: var(--eva-yellow);">Juego de rol para la comunidad de Polaena, proyecto realizado con svelte y canvas trabajando como fullstack.</p>
        <div class="flex gap-3 mt-4">
          <a href="https://github.com/raulisai/poleana_game/tree/preproduccion" target="_blank" class="btn-eva inline-flex items-center gap-1 px-3 py-1.5 rounded-md" style="background-color: rgba(57,255,20,0.2); border: 1px solid var(--eva-green);"><span class="text-[#39FF14]">⌘</span> GitHub</a>
          <a href="https://www.guiaipn.digital/" target="_blank" class="btn-eva inline-flex items-center gap-1 px-3 py-1.5 rounded-md" style="background-color: rgba(255,214,0,0.2); border: 1px solid var(--eva-yellow);"><span class="text-[#FFD600]">◎</span> Demo</a>
        </div>
      </div>
    </div>
</section>
