<script setup>
import { onMounted, ref } from "vue"
import router from "@/router"
import { Menu } from "@/router/menu"
import Logo from "@/assets/logo.png?webp&quality=80"

const menus = Menu
const topbar = ref(null)
let visible = false

function show() {
  visible = !visible
  var burger = document.querySelector(".navbar-burger")
  var menu = document.querySelector(".navbar-menu")
  burger.classList.toggle("is-active")
  menu.classList.toggle("is-active")
}

onMounted(() => {
  window.onscroll = () => {
    if (window.scrollY > 20) {
      topbar.value.classList.add("shrink")
      topbar.value.classList.remove("is-spaced")
    } else {
      topbar.value.classList.remove("shrink")
      topbar.value.classList.add("is-spaced")
    }
  }
})
router.beforeEach((to, from, next) => {
  if (visible) show()
  next()
})
</script>

<template>
  <nav
    id="topbar"
    ref="topbar"
    class="navbar has-shadow is-fixed-top has-text-weight-bold is-spaced"
    aria-label="main navigation"
  >
    <div class="navbar-brand left-burger">
      <div
        role="button"
        class="navbar-burger"
        aria-label="menu"
        aria-expanded="false"
        data-target="navbarNovelec"
        @click="show()"
      >
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </div>
      <router-link class="navbar-item" to="/">
        <img :src="Logo" alt="Logo" />
      </router-link>
    </div>
    <div id="navbarNovelec" class="navbar-menu">
      <div class="navbar-start">
        <template v-for="(item, idx) in menus" :key="idx">
          <router-link :to="item.path" class="navbar-item">
            <span v-if="item.path !== '/'" class="icon is-medium is-nav-icon has-text-danger">
              <mdicon :name="item.icon" size="32" />
            </span>
            <span v-else class="icon is-medium has-text-danger is-nav-icon">
              <img alt="Vue logo" src="@/assets/logo.svg?url" size="32" />
            </span>
            <span>
              {{ item.name }}
            </span>
          </router-link>
        </template>
      </div>
    </div>
    <div class="navbar-brand brand-left">
      <div class="navbar-item">
        <button class="button is-danger is-rounded is-responsive">
          <strong>06 86 41 59 53</strong>
        </button>
      </div>
    </div>
  </nav>
</template>
