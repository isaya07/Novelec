import { createApp } from "vue"
import App from "./App.vue"
import router from "./router"
import "./assets/styles/main.scss"
import VueProgressBar from "@aacassandra/vue3-progressbar"
import VueGtag from "vue-gtag"
const app = createApp(App)

app.use(router)
app.use(VueGtag, {
  config: { id: "G-1KK4R70CX1" },
  router,
  enabled: true,
})

app.use(VueProgressBar, {
  color: "#aa0000",
  failedColor: "#aa0000",
  thickness: "3px",
  transition: {
    speed: "0.2s",
    opacity: "0.6s",
    termination: 300,
  },
  autoRevert: true,
  location: "top",
  inverse: false,
})

// app.provide("gtag", app.config.globalProperties.$gtag)

app.mount("#app")
