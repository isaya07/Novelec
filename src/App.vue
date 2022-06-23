<script setup>
import { getCurrentInstance, onBeforeMount } from "vue"

import { RouterView } from "vue-router"
import NavBar from "@/components/NavBar.vue"
import FooterItem from "@/components/FooterItem.vue"
import ScrollToTop from "@/components/ScrollToTop.vue"
import router from "@/router"
const internalInstance = getCurrentInstance()
const progress = internalInstance.appContext.config.globalProperties.$Progress
onBeforeMount(() => {
  //  [App.vue specific] When App.vue is first loaded start the progress bar
  progress.start()
})

router.beforeEach((to, from, next) => {
  progress.start()
  next()
})
router.afterEach(() => {
  progress.finish()
})
</script>

<template>
  <header>
    <NavBar />
  </header>
  <main>
    <vue-progress-bar></vue-progress-bar>
    <router-view v-slot="{ Component }">
      <transition name="fade" mode="out-in">
        <Suspense>
          <component :is="Component" />

          <!-- loading state -->
          <template #fallback> Loading... </template>
        </Suspense>
      </transition>
    </router-view>
    <ScrollToTop />
  </main>
  <FooterItem />
</template>

<style lang="scss">
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
