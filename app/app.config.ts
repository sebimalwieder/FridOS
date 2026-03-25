export default defineAppConfig({
	fridos: {
		// Kid's name — shown in the welcome message
		name: 'Kid',

		// Welcome message template. {{name}} and {{version}} are interpolated.
		welcomeMessage:
      'FridOS v{{version}} — Welcome, {{name}}! Type HELP to get started.',

		// Terminal prompt symbol and color (color must be a key from TEXT_STYLES)
		promptSymbol: '>',
		promptColor: 'MAGENTA',

		// Emojis used by the `number` command
		emojis: ['💖', '🦄', '🍍', '🥐', '🐢', '🫐', '🍓', '🌈', '💅', '🐞', '🪼', '🦋'],

		// Terminal theme
		theme: {
			background: '#011627',
			foreground: '#d6deeb',
			cursor: '#7e57c2',
			cursorAccent: '#ffffff',
			selectionForeground: 'rgba(248, 28, 229, 0.3)',
			fontSize: 28,
			fontFamily: 'Monaspace Argon, monospace',
			black: '#011627',
			red: '#ef5350',
			green: '#22da6e',
			yellow: '#addb67',
			blue: '#82aaff',
			magenta: '#c792ea',
			cyan: '#21c7a8',
			white: '#ffffff',
			brightBlack: '#575656',
			brightRed: '#ef5350',
			brightGreen: '#22da6e',
			brightYellow: '#ffeb95',
			brightBlue: '#82aaff',
			brightMagenta: '#c792ea',
			brightCyan: '#7fdbca',
			brightWhite: '#ffffff',
		},
	},
})
