<script setup>
//import Tableau from "../assets/tableau.jpg"
//import Depannage from "../assets/dépannage-2.jpg"
import BandeauItem from "../components/BandeauItem.vue"
import IconItem from "../components/IconItem.vue"
import ContentBox from "../components/ContentBox.vue"

import Tableau from "../assets/Bandeau/tableau.jpg?width=400;800;1100&webp"
import Depannage from "../assets/Bandeau/depannage-2.jpg?width=400;800;1100&webp"

const title = "Electricité générale et tertiaire, dépannage. Neuf et rénovation"
const subtitle = "L'entreprise Novelec vous accompagne dans tous vos travaux électrique..."
</script>

<template>
  <div class="container is-widescreen has-text-left">
    <BandeauItem :image="Tableau" />
    <ContentBox :title="title" :subtitle="subtitle" />
    <section class="section">
      <div class="content">
        <h3>Installation électrique</h3>
        <p class="texte">
          Votre spécialiste en électricité Novelec met en conformité votre installation électrique, effectue vos travaux
          d’appareillage (interrupteurs, prises, etc...), et s’occupe de la distribution du réseau électrique dans
          chacune de vos pièces. Novelec vous propose un accompagnement sur mesure tout au long de votre projet
          d’installation ou de remise aux normes en neuf comme en rénovation.
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
          <li>
            <strong>Installation d'un contrôle d'accès,</strong> portail automatique, interphone audio et/ou vidéo.
          </li>
        </ul>
        <p class="texte">
          Basée à Beaulieu en Haute-Loire (43), nous intervenons sur tout l'Emblavez ansi que sur les bassins du Puy en
          Velay et d'Yssingeaux.
        </p>
        <p class="texte">N'hésitez pas à nous contacter pour la réalisation de vos projets.</p>
      </div>
    </section>
    <BandeauItem :image="Depannage" />
    <section class="section">
      <div class="content">
        <h3>Dépannage électrique</h3>
        <p class="texte">
          Nous nous déplaçons, dans les meilleurs délais, pour
          <strong>tous types</strong> de dépannage électrique. Une panne inexpliquée?
        </p>
        <p class="texte">Nous réalisons un <strong>diagnostique</strong> personnel et rapide.</p>
        <ul>
          <li><strong>Remplacement</strong> de prises, interrupteurs, points lumineux, va-et-vient...</li>
          <li>Un <strong>chauffe-eau</strong> électrique défaillant.</li>
          <li>Des <strong>radiateurs</strong> qui restent froids.</li>
          <li>Réparation, remplacement <strong>d’interphones.</strong></li>
          <li>Installation de protection <strong>parafoudre.</strong></li>
          <li>Mise aux <strong>normes</strong> d'une habitation.</li>
        </ul>
        <p class="texte">
          Car certaines interventions relèvent de <strong>l’urgence</strong>, comme une
          <strong>panne totale</strong> d'électricité, nous intervenons le plus <strong>rapidement</strong> possible.
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

<style></style>
