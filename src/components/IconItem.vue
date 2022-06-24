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
  <mdi-home-lightning-bolt-outline v-else-if="icon == 'HomeLightningBoltOutline'" :style="style" />
  <my-home-plumbing v-else-if="icon == 'HomePlumbing'" :style="style" />
  <mdi-home-assistant v-else-if="icon == 'HomeAssistant'" :style="style" />
  <mdi-heat-pump-outline v-else-if="icon == 'HeatPumpOutline'" :style="style" />
  <mdi-email-outline v-else-if="icon == 'EmailOutline'" :style="style" />
</template>
