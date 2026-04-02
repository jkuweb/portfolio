// @ts-check
import tailwindcss from '@tailwindcss/vite';
import { defineConfig, envField } from 'astro/config';
import { fileURLToPath } from 'url';

// https://astro.build/config
export default defineConfig({
	vite: {
		plugins: [tailwindcss()],
		resolve: {
			alias: {
				'@': fileURLToPath(new URL('./src', import.meta.url)),
			},
		},
	},
	env: {
		schema: {
			CONTENT_ISLAND_SECRET_TOKEN: envField.string({
				context: 'server',
				access: 'secret',
				optional: false,
				default: 'INFORM_VALID_TOKEN',
			}),
		},
	},
});
