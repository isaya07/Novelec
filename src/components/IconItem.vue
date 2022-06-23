<script setup>
defineProps({
  icon: {
    type: String,
    default: "",
  },
  style: {
    type: String,
    default: null,
  },
})

/*function toDashes(string) {
  return string.replace(/[A-Z]/g, (m, o) => (o > 0 ? "-" : "") + m.toLowerCase())
}*/
</script>

<template>
  <my-home v-if="icon == 'MyHome'" :style="style" />
  <mdi-lightning-bolt-circle v-else-if="icon == 'LightningBoltCircle'" :style="style" />
  <mdi-home-circle-outline v-else-if="icon == 'HomeCircleOutline'" :style="style" />
  <mdi-email-outline v-else-if="icon == 'EmailOutline'" :style="style" />
</template>
