# 🚀 Proyecto Astro con TailwindCSS y Content Islands

¡Bienvenido a este proyecto creado con [Astro](https://astro.build/) ✨!  
Este proyecto utiliza las últimas tecnologías para construir sitios rápidos y modernos.

## 🛠️ Tecnologías utilizadas

- 🌌 **[Astro](https://astro.build/)** – Framework moderno de frontend
- 🎨 **[TailwindCSS](https://tailwindcss.com/)** – Framework de utilidades CSS
- 🏝️ **[Content Islands](https://contentisland.net/es/)** – Headless CMS flexible y fácil de usar
- ⚓  **[Husky](https://typicode.github.io/husky/)** – Automatically lint your commit messages, code, and run tests

---

## ⚡ Cómo arrancar el proyecto

Sigue estos pasos para poner en marcha el proyecto localmente:

*📥 **Clona el repositorio**

   ```bash
   git clone https://github.com/tu-usuario/tu-repo.git
   cd tu-repo

*📦 **Instala las dependencias**

 ```bash
  pnpm install
 ```

*🚀**Arranca el servidor de desarrollo**

  ```bash
  pnpm run dev  
 ```

*🌐 **Abre tu navegador**
  Normalmente el proyecto estará en: <http://localhost:4321>

*⚓**Arrancar Husky**

 ```bash
  pnpm prepare
 ```

*🚀**Lanzar Husky**

```bash
 pnpm commit
```

## 🍓Husky🍓

Include in package.json

```json

 "husky: {
  "hooks: {
   "pre-commit: "lint-staged"
  }
 },
 "lint-staged: {
  "*.{css, scss}": [
   "stylelint --fix",
   "prettier --write"
  ],
  "*.{js,jsx,tsx,ts}": [
   "eslint --fix",
   "prettier --write",
   "tsc --noEmit"
  ]
 }

```

## 🍄commitlint🍄

- commilint prompt
  <a href="https://commitlint.js.org/reference/prompt.html#prompt"> CommitLint Prompt </a>
- commitlint/config-conventional
  <a href="https://github.com/conventional-changelog/commitlint/tree/master/@commitlint/config-conventional#commitlintconfig-conventional">commitlint/config-conventional<a/>
