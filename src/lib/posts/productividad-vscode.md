---
title: Trucos de productividad en VSCode para desarrolladores
date: 2025-05-19
---

Visual Studio Code (VSCode) es uno de los editores más usados por su velocidad, extensibilidad y personalización. Aquí tienes algunos consejos esenciales para mejorar tu productividad como desarrollador.

## 1. Atajos de teclado útiles

- `Ctrl + P`: Buscar y abrir archivos rápidamente.
- `Ctrl + Shift + O`: Ir a un símbolo dentro del archivo.
- `Ctrl + Shift + L`: Seleccionar todas las ocurrencias de una palabra.
- `Alt + Shift + ↑ / ↓`: Duplicar líneas rápidamente.
- `Ctrl + /`: Comentar o descomentar líneas.

## 2. Extensiones recomendadas

- **Prettier**: Formateo automático del código.
- **ESLint**: Detección de errores en tiempo real.
- **GitLens**: Historial detallado de cambios en Git.
- **Path Intellisense**: Autocompletado de rutas.
- **Bracket Pair Colorizer 2**: Colores para identificar fácilmente pares de llaves o paréntesis.

## 3. Snippets personalizados

Puedes crear tus propios atajos de código desde:  
`File > Preferences > User Snippets`  
Ejemplo de snippet para HTML:

```json
"Mi div": {
  "prefix": "midiv",
  "body": ["<div class=\"$1\">$2</div>"],
  "description": "Crea un div con clase"
}
