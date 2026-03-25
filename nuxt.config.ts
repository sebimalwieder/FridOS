import pkg from './package.json'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	modules: ['@nuxtjs/tailwindcss', '@nuxt/image', '@nuxt/eslint'],
	devtools: { enabled: true },
	css: ['@xterm/xterm/css/xterm.css', '~/assets/css/fonts.css'],

	runtimeConfig: {
		public: {
			version: pkg.version,
		},
	},

	compatibilityDate: '2024-04-03',

	eslint: {
		config: {
			stylistic: {
				indent: 'tab',
			},
		},
	},
})
