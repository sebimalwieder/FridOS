<template>
	<div>
		<div class="fixed inset-0 bg-slate-900 select-none">
			<div
				v-if="gameState === 'playing'"
				:key="circleKey"
				:style="circleStyle"
				class="absolute rounded-full text-5xl leading-none flex items-center justify-center cursor-pointer select-none animate-ring"
				@click="handleCircleClick"
			>
				🦆
			</div>
			<div
				v-else-if="gameState === 'countdown'"
				class="fixed inset-0 flex items-center justify-center text-9xl text-emerald-400 font-mono"
			>
				{{ timeLeft }}
			</div>
			<audio
				ref="quackAudio"
				type="audio/mpeg"
			/>
		</div>
		<div
			class="fixed top-4 left-4 p-4 text-white pointer-events-none font-mono bg-slate-800 rounded flex items-center gap-2"
		>
			{{ score }}
			<div
				v-if="score > 0"
				class="pl-2"
			>
				<span
					v-for="n in score"
					:key="n"
					class="-ml-2"
				>🦆</span>
			</div>
		</div>
	</div>
</template>

<script setup>
// start a countdown from 3 to 0
// game starts, round time is 30 seconds
// a random circle appears on the screen, when clicked, score increases by 1 and a new circle appears
// after 30 seconds, game ends and score is displayed=
import quack from '~/assets/audio/quack.mp3'

const quackAudio = useTemplateRef('quackAudio')
onMounted(() => {
	quackAudio.value.src = quack
	quackAudio.value.load()
	startGame()
})

const COUNTDOWN = 3
const ROUND_TIME = 30
const score = ref(0)
const timeLeft = ref(COUNTDOWN)
const gameState = ref('countdown') // countdown, playing, gameover
const circleKey = ref(0) // to force re-render of circle
const clickerState = useClickerGame()

const getRandomCircleStyle = () => {
	const size = Math.random() * 50 + 30 // circle size between 30 and 80
	const x = Math.random() * (window.innerWidth - size)
	const y = Math.random() * (window.innerHeight - size)
	const color = `hsl(${Math.random() * 360}, 100%, 50%)`
	return {
		width: `${size}px`,
		height: `${size}px`,
		top: `${y}px`,
		left: `${x}px`,
		backgroundColor: color,
		color: color,
	}
}

const circleStyle = ref(getRandomCircleStyle())

const handleCircleClick = () => {
	if (gameState.value !== 'playing') return
	score.value += 1
	quackAudio.value.currentTime = 0
	quackAudio.value.play()
	// force re-render by changing key
	circleKey.value += 1
	circleStyle.value = getRandomCircleStyle()
}

const startGame = async () => {
	score.value = 0
	timeLeft.value = COUNTDOWN
	gameState.value = 'countdown'

	while (timeLeft.value > 0) {
		await new Promise(resolve => setTimeout(resolve, 1000))
		timeLeft.value -= 1
	}

	timeLeft.value = ROUND_TIME
	gameState.value = 'playing'
	circleStyle.value = getRandomCircleStyle()

	while (timeLeft.value > 0) {
		await new Promise(resolve => setTimeout(resolve, 1000))
		timeLeft.value -= 1
	}

	gameState.value = 'gameover'
	clickerState.value.score = score.value
	clickerState.value.active = false
}
</script>

<style scoped>
.font-monot {
  font-family: 'Monaspace Argon, monospace';
}

.animate-ring {
  animation: ring 0.5s ease-in-out infinite;
}

@keyframes ring {
  0% {
    box-shadow: 0 0 0 currentColor;
  }
  50% {
    box-shadow: 0 0 0 10px currentColor;
  }
  100% {
    box-shadow: 0 0 0 currentColor;
  }
}
</style>
