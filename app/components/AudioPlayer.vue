<template>
  <audio
    ref="audioElement"
    controls
    autoplay
    class="w-full h-12 bg-slate-800"
    :src="audio.asset"
  />

</template>

<script setup>
const audio = useAudioPlayer();
const audioElement = useTemplateRef('audioElement');

onMounted(() => {
  audioElement.value.addEventListener('ended', () => clearAudio());
});
</script>
