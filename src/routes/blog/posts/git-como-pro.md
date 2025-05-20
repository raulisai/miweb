---
title: Git como un Pro: Comandos y Buenas Prácticas
date: 2025-05-19
---

Git es una herramienta poderosa para el control de versiones. Usarlo de forma eficiente te puede ahorrar muchos problemas y mejorar la colaboración con tu equipo.

## 1. Configuración inicial

```bash
git config --global user.name "Tu Nombre"
git config --global user.email "tu@email.com"
git config --global init.defaultBranch main

git init              # Crear un repositorio
git status            # Ver archivos modificados
git add .             # Añadir todos los cambios
git commit -m "Mensaje" # Confirmar cambios
git push origin main  # Subir al repositorio remoto

git branch nueva-rama       # Crear nueva rama
git checkout nueva-rama     # Cambiar de rama
git merge nombre-rama       # Fusionar rama en actual
git branch -d nombre-rama   # Eliminar rama


git reset --soft HEAD~1     # Deshacer último commit (mantiene cambios)
git checkout -- archivo     # Revertir cambios en archivo específico
git stash                   # Guardar cambios sin confirmar
git stash pop               # Recuperar stash
git log --oneline --graph --all    # Ver historial resumido con ramas
git reflog                         # Ver historial incluso de commits perdidos
git cherry-pick <hash>             # Aplicar commit específico




git log --oneline --graph --all    # Ver historial resumido con ramas
git reflog                         # Ver historial incluso de commits perdidos
git cherry-pick <hash>             # Aplicar commit específico
