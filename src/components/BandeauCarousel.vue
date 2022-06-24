<script setup>
import { onMounted, onUnmounted, ref } from "vue"
/*import imgC1 from "../assets/Bandeau/electrician.jpg?webp&quality=80"
import imgC2 from "../assets/Bandeau/hager-domovea.jpg?webp&quality=80"
import imgC3 from "../assets/Bandeau/office.jpg?webp&quality=80"
import imgC4 from "../assets/Bandeau/light-bulb.jpg?webp&quality=80"*/

const ImagesUrl = [
  new URL("../assets/Bandeau/electrician-2.jpg", import.meta.url).href,
  new URL("../assets/Bandeau/hager-domovea-2.jpg", import.meta.url).href,
  new URL("../assets/Bandeau/office-2.jpg", import.meta.url).href,
  new URL("../assets/Bandeau/light-bulb-2.jpg", import.meta.url).href,
]

const Images = ref([])

for (const imgurl of ImagesUrl) {
  const img = new Image()
  img.onload = function () {
    const newImg = { src: imgurl, width: this.naturalWidth, height: this.naturalHeight }
    Images.value.push(newImg)
  }
  img.src = imgurl
}

const imagesRef = ref([])

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
            v-for="(image, index) in Images"
            :key="index"
            class="slider-item has-background"
            :class="index == 0 ? 'is-active' : ''"
          >
            <img
              v-if="index == 0"
              ref="imagesRef"
              class="is-background"
              :src="image.src"
              :width="image.width"
              :height="image.height"
              alt="Image Slide"
            />
            <img
              v-else
              ref="imagesRef"
              class="is-background"
              :width="image.width"
              :height="image.height"
              :data-url="image.src"
              alt="Image Slide"
            />
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
