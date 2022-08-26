<script setup>
import DomoAtout from "../components/DomoAtout.vue"
</script>
<template>
  <div class="box">
    <DomoAtout
      title="Gestion des éclairages"
      text="Passez d'une ambiance studieuse à une ambiance chaleureuse d'une seule commande. Vous avez le contrôle
          précis des sources lumineuses de votre maison."
    >
      <mdi-Lightbulb-On-Outline />
    </DomoAtout>
    <DomoAtout
      title="Contrôle de la température"
      text="Gérer la température de votre logement en fonction de votre présence. Le contrôleur agit pour vous. Il
        aura même pensé à votre confort lors de votre retour en ajustant la température idéale dans chaque
        pièce."
    >
      <mdi-Thermometer-Low />
    </DomoAtout>
    <DomoAtout
      title="Commande des ouvrants"
      text="Contrôler la fermeture progressive de vos volets selon l'emplacement du soleil ou détecter
        l'ouverture d'une fenêtre pour couper temporairement le chauffage. Nos solutions apportent un réel atout à votre
        maison."
    >
      <mdi-Window-Shutter />
    </DomoAtout>
    <DomoAtout
      title="Distribution Audio-Vidéo"
      text="Diffuser votre musique préférée dans toutes les pièces de la maison. Créer un home cinéma connecté avec 
      votre installation."
    >
      <mdi-Play-Pause />
    </DomoAtout>
    <DomoAtout
      title="Gestion de votre piscine"
      text="Ne perdez plus votre temps avec les tâches répétitives liées à l'entretien de votre piscine. Contentez-vous 
        de vérifier la température de l'eau et lancer la nage à contre-courant depuis votre mobile pour en profiter."
    >
      <mdi-Pool />
    </DomoAtout>
    <DomoAtout
      title="Supervision Domotique"
      text="Ayez le contrôle du bout des doigts de l'ensemble de votre maison depuis une interface graphique design et 
      personnalisée, et en toute simplicité. Et ceci sur votre tablette, smartphone ou écran 
      tactile."
    >
      <mdi-Home-Assistant />
    </DomoAtout>
  </div>
</template>
