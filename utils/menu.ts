const Menu =
  [
    {
      name: 'Acceuil',
      path: '/',
      alias: '/acceuil',
      icon: ['fas', 'home'],
      // component: () => import('@/components/pages/Acceuil'),
      meta: {
        description: 'Novelec entreprise d\'électricité générale et tertiaire, dépannage, domotique, rénovation',
        title: 'Acceuil'
      }
    },
    {
      name: 'Dépannage',
      path: '/depannage',
      icon: ['fas', 'wrench'],
      // component: () => import('@/components/pages/Depannage'),
      meta: {
        description: 'Nous nous déplaçons, dans les meilleurs délais, pour tous types de dépannage électrique',
        title: 'Dépannage'
      }
    },
    {
      name: 'Domotique',
      path: '/domotique',
      icon: ['fas', 'home'],
      // component: () => import('@/components/pages/Domotique'),
      meta: {
        description: 'Spécialisé en domotique l\'entreprise Novelec réalise pour vous un habitât plus simple et fonctionnel',
        title: 'Domotique'
      }
    },
    {
      name: 'Contact',
      path: '/contact',
      icon: ['fas', 'envelope'],
      // component: () => import('@/components/pages/Contact'),
      meta: {
        description: 'Nous contacté, nous localisé',
        title: 'Contact'
      }
    }
  ]

export { Menu }
