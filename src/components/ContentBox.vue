<script setup>
import { onMounted, ref } from "vue"
defineProps({
  title: {
    type: String,
    default: null,
  },
  subtitle: {
    type: String,
    default: null,
  },
})

let showSubtitle = ref(true)

function observe(entries) {
  if (entries[0].intersectionRatio <= 1 && entries[0].isIntersecting) {
    showSubtitle.value = true
    setTimeout(() => {}, 500)
  } else {
    showSubtitle.value = false
    setTimeout(() => {}, 500)
  }
}

function onAfterEnter() {
  const box = document.querySelector("#title-box")
  const title = box.getElementsByTagName("h1")
  box.classList.remove("no-padding")
  title[0].classList.remove("is-size-4")
}

function onAfterLeave() {
  const box = document.querySelector("#title-box")
  const title = box.getElementsByTagName("h1")
  box.classList.add("no-padding")
  title[0].classList.add("is-size-4")
}

const options = {
  // root: document.querySelector("#main-container"),
  rootMargin: "0px 0px 64px 0px",
  threshold: [0, 1],
}
onMounted(() => {
  var observer = new IntersectionObserver(observe, options)
  observer.observe(document.querySelector("#observe"))
})
</script>

<template>
  <div id="observe"></div>
  <div id="title-box" class="box is-flex is-justify-content-center is-on-top">
    <div class="columns is-mobile is-centered is-vcentered">
      <div clas="column is-narrow">
        <span class="icon is-large has-text-danger m-2 is-size-1">
          <my-home />
        </span>
      </div>
      <div clas="column">
        <h1 class="title is-size-5-mobile">{{ title }}</h1>
        <transition @after-leave="onAfterLeave" @after-enter="onAfterEnter">
          <h4 v-if="showSubtitle" class="subtitle is-size-6-mobile">{{ subtitle }}</h4>
        </transition>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "./node_modules/bulma/sass/utilities/mixins.sass";
#title-box {
  z-index: 999;
  transition: all 0.5s ease-out;
}
.title {
  transition: all 0.5s ease-out;
}
.is-on-top {
  position: sticky;
  top: 50px;
  width: inherit;
}
@include tablet {
  .is-on-top {
    top: 64px;
  }
}
.no-padding {
  padding: 0 !important;
}

.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease-out;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
