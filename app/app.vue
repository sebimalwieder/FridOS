<script setup>
useHead({
	title: 'FridOS',
	link: [
		{ rel: 'icon', type: 'image/svg+xml', href: '/icons/favicon.svg' },
		{ rel: 'icon', type: 'image/png', href: '/icons/favicon.png' },
		{ rel: 'apple-touch-icon', href: '/icons/app-icon.png' },
	],
})
</script>

<template>
	<VitePwaManifest />
	<div class="overflow-hidden w-screen h-screen">
		<AppTerminal @keyup.esc.prevent="() => {}" />
	</div>
</template>
