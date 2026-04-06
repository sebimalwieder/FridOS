<script setup>
useHead({
	title: 'FridOS',
})
</script>

<template>
	<VitePwaManifest />
	<div class="overflow-hidden w-screen h-screen">
		<AppTerminal @keyup.esc.prevent="() => {}" />
	</div>
</template>
