import { defineNuxtConfig } from "nuxt";

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  head: {
    title: 'Novelec - Lilian Monchalin',
    charset: 'utf-8',
    viewport: 'width=device-width, initial-scale=1',
    meta: [
      { name: "description", content: "Novelec entreprise d'électricité, domotique, climatisation, pompe a chaleur" },
      { name: "keywords", content: "électricité, électricien, domotique, climatisation, rénovation, pac, chauffage, 43, haute-loire" },
    ],
    script: [],
  },
  build: {
    transpile: [
      '@fortawesome/vue-fontawesome',
      '@fortawesome/fontawesome-svg-core',
      '@fortawesome/pro-solid-svg-icons'
    ]
  },
  css: ["assets/styles/main.scss"],
  loading: { color: '#0c64c1' },
  ssr: false
});
