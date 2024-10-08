/** @type { import("eslint").Linter.FlatConfig } */
module.exports = {
	root: true,
	extends: [
		'eslint:recommended',
		'plugin:@typescript-eslint/recommended',
		'plugin:svelte/recommended',
		'prettier'
	],
	parser: '@typescript-eslint/parser',
	plugins: ['@typescript-eslint'],
	parserOptions: {
		sourceType: 'module',
		ecmaVersion: 2020,
		extraFileExtensions: ['.svelte']
	},
	env: {
		browser: true,
		es2017: true,
		node: true
	},
	overrides: [
		{
			files: ['*.svelte'],
			parser: 'svelte-eslint-parser',
			parserOptions: {
				parser: '@typescript-eslint/parser'
			}
		}
	],
	'rules': {
		"@typescript-eslint/no-empty-interface": "off",
		'@typescript-eslint/no-empty-function': 'off',
		'@typescript-eslint/no-explicit-any': 'off',
		'@typescript-eslint/no-unused_vars': 'off',
		'@typescript-eslint/explicit-module-boundary-types': 'off',
		'eqeqeq': 'off',
		'require-await': 'off',
		'no-async-promise-executor': 'off',
		'svelte/no-at-html-tags': 'off'
		// "@typescript-eslint/ban-types": "off",
		// "@typescript-eslint/no-explicit-any": "off",
		// "@typescript-eslint/explicit-module-boundary-types": "off",
		// "require-await": "off"
	}
}
