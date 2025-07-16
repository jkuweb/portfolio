import tseslint from 'typescript-eslint';
import astroParser from 'astro-eslint-parser';
import tsPlugin from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';
import unusedImports from 'eslint-plugin-unused-imports';
import eslintPluginAstro from 'eslint-plugin-astro';
import globals from 'globals';

export default tseslint.config(
	tseslint.configs.recommended,
	eslintPluginPrettierRecommended,
	eslintPluginAstro.configs.recommended,
	{
		ignores: [
			'**/public',
			'**/dist',
			'**/dist/*',
			'**/tests/*',
			'coverage',
			'.astro/*',
			'node_modules/*',
		],
	},
	// Config base
	{
		files: ['**/*.ts', '**/*.tsx'],
		languageOptions: {
			parser: tsParser,
			parserOptions: {
				project: ['./tsconfig.json'],
				tsconfigRootDir: import.meta.dirname,
			},
			globals: globals.browser,
		},
		plugins: {
			'@typescript-eslint': tsPlugin,
			'unused-imports': unusedImports,
		},
		rules: {
			'no-unused-vars': 'error',
			'@typescript-eslint/no-unused-vars': 'warn',
			'@typescript-eslint/no-floating-promises': 'error',
			'@typescript-eslint/no-explicit-any': ['warn'],
			'@typescript-eslint/no-confusing-non-null-assertion': ['error'],
			'@typescript-eslint/no-extra-non-null-assertion': ['error'],
			'@typescript-eslint/no-non-null-asserted-optional-chain': ['error'],
			'@typescript-eslint/no-non-null-assertion': ['error'],
			'@typescript-eslint/no-require-imports': ['error'],
			'@typescript-eslint/no-useless-constructor': ['error'],
			'@typescript-eslint/prefer-for-of': ['error'],
			'@typescript-eslint/no-inferrable-types': 'error',
			'@typescript-eslint/no-confusing-void-expression': [
				'error',
				{ ignoreArrowShorthand: true },
			],
			'@typescript-eslint/no-floating-promises': ['error'],
			'@typescript-eslint/no-unnecessary-boolean-literal-compare': ['error'],
			'@typescript-eslint/no-unnecessary-condition': ['error'],
			'@typescript-eslint/prefer-nullish-coalescing': ['error'],
			'@typescript-eslint/prefer-readonly': ['error'],
			'@typescript-eslint/promise-function-async': [
				'error',
				{ checkArrowFunctions: false },
			],
			'@typescript-eslint/switch-exhaustiveness-check': ['error'],

			// good practises
			eqeqeq: 'error',
			'no-console': 'warn',
			'no-else-return': ['error', { allowElseIf: false }],
			'no-extend-native': 'error',
			'no-lonely-if': 'error',
			'no-param-reassign': 'error',
			'no-unused-vars': 'off',
			'no-return-assign': 'error',
			'no-throw-literal': 'error',
			'no-var': 'error',
			'object-shorthand': 'error',
			'prefer-const': 'error',
			'prefer-rest-params': 'error',
			'prefer-spread': 'error',
			'prefer-template': 'error',
			// style
			curly: 'error',
			'lines-between-class-members': [
				'error',
				'always',
				{ exceptAfterSingleLine: true },
			],
			'padding-line-between-statements': [
				'error',
				{ blankLine: 'always', prev: '*', next: 'return' },
			],
			'unused-imports/no-unused-imports': 'error',
			'unused-imports/no-unused-vars': [
				'warn',
				{
					vars: 'all',
					varsIgnorePattern: '^_',
					args: 'after-used',
					argsIgnorePattern: '^_',
				},
			],
		},
	},

	// Config para Astro
	{
		files: ['.astro'],
		languageOptions: {
			parser: astroParser,
			parserOptions: {
				parser: tsParser,
				extraFileExtensions: ['.astro'],
				project: ['./tsconfig.json'],
				tsconfigRootDir: import.meta.dirname,
			},
		},
		plugins: {
			'@typescript-eslint': tsPlugin,
			'unused-imports': unusedImports,
		},
		rules: {
			// prettier
			'space-before-function-paren': ['error', 'always'],
			'unused-imports/no-unused-imports': 'error',
			'unused-imports/no-unused-vars': [
				'warn',
				{
					vars: 'all',
					varsIgnorePattern: '^_',
					args: 'after-used',
					argsIgnorePattern: '^_',
				},
			],
			// Puedes desactivar aquí las reglas que requieren tipo si quieres
			'no-unused-vars': 'error',
			'@typescript-eslint/no-unused-vars': 'warn',
			'@typescript-eslint/no-floating-promises': 'error',
			'@typescript-eslint/no-explicit-any': ['warn'],
			'@typescript-eslint/no-confusing-non-null-assertion': ['error'],
			'@typescript-eslint/no-extra-non-null-assertion': ['error'],
			'@typescript-eslint/no-non-null-asserted-optional-chain': ['error'],
			'@typescript-eslint/no-non-null-assertion': ['error'],
			'@typescript-eslint/no-require-imports': ['error'],
			'@typescript-eslint/no-useless-constructor': ['error'],
			'@typescript-eslint/prefer-for-of': ['error'],
			'@typescript-eslint/no-inferrable-types': 'error',
			'@typescript-eslint/no-confusing-void-expression': [
				'error',
				{ ignoreArrowShorthand: true },
			],
			'@typescript-eslint/no-floating-promises': ['error'],
			'@typescript-eslint/no-unnecessary-boolean-literal-compare': ['error'],
			'@typescript-eslint/no-unnecessary-condition': ['error'],
			'@typescript-eslint/prefer-nullish-coalescing': ['error'],
			'@typescript-eslint/prefer-readonly': ['error'],
			'@typescript-eslint/promise-function-async': [
				'error',
				{ checkArrowFunctions: false },
			],
			'@typescript-eslint/switch-exhaustiveness-check': ['error'],

			// good practises
			eqeqeq: 'error',
			'no-console': 'warn',
			'no-else-return': ['error', { allowElseIf: false }],
			'no-extend-native': 'error',
			'no-lonely-if': 'error',
			'no-param-reassign': 'error',
			'no-unused-vars': 'off',
			'no-return-assign': 'error',
			'no-throw-literal': 'error',
			'no-var': 'error',
			'object-shorthand': 'error',
			'prefer-const': 'error',
			'prefer-rest-params': 'error',
			'prefer-spread': 'error',
			'prefer-template': 'error',
		},
	},

	// Otros archivos (js, etc.)
	{
		files: ['**/*.{js,cjs,mjs}'],
		languageOptions: {
			parserOptions: {
				ecmaVersion: 'latest',
			},
		},
	},
);
