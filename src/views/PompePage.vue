<script setup>
import Pompe from "../assets/Installation-Climatisation-reparation.jpg"
import Clim from "../assets/clim.png"
import BandeauItem from "../components/BandeauItem.vue"
import ContentBox from "../components/ContentBox.vue"

const title = "Electricité général et tertiaire, dépannage. Neuf et rénovation"
const subtitle = "L'entreprise Novelec vous accompagne dans tous vos travaux électrique..."
</script>

<template>
  <div>
    <BandeauItem :image="Pompe" />
    <ContentBox :title="title" :subtitle="subtitle" />
    <div class="container is-widescreen has-text-left">
      <section class="section">
        <h2>Chaudières gaz, pompes à chaleur, des solutions de chauffage sur mesure</h2>
        <p>
          La polyvalence de nos équipes est l’une de nos fiertés. Riches des acquis de nos collaborateurs, nous sommes
          en mesure d’<strong>intervenir avec efficacité dans le domaine du chauffage</strong>. Qu’il s’agisse de
          <strong>rénover une installation existante</strong> ou d’<strong>équiper une construction neuve</strong>, nous
          sommes sur tous les fronts.
        </p>
        <p>
          Vous résidez à Rennes, Saint-Malo ou Dinan&nbsp;?<strong>
            Vous recherchez un chauffagiste compétent&nbsp;</strong
          >? Depuis notre site de Combourg,
          <strong>nos collaborateurs prennent en charge les demandes suivantes</strong>&nbsp;:
        </p>
        <ul>
          <li>
            <strong>Installation de chaudière gaz à condensation</strong>&nbsp;: en remplacement d’un équipement
            défectueux ou sur un nouveau réseau&nbsp;;
          </li>
          <li>
            <strong>Mise en place de pompe à chaleur air-eau</strong>&nbsp;: une solution parfaite pour remplacer une
            ancienne chaudière (fioul ou gaz) ou pour <strong>créer un système de chauffage économique</strong>&nbsp;;
          </li>
          <li><strong>Pose de pompe à chaleur air-air</strong> / clim réversible&nbsp;;</li>
          <li><strong>Installation de chaudière électrique</strong> (si demandes spécifiques)&nbsp;;</li>
          <li><strong>Pose de plancher chauffant</strong>&nbsp;;</li>
          <li>
            <strong>Création de circuit de chauffage complet</strong>&nbsp;: depuis la mise en place des radiateurs
            jusqu’à la pose de la chaudière&nbsp;;
          </li>
          <li>
            <strong>Désembouage de circuit de chauffage&nbsp;</strong>: consiste à retirer tous les dépôts qui se
            forment au fil des années dans votre réseau hydraulique ou votre plancher chauffant. Votre installation
            retrouve une capacité de chauffe optimale&nbsp;;
          </li>
          <li>
            <strong>Mise en service de PAC&nbsp;</strong>: disposant d’un agrément SOCOTEC, nous sommes habilités à la
            mise en service de votre pompe à chaleur (Atlantic, Mitsubishi Electric, etc.)
          </li>
        </ul>
        <p>
          <strong>PC Elec est certifiée RGE Qualibat et QualiPAC</strong>. Du fait de ces labels, nos prestations en
          lien avec l’amélioration des performances énergétiques de votre logement peuvent vous rendre éligibles à
          des<strong> aides financières</strong>. Primes CEE, Éco-PTZ, MaPrimeRénov’… certains de ces dispositifs sont
          très avantageux pour<strong> financer la pose d’une nouvelle chaudière à condensation ou d’une PAC</strong>.
        </p>
        <p>
          Contactez-nous pour <strong>discuter de votre projet</strong>. Nous vous ferons parvenir une<strong>
            proposition tarifaire personnalisée et sans engagement</strong
          >.
        </p>
      </section>
      <BandeauItem :image="Clim" />
    </div>
  </div>
</template>
