<template>
  <div class="container is-widescreen has-text-left">
    <section>
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
            <GoogleFrame />
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { defineAsyncComponent } from "vue"

const ContactForm = defineAsyncComponent(() => import("@/components/ContactForm.vue"))
const GoogleFrame = defineAsyncComponent(() => import("@/components/GoogleFrame.vue"))
</script>
