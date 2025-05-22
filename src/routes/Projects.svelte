<script lang="ts">

import { base } from '$app/paths';

</script>

<section id="projects" class="py-12">
  <h2 class="text-2xl font-mecha mb-4" style="color: var(--eva-green);">Proyectos</h2>
  <div class="grid gap-8 md:grid-cols-2">
    <!-- Ejemplo de proyecto -->
    <div class="rounded-lg shadow-lg p-4" style="background-color: #181825; border: 1px solid var(--eva-green);">
      <img src={`${base}/project1.png`} alt="Proyecto 1" class="rounded mb-2 w-full h-40 object-cover" style="background-color: rgba(57,255,20,0.1);" />
      <h3 class="text-lg font-mecha" style="color: var(--eva-accent);">Detector de Anomalías con IA</h3>
      <p class="text-sm" style="color: var(--eva-yellow);">Sistema para detectar anomalías en datos industriales usando modelos de ML.</p>
      <a href="https://github.com/tuusuario/proyecto-anomalias" target="_blank" class="btn-eva mt-2 inline-block">Ver en GitHub</a>
    </div>
    <!-- Añade más proyectos aquí -->
    <div class="rounded-lg shadow-lg p-4" style="background-color: #181825; border: 1px solid var(--eva-green);">
      <img src="/project1.png" alt="Proyecto 1" class="rounded mb-2 w-full h-40 object-cover" style="background-color: rgba(57,255,20,0.1);" />
      <h3 class="text-lg font-mecha" style="color: var(--eva-accent);">Detector de Anomalías con IA</h3>
      <p class="text-sm" style="color: var(--eva-yellow);">Sistema para detectar anomalías en datos industriales usando modelos de ML.</p>
      <a href="https://github.com/tuusuario/proyecto-anomalias" target="_blank" class="btn-eva mt-2 inline-block">Ver en GitHub</a>
    </div>
  </div>
</section>
