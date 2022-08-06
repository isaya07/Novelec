<script setup>
import Tableau from "../assets/Bandeau/Plomberie.jpg?&webp"
import BandeauItem from "../components/BandeauItem.vue"
import ContentBox from "../components/ContentBox.vue"

const title = "Plomberie , Dépannage, Sanitaire. Installation neuve et rénovation"
const subtitle = "Nous vous accompagnons dans la réalisation de vos traveaux"
</script>

<template>
  <div class="container is-widescreen has-text-left">
    <BandeauItem :image="Tableau" />
    <ContentBox :title="title" :subtitle="subtitle" />
    <section class="section">
      <div class="content">
        <h3>Dépannage Plomberie, sanitaire, projets de salle de bain</h3>
        <p>Nous sommes à votre disposition pour toutes les réparations de vos équipements sanitaires&nbsp;:</p>
        <ul>
          <li>fuite d’eau&nbsp;: robinet qui coule, WC qui fuit…</li>
          <li>dépannage et remplacement de chauffe-eau</li>
          <li>pompe de puits&nbsp;: réparation et&nbsp;/ changement de la pompe</li>
          <li>service d’eau&nbsp;: réfection des installations vétustes</li>
          <li>débouchage des canalisations</li>
        </ul>
        <p>Nous réalisons aussi tous les travaux de plomberie&nbsp;:</p>
        <ul>
          <li>réalisation de salle de bains&nbsp;: rénovation remise aux normes des douches, accès PMR</li>
          <li>changement de WC&nbsp;: suspendus , PMR</li>
          <li>rénovation de cuisine</li>
        </ul>
        <p>Nous nous déplaçons dans un rayon de 50 kms autour de Beaulieu.</p>
      </div>
    </section>
    <div class="is-flex is-justify-content-center mb-6">
      <router-link to="/contact" class="button is-danger is-outlined">
        <span class="icon is-medium is-nav-icon has-text-danger is-size-5">
          <IconItem :icon="'EmailOutline'" />
        </span>
        <span class="is-size-6"> Nous contacter </span>
      </router-link>
    </div>
  </div>
</template>
