// @ts-check
import tailwindcss from '@tailwindcss/vite';
import { defineConfig, envField } from 'astro/config';

// https://astro.build/config
export default defineConfig({
	vite: {
		plugins: [tailwindcss()],
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
