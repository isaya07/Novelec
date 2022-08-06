<script setup>
import RgeLogo from "../assets/logo-qualipac-RGE.webp"
import GoogleLogo from "../assets/Google-My-Business_logo.png?webp"
import Logo from "../assets/novelec.svg?webp"
</script>

<template>
  <footer class="footer is-fixed-bottom">
    <div class="columns is-mobile is-vcentered is-variable is-0-mobile">
      <div class="column is-one-quarter has-text-centered">
        <img class="mb-2" :src="RgeLogo" alt="Rge Logo" width="60" />
      </div>
      <div class="column has-text-centered">
        <div class="content" itemscope itemtype="http://schema.org/Organization">
          <div class="columns">
            <div class="column has-text-centered is-narrow">
              <img itemprop="logo" class="mb-2" :src="Logo" alt="Novelec Logo" width="60" />
            </div>
            <div class="column has-text-centered">
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
              <a href="mailto:lilian.monchalin@novelec43.fr" itemprop="email"> lilian.monchalin@novelec43.fr </a>
            </div>
          </div>
        </div>
      </div>
      <div class="column is-one-quarter has-text-centered">
        <a href="https://g.page/r/CXSatghaXkowEBA" target="_blank">
          <img class="mr-2" :src="GoogleLogo" alt="Google My Buisness" width="60" />
        </a>
      </div>
    </div>
    <p class="has-text-centered"><strong>© 2022 Novelec - Lilian Monchalin.</strong> Tous droits réservés</p>
  </footer>
</template>
