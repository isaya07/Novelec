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
  <Transition>
    <div v-if="visible" ref="notif" :class="['notification fixenot', type ? `is-${type}` : '']">
      <button class="delete is-medium" @click="$emit('show', !visible)"></button>
      <slot />
    </div>
  </Transition>
</template>

<style>
.fixenot {
  position: fixed;
  top: 100px;
  z-index: 999;
  width: 80%;
  margin: auto;
}

.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
