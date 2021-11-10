/**
 * Generated by "@vuepress/internal-routes"
 */

import { injectComponentOption, ensureAsyncComponentsLoaded } from '@app/util'
import rootMixins from '@internal/root-mixins'
import GlobalLayout from "D:\\code\\shaelynblog.github.io\\node_modules\\@vuepress\\core\\lib\\client\\components\\GlobalLayout.vue"

injectComponentOption(GlobalLayout, 'mixins', rootMixins)
export const routes = [
  {
    name: "v-3a110e4b",
    path: "/",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-3a110e4b").then(next)
    },
  },
  {
    path: "/index.html",
    redirect: "/"
  },
  {
    name: "v-371a8c24",
    path: "/bug/",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-371a8c24").then(next)
    },
  },
  {
    path: "/bug/index.html",
    redirect: "/bug/"
  },
  {
    name: "v-a685ad72",
    path: "/basics/websecure.html",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-a685ad72").then(next)
    },
  },
  {
    name: "v-7bb0d2a9",
    path: "/bug/tool.html",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-7bb0d2a9").then(next)
    },
  },
  {
    name: "v-1a9390ab",
    path: "/basics/frond.html",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-1a9390ab").then(next)
    },
  },
  {
    name: "v-2af7199d",
    path: "/essays/book.html",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-2af7199d").then(next)
    },
  },
  {
    name: "v-5bd677dd",
    path: "/essays/sentence.html",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-5bd677dd").then(next)
    },
  },
  {
    name: "v-5fa4209d",
    path: "/essays/toolbook.html",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-5fa4209d").then(next)
    },
  },
  {
    name: "v-357874e3",
    path: "/fun/htmlcss.html",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-357874e3").then(next)
    },
  },
  {
    name: "v-db133624",
    path: "/talk/",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-db133624").then(next)
    },
  },
  {
    path: "/talk/index.html",
    redirect: "/talk/"
  },
  {
    name: "v-42dcb8fb",
    path: "/talk/outsourcers.html",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-42dcb8fb").then(next)
    },
  },
  {
    path: '*',
    component: GlobalLayout
  }
]