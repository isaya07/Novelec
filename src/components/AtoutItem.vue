<script setup></script>
<template>
  <div class="box">
    <div class="title is-2 has-text-centered is-size-4-mobile">Nos Atouts</div>
    <div class="columns is-mobile has-text-centered">
      <div class="column is-one-quarter">
        <div class="circle">
          <mdi-bullseye-arrow font-size="2em" />
        </div>
        <div class="mt-1 has-text-weight-bold is-size-5 is-size-7-mobile">Savoir faire</div>
        <div class="divider"></div>
        <div class="is-size-7-mobile">
          Nous disposons d'une compétence large en matière d'électricité, de plomberie et chauffage.
        </div>
      </div>
      <div class="column is-one-quarter">
        <div class="circle">
          <mdi-account-supervisor-circle-outline font-size="2em" />
        </div>
        <div class="mt-1 has-text-weight-bold is-size-5 is-size-7-mobile">Expérience</div>
        <div class="divider"></div>
        <div class="is-size-7-mobile">Nous intervenons sur tous types de bâtiments depuis plus de neuf ans.</div>
      </div>
      <div class="column is-one-quarter">
        <div class="circle">
          <mdi-calendar-clock-outline font-size="2em" />
        </div>
        <div class="mt-1 has-text-weight-bold is-size-5 is-size-7-mobile">Respect des délais</div>
        <div class="divider"></div>
        <div class="is-size-7-mobile">NNous vous garantissons un travail soigné, réalisé à temps.</div>
      </div>
      <div class="column is-one-quarter">
        <div class="circle">
          <mdi-timer-outline font-size="2em" />
        </div>
        <div class="mt-1 has-text-weight-bold is-size-5 is-size-7-mobile">Disponibilité</div>
        <div class="divider"></div>
        <div class="is-size-7-mobile">Nous intervenons dans tout le département de la Haute-Loire.</div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.circle {
  display: flex;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: #aa0000;
  transition: all 0.15s ease;
  margin: auto;
  z-index: 0;
}
.circle:hover {
  transform: scale(1.4);
}

.circle svg {
  margin: auto; /* Important */
  text-align: center;
}
.divider {
  height: 2px;
  width: 40%;
  margin: auto;
  transition: all 0.15s ease;
  background: linear-gradient(90deg, hsl(0, 0%, 90%), hsl(0, 0%, 20%), hsl(0, 0%, 90%));
}
.divider:hover {
  width: 70%;
}
</style>
