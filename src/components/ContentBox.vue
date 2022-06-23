<script setup>
defineProps({
  title: {
    type: String,
    default: null,
  },
  subtitle: {
    type: String,
    default: null,
  },
})
</script>

<template>
  <div class="box is-flex is-justify-content-center">
    <div class="columns is-mobile is-centered is-vcentered">
      <div clas="column is-narrow">
        <span class="icon is-large has-text-danger m-4">
          <my-home style="font-size: 3em" />
        </span>
      </div>
      <div clas="column">
        <h2 class="title is-size-5-mobile">{{ title }}</h2>
        <h4 class="subtitle is-size-6-mobile">
          {{ subtitle }}
        </h4>
      </div>
    </div>
  </div>
</template>
