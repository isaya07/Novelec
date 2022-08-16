<script setup>
import Img404 from "../assets/404.jpg?webp"
</script>

<template>
  <div class="container is-widescreen has-text-left">
    <section class="section">
      <div class="box">
        <img class="mb-2" :src="Img404" alt="404 Error" />
        <!-- <h1 class="is-size-3">Désolé la page que vous venez voir n'existe pas...</h1> -->
      </div>
    </section>
  </div>
</template>
