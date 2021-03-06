module.exports = {
	extends: [
		'./.eslintrc.json',
		'plugin:vue/recommended'
	],
	parserOptions: {
		parser: 'babel-eslint',
		sourceType: 'module'
	},
	plugins: [
		'vue'
	],
	env: {
		es6: true,
		browser: true,
		node: true
	},
	rules: {
		'vue/html-indent': ['error', 'tab', {
			attribute: 1,
			closeBracket: 0,
			alignAttributesVertically: true,
			ignores: []
		}],
		'vue/max-attributes-per-line': 0,
		'vue/require-prop-types': 0
	}
};
