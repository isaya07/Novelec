<script setup>
import { onMounted, ref } from "vue"
import router from "@/router"
import { Menu } from "@/router/menu"
import Logo from "@/assets/logo.png?webp"
import IconItem from "@/components/IconItem.vue"

const menus = Menu
const topbar = ref(null)
const burger = ref(null)
const menu = ref(null)
const telBut = ref(null)
let visible = false

function show() {
  visible = !visible
  burger.value.classList.toggle("is-active")
  menu.value.classList.toggle("is-active")
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

  function isTouch() {
    let brand = document.querySelector(".navbar-brand")
    if (telBut.value.parentNode) {
      let newTelBut = telBut.value.parentNode.removeChild(telBut.value)
      brand.appendChild(newTelBut)
    }
  }
  function isDesk() {
    if (telBut.value.parentNode) {
      let newTelBut = telBut.value.parentNode.removeChild(telBut.value)
      topbar.value.appendChild(newTelBut)
    }
  }
  const touch = window.matchMedia("(max-width: 1023px)")
  const nonTouch = window.matchMedia("(min-width: 1024px)")

  touch.addEventListener("change", (e) => {
    if (e.matches) {
      isTouch()
    }
  })
  nonTouch.addEventListener("change", (e) => {
    if (e.matches) {
      isDesk()
    }
  })

  if (touch.matches) {
    isTouch()
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
        ref="burger"
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
        <img class="mr-2" :src="Logo" alt="Logo" width="160" />
      </router-link>
    </div>
    <div id="navbarNovelec" ref="menu" class="navbar-menu">
      <div class="navbar-start">
        <template v-for="(item, idx) in menus" :key="idx">
          <router-link :to="item.path" class="navbar-item">
            <span v-if="item.icon" class="icon is-nav-icon has-text-danger is-size-5 is-flex-grow-1">
              <IconItem class="is-align-self-center is-align-items-center" :icon="item.icon" />
            </span>
            <span class="is-size-6">
              {{ item.name }}
            </span>
          </router-link>
        </template>
      </div>
    </div>

    <div ref="telBut" class="navbar-item tel">
      <button class="button is-danger is-rounded is-responsive">
        <strong><a class="has-text-white" href="tel:+33686415953">06 86 41 59 53</a></strong>
      </button>
    </div>
  </nav>
</template>

<style scoped>
.tel {
  margin-left: auto;
}
</style>
