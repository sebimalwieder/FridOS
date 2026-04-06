import pkg from './package.json'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	modules: ['@nuxtjs/tailwindcss', '@nuxt/image', '@nuxt/eslint', '@vite-pwa/nuxt'],
	devtools: { enabled: true },
	css: ['@xterm/xterm/css/xterm.css', '~/assets/css/fonts.css'],

	runtimeConfig: {
		public: {
			version: pkg.version,
			name: 'Kid',
			promptSymbol: '>',
			promptColor: 'MAGENTA',
			welcomeMessage: 'FridOS v{{version}} — Welcome, {{name}}! Type HELP to get started.',
			emojis: '💖,🦄,🍍,🥐,🐢,🫐,🍓,🌈,💅,🐞,🪼,🦋',
		},
	},

	compatibilityDate: '2024-04-03',

	vite: {
		optimizeDeps: {
			include: ['@xterm/xterm', '@xterm/addon-fit'],
		},
	},

	eslint: {
		config: {
			stylistic: {
				indent: 'tab',
			},
		},
	},

	pwa: {
		registerType: 'autoUpdate',
		manifest: {
			name: 'FridOS',
			short_name: 'FridOS',
			description: pkg.description,
			theme_color: '#1e2235',
			background_color: '#1e2235',
			display: 'fullscreen',
			orientation: 'any',
			icons: [
				{
					src: 'icons/favicon.png',
					sizes: '512x512',
					type: 'image/png',
				},
				{
					src: 'icons/app-icon.png',
					sizes: '512x512',
					type: 'image/png',
					purpose: 'any',
				},
				{
					src: 'icons/premasked.png',
					sizes: '512x512',
					type: 'image/png',
					purpose: 'maskable',
				},
			],
		},
		workbox: {
			navigateFallback: '/',
			globPatterns: ['**/*.{js,css,html,png,svg,ico,woff2}'],
		},
		client: {
			installPrompt: true,
		},
		devOptions: {
			enabled: false,
		},
	},
})
