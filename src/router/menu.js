const Menu = [
  {
    name: "Acceuil",
    path: "/",
    alias: "/acceuil",
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
    icon: "LightningBoltCircle",
    component: () => import("../views/ElectricitePage.vue"),
    meta: {
      description: "Novelec entreprise d'électricité générale et tertiaire, dépannage, rénovation",
      title: "Electricité",
    },
  },
  {
    name: "Domotique",
    path: "/domotique",
    icon: "HomeCircleOutline",
    component: () => import("../views/DomotiquePage.vue"),
    meta: {
      description:
        "Spécialisé en domotique l'entreprise Novelec réalise pour vous un habitât simple, fonctionnel et connecté",
      title: "Domotique",
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
