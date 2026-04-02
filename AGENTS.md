# AGENTS.md - Developer Guide

This document provides guidelines for agents working in this Astro portfolio project.

## Project Overview

- **Framework**: Astro 5.x with TypeScript
- **Styling**: Tailwind CSS 4.x
- **Package Manager**: pnpm
- **Content**: Content Island CMS integration

## Commands

### Development

```bash
pnpm dev          # Start dev server at localhost:4321
pnpm build        # Build for production
pnpm preview      # Preview production build
```

### Linting & Formatting

```bash
pnpm lint         # Run ESLint
pnpm lint:fix     # Fix ESLint issues automatically
pnpm prettier     # Format all code with Prettier
pnpm stylelint    # Lint CSS/SCSS files
```

### Type Checking

```bash
pnpm astro check  # Run Astro's type checker
```

### Git Workflow

```bash
pnpm commit       # Interactive commit with conventional commits
```

### Note on Testing

No test framework is currently configured. Do not add tests unless explicitly requested.

## Code Style Guidelines

### TypeScript

- **Strict Mode**: Project extends `astro/tsconfigs/strict`
- **Path Aliases**: Use `@/*` to import from `src/` (e.g., `import client from '@/lib/client'`)
- **Type Annotations**: Always prefer explicit types over `any` (ESLint warns on `any`)
- **Null Handling**: Use nullish coalescing (`??`) instead of logical OR (`||`)
- **Async Functions**: Always `await` promises - floating promises are errors

### Naming Conventions

- **Files**: kebab-case for Astro components (`Hero.astro`, `NavMobile.astro`)
- **TypeScript Files**: camelCase with descriptive suffixes (`hero.api.ts`, `hero.model.ts`)
- **Interfaces**: PascalCase (`interface Props`, `interface Hero`)
- **Variables**: camelCase
- **Constants**: UPPER_SNAKE_CASE for truly constant values

### Imports

- Use path aliases (`@/*`) for internal imports
- Group imports: external libs, internal modules
- Remove unused imports (ESLint will error)
- Use `import type { Type }` for types only

### Error Handling

- Never use `console.log` in production code (ESLint warns)
- Use proper error types: `throw new Error('message')` not `throw 'message'`
- Handle async errors with try/catch or .catch()

### Astro Components

- Define props with explicit `interface Props` in frontmatter
- Use `Astro.props` destructuring: `const { url, text } = Astro.props`
- Component folders: PascalCase (e.g., `src/components/Button/`)
- Self-closing tags for components without content

### CSS/Tailwind

- Use Tailwind utility classes
- Custom CSS in `<style>` blocks with standard CSS syntax
- Use CSS custom properties for theme values
- Follow stylelint config (clean-order, standard, tailwind)

### Formatting (Prettier)

- Single quotes for strings
- Tab indentation
- Trailing commas
- Print width: configured in project defaults
- Astro files: handled by prettier-plugin-astro

## ESLint Rules (Enforced)

Key rules from `eslint.config.js`:

- `no-unused-vars` - Error
- `@typescript-eslint/no-floating-promises` - Error
- `@typescript-eslint/no-explicit-any` - Warn
- `@typescript-eslint/prefer-nullish-coalescing` - Error
- `eqeqeq` - Error (use `===`/`!==`)
- `no-console` - Warn
- `no-else_return` - Error
- `prefer-const` - Error
- `prefer-template` - Error
- `object-shorthand` - Error
- `curly` - Error

## Project Structure

```
src/
├── components/       # Astro components (Button/, Hero/, Nav/, etc.)
├── layouts/         # Layout components
├── lib/             # Utilities (client.ts, etc.)
├── pages/           # Astro pages (index.astro, posts/, etc.)
└── styles/          # Global styles
```

## Common Patterns

### API Data Fetching

```typescript
import client from '@/lib/client';
import type { Hero } from './hero.model';

export async function getHero(): Promise<Hero> {
	const hero = await client.getContent<Hero>({
		contentType: 'Hero',
		id: 'your-content-id',
	});
	return hero;
}
```

### Astro Page Data

```astro
---
import Layout from '@/layouts/Layout.astro';
import { getHero } from '@/components/hero/hero.api';

const hero = await getHero();
---

<Layout title="Home">
	<h1>{hero.title}</h1>
</Layout>
```

## Pre-commit Hooks

The project uses Husky with lint-staged:

- TypeScript files: ESLint fix + TypeScript check + Prettier
- Astro files: Prettier + ESLint
- CSS/SCSS: Stylelint fix

Commit messages should follow conventional commits (handled by `pnpm commit`).
