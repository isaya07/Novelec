const Menu = [
  {
    name: "Accueil",
    path: "/",
    alias: "/accueil",
    icon: "MyHome",
    component: () => import("../views/MainPage.vue"),
    meta: {
      description: "Novelec entreprise d'électricité générale et tertiaire, dépannage, domotique, rénovation",
      title: "Acceuil",
    },
  },
  {
    name: "Electricité",
    path: "/electricite",
    icon: "HomeLightningBoltOutline",
    component: () => import("../views/ElectricitePage.vue"),
    meta: {
      description: "Novelec entreprise d'électricité générale et tertiaire, dépannage, rénovation",
      title: "Electricité",
    },
  },
  {
    name: "Plomberie",
    path: "/plomberie",
    icon: "HomePlumbing",
    component: () => import("../views/PlomberiePage.vue"),
    meta: {
      description:
        "Spécialisé en domotique l'entreprise Novelec réalise pour vous un habitât simple, fonctionnel et connecté",
      title: "Plomberie",
    },
  },
  {
    name: "Domotique",
    path: "/domotique",
    icon: "HomeAssistant",
    component: () => import("../views/DomotiquePage.vue"),
    meta: {
      description:
        "Spécialisé en domotique l'entreprise Novelec réalise pour vous un habitât simple, fonctionnel et connecté",
      title: "Domotique",
    },
  },
  {
    name: "Pompe à Chaleur",
    path: "/pompeachaleur",
    icon: "HeatPumpOutline",
    component: () => import("../views/PompePage.vue"),
    meta: {
      description:
        "Spécialisé en domotique l'entreprise Novelec réalise pour vous un habitât simple, fonctionnel et connecté",
      title: "Pompe a Chaleur",
    },
  },
  {
    name: "Contact",
    path: "/contact",
    icon: "EmailOutline",
    component: () => import("../views/ContactPage.vue"),
    meta: {
      description: "Nous contacté, nous localisé",
      title: "Contact",
    },
  },
]

export { Menu }
