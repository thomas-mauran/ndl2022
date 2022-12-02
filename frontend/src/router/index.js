import { createRouter, createWebHashHistory } from 'vue-router'

import form from "../views/FormulaireView"
import about from "../views/AboutView"

import formSubmitted from "../views/FormSubmitted"
const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    
    {
      path: '/',
      name: 'about',
      component: about
    },
    {
      path: '/about',
      name: 'about',
      component: about
    },

    {
      path: '/form',
      name: 'form',
      component: form
    },
    {
      path: '/formSubmitted',
      name: 'formSubmitted',
      component: formSubmitted
    },
    




  ]
})

export default router