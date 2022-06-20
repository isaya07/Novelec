<script setup>
defineEmits(["show"])

defineProps({
  visible: {
    type: Boolean,
    default: false,
  },
  type: {
    type: String,
    default: "",
  },
})
</script>

<template>
  <div v-if="visible" ref="notif" :class="['notification', type ? `is-${type}` : '']">
    <button class="delete is-medium" @click="$emit('show', !visible)"></button>
    <slot />
  </div>
</template>
