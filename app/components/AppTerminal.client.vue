<template>
	<div class="terminal-wrapper">
		<div ref="terminalElement" />
	</div>
	<LazyMediaModal />
	<LazyClickerGame v-if="clickerState.active" />
	<LazyAudioPlayer v-if="audio.asset" />
</template>

<script setup>
import { Terminal } from '@xterm/xterm'
import { FitAddon } from '@xterm/addon-fit'
import { createTerminalConfig } from '~/utils/terminal-config.js'

const config = useAppConfig().fridos
const runtimeConfig = useRuntimeConfig()
const audio = useAudioPlayer()
const clickerState = useClickerGame()

const promptColor = TEXT_STYLES[config.promptColor] || TEXT_STYLES.MAGENTA
const PROMPT = `${promptColor}${config.promptSymbol}${TEXT_STYLES.NC} `

const version = runtimeConfig.public.version || '0.0.0'
const welcomeMessage = config.welcomeMessage
	.replace('{{version}}', version)
	.replace('{{name}}', config.name)

const terminalElement = useTemplateRef('terminalElement')
const terminal = new Terminal(createTerminalConfig(config.theme))
const fitAddon = new FitAddon()
let commandBuffer = ''

onMounted(async () => {
	await nextTick()
	window.addEventListener('resize', () => {
		fitAddon.fit()
	})
	terminal.loadAddon(fitAddon)

	terminal.open(terminalElement.value)

	await document.fonts.ready
	fitAddon.fit()
	terminal.write(`${welcomeMessage}\r\n${PROMPT}`)
	terminal.focus()
	terminal.onData(async (string) => {
		const input = string.toUpperCase()

		if (string === '\r') {
			terminal.write('\r\n')
			await commandHandler(terminal, commandBuffer)
			commandBuffer = ''
			terminal.write(PROMPT)
		}

		// backspace
		else if (string === '\x7f') {
			if (commandBuffer.length === 0) return
			terminal.write('\b \b')
			commandBuffer = commandBuffer.slice(0, -1)
		}

		// disable up and down arrow keys
		// TODO: implement command history
		else if (string === '\u001b[A' || string === '\u001b[B') {
			return
		}

		// clear asset on escape key
		else if (string === '\u001b') {
			clearImage()
			clearAudio()
			if (clickerState.value) abortClickerGame(terminal)
		}

		// clear on ctrl + l
		else if (string === '\u000c') {
			terminal.clear()
		}

		// collect command input
		else {
			terminal.write(input)
			commandBuffer += input
		}
	})
})
</script>

<style>
.terminal-wrapper {
  padding: 1em;
  height: 100vh;
  box-sizing: border-box;
  background: var(--terminal-bg, #011627);
}

.xterm-viewport::-webkit-scrollbar {
  display: none;
}
</style>
