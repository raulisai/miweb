module.exports = {
  theme: {
    extend: {
      colors: {
        'eva01-green': '#7fffd4',
        'eva01-dark': '#22223b',
        'eva01-yellow': '#ffd166',
        'eva01-accent': '#ef476f',
        // Nuevos colores para mejor contraste
        'eva-text-light': '#111111',  // Texto negro para tema claro
        'eva-text-dark': '#f8f8f8',   // Texto blanco para tema oscuro
        'eva-bg-light': '#ffffff',    // Fondo blanco para tema claro
        'eva-bg-dark': '#181825',     // Fondo oscuro para tema oscuro
        'eva-secondary-light': '#f5f5f5', // Fondo secundario para tema claro
        'eva-secondary-dark': '#22223b',  // Fondo secundario para tema oscuro
        'eva-border-light': '#dddddd',    // Bordes para tema claro
        'eva-border-dark': '#444444',     // Bordes para tema oscuro
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: '65ch',
            color: 'var(--text-primary)',
            a: {
              color: 'var(--eva-accent)',
              '&:hover': {
                color: 'var(--eva-accent)',
                opacity: '0.8',
              },
            },
            h1: {
              color: 'var(--text-primary)',
            },
            h2: {
              color: 'var(--text-primary)',
            },
            h3: {
              color: 'var(--text-primary)',
            },
            h4: {
              color: 'var(--text-primary)',
            },
          },
        },
      },
    },
  },
  content: [
    './src/**/*.{html,js,svelte,ts}',
  ],
};
