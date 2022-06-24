<script setup>
import { defineAsyncComponent, ref } from "vue"

import BandeauCarousel from "@/components/BandeauCarousel.vue"
import ContentBox from "../components/ContentBox.vue"

const AtoutItem = defineAsyncComponent(() => import("@/components/AtoutItem.vue"))
const RgeItem = defineAsyncComponent(() => import("@/components/RgeItem.vue"))
const GoogleFrame = defineAsyncComponent(() => import("@/components/GoogleFrame.vue"))
const ContactForm = defineAsyncComponent(() => import("@/components/ContactForm.vue"))
const NotifItem = defineAsyncComponent(() => import("@/components/NotifItem.vue"))

let notif = ref({ show: false, type: "", message: "" })
let mapWidth = "600px"
let mapHeight = "600px"

const title = "Électricien Plombier Chauffagiste et Climaticien à Beaulieu (43)"
const subtitle =
  "L'entreprise Novelec vous accompagne dans tous vos travaux d'électricité, de chauffage et de climatisation."

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
    <NotifItem :type="notif.type" :visible="notif.show" @show="notif.show = !notif.show">
      {{ notif.message }}
    </NotifItem>
    <div class="container is-widescreen has-text-left">
      <BandeauCarousel />
      <ContentBox :title="title" :subtitle="subtitle" />
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
              <strong>Installation de chauffage électrique :</strong> radiateur, plancher chauffant, gestion d'énergie.
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
      <section class="section">
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
  </div>
</template>
