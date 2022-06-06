<template>
    <nav id="topbar" class="navbar has-shadow is-fixed-top has-text-weight-bold is-spaced" aria-label="main navigation"
        ref="topbar">
        <div class="navbar-brand left-burger">
            <div role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarNovelec"
                @click="show()">
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
            </div>
            <NuxtLink class="navbar-item" to="/">
                <img src="/img/logo.png" alt="Logo">
            </NuxtLink>
        </div>
        <div class="navbar-menu" id="navbarNovelec">
            <div class="navbar-start" :class="{ 'is-active': showNav }">
                <template v-for="(item, idx) in menus" :key="idx">
                    <NuxtLink :to="item.path" class="navbar-item">
                        <span class="icon is-medium is-nav-icon has-text-danger" v-if="item.path !== '/'">
                            <font-awesome-icon :icon="item.icon" size="lg" />
                        </span>
                        <span class="icon is-medium has-text-danger is-nav-icon" v-else>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"
                                class="svg-inline--fa fa-w-18 fa-lg ">
                                <path fill="currentColor"
                                    d="M403.535 0c-25.36 0-3.084.06-33.934.06-.009 14.67-.018 44.797-.027 59.467l-76.36-44.918.038 47.758 256.877 145.631c23.042 8.514 37.94-27.44 15.721-35.444L403.57 76.15c-.011-25.383-.025-50.769-.035-76.15zm-119.89 14.643C190.235 68.839 96.997 123.329 3.666 177.66c-12.782 19.78 15.481 40.606 31.707 26.176l248.272-141.47zM393.303 153.98c-21.869-1.108-2.675 26.535-14.378 38.217-13.512 34.904-46.635 56.136-65.956 87.39-19.747 28.88-44.142 63.47-33.373 100.157 12.642 15.917 18.718 26.586 12.947 47.063-26.614-13.177-3.14-46.011-24.535-65.73-21.597-26.24-55.469-36.97-81.4-57.615-11.247-5.691-20.896-50.523-28.563-26.294 2.457 48.1 7.4 101.665 41.024 139.109 16.368 18.096 43.457 23.556 65.27 11.979 21.173-4.803 23.815 38.51 37.558 41.553 23.164 1.629 6.057-17.074 8.992-31.713-1.523-18.278.517-32.413 20.98-31.337 45.848-15.623 79.512-58.786 83.616-107.056 5.783-49.383-4.867-99.582-22.182-145.723zm-290.377 27.098c-13.413 8.869-26.842 17.715-40.262 26.574V471.99h39.229l1.033-290.912zm371.008 0c.365 96.97.715 193.941 1.07 290.912h39.228V207.652l-40.298-26.574zm55.148 309.037l-480.203.192c-3.41 9.198-3.265 11.854-1.148 21.688 155.508-.051 326.357-.103 481.865-.155 1.795-7.185 1.348-14.547-.514-21.725z" />
                            </svg>
                        </span>
                        <span>
                            {{ item.name }}
                        </span>
                    </NuxtLink>
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

<script>
import { Menu } from '~/utils/menu'

export default {
    name: 'app',

    data() {
        return {
            menus: Menu,
            showNav: false,
            // currentView: 'v-map',
            currentIndex: 0,
            // listView: ['v-map', 'v-depan'],
            interval: null
        }
    },
    mounted() {
        window.onscroll = () => {
            if (window.scrollY > 20) {
                this.$refs.topbar.classList.add('shrink')
                this.$refs.topbar.classList.remove('is-spaced')
            } else {
                this.$refs.topbar.classList.remove('shrink')
                this.$refs.topbar.classList.add('is-spaced')
            }
        }
    },
    methods: {
        show() {
            var burger = document.querySelector('.navbar-burger');
            var menu = document.querySelector('.navbar-menu');
            burger.classList.toggle('is-active');
            menu.classList.toggle('is-active');
        }
    }

}
</script>