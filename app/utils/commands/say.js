export const say = async (terminal, ...args) => {
	if (!window.speechSynthesis) {
		terminal.writeln('Your device does not support the SpeechSynthesis API')
		return
	}
	const stringToRead = args.join(' ')

	const availableVoices = speechSynthesis.getVoices()
	const utterance = new SpeechSynthesisUtterance()
	utterance.text = stringToRead
	utterance.voice = availableVoices[0]
	await new Promise((resolve) => {
		utterance.onend = resolve
		speechSynthesis.speak(utterance)
	})
}

export const helpSummary = 'Speaks the text you provide'
