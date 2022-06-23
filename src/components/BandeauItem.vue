<script setup>
defineProps({
  image: null,
})
</script>

<template>
  <section class="hero is-medium has-carousel">
    <div class="hero-carousel">
      <div class="slider">
        <div class="slider-item has-background">
          <img class="is-background" :src="image" alt="Image bandeau" />
        </div>
      </div>
    </div>
    <div class="hero-body"></div>
  </section>
</template>

<style lang="scss">
@import "../assets/styles/carousel.sass";
</style>
