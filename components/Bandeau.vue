<template>
    <section class="hero is-medium has-carousel">
        <div class="hero-carousel" ref="carousel">
            <div class="slider">
                <div class='slider-container'>
                    <div v-for="(image, index) in images" :key="index" class='slider-item'
                        :class='index == 0 ? "is-active" : ""'>
                        <div class="has-background">
                            <img class="is-background is-transit" :src="image" alt="Image Slide" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="hero-body">
            <div class="container">
                <h1 class="title">
                    Novelec - Lilian Monchalin
                </h1>
                <h2 class="subtitle">
                    Entreprise d'électricité générale et tertiaire, dépannage, domotique, rénovation
                </h2>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    data() {
        return {
            images: [
                '/img/Bandeau/electrician.jpg',
                '/img/Bandeau/hager-domovea.jpg',
                '/img/Bandeau/office.jpg',
                '/img/Bandeau/light-bulb.jpg'
            ],
            interval: null,
            init: true
        }
    },
    mounted() {
        this.interval = setInterval(() => {
            this.next()
        }, 5000)
    },
    unmounted() {
        clearInterval(this.interval)
    },
    methods: {
        next() {
            let conteneur = document.querySelector('.slider-container')
            let items = document.querySelectorAll('.slider-item')
            if (!this.init) {
                this.changeActive(items, 1)
                let first = conteneur.removeChild(items[0])
                conteneur.appendChild(first)
            } else {
                this.init = false
                this.changeActive(items, 0)
            }
        },
        changeActive(items, index) {
            items[index].classList.remove("is-active")
            items[index + 1].classList.add("is-active")
        }
    }
}
</script>
