<script setup>
import RgeLogo from "../assets/logo-qualipac-RGE.webp"
</script>
<template>
  <footer class="footer is-fixed-bottom">
    <div class="columns is-mobile">
      <div class="column is-two-fifths">
        <img class="mb-2" :src="RgeLogo" alt="Rge Logo" width="150" />
      </div>
      <div class="column">
        <div class="content has-text-centered" itemscope itemtype="http://schema.org/Organization">
          <span itemprop="name"><strong>Novelec</strong> - Lilian Monchalin</span>
          <div itemprop="address" itemscope itemtype="http://schema.org/PostalAddress">
            <span itemprop="streetAddress">3145 Route des Sucs - Les Hayards</span>
            -
            <span itemprop="postalCode">43800</span>
            -
            <span itemprop="addressLocality">Beaulieu, France</span>
          </div>
          <strong>Tel: </strong><span itemprop="telephone">06 86 41 59 53</span> -
          <strong>Courriel: </strong>
          <a href="mailto:contact@novelec.info" itemprop="email"> contact@novelec.info </a>
        </div>
      </div>
    </div>
    <p class="has-text-centered"><strong>© 2022 Novelec - Lilian Monchalin.</strong> Tous droits réservés</p>
  </footer>
</template>
