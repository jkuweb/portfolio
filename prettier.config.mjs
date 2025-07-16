/**
 * @see https://prettier.io/docs/configuration
 * @type {import("prettier").Config}
 */
const config = {
	semi: true,
	useTabs: true,
	singleQuote: true,
	tabWidth: 2,
	trailingComma: 'all',
	arrowParens: 'always',
	jsxSingleQuote: false,
	printWidth: 80,
	plugins: ['prettier-plugin-astro', 'prettier-plugin-tailwindcss'],
	overrides: [{ files: '*.astro', options: { parser: 'astro' } }],
};

export default config;
