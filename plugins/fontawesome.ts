import { defineNuxtPlugin } from "nuxt/app";

import { library, config } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faEnvelope, faEdit, faWrench, faHome, faHandshake, faCheck, faExclamationTriangle, faUser, faPhone, faPencilAlt } from '@fortawesome/free-solid-svg-icons'

library.add(faEdit, faWrench, faEnvelope, faHome, faHandshake, faCheck, faExclamationTriangle, faUser, faPhone, faPencilAlt)

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component('FontAwesomeIcon', FontAwesomeIcon)
})