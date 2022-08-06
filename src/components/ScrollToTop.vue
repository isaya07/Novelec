<template>
  <a v-show="visible" href="#" class="bottom-right" @click="scrollTop">
    <mdi-arrow-up-bold-circle-outline style="font-size: 2.5em" />
  </a>
</template>

<script>
export default {
  data() {
    return {
      visible: false,
    }
  },
  mounted: function () {
    window.addEventListener("scroll", this.scrollListener)
  },
  beforeUnmount: function () {
    window.removeEventListener("scroll", this.scrollListener)
  },
  methods: {
    scrollTop: function () {
      this.intervalId = setInterval(() => {
        if (window.pageYOffset === 0) {
          clearInterval(this.intervalId)
        }
        window.scroll(0, window.pageYOffset - 50)
      }, 20)
    },
    scrollListener: function () {
      this.visible = window.scrollY > 150
    },
  },
}
</script>

<style scoped>
.bottom-right {
  position: fixed;
  bottom: 20px;
  right: 20px;
  cursor: pointer;
}
</style>
