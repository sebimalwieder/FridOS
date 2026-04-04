export const clock = async (terminal) => {
	if (!terminal) return
	const clockState = useAnalogClock()
	clockState.value.active = true
	while (clockState.value.active) {
		await new Promise(resolve => setTimeout(resolve, 200))
	}
}

export const helpSummary = 'Shows an analog clock'
