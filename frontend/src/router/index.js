import { createRouter, createWebHashHistory } from 'vue-router'

import form from "../views/FormulaireView"
const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/form',
      name: 'form',
      component: form
    },




  ]
})

export default router