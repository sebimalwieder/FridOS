export const useImageViewer = () =>
	useState('image-viewer', () => ({ asset: null, type: null }))

export const clearImage = () =>
	(useImageViewer().value = { asset: null, type: null })

export const useAudioPlayer = () =>
	useState('audio-player', () => ({ asset: null, type: null }))

export const clearAudio = () =>
	(useAudioPlayer().value = { asset: null, type: null })

export const useClickerGame = () =>
	useState('clicker-game', () => ({ active: false, score: 0 }))

export const useAnalogClock = () =>
	useState('analog-clock', () => ({ active: false }))

export const clearAnalogClock = () =>
	(useAnalogClock().value = { active: false })

export const runClickerGame = async () => {
	const clickerGame = useClickerGame()
	clickerGame.value.active = true
	clickerGame.value.score = 0
	while (clickerGame.value.active) {
		await new Promise(resolve => setTimeout(resolve, 1000))
	}
	const score = clickerGame.value.score
	clickerGame.value.active = false
	clickerGame.value.score = 0
	return score
}

export const abortClickerGame = (terminal) => {
	const clickerGame = useClickerGame()
	if (terminal && clickerGame.value.active) {
		terminal.writeln('Clicker game aborted.')
	}
	clickerGame.value.active = false
	clickerGame.value.score = 0
}
