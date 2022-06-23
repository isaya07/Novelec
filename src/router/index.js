import { createRouter, createWebHistory } from "vue-router"

import { Menu } from "./menu"

function generateRoute(menu = [], routes = []) {
  for (let i = 0, l = menu.length; i < l; i++) {
    let item = menu[i]
    if (item.path) {
      routes.push(item)
    }
    if (!item.component) {
      generateRoute(item.children, routes)
    }
  }
  return routes
}

const generatedRoute = generateRoute(Menu)

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: generatedRoute,
})

function setAttributes(elem, type, val) {
  const element = document.head.querySelector(elem)
  if (val === undefined || val === null) {
    element.removeAttribute(type)
  } else {
    element.setAttribute(type, val)
  }
}

function setMetaContent(attr, val) {
  setAttributes(`meta[${attr}]`, "content", val)
}

router.beforeEach((to, from, next) => {
  document.title = to.meta.title
  setMetaContent('itemprop="name"', to.meta.title)
  setMetaContent('property="og:title"', to.meta.title)
  setMetaContent('name="description"', to.meta.description)
  setMetaContent('itemprop="description"', to.meta.description)
  setMetaContent('property="og:description"', to.meta.description)
  setAttributes(`link[rel="canonical"]`, "href", "http://www.novelec43.fr" + to.fullPath)
  setMetaContent('property="og:url"', "http://www.novelec43.fr" + to.fullPath)
  next()
})

export default router