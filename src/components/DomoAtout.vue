<script setup>
defineProps({
  title: {
    type: String,
    default: "",
  },
  text: {
    type: String,
    default: "",
  },
})
</script>
<template>
  <div class="content">
    <div class="columns is-vcentered">
      <div class="column is-one-quarter has-text-centered">
        <div class="circle has-text-white is-size-3">
          <slot></slot>
        </div>
        <div class="divider"></div>
        <div class="mt-1 has-text-weight-bold is-size-6">{{ title }}</div>
      </div>
      <div class="column">
        <p>
          {{ text }}
        </p>
      </div>
    </div>
  </div>
</template>

<style>
.circle {
  display: flex;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: #aa0000;
  transition: all 0.15s ease;
  margin: auto;
  z-index: 0;
}
.circle:hover {
  transform: scale(1.4);
}

.circle svg {
  margin: auto; /* Important */
  text-align: center;
}

.divider {
  height: 2px;
  width: 40%;
  margin: auto;
  transition: all 0.15s ease;
  background: linear-gradient(90deg, hsl(0, 0%, 90%), hsl(0, 0%, 20%), hsl(0, 0%, 90%));
}
.divider:hover {
  width: 70%;
}
</style>
