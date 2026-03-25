export const number = (terminal, number) => {
	if (!terminal) return

	const emojis = useRuntimeConfig().public.emojis.split(',')
	let randomEmojis = ''
	const numberToPrint = Math.min(number, 1500)

	for (let i = 0; i < numberToPrint; i++) {
		randomEmojis += emojis[Math.floor(Math.random() * emojis.length)] + ' '
	}
	terminal.writeln(randomEmojis)
	if (number > 1500) {
		terminal.writeln(
			`I really wanted to print ${number} emojis, but here's 1500 instead.`,
		)
	}
}

export const helpSummary = 'Prints a number of random emojis'
