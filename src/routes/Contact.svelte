<script>
  // Puedes agregar aquí lógica si necesitas, por ejemplo, para copiar el correo al portapapeles.
  let email = "raulisai97@gmail.com";
  let copied = false;

  function copyEmail() {
    navigator.clipboard.writeText(email);
    copied = true;
    setTimeout(() => copied = false, 1500);
  }
</script>

<section id="contact" class="py-16 relative bg-gradient-to-b from-[#1a1e24] via-[#23253b] to-[#181825] rounded-xl shadow-2xl overflow-hidden mx-auto max-w-2xl">
  <div class="absolute inset-0 pointer-events-none z-0">
    <!-- Animated Circles BG -->
    <div class="absolute -top-16 -left-16 w-60 h-60 bg-[#39FF1440] rounded-full blur-2xl animate-pulse-slow"></div>
    <div class="absolute -bottom-20 -right-10 w-80 h-80 bg-[#FF205230] rounded-full blur-3xl animate-pulse-delay"></div>
    <div class="absolute top-1/2 left-1/2 w-32 h-32 bg-[#FFD60033] rounded-full blur-2xl animate-spin-slow -translate-x-1/2 -translate-y-1/2"></div>
  </div>
  <div class="relative flex flex-col items-center z-10">
    <span class="text-3xl font-mecha font-bold text-[var(--eva-green)] tracking-wider drop-shadow-lg animate-fade-in">¿Quieres contactarme?</span>
    <div class="flex flex-row items-center gap-2 mt-4">
      <a
        href="mailto:raulisai97@gmail.com"
        class="text-2xl font-bold underline underline-offset-8 decoration-wavy text-[var(--eva-accent)] hover:text-[var(--eva-green)] transition-colors duration-300 animate-fade-in"
        style="text-shadow: 0 2px 12px #39FF1480, 0 1px 0 #111;"
        >raulisai97@gmail.com
      </a>
      <button
        class="ml-2 px-2 py-1 rounded bg-[#181825] text-[var(--eva-green)] border border-[var(--eva-green)] hover:bg-[var(--eva-green)] hover:text-[#181825] transition-all duration-200 text-sm font-mono shadow-lg"
        aria-label="Copiar correo electrónico"
        on:click={copyEmail}
        >
        📋
      </button>
      {#if copied}
        <span class="ml-1 text-xs text-[var(--eva-green)] animate-fade-in">¡Copiado!</span>
      {/if}
    </div>
  </div>
  <div class="flex justify-center gap-10 mt-12 relative z-10">
    <a
      href="https://linkedin.com/in/tuusuario"
      target="_blank"
      class="group flex flex-col items-center text-[var(--eva-accent)] hover:text-[var(--eva-green)] transition-all duration-300 animate-zoom-in"
      aria-label="LinkedIn"
    >
      <span class="relative flex items-center justify-center w-14 h-14 mb-2 rounded-full bg-opacity-10 group-hover:bg-opacity-20 shadow-lg animate-bounce-slow">
        <svg class="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-9h3v9zm-1.5-10.29c-.97 0-1.75-.79-1.75-1.75s.78-1.75 1.75-1.75 1.75.79 1.75 1.75-.78 1.75-1.75 1.75zm13.5 10.29h-3v-4.5c0-1.08-.02-2.47-1.5-2.47-1.5 0-1.73 1.17-1.73 2.39v4.58h-3v-9h2.88v1.23h.04c.4-.76 1.36-1.56 2.8-1.56 3 0 3.56 1.97 3.56 4.53v4.8z"/>
        </svg>
      </span>
      <span class="text-xs font-bold tracking-wide">LinkedIn</span>
    </a>
    <a
      href="https://github.com/tuusuario"
      target="_blank"
      class="group flex flex-col items-center text-[var(--eva-accent)] hover:text-[var(--eva-green)] transition-all duration-300 animate-zoom-in"
      aria-label="GitHub"
    >
      <span class="relative flex items-center justify-center w-14 h-14 mb-2 rounded-full  bg-opacity-10 group-hover:bg-opacity-20 shadow-lg animate-bounce-slow [animation-delay:0.2s]">
        <svg class="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 .5C5.73.5.5 5.74.5 12.02c0 5.1 3.29 9.43 7.86 10.96.58.11.79-.25.79-.56 0-.28-.01-1.02-.02-2.01-3.2.7-3.88-1.54-3.88-1.54-.53-1.36-1.29-1.72-1.29-1.72-1.05-.72.08-.7.08-.7 1.17.08 1.78 1.2 1.78 1.2 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.72-1.55-2.56-.29-5.26-1.28-5.26-5.7 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.46.11-3.04 0 0 .97-.31 3.18 1.18a11.13 11.13 0 0 1 2.9-.39c.98 0 1.97.13 2.9.39 2.2-1.49 3.17-1.18 3.17-1.18.63 1.58.23 2.75.12 3.04.74.81 1.19 1.84 1.19 3.1 0 4.43-2.7 5.41-5.27 5.7.41.36.77 1.08.77 2.18 0 1.58-.01 2.86-.01 3.24 0 .31.2.67.8.56C20.71 21.45 24 17.12 24 12.02 24 5.74 18.27.5 12 .5z"/>
        </svg>
      </span>
      <span class="text-xs font-bold tracking-wide">GitHub</span>
    </a>
    <a
      href="https://twitter.com/tuusuario"
      target="_blank"
      class="group flex flex-col items-center text-[var(--eva-accent)] hover:text-[var(--eva-green)] transition-all duration-300 animate-zoom-in"
      aria-label="Twitter"
    >
      <span class="relative flex items-center justify-center w-14 h-14 mb-2 rounded-full  bg-opacity-10 group-hover:bg-opacity-20 shadow-lg animate-bounce-slow [animation-delay:0.4s]">
        <svg class="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M24 4.56c-.89.39-1.84.65-2.84.77a4.93 4.93 0 0 0 2.16-2.72 9.86 9.86 0 0 1-3.13 1.2A4.92 4.92 0 0 0 16.67 3c-2.73 0-4.94 2.21-4.94 4.93 0 .39.04.77.12 1.13C7.73 8.87 4.1 6.92 1.67 3.92c-.42.72-.67 1.56-.67 2.45 0 1.69.86 3.18 2.17 4.06-.8-.02-1.56-.25-2.23-.62v.06c0 2.36 1.68 4.33 3.92 4.78-.41.11-.84.17-1.28.17-.31 0-.62-.03-.92-.08.62 1.93 2.42 3.33 4.55 3.37A9.87 9.87 0 0 1 0 21.54a13.94 13.94 0 0 0 7.56 2.22c9.05 0 14-7.5 14-14 0-.21 0-.42-.02-.63A9.93 9.93 0 0 0 24 4.56z"/>
        </svg>
      </span>
      <span class="text-xs font-bold tracking-wide">Twitter</span>
    </a>
  </div>
</section>

<style>
  @keyframes fade-in {
    from { opacity: 0; transform: translateY(24px);}
    to { opacity: 1; transform: translateY(0);}
  }
  .animate-fade-in {
    animation: fade-in 0.8s cubic-bezier(.23,1.11,.32,1) both;
  }

  @keyframes pulse-slow {
    0%, 100% { opacity: 0.5; transform: scale(1);}
    50% { opacity: 1; transform: scale(1.12);}
  }
  .animate-pulse-slow {
    animation: pulse-slow 3.8s ease-in-out infinite;
  }
  .animate-pulse-delay {
    animation: pulse-slow 5.2s 1.8s ease-in-out infinite;
  }

  @keyframes spin-slow {
    from { transform: rotate(0deg);}
    to { transform: rotate(360deg);}
  }
  .animate-spin-slow {
    animation: spin-slow 13s linear infinite;
  }

  @keyframes bounce-slow {
    0% { transform: translateY(0);}
    20% { transform: translateY(-8px);}
    40% { transform: translateY(0);}
    60% { transform: translateY(-6px);}
    80% { transform: translateY(0);}
    100% { transform: translateY(0);}
  }
  .animate-bounce-slow {
    animation: bounce-slow 2.4s ease-in-out infinite;
  }

  @keyframes zoom-in {
    from { opacity:0; transform: scale(0.7);}
    to   { opacity:1; transform: scale(1);}
  }
  .animate-zoom-in {
    animation: zoom-in 0.9s cubic-bezier(.23,1.11,.32,1) both;
  }
</style>
