<script setup>
import { getCurrentInstance, onBeforeMount, provide, ref } from "vue"
import { RouterView } from "vue-router"

import NavBar from "@/components/NavBar.vue"
import FooterItem from "@/components/FooterItem.vue"
import ScrollToTop from "@/components/ScrollToTop.vue"
import router from "@/router"
import { VueRecaptcha } from "vue-recaptcha"
import useEventsBus from "@/utils/eventBus.js"

const site_key = "6LeEME0UAAAAAJKfpsqLI0iOTTYAkN9XMc_3FfLk"

const internalInstance = getCurrentInstance()
const progress = internalInstance.appContext.config.globalProperties.$Progress
onBeforeMount(() => {
  //  [App.vue specific] When App.vue is first loaded start the progress bar
  progress.start()
})

const vueRecaptcha = ref(VueRecaptcha)
console.log(vueRecaptcha)
provide("VueRecaptcha", vueRecaptcha)

router.beforeEach((to, from, next) => {
  progress.start()
  next()
})
router.afterEach(() => {
  progress.finish()
})

const { emit } = useEventsBus()

function onExpired() {
  console.log("Expired")
}

function onVerify(response) {
  emit("recaptchaVerify", response)
}
</script>

<template>
  <vue-progress-bar></vue-progress-bar>
  <header>
    <NavBar />
  </header>
  <main>
    <router-view v-slot="{ Component }">
      <transition name="fade" mode="out-in">
        <component :is="Component" />
      </transition>
    </router-view>
    <ScrollToTop />
  </main>
  <FooterItem />
  <VueRecaptcha
    ref="vueRecaptcha"
    size="invisible"
    :sitekey="site_key"
    language="fr"
    @verify="onVerify"
    @expired="onExpired"
  >
  </VueRecaptcha>
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

.grecaptcha-badge {
  visibility: hidden;
}
</style>
