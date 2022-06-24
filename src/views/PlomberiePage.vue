<script setup>
import Tableau from "../assets/depannage-Plomberie-reparation-Installation.jpg"
import BandeauItem from "../components/BandeauItem.vue"
import ContentBox from "../components/ContentBox.vue"

const title = "Electricité général et tertiaire, dépannage. Neuf et rénovation"
const subtitle = "L'entreprise Novelec vous accompagne dans tous vos travaux électrique..."
</script>

<template>
  <div>
    <BandeauItem :image="Tableau" />
    <ContentBox :title="title" :subtitle="subtitle" />
  </div>
</template>
