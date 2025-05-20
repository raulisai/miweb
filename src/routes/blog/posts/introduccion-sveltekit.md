---
title: Introducción práctica a SvelteKit desde la raíz
date: 2025-05-19
---

SvelteKit es un framework que extiende Svelte para facilitar el desarrollo de aplicaciones web completas, soportando enrutamiento, carga de datos y renderizado del lado del servidor.

## 1. Estructura básica del proyecto

Cuando creas un nuevo proyecto, verás una estructura como esta:

my-app/
├── src/
│ ├── routes/
│ │ └── +page.svelte
│ └── lib/
├── static/
├── svelte.config.js
└── vite.config.js

markdown
Copiar
Editar

- `routes/`: Aquí defines las páginas. Cada archivo `.svelte` se convierte en una ruta.
- `+page.svelte`: Representa una vista pública.
- `+page.ts` o `+page.js`: Lógica de carga de datos (`load`).
- `lib/`: Componentes reutilizables.
- `static/`: Archivos públicos como imágenes o favicon.

## 2. Crear una página

Crea un archivo `src/routes/about/+page.svelte`:

```svelte
<script>
  export let data;
</script>

<h1>Acerca de nosotros</h1>
<p>Bienvenido a la página de información.</p>
Se accede en /about.

3. Navegación entre páginas
Usa el componente <a> normal o <Link> de SvelteKit:

svelte
Copiar
Editar
<a href="/about">Ir a About</a>
4. Carga de datos con load
Crea +page.ts:

ts
Copiar
Editar
export function load() {
  return {
    name: 'SvelteKit'
  };
}
Y úsalo en +page.svelte:

svelte
Copiar
Editar
<script>
  export let data;
</script>

<h1>Hola {data.name}</h1>
5. Ejecutar el proyecto
bash
Copiar
Editar
npm install
npm run dev
Este es el punto de partida esencial para trabajar con la sintaxis de SvelteKit desde cero.

css
Copiar
Editar

¿Quieres que te lo exporte como archivo `.md` listo para copiar o subir a tu blog?