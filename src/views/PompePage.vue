<script setup>
import Pompes from "../assets/Bandeau/Pompe.jpg?width=400;800;1100&webp"
import Clims from "../assets/Bandeau/Climatisation.png?width=400;800;1100&webp"
import BandeauItem from "../components/BandeauItem.vue"
import ContentBox from "../components/ContentBox.vue"

const title = "Pompe a Chaleur, climatisation réversible"
const subtitle = "Nous vous accompagnons dans vos travaux d'amelioration énergétique"
</script>

<template>
  <div class="container is-widescreen has-text-left">
    <BandeauItem :image="Pompes" />
    <ContentBox :title="title" :subtitle="subtitle" />
    <section class="section">
      <div class="content">
        <h3>Pompes à chaleur Air/Eau, des solutions de chauffage sur mesure</h3>
        <p>
          <span class="tabulation"></span>Notre polyvalence est l’une de nos fiertés. Riches de nos acquis, nous sommes
          en mesure d’<strong>intervenir avec efficacité dans le domaine du chauffage</strong>. Qu’il s’agisse de
          <strong>rénover une installation existante</strong> ou <strong>d’équiper une construction neuve</strong>, nous
          sommes sur tous les fronts.
        </p>
        <p>
          <span class="tabulation"></span>Vous résidez sur les bassins du Puy-en-Velay, de l'Emblavez ou d'Yssingeaux.
          <strong>Vous recherchez un chauffagiste compétent&nbsp;</strong>? Nous prenons en charge les demandes
          suivantes&nbsp;:
        </p>
        <ul>
          <li>
            <strong>Mise en place de pompe à chaleur air-eau</strong>&nbsp;: une solution parfaite pour remplacer une
            ancienne chaudière (fioul ou gaz) ou pour <strong>créer un système de chauffage économique</strong>
          </li>
          <li><strong>Installation de chaudière électrique</strong> (si demandes spécifiques)</li>
          <li><strong>Pose de plancher chauffant</strong></li>
          <li>
            <strong>Création de circuit de chauffage complet</strong>&nbsp;: depuis la mise en place des radiateurs
            jusqu’à la pose de la chaudière
          </li>
          <li>
            <strong>Désembouage de circuit de chauffage&nbsp;</strong>: consiste à retirer tous les dépôts qui se
            forment au fil des années dans votre réseau hydraulique ou votre plancher chauffant. Votre installation
            retrouve une capacité de chauffe optimale
          </li>
        </ul>
        <p>
          <strong>Nous somme certifiée RGE et QualiPAC</strong>. Du fait de ces labels, nos prestations en lien avec
          l’amélioration des performances énergétiques de votre logement peuvent vous rendre éligibles à des<strong>
            aides financières</strong
          >. Primes CEE, Éco-PTZ, MaPrimeRénov’… certains de ces dispositifs sont très avantageux pour<strong>
            financer la pose d’une PAC</strong
          >.
        </p>
        <p>
          Contactez-nous pour <strong>discuter de votre projet</strong>. Nous vous ferons parvenir une<strong>
            proposition tarifaire personnalisée et sans engagement</strong
          >.
        </p>
      </div>
    </section>
    <BandeauItem :image="Clims" />
    <section class="section">
      <div class="content">
        <h3>Pompes à chaleur Air/Air, climatisation réversible</h3>
        <p>
          <span class="tabulation"></span>Notre <strong>savoir-faire</strong> de haute technicité nous permet
          d’intervenir, en résidentiel comme en tertiaire. Nous assurons la pose et l’entretien de vos équipements.
        </p>
        <p>
          <span class="tabulation"></span>Pendant son fonctionnement la climatisation absorbe les calories contenues
          dans l’air, c’est un échange thermique entre l’unité intérieure et l’unité extérieure. Ceci est réversible :
        </p>
        <ul>
          <li><strong>de l'intérieur vers l'extérieur en mode rafraîchissement</strong></li>
          <li><strong>de l'extérieur vers l'intérieur en mode chauffage</strong></li>
        </ul>
        <p>
          <span class="tabulation"></span>En mode réversible la climatisation consomme 1Kwh électricité et restitue 3Kwh
          de chauffage, vous réalisez ainsi <strong>jusqu'à 70% d'économie</strong> d'énergie par rapport à un chauffage
          électrique.
        </p>
        <p>Nos différents systèmes de climatisation :</p>
        <ul>
          <li><strong>climatiseur monobloc, split ou multisplit</strong></li>
          <li><strong>Système gainable</strong></li>
          <li><strong>Plafonnier et DRV/VRV</strong></li>
        </ul>
        <p>
          Tous les projets débutent par une étude personnalisée pour dimensionner l’installation à son environnement.
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
