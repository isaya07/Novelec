<script setup>
import Domo from "../assets/Bandeau/domotique.jpg?&webp"
// import Depannage from "../assets/dépannage-2.jpg"
import BandeauItem from "../components/BandeauItem.vue"
import ContentBox from "../components/ContentBox.vue"

const title = "Electricité général et tertiaire, dépannage. Neuf et rénovation"
const subtitle = "L'entreprise Novelec vous accompagne dans tous vos travaux électrique..."
</script>

<template>
  <div class="container is-widescreen has-text-left">
    <BandeauItem :image="Domo" />
    <ContentBox :title="title" :subtitle="subtitle" />
    <section class="section">
      <div class="content">
        <h3>Domotique</h3>
        <p class="texte">
          Vous avez envie <strong>d'automatiser</strong> certaines tâches récurrentes, que votre maison
          <strong>interagisse</strong> avec vous, avec les conditions extérieures. Pour vous
          <strong>simplifier</strong> la vie nous vous offrons une large palette de solutions afin de
          <strong>contrôler</strong> votre habitat.
        </p>
        <ul>
          <li><strong>Gestion des ouvrants</strong></li>
          <li><strong>Gestion de l'éclairage</strong></li>
          <li><strong>Gestion de scénarios</strong></li>
          <li><strong>Gestion de l'énergie</strong></li>
        </ul>
        <p class="texte">
          Chaque action pourra être contrôlée de manière automatique (à horaire fixe, en fonction de la luminosité...),
          ou par modules de commande (télécommandes, écrans tactiles, ordinateur…). Tout ceci nous permet
          <strong>d'améliorer</strong> la vie au quotidien en facilitant certaines tâches, et en intégrant les
          <strong>technologies</strong> d’aujourd’hui directement au centre de la maison.
        </p>
        <p class="texte">
          Chaque installation est une
          <strong>conception</strong> personnalisée, où nous cherchons avec vous à créer un habitat
          <strong>simple et fonctionnel</strong>.
        </p>
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
