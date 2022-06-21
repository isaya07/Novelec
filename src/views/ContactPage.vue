<template>
  <div class="container is-widescreen has-text-left is-flex">
    <main>
      <section class="section">
        <div class="content">
          <NotifItem :type="notif.type" :visible="notif.show" @show="notif.show = !notif.show">
            {{ notif.message }}
          </NotifItem>
          <h3>Contactez nous...</h3>
          <p class="texte">
            Pour toutes demandes de renseignements, n'hésitez pas à nous contacter, soit par ce formulaire, soit
            directement avec les coordonnées que vous trouverez en bas de page.
          </p>
          <div class="columns is-desktop">
            <div class="column">
              <div class="box">
                <form novalidate @submit.prevent="onSubmit">
                  <div class="field">
                    <label class="label"
                      >Nom<em><strong>*</strong></em></label
                    >
                    <div class="control has-icons-left has-icons-right">
                      <input
                        v-model.trim="nom"
                        :class="{ input: true, 'is-danger': hasError('nom') }"
                        name="nom"
                        type="text"
                        placeholder="Nom et Prénom"
                        required
                      />
                      <span class="icon is-small is-left">
                        <mdicon name="AccountOutline" />
                      </span>
                      <span
                        class="icon is-small is-right"
                        :class="hasError('nom') ? 'has-text-danger' : 'has-text-success'"
                      >
                        <mdicon v-if="hasError('nom')" name="AlertOutline" />
                        <mdicon v-else-if="'nom' in errors" name="CheckOutline" />
                      </span>
                    </div>
                    <p v-if="hasError('nom')" class="help is-danger">
                      {{ errors.nom }}
                    </p>
                  </div>
                  <div class="field">
                    <label class="label"
                      >Courriel<em><strong>*</strong></em></label
                    >
                    <div class="control has-icons-left has-icons-right">
                      <input
                        v-model.trim="email"
                        :class="{ input: true, 'is-danger': hasError('email') }"
                        name="email"
                        type="email"
                        placeholder="example@domaine.com"
                        required
                      />
                      <span class="icon is-small is-left">
                        <mdicon name="EmailOutline" />
                      </span>
                      <span
                        class="icon is-small is-right"
                        :class="hasError('email') ? 'has-text-danger' : 'has-text-success'"
                      >
                        <mdicon v-if="hasError('email')" name="AlertOutline" />
                        <mdicon v-else-if="'email' in errors" name="CheckOutline" />
                      </span>
                    </div>
                    <p v-if="hasError('email')" class="help is-danger">
                      {{ errors.email }}
                    </p>
                  </div>
                  <div class="field">
                    <label class="label">Teléphone</label>
                    <div class="control has-icons-left has-icons-right">
                      <input
                        v-model.trim="tel"
                        :class="{ input: true, 'is-danger': hasError('tel') }"
                        name="tel"
                        type="tel"
                        placeholder="1111111111"
                      />
                      <span class="icon is-small is-left">
                        <mdicon name="PhoneOutline" />
                      </span>
                      <span
                        class="icon is-small is-right"
                        :class="hasError('tel') ? 'has-text-danger' : 'has-text-success'"
                      >
                        <mdicon v-if="hasError('tel')" name="AlertOutline" />
                        <mdicon v-else-if="'tel' in errors" name="CheckOutline" />
                      </span>
                    </div>
                    <p v-if="hasError('tel')" class="help is-danger">
                      {{ errors.tel }}
                    </p>
                  </div>
                  <div class="field">
                    <label class="label">Sujet</label>
                    <div class="control has-icons-left has-icons-right">
                      <input
                        v-model.trim="sujet"
                        :class="{ input: true, 'is-danger': hasError('sujet') }"
                        name="sujet"
                        type="text"
                        placeholder="Demande de rensiegnement"
                      />
                      <span class="icon is-small is-left">
                        <mdicon name="PencilOutline" />
                      </span>
                      <span
                        class="icon is-small is-right"
                        :class="hasError('sujet') ? 'has-text-danger' : 'has-text-success'"
                      >
                        <mdicon v-if="hasError('sujet')" name="AlertOutline" />
                        <mdicon v-else-if="'sujet' in errors" name="CheckOutline" />
                      </span>
                    </div>
                    <p v-if="hasError('sujet')" class="help is-danger">
                      {{ errors.sujet }}
                    </p>
                  </div>
                  <div class="field">
                    <label class="label"
                      >Message<em><strong>*</strong></em></label
                    >
                    <div class="control is-expanded has-icons-right">
                      <textarea
                        v-model.trim="message"
                        :class="{
                          textarea: true,
                          'is-danger': hasError('message'),
                        }"
                        name="message"
                        placeholder="Tapez votre message ici..."
                        required
                      ></textarea>
                      <span
                        class="icon is-small is-right"
                        :class="hasError('message') ? 'has-text-danger' : 'has-text-success'"
                      >
                        <mdicon v-if="hasError('message')" name="AlertOutline" />
                        <mdicon v-else-if="'message' in errors" name="CheckOutline" />
                      </span>
                    </div>
                    <p v-if="hasError('message')" class="help is-danger">
                      {{ errors.message }}
                    </p>
                  </div>
                  <div class="field">
                    <div class="control is-expanded has-icons-right">
                      <label class="checkbox">
                        <input
                          v-model.trim="check"
                          type="checkbox"
                          :class="{ 'is-danger': hasError('check') }"
                          name="check"
                          required
                        />
                        En soumettant ce formulaire, j'accepte que les informations saisies soient exploitées dans le
                        cadre strict de ma demande<em><strong>*</strong></em>
                      </label>
                    </div>
                    <p v-if="hasError('check')" class="help is-danger">
                      <span class="icon is-small" :class="hasError('check') ? 'has-text-danger' : 'has-text-success'">
                        <mdicon v-if="hasError('check')" name="AlertOutline" />
                      </span>
                      {{ errors.check }}
                    </p>
                  </div>
                  <div class="field">
                    <div class="control">
                      <VueRecaptcha
                        ref="vueRecaptcha"
                        size="invisible"
                        :sitekey="site_key"
                        language="fr"
                        @verify="onVerify"
                        @expired="onExpired"
                      >
                      </VueRecaptcha>
                      <button
                        class="button is-danger"
                        :class="{ 'is-loading': loading }"
                        type="submit"
                        @click="onSubmit"
                      >
                        Envoyer
                      </button>
                      <div class="is-pulled-right">
                        <em><strong>*</strong> champs requis.</em>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div class="column">
              <!--<MapView />-->
              <GoogleFrame :width="mapWidth" :height="mapHeight" />
            </div>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>

<script setup>
import { defineAsyncComponent, ref, onMounted, watch } from "vue"
import { VueRecaptcha } from "vue-recaptcha"

// const MapView = defineAsyncComponent(() => import("@/components/MapView.vue"))
const GoogleFrame = defineAsyncComponent(() => import("@/components/GoogleFrame.vue"))
const NotifItem = defineAsyncComponent(() => import("@/components/NotifItem.vue"))

const site_key = "6LeEME0UAAAAAJKfpsqLI0iOTTYAkN9XMc_3FfLk"
let mapWidth = 600
let mapHeight = 400

function httpPost(formData, callback) {
  var xmlHttp = new XMLHttpRequest()
  xmlHttp.open("POST", "https://formsubmit.co/ajax/2eece65b36ddffd4b1682de2f7dd00be", true) // true for asynchronous
  xmlHttp.setRequestHeader("Content-type", "application/json")
  xmlHttp.setRequestHeader("Accept", "application/json")
  xmlHttp.onload = function () {
    callback(this.responseText)
  }
  xmlHttp.send(JSON.stringify(formData))
}

function debounce(fn, delay) {
  var timeoutID = null
  return function () {
    clearTimeout(timeoutID)
    var args = arguments
    var that = this
    timeoutID = setTimeout(function () {
      fn.apply(that, args)
    }, delay)
  }
}

let nom = ref("")
let email = ref("")
let tel = ref("")
let sujet = ref("")
let message = ref("")
let check = ref("")
let errors = ref({})
let loading = ref(false)
let notif = ref({ show: false, type: "", message: "" })
const vueRecaptcha = ref(null)

onMounted(() => {
  //
})

function hasError(key) {
  if (key in errors.value && errors.value[key] !== null) return true
  return false
}
function validateEmail(value) {
  // eslint-disable-next-line
  return /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    value
  )
}
function alpha(value) {
  return /^[0-9A-ZÀÂÆÇÉÈÊËÏÎÔŒÙÛÜŸ:()_°'.",%/\-\s]*$/i.test(value)
  // return /^[\w\-\s]+$/.test(value)
}
function phoneNumber(value) {
  return /^(?:(?:\+|00)33|0)\s*[1-9](?:[\s.-]*\d{2}){4}$/.test(value)
}
function validNom(value) {
  if (!value || value === "") {
    errors.value["nom"] = "Le champ nom est requis..."
  } else if (!alpha(value)) {
    errors.value["nom"] = "Votre nom et mal formaté..."
  } else {
    errors.value["nom"] = null
  }
}
function validEmail(value) {
  if (!value || value === "") {
    errors.value["email"] = "Le champ couriel est requis..."
  } else if (!validateEmail(value)) {
    errors.value["email"] = "Votre adresse de couriel est invalide..."
  } else {
    errors.value["email"] = null
  }
}
function validTel(value) {
  !phoneNumber(value)
    ? (errors.value["tel"] = "Votre numero de téléphone est invalide...")
    : (errors.value["tel"] = null)
}
function validSujet(value) {
  !alpha(value) ? (errors.value["sujet"] = "Votre sujet et mal formaté...") : (errors.value["sujet"] = null)
}
function validMessage(value) {
  if (!value || value === "") {
    errors.value["message"] = "Le champ message est requis..."
  } else if (!alpha(value)) {
    errors.value["message"] = "Votre message et mal formaté..."
  } else {
    errors.value["message"] = null
  }
}
function validCheck() {
  !check.value ? (errors.value["check"] = "Case a cocher obligatoirement...") : (errors.value["check"] = null)
}
function validForm() {
  validNom(nom.value)
  validEmail(email.value)
  validMessage(message.value)
  validCheck()
}
async function onSubmit() {
  console.log("submit")
  let valid = true
  validForm()
  for (let error in errors.value) {
    if (errors.value[error] !== null) valid = false
  }
  if (valid) {
    vueRecaptcha.value.execute()
  } else {
    notif.value.type = "danger"
    notif.value.show = true
    notif.value.message =
      "Votre formulaire de contact comporte des erreurs ou des données manquantes, merci de les corriger"
  }
}
function onVerify(response) {
  loading = true
  console.log("Verify: " + response)
  const data = {}
  data.nom = nom.value
  data.email = email.value
  data.message = message.value
  if (tel.value) data.tel = tel.value
  if (sujet.value) data.sujet = sujet.value
  httpPost(data, (reponse) => {
    loading = false
    if (response.succes) {
      notif.value.type = "primary"
      notif.value.show = true
      notif.value.message = "Merci pour votre message nous vous répondrons dans les plus bref délais"
    } else {
      notif.value.type = "danger"
      notif.value.show = true
      notif.value.message = response.message
    }
    alert(reponse)
  })
}
function onExpired() {
  console.log("Expired")
}

watch(nom, (newNom) => {
  debounce(validNom(newNom), 1000)
})
watch(email, (newEmail) => {
  debounce(validEmail(newEmail), 1000)
})
watch(tel, (newTel) => {
  debounce(validTel(newTel), 1000)
})
watch(sujet, (newSujet) => {
  debounce(validSujet(newSujet), 1000)
})
watch(message, (newMessage) => {
  debounce(validMessage(newMessage), 1000)
})
watch(check, (newCheck) => {
  debounce(validCheck(newCheck), 1000)
})
</script>
