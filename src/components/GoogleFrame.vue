/* eslint-disable vue/max-len */ /* eslint-disable max-len */
<script setup>
defineProps({
  width: {
    type: Number,
    default: 600,
  },
  height: {
    type: Number,
    default: 450,
  },
})
</script>
<template>
  <div class="map-responsive">
    <iframe
      style="border: 0"
      loading="lazy"
      allowfullscreen
      src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJW2BTT-Tu9UcRdJq2CFpeSjA&key=AIzaSyBa1Nt9gSpYLW1yZukH6XZKcpZ5a4_S0F0"
    ></iframe>
  </div>
</template>

<style>
.map-responsive {
  overflow: hidden;
  padding-bottom: 56.25%;
  position: relative;
  height: 0;
}

.map-responsive iframe {
  left: 0;
  top: 0;
  height: 100%;
  width: 100%;
  position: absolute;
}
</style>
