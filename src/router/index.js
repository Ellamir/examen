import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/productos',
    name: 'Productos',
    component: () => import('../views/Productos.vue'),
    meta: {
      login: true
    },
  },
  {
    path: '/inventario',
    name: 'Inventario',
    component: () => import('../views/Inventario.vue'),
    meta: {
      login: true
    },
  },
  {
    path: '/despachos',
    name: 'Despachos',
    component: () => import('../views/Despachos.vue'),
    meta: {
      login: true
    },
  },
  {
    path: '/ordenes',
    name: 'Ordenes',
    component: () => import('../views/Ordenes.vue'),
    meta: {
      login: true
    },
  },
  {
    path: '/',
    name: 'Dashboard',
    component: () => import('../components/Dashboard.vue'),
    meta: {
      login: true
    },
  },
  {
    path: '/*',
    name: 'Error',
    component: () => import('../views/Error.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
