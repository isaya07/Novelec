<script setup>
import DomoAtout from "../components/DomoAtout.vue"
</script>
<template>
  <div class="box">
    <h4>Notre savoir-faire pour votre maison domotisé</h4>
    <DomoAtout
      title="Gestion des éclairages"
      text="Passez d'une ambiance studieuse à une ambiance chaleureuse d'une seule commande en ayant le contrôle
          précis des sources lumineuses de votre maison. Et éteignez toutes vos lumières d'un seul bouton."
    >
      <mdi-Lightbulb-On-Outline />
    </DomoAtout>
    <DomoAtout
      title="Contrôle de la température"
      text="Ne vous souciez plus de penser à réduire le chauffage lors de votre départ, le contrôleur agit pour vous. Il
        aura même pensé à votre confort lors de votre retour en ajustant la température idéale dans chaque
        pièce."
    >
      <mdi-Thermometer-Low />
    </DomoAtout>
    <DomoAtout
      title="Commande des ouvrants"
      text="Contrôler la fermeture progressive de vos volets selon l'emplacement du soleil ou détecter
        l'ouverture d'une fenêtre pour couper temporairement le chauffage, nos solutions apportent un réel atout à votre
        maison."
    >
      <mdi-Window-Shutter />
    </DomoAtout>
    <DomoAtout
      title="Distribution Audio-Vidéo"
      text="Diffusez votre musique préférée stockée dans votre smartphone dans toutes les pièces de la maison ou 
        affichez le film que vous avez commencéà visionner sur votre tablette dans le miroir de la salle de bain."
    >
      <mdi-Play-Pause />
    </DomoAtout>
    <DomoAtout
      title="Gestion de votre piscine"
      text="Ne perdez plus votre temps avec les tâches répétitives liées à l'entretien de votre piscine, contentez-vous 
        de vérifier la température de l'eau et lancer la nage à contre-courant depuis votre mobile pour en profiter."
    >
      <mdi-Pool />
    </DomoAtout>
    <DomoAtout
      title="Supervision Domotique"
      text="Ayez le contrôle du bout des doigts&nbsp;sur votre tablette, smartphone ou écran tactile, de l'ensemble de 
        votre maison depuis une interface graphique design et personnalisée selon vos attentes, et en toute simplicité."
    >
      <mdi-Home-Assistant />
    </DomoAtout>
  </div>
</template>
