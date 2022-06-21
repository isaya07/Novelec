<template>
  <div class="container is-widescreen has-text-left is-flex">
    <main>
      <NotifItem :type="notif.type" :visible="notif.show" @show="notif.show = !notif.show">
        {{ notif.message }}
      </NotifItem>
      <section class="section">
        <div class="content">
          <h3>Contactez nous...</h3>
          <p class="texte">
            Pour toutes demandes de renseignements, n'hésitez pas à nous contacter, soit par ce formulaire, soit
            directement avec les coordonnées que vous trouverez en bas de page.
          </p>
          <div class="columns is-desktop">
            <div class="column">
              <div class="box">
                <ContactForm @result="showResult" />
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
import { defineAsyncComponent, ref } from "vue"

const ContactForm = defineAsyncComponent(() => import("@/components/ContactForm.vue"))
const GoogleFrame = defineAsyncComponent(() => import("@/components/GoogleFrame.vue"))
const NotifItem = defineAsyncComponent(() => import("@/components/NotifItem.vue"))

let notif = ref({ show: false, type: "", message: "" })
let mapWidth = 600
let mapHeight = 600

function showResult(reponse) {
  console.log(reponse)
  if (reponse.success) {
    notif.value.type = "primary"
    notif.value.show = true
    notif.value.message = reponse.message
  } else {
    notif.value.type = "danger"
    notif.value.show = true
    notif.value.message = reponse.message
  }
}
</script>
