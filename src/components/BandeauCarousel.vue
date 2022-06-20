<script setup>
import { onMounted, onUnmounted } from "vue"

const images = [
  new URL("../assets/Bandeau/electrician.jpg", import.meta.url),
  new URL("../assets/Bandeau/hager-domovea.jpg", import.meta.url),
  new URL("../assets/Bandeau/office.jpg", import.meta.url),
  new URL("../assets/Bandeau/light-bulb.jpg", import.meta.url),
]

let interval = null
let init = true

onMounted(() => {
  interval = setInterval(() => {
    next()
  }, 5000)
})

onUnmounted(() => {
  clearInterval(interval)
})

function changeActive(items, index) {
  items[index].classList.remove("is-active")
  items[index + 1].classList.add("is-active")
}

function next() {
  let conteneur = document.querySelector(".slider-container")
  let items = document.querySelectorAll(".slider-item")
  if (!init) {
    changeActive(items, 1)
    let first = conteneur.removeChild(items[0])
    conteneur.appendChild(first)
  } else {
    init = false
    changeActive(items, 0)
  }
}
</script>

<template>
  <section class="hero is-halfheight has-carousel">
    <div ref="carousel" class="hero-carousel">
      <div class="slider">
        <div class="slider-container">
          <div
            v-for="(image, index) in images"
            :key="index"
            class="slider-item has-background"
            :class="index == 0 ? 'is-active' : ''"
          >
            <img class="is-background" :src="image" alt="Image Slide" />
          </div>
        </div>
      </div>
    </div>
    <div class="hero-body">
      <div class="container">
        <h1 class="title has-text-light has-text-weight-bold strokeme">Novelec - Lilian Monchalin</h1>
        <h2 class="subtitle has-text-light has-text-weight-bold strokeme">à votre service depuis 2013</h2>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
@import "../assets/styles/carousel.sass";
</style>
