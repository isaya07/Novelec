<script setup>
import { defineAsyncComponent } from "vue"

import BandeauCarousel from "@/components/BandeauCarousel.vue"
// const MapView = defineAsyncComponent(() => import("@/components/MapView.vue"))
const GoogleFrame = defineAsyncComponent(() => import("@/components/GoogleFrame.vue"))

let mapWidth = 600
let mapHeight = 400
</script>

<template>
  <div>
    <BandeauCarousel />
    <div class="container is-widescreen has-text-left">
      <section class="is-medium mt-6">
        <div class="box">
          <h2 class="title">Électricien Plombier et Chauffagiste à Beaulieu (43)</h2>
          <h4 class="subtitle">
            L'entreprise Novelec vous accompagne dans tous vos travaux d'électricité, de plomberie et de chauffage
          </h4>
        </div>
      </section>
      <section class="section">
        <div class="content">
          <h3>Bienvenue sur le site de l'entreprise Novelec</h3>
          <p class="texte">
            Novelec est une entreprise spécialisée en électricité générale. Nous intervenons sur tous types de bâtiments
            résidentiel ou tertiaire. Installation classique, mise au norme, en sécurité, tableau électrique, domotique,
            nous vous accompagnons dans tous vos projets de rénovation, construction neuve, agrandissement...
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
        <div class="box">
          <!-- <MapView /> -->
          <GoogleFrame :width="mapWidth" :height="mapHeight" />
        </div>
      </section>
    </div>
  </div>
</template>
