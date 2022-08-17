<script setup>
import { defineAsyncComponent } from "vue"

import BandeauCarousel from "@/components/BandeauCarousel.vue"
import ContentBox from "../components/ContentBox.vue"

const AtoutItem = defineAsyncComponent(() => import("@/components/AtoutItem.vue"))
const RgeItem = defineAsyncComponent(() => import("@/components/RgeItem.vue"))
const GoogleFrame = defineAsyncComponent(() => import("@/components/GoogleFrame.vue"))
const ContactForm = defineAsyncComponent(() => import("@/components/ContactForm.vue"))

const title = "Électricien Plombier Chauffagiste et Climaticien à Beaulieu (43)"
const subtitle =
  "Nous vous accompagnons dans tous vos travaux d'électricité, de plomberie, de chauffage et de climatisation."
</script>

<template>
  <div class="container is-widescreen has-text-left">
    <BandeauCarousel />
    <ContentBox :title="title" :subtitle="subtitle" />
    <section class="section">
      <div class="content">
        <h3>Bienvenue sur le site de l'entreprise Novelec</h3>
        <p class="texte">
          <span class="tabulation"></span>
          Novelec est une entreprise spécialisée dans les métiers technique du bâtiment. Nous intervenons sur tous types
          de bâtiments résidentiel ou tertiaire. Installation électrique classique, domotisée, plomberie, chauffage et
          climatisation, nous vous accompagnons dans tous vos projets de rénovation, construction neuve,
          agrandissement...
        </p>
        <p class="texte">Nous réalisons pour vous :</p>
        <ul>
          <li><strong>Installation Electrique,</strong> neuf, rénovation, tertiaire.</li>
          <li><strong>Installation Sanitaire,</strong> salle de bains, WC, locaux PMR.</li>
          <li><strong>Installation Domotisée</strong> afin que la maison intéragisse avec vous.</li>
          <li><strong>Installation de Pompe a Chaleur</strong> remplacemnt, neuf.</li>
          <li>
            <strong>Installation de Climatisation reversible,</strong> idéale en remplacement d'un chauffage électrique.
          </li>
        </ul>
        <p class="texte">
          Basée à Beaulieu en Haute-Loire (43), nous intervenons sur tout l'Emblavez ainsi que sur les bassins du Puy en
          Velay et d'Yssingeaux.
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
    <section class="pb-3">
      <div class="columns is-desktop">
        <div class="column">
          <div class="box">
            <ContactForm />
          </div>
        </div>
        <div class="column">
          <!--<MapView />-->
          <GoogleFrame />
        </div>
      </div>
    </section>
  </div>
</template>
