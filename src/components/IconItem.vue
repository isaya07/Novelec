<script>
export default {
  props: {
    icon: {
      type: String,
      default: "",
    },
    style: {
      type: String,
      default: null,
    },
  },
}
</script>

<template>
  <my-home v-if="icon == 'MyHome'" :style="style" />
  <mdi-hammer-wrench v-else-if="icon == 'HammerWrench'" :style="style" />
  <mdi-home-circle-outline v-else-if="icon == 'HomeCircleOutline'" :style="style" />
  <mdi-email-outline v-else-if="icon == 'EmailOutline'" :style="style" />
</template>
