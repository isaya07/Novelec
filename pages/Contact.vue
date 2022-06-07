<template>
  <div class="container is-widescreen has-text-left is-flex">
    <main>
      <section class="section">
        <div class="content">
          <h3>Contactez nous...</h3>
          <p class="texte">Pour toutes demandes de renseignements, n'hésitez pas à nous contacter, soit par ce
            formulaire,
            soit directement avec les coordonnées que vous trouverez en bas de page.</p>

          <form @submit.prevent="onSubmit" novalidate>
            <div class="field">
              <label class="label">Nom<em><strong>*</strong></em></label>
              <div class="control has-icons-left has-icons-right">
                <input :class="{ 'input': true, 'is-danger': hasError('nom') }" name="nom" type="text"
                  v-model.trim="nom" placeholder="Nom et Prénom" required />
                <span class="icon is-small is-left">
                  <font-awesome-icon :icon="['fas', 'user']" />
                </span>
                <span class="icon is-small is-right" :class="hasError('nom') ? 'has-text-danger' : 'has-text-success'">
                  <font-awesome-icon v-if="hasError('nom')" :icon="['fas', 'exclamation-triangle']" />
                  <font-awesome-icon v-else-if="'nom' in errors" :icon="['fas', 'check']" />
                </span>
              </div>
              <p v-if="hasError('nom')" class="help is-danger">{{ errors.nom }}</p>
            </div>
            <div class="field">
              <label class="label">Courriel<em><strong>*</strong></em></label>
              <div class="control has-icons-left has-icons-right">
                <input :class="{ 'input': true, 'is-danger': hasError('email') }" name="email" type="email"
                  v-model.trim="email" placeholder="example@domaine.com" required />
                <span class="icon is-small is-left">
                  <font-awesome-icon :icon="['fas', 'envelope']" />
                </span>
                <span class="icon is-small is-right"
                  :class="hasError('email') ? 'has-text-danger' : 'has-text-success'">
                  <font-awesome-icon v-if="hasError('email')" :icon="['fas', 'exclamation-triangle']" />
                  <font-awesome-icon v-else-if="'email' in errors" :icon="['fas', 'check']" />
                </span>
              </div>
              <p v-if="hasError('email')" class="help is-danger">{{ errors.email }}</p>
            </div>
            <div class="field">
              <label class="label">Teléphone</label>
              <div class="control has-icons-left has-icons-right">
                <input :class="{ 'input': true, 'is-danger': hasError('tel') }" name="tel" type="tel" v-model.trim="tel"
                  placeholder="1111111111" />
                <span class="icon is-small is-left">
                  <font-awesome-icon :icon="['fas', 'phone']" />
                </span>
                <span class="icon is-small is-right" :class="hasError('tel') ? 'has-text-danger' : 'has-text-success'">
                  <font-awesome-icon v-if="hasError('tel')" :icon="['fas', 'exclamation-triangle']" />
                  <font-awesome-icon v-else-if="'tel' in errors" :icon="['fas', 'check']" />
                </span>
              </div>
              <p v-if="hasError('tel')" class="help is-danger">{{ errors.tel }}</p>
            </div>
            <div class="field">
              <label class="label">Sujet</label>
              <div class="control has-icons-left has-icons-right">
                <input :class="{ 'input': true, 'is-danger': hasError('sujet') }" name="sujet" type="text"
                  v-model.trim="sujet" placeholder="Demande de rensiegnement" />
                <span class="icon is-small is-left">
                  <font-awesome-icon :icon="['fas', 'pencil-alt']" />
                </span>
                <span class="icon is-small is-right"
                  :class="hasError('sujet') ? 'has-text-danger' : 'has-text-success'">
                  <font-awesome-icon v-if="hasError('sujet')" :icon="['fas', 'exclamation-triangle']" />
                  <font-awesome-icon v-else-if="'sujet' in errors" :icon="['fas', 'check']" />
                </span>
              </div>
              <p v-if="hasError('sujet')" class="help is-danger">{{ errors.sujet }}</p>
            </div>
            <div class="field">
              <label class="label">Message<em><strong>*</strong></em></label>
              <div class="control is-expanded has-icons-right">
                <textarea :class="{ 'textarea': true, 'is-danger': hasError('message') }" name="message"
                  v-model.trim="message" placeholder="Tapez votre message ici..." required></textarea>
                <span class="icon is-small is-right"
                  :class="hasError('message') ? 'has-text-danger' : 'has-text-success'">
                  <font-awesome-icon v-if="hasError('message')" :icon="['fas', 'exclamation-triangle']" />
                  <font-awesome-icon v-else-if="'message' in errors" :icon="['fas', 'check']" />
                </span>
              </div>
              <p v-if="hasError('message')" class="help is-danger">{{ errors.message }}</p>
            </div>
            <div class="is-pulled-right">
              <em><strong>*</strong> champs requis.</em>
            </div>
            <div class="field">
              <div class="control">
                <button class="button is-danger" :class="{ 'is-loading': loading }" type="submit">
                  Envoyer
                </button>
              </div>
            </div>
          </form>
        </div>
      </section>
    </main>
  </div>
</template>

<script>
import { load } from 'recaptcha-v3'

function httpPost(formData, callback) {
  var xmlHttp = new XMLHttpRequest()
  xmlHttp.open('POST', "https://formsubmit.co/ajax/2eece65b36ddffd4b1682de2f7dd00be", true) // true for asynchronous
  xmlHttp.setRequestHeader('Content-type', 'application/json')
  xmlHttp.setRequestHeader('Accept', 'application/json')
  // xmlHttp.setRequestHeader('Content-Type', 'text/plain')
  xmlHttp.onload = function () {
    callback(this.responseText)
  }
  xmlHttp.send(JSON.stringify(formData))
}

const verifyRecap = (token, callback) => {
  var xmlHttp = new XMLHttpRequest()
  xmlHttp.open('POST', "https://www.google.com/recaptcha/api/siteverify?secret=6LesOikgAAAAAGwweyUjjVpxaulF7NZCw8JuxIJV&response=" + token, true)
  // xmlHttp.setRequestHeader('Access-Control-Allow-Origin', '*')
  // xmlHttp.setRequestHeader('Sec-Fetch-Mode', 'no-cors')
  xmlHttp.onload = function () {
    callback(this.responseText)
  }
  xmlHttp.send(token)
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

export default {
  name: 'contact',
  data() {
    return {
      nom: null,
      email: null,
      tel: null,
      sujet: null,
      message: null,
      errors: {},
      loading: false,
      recaptcha: {}
    }
  },
  mounted() {
    load('6LesOikgAAAAAGwweyUjjVpxaulF7NZCw8JuxIJV', {
      useRecaptchaNet: false,
      autoHideBadge: false
    }).then((recaptcha) => {
      this.recaptcha = recaptcha
    })
  },
  methods: {
    hasError(key) {
      if (key in this.errors && this.errors[key] !== null) return true
      return false
    },
    validateEmail(value) {
      // eslint-disable-next-line
      return /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(value)
    },
    alpha(value) {
      return /^[0-9A-ZÀÂÆÇÉÈÊËÏÎÔŒÙÛÜŸ:()_°'.",%/\-\s]*$/i.test(value)
      // return /^[\w\-\s]+$/.test(value)
    },
    phoneNumber(value) {
      return /^(?:(?:\+|00)33|0)\s*[1-9](?:[\s.-]*\d{2}){4}$/.test(value)
    },
    validNom(value) {
      if (!value || value === '') {
        this.errors['nom'] = 'Le champ nom est requis...'
      } else if (!this.alpha(value)) {
        this.errors['nom'] = 'Votre nom et mal formaté...'
      } else {
        this.errors['nom'] = null
      }
    },
    validEmail(value) {
      if (!value || value === '') {
        this.errors['email'] = 'Le champ couriel est requis...'
      } else if (!this.validateEmail(value)) {
        this.errors['email'] = 'Votre adresse de couriel est invalide...'
      } else {
        this.errors['email'] = null
      }
    },
    validMessage(value) {
      if (!value || value === '') {
        this.errors['message'] = 'Le champ message est requis...'
      } else if (!this.alpha(value)) {
        this.errors['message'] = 'Votre message et mal formaté...'
      } else {
        this.errors['message'] = null
      }
    },
    onSubmit() {
      let valid = true
      for (let error in this.errors) {
        if (this.errors[error] !== null) valid = false
      }
      if (valid) {
        this.recaptcha.execute('submit').then((token) => {
          console.log(token)
          this.onVerify(token)
        })
        // return
      } else {
        alert('Votre formulaire de contact comporte des erreurs ou des données manquantes, merci de les corriger')
      }
    },
    onVerify: function (response) {
      this.loading = true
      console.log('Verify: ' + response)
      verifyRecap(response, alert)
      const data = {}
      data.nom = this.nom
      data.email = this.email
      data.message = this.message
      if (this.tel) data.tel = this.tel
      if (this.sujet) data.sujet = this.sujet
      httpPost(data, (reponse) => {
        this.loading = false
        alert(reponse)
      })
    },
    onExpired: function () {
      console.log('Expired')
    }
  },
  watch: {
    nom: debounce(function (value) { this.validNom(value) }, 1000),
    email: debounce(function (value) { this.validEmail(value) }, 1000),
    tel: debounce(function (value) {
      !this.phoneNumber(value) ? this.errors['tel'] = 'Votre numero de téléphone est invalide...'
        : this.errors['tel'] = null
    }, 1000),
    sujet: debounce(function (value) {
      !this.alpha(value) ? this.errors['sujet'] = 'Votre sujet et mal formaté...'
        : this.errors['sujet'] = null
    }, 1000),
    message: debounce(function (value) { this.validMessage(value) }, 1000)
  }
}
</script>

<style>
</style>
