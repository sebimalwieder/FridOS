<template>
  <transition
    enter-active-class="transition-all duration-500"
    enter-from-class="opacity-0 scale-0"
    enter-to-class="opacity-100 scale-100"
    leave-active-class="transition-all duration-500"
    leave-from-class="opacity-100 scale-100"
    leave-to-class="opacity-0 scale-0"
  >
    <div
      v-if="image.asset"
      class="absolute inset-20 bg-slate-800 flex items-center justify-center"
    >
      <img :src="image.asset" class="w-full h-full object-contain p-8" />
      <div
        v-if="image.char"
        class="text-white font-mono text-[9vw] absolute bottom-4 left-4 *:bg-slate-900/80 *:px-4 *:py-2 *:rounded flex gap-2"
      >
        <div class="text-emerald-400">
          {{ image.char.toUpperCase() }}
        </div>
        <div class="text-sky-500">
          {{ image.char.toLowerCase() }}
        </div>
      </div>
    </div>
  </transition>
</template>

<script setup>
const image = useImageViewer();
</script>
