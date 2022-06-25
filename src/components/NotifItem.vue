<script setup>
import { ref, watch } from "vue"
const emit = defineEmits(["show"])

const props = defineProps({
  visible: {
    type: Boolean,
    default: false,
  },
  type: {
    type: String,
    default: "",
  },
  timeout: {
    type: Number,
    default: 10000,
  },
})

let show = ref(false)
let timeout = null

watch(
  () => props.visible,
  (newValue) => {
    if (newValue != show.value) {
      show.value = newValue
      if (show.value == true) {
        timeout = setTimeout(function () {
          emit("show", false)
        }, props.timeout)
      } else {
        clearTimeout(timeout)
      }
    }
  }
)
</script>

<template>
  <Transition name="bounce">
    <div v-if="show" class="fixenot">
      <div ref="notif" :class="['container notification', type ? `is-${type}` : '']">
        <button class="delete is-medium" @click="$emit('show', !visible)"></button>
        <slot />
      </div>
    </div>
  </Transition>
</template>

<style>
.fixenot {
  position: fixed;
  top: 100px;
  left: 0;
  z-index: 999;
  width: 100%;
}

.bounce-enter-active {
  animation: bounce-in 0.5s;
}
.bounce-leave-active {
  animation: bounce-in 0.5s reverse;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.25);
  }
  100% {
    transform: scale(1);
  }
}
</style>
