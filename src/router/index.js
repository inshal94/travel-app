import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/brazil',
    name: 'brazil',
    component: () => import('../views/BrazilView.vue')
  },
  {
    path: '/panama',
    name: 'panama',
    component: () => import('../views/PanamaView.vue')
  },
  {
    path: '/hawaii',
    name: 'hawaii',
    component: () => import('../views/HawaiiView.vue')
  },
  {
    path: '/jamaica',
    name: 'jamaica',
    component: () => import('../views/JamaicaView.vue')
  },
  {
    path: '/destination/:id',
    name: 'destination.show',
    component: () => import('../views/DestinationShow.vue')
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routes,
  linkActiveClass: 'vue-active-link'
})

export default router
