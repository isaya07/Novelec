<script setup>
import { ref } from "vue"
// import imgSize from "@/utils/imgSize"
const props = defineProps({
  image: {
    type: Array,
    default: null,
  },
})

let imgLoad = ref({})

let test = new Promise(function (resolve) {
  let imgObj = null
  const img = new Image()
  img.onload = function () {
    imgObj = { src: img.src, width: this.naturalWidth, height: this.naturalHeight, srcset: img.srcset }
    resolve(imgObj)
  }
  if (Array.isArray(props.image)) {
    img.src = props.image[0]
    img.srcset = props.image[1] + " 800w, " + props.image[2] + " 1024w"
  } else {
    img.src = props.image
    img.srcset = ""
  }
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
            :srcset="imgLoad.srcset"
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
