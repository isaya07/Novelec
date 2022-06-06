<template>
  <div id="app">
    <Navbar />
    <NuxtPage />
    <Footer />
  </div>
</template>

<script setup>
useHead({
  bodyAttrs: {
    class: 'has-navbar-fixed-top'
  }
})
</script>

<script>
export default {
  name: 'app',

  loading: {
    color: 'blue',
    height: '5px'
  },

  data() {
    return {
      // menus: Menu,
      showNav: false,
      // currentView: 'v-map',
      currentIndex: 0,
      // listView: ['v-map', 'v-depan'],
      interval: null
    }
  },

  mounted() {
    /* this.$nextTick(() => {
      this.$nuxt.$loading.start()
      setTimeout(() => this.$nuxt.$loading.finish(), 500)
    }) */
    /* this.$router.beforeEach((to, from, next) => {
      if (this.showNav) this.showNav = false
      next()
    }) */
  },

  methods: {
  }
}
</script>

<style lang="scss">
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.25s, transform 0.25s;
}

.fade-enter-active {
  transition-delay: .25s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
  transform: translateX(15%);
}

.notification {
  height: 100%;
  transition: height 0.5s;
}

.section {
  height: 100%;
}

.is-nav-icon {
  align-items: stretch;
}

.icon.is-medium.is-nav-icon {
  height: 1.5rem;
}
</style>
