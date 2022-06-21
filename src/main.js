import { createApp } from "vue"
import App from "./App.vue"
import router from "./router"
import "./assets/styles/main.scss"
import VueProgressBar from "@aacassandra/vue3-progressbar"

const options = {
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
}
const app = createApp(App)

app.use(VueProgressBar, options).use(router).mount("#app")
