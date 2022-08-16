<script setup>
import { defineAsyncComponent } from "vue"
import ContentBox from "../components/ContentBox.vue"
const ContactForm = defineAsyncComponent(() => import("@/components/ContactForm.vue"))
const GoogleFrame = defineAsyncComponent(() => import("@/components/GoogleFrame.vue"))

const title = "Nous Contacter"
const subtitle = "N'hésitez pas a nous contacté pour la réalisation de vos projets"
</script>

<template>
  <div class="container is-widescreen has-text-left pt-3">
    <br />
    <ContentBox :title="title" :subtitle="subtitle" />
    <section>
      <div class="content pt-3">
        <h3>Formulaire de contact :</h3>
        <p class="texte">Veuillez remplir ce formulaire ou utilisé les coordoné en bas de page. Merci.</p>
        <div class="columns is-desktop">
          <div class="column">
            <div class="box">
              <ContactForm @result="showResult" />
            </div>
          </div>
          <div class="column">
            <!--<MapView />-->
            <GoogleFrame />
          </div>
        </div>
        <br />
      </div>
    </section>
  </div>
</template>
