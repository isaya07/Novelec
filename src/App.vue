<script setup>
import { RouterView } from "vue-router"
import NavBar from "@/components/NavBar.vue"
import FooterItem from "@/components/FooterItem.vue"
</script>

<template>
  <header>
    <NavBar />
  </header>
  <main>
    <router-view v-slot="{ Component }">
      <transition name="fade" mode="out-in">
        <component :is="Component" />
      </transition>
    </router-view>
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
