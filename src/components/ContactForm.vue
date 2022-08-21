<template>
  <NotifItem :type="notif.type" :visible="notif.show" @show="notif.show = !notif.show">
    {{ notif.message }}
  </NotifItem>
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
          <mdi-account-outline />
        </span>
        <span class="icon is-small is-right" :class="hasError('nom') ? 'has-text-danger' : 'has-text-success'">
          <mdi-alert-outline v-if="hasError('nom')" />
          <mdi-check-outline v-else-if="'nom' in errors" />
        </span>
      </div>
      <p v-if="hasError('nom')" class="help is-danger">
        {{ errors.nom }}
      </p>
    </div>
    <div class="field">
      <label class="label"
        >Couriel<em><strong>*</strong></em></label
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
          <mdi-email-outline />
        </span>
        <span class="icon is-small is-right" :class="hasError('email') ? 'has-text-danger' : 'has-text-success'">
          <mdi-alert-outline v-if="hasError('email')" />
          <mdi-check-outline v-else-if="'email' in errors" />
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
          <mdi-phone-outline />
        </span>
        <span class="icon is-small is-right" :class="hasError('tel') ? 'has-text-danger' : 'has-text-success'">
          <mdi-alert-outline v-if="hasError('tel')" />
          <mdi-check-outline v-else-if="'tel' in errors" />
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
          <mdi-pencil-outline />
        </span>
        <span class="icon is-small is-right" :class="hasError('sujet') ? 'has-text-danger' : 'has-text-success'">
          <mdi-alert-outline v-if="hasError('sujet')" />
          <mdi-check-outline v-else-if="'sujet' in errors" />
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
        <span class="icon is-small is-right" :class="hasError('message') ? 'has-text-danger' : 'has-text-success'">
          <mdi-alert-outline v-if="hasError('message')" />
          <mdi-check-outline v-else-if="'message' in errors" />
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
          En soumettant ce formulaire, j'accepte que les informations saisies soient exploitées dans le cadre strict de
          ma demande<em><strong>*</strong></em>
        </label>
      </div>
      <p v-if="hasError('check')" class="help is-danger">
        <span class="icon is-small" :class="hasError('check') ? 'has-text-danger' : 'has-text-success'">
          <mdi-alert-outline v-if="hasError('check')" />
        </span>
        {{ errors.check }}
      </p>
    </div>
    <div class="field">
      <div class="control">
        <p class="is-size-7">
          Ce site est protégé par reCAPTCHA, la
          <a href="https://policies.google.com/privacy">politique de confidentialité</a> et les
          <a href="https://policies.google.com/terms">conditions d'utilisation</a> de Google s'appliquent.
        </p>
        <button class="button is-danger" :class="{ 'is-loading': loading }" type="submit" @click="onSubmit">
          Envoyer
        </button>
        <div class="is-pulled-right">
          <em><strong>*</strong> champs requis.</em>
        </div>
      </div>
    </div>
  </form>
</template>

<script setup>
import { ref, watch, inject, defineAsyncComponent } from "vue"
import useEventsBus from "@/utils/eventBus.js"
const NotifItem = defineAsyncComponent(() => import("@/components/NotifItem.vue"))

const notif = ref({ show: false, type: "", message: "" })
let nom = ref("")
let email = ref("")
let tel = ref("")
let sujet = ref("")
let message = ref("")
let check = ref("")
let errors = ref({})
let loading = ref(false)
const vueRecaptcha = inject("VueRecaptcha")

const { bus } = useEventsBus()
watch(
  () => bus.value.get("recaptchaVerify"),
  (response) => {
    // destruct the parameters
    const [recaptchaVerify] = response ?? []
    onVerify(recaptchaVerify)
  }
)

function showResult(reponse) {
  if (reponse.success == "true") {
    notif.value.type = "primary"
    notif.value.show = true
    notif.value.message = reponse.message
  } else {
    notif.value.type = "danger"
    notif.value.show = true
    notif.value.message = reponse.message
  }
}

function httpPost(formData, callback) {
  var xmlHttp = new XMLHttpRequest()
  xmlHttp.open("POST", "https://g649qaueuj.preview.infomaniak.website/api/mail", true) // true for asynchronous
  xmlHttp.onload = function () {
    callback(this.responseText)
  }
  xmlHttp.send(formData)
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
  loading.value = true
  let valid = true
  validForm()
  for (let error in errors.value) {
    if (errors.value[error] !== null) valid = false
  }
  if (valid) {
    console.log(vueRecaptcha.value)
    vueRecaptcha.value.execute()
  } else {
    showResult({
      success: false,
      message: "Votre formulaire de contact comporte des erreurs ou des données manquantes, merci de les corriger",
    })
    loading.value = false
  }
}
function onVerify() {
  var data = new FormData()
  data.append("nom", nom.value)
  data.append("email", email.value)
  data.append("message", message.value)
  if (tel.value) data.append("tel", tel.value)
  if (sujet.value) data.append("sujet", sujet.value)
  //TODO validate response
  httpPost(data, (reponse) => {
    console.log(reponse)
    showResult(JSON.parse(reponse))
    loading.value = false
  })
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
