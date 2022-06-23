<script setup>
import { onMounted, onUnmounted, ref } from "vue"
/*import imgC1 from "../assets/Bandeau/electrician.jpg?webp&quality=80"
import imgC2 from "../assets/Bandeau/hager-domovea.jpg?webp&quality=80"
import imgC3 from "../assets/Bandeau/office.jpg?webp&quality=80"
import imgC4 from "../assets/Bandeau/light-bulb.jpg?webp&quality=80"*/

const images = ref([
  new URL("../assets/Bandeau/electrician-2.jpg", import.meta.url).href,
  new URL("../assets/Bandeau/hager-domovea-2.jpg", import.meta.url).href,
  new URL("../assets/Bandeau/office-2.jpg", import.meta.url).href,
  new URL("../assets/Bandeau/light-bulb-2.jpg", import.meta.url).href,
])

const imagesRef = ref([])
//const images = [imgC1, imgC2, imgC3, imgC4]

/*const images = [
  "/assets/Bandeau/electrician.jpg",
  "/assets/hager-domovea.jpg",
  "/assets/Bandeau/office.jpg",
  "/assets/light-bulb.jpg",
]*/

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
    setImages()
    init = false
    changeActive(items, 0)
  }
}

function setImages() {
  for (let image of imagesRef.value) {
    if (!image.src) {
      image.src = image.dataset.url
    }
  }
}
</script>

<template>
  <section class="hero is-medium has-carousel">
    <div ref="carousel" class="hero-carousel">
      <div class="slider">
        <div class="slider-container">
          <div
            v-for="(image, index) in images"
            :key="index"
            class="slider-item has-background"
            :class="index == 0 ? 'is-active' : ''"
          >
            <img v-if="index == 0" ref="imagesRef" class="is-background" :src="image" alt="Image Slide" />
            <img v-else ref="imagesRef" class="is-background" :data-url="image" alt="Image Slide" />
          </div>
        </div>
      </div>
    </div>
    <div class="hero-body">
      <div class="container">
        <br />
        <!--  <h1 class="title has-text-light has-text-weight-bold strokeme">Novelec - Lilian Monchalin</h1>
        <h2 class="subtitle has-text-light has-text-weight-bold strokeme">à votre service depuis 2013</h2> -->
      </div>
    </div>
  </section>
</template>

<style lang="scss">
@import "../assets/styles/carousel.sass";
</style>
