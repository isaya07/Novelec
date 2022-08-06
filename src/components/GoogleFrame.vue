<script setup>
const url =
  /* eslint-disable-next-line max-len */ /* eslint-disable-next-line vue/max-len */
  "https://www.google.com/maps/embed/v1/place?q=place_id:ChIJW2BTT-Tu9UcRdJq2CFpeSjA&key=AIzaSyBa1Nt9gSpYLW1yZukH6XZKcpZ5a4_S0F0"
</script>

<template>
  <div class="map-responsive">
    <iframe title="Novelec Position" style="border: 0" loading="lazy" allowfullscreen :src="url"></iframe>
  </div>
</template>

<style>
.map-responsive {
  padding-bottom: 104%;
  position: relative;
  height: 0;
  overflow: hidden;
}

.map-responsive iframe {
  left: 0;
  top: 0;
  height: 100%;
  width: 100%;
  position: absolute;
}
</style>
