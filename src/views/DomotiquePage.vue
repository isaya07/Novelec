<script setup>
import Domo from "../assets/Bandeau/domotique.jpg?&webp"
// import Depannage from "../assets/dépannage-2.jpg"
import BandeauItem from "../components/BandeauItem.vue"
import ContentBox from "../components/ContentBox.vue"
import DomotiqueItem from "../components/DomotiqueItem.vue"
const title = "Domotique, Immotique, Gestion technique du batiment"
const subtitle = "L'entreprise Novelec vous aide a rendre votre habitat, bureau plus simple, plus comfortable."
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
        <DomotiqueItem />
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
