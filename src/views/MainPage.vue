<script setup>
import { defineAsyncComponent, ref } from "vue"

import BandeauCarousel from "@/components/BandeauCarousel.vue"
import AtoutItem from "@/components/AtoutItem.vue"
import RgeItem from "@/components/RgeItem.vue"

const GoogleFrame = defineAsyncComponent(() => import("@/components/GoogleFrame.vue"))
const ContactForm = defineAsyncComponent(() => import("@/components/ContactForm.vue"))
const NotifItem = defineAsyncComponent(() => import("@/components/NotifItem.vue"))

let notif = ref({ show: false, type: "", message: "" })
let mapWidth = "600px"
let mapHeight = "600px"

function showResult(reponse) {
  if (reponse.type == "succes") {
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

<template>
  <div>
    <BandeauCarousel />
    <main>
      <div class="container is-widescreen has-text-left">
        <NotifItem :type="notif.type" :visible="notif.show" @show="notif.show = !notif.show">
          {{ notif.message }}
        </NotifItem>
        <section class="is-medium mt-6">
          <div class="box is-flex is-justify-content-center">
            <div class="columns is-mobile is-centered is-vcentered">
              <div clas="column is-narrow">
                <span class="icon is-large has-text-danger m-4">
                  <my-home style="font-size: 3em" />
                </span>
              </div>
              <div clas="column">
                <h2 class="title is-size-5-mobile">Électricien Plombier Chauffagiste et Climaticien à Beaulieu (43)</h2>
                <h4 class="subtitle is-size-6-mobile">
                  L'entreprise Novelec vous accompagne dans tous vos travaux d'électricité, de chauffage et de
                  climatisation.
                </h4>
              </div>
            </div>
          </div>
        </section>
        <section class="section">
          <div class="content">
            <h3>Bienvenue sur le site de l'entreprise Novelec</h3>
            <p class="texte">
              Novelec est une entreprise spécialisée dans les métiers technique du bâtiment. Nous intervenons sur tous
              types de bâtiments résidentiel ou tertiaire. Installation classique, mise au norme, en sécurité, tableau
              électrique, domotique, nous vous accompagnons dans tous vos projets de rénovation, construction neuve,
              agrandissement...
            </p>
            <p class="texte">Nous réalisons pour vous :</p>
            <ul>
              <li><strong>Installation domestique,</strong> neuf ou rénovation.</li>
              <li><strong>Installation tertiaire,</strong> petit magasin, bureau.</li>
              <li><strong>Installation d'éclairage</strong> fonctionnel, architectural, décoratif et de sécurité.</li>
              <li>
                <strong>Installation de chauffage électrique :</strong> radiateur, plancher chauffant, gestion
                d'énergie.
              </li>
              <li><strong>Installation de VMC</strong> (Ventilation Mécanique Contrôlée) simple ou double flux.</li>
              <li><strong>Installation de systèmes Domotisés,</strong> afin que la maison interagisse avec vous.</li>
              <li>
                <strong>Installation d'un contrôle d'accès,</strong> portail automatique, interphone audio et/ou vidéo.
              </li>
            </ul>
            <p class="texte">
              Basée à Beaulieu en Haute-Loire (43), nous intervenons sur tout l'Emblavez ansi que sur les bassins du Puy
              en Velay et d'Yssingeaux.
            </p>
            <p class="texte">N'hésitez pas à nous contacter pour la réalisation de vos projets.</p>
          </div>
        </section>
        <section>
          <AtoutItem />
        </section>
        <section class="is-medium my-6 mx-6">
          <RgeItem />
        </section>
        <section>
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
        </section>
      </div>
    </main>
  </div>
</template>
