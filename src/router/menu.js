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
    name: "Dépannage",
    path: "/depannage",
    icon: "HammerWrench",
    component: () => import("../views/DepannagePage.vue"),
    meta: {
      description: "Nous nous déplaçons, dans les meilleurs délais, pour tous types de dépannage électrique",
      title: "Dépannage",
    },
  },
  {
    name: "Domotique",
    path: "/domotique",
    icon: "HomeCircleOutline",
    component: () => import("../views/DomotiquePage.vue"),
    meta: {
      description:
        "Spécialisé en domotique l'entreprise Novelec réalise pour vous un habitât plus simple et fonctionnel",
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
