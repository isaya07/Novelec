<script setup>
import { ref } from "vue"
// import imgSize from "@/utils/imgSize"
const props = defineProps({
  image: {
    type: String,
    default: "",
  },
})

let imgLoad = ref({})

let test = new Promise(function (resolve) {
  let imgObj = null
  const img = new Image()
  img.onload = function () {
    imgObj = { src: props.image, width: this.naturalWidth, height: this.naturalHeight }
    resolve(imgObj)
  }
  img.src = props.image
})

test.then((value) => {
  imgLoad.value = value
})
</script>

<template>
  <section class="hero is-medium has-carousel">
    <div class="hero-carousel">
      <div class="slider">
        <div class="slider-item has-background">
          <img
            class="is-background"
            :src="imgLoad.src"
            :max-height="imgLoad.height"
            :width="imgLoad.width"
            alt="Image bandeau"
          />
        </div>
      </div>
    </div>
    <div class="hero-body"></div>
  </section>
</template>

<style lang="scss">
@import "../assets/styles/carousel.sass";
</style>
