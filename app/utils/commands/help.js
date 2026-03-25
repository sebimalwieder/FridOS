const commandModules = import.meta.glob('./*.js', { eager: true })

export const help = (terminal) => {
	terminal.writeln('Available commands:')

	for (const [path, module] of Object.entries(commandModules)) {
		const name = path.match(/\.\/(.+)\.js$/)[1]
		if (name.startsWith('_')) continue
		if (module.hidden) continue
		if (name === 'help') continue

		const summary = module.helpSummary || ''
		terminal.writeln(`  ${name}: ${summary}`)
	}
}

export const helpSummary = 'Show available commands'
