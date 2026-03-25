export const alphabet = (terminal, char) => {
	if (!terminal) return
	if (!char) {
		terminal.writeln('abcdefghijklmnopqrstuvwxyz')
		terminal.writeln('ABCDEFGHIJKLMNOPQRSTUVWXYZ')
		return
	}

	const glob = import.meta.glob('~/assets/img/alphabet/*.{jpg,png,webp}', {
		eager: true,
		import: 'default',
	})

	const getFilename = path => path.split('/').pop()
	const filteredImages = Object.values(glob).filter(path =>
		getFilename(path).startsWith(char),
	)
	const randomImage
		= filteredImages[Math.floor(Math.random() * filteredImages.length)]
	useImageViewer().value = { asset: randomImage, type: 'image', char }
}

export const helpSummary = 'Prints the alphabet'
