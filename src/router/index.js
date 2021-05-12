import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: "/visualize/:country/:status",
    name: "Visualize",
    component: () =>
      import(/* webpackChunkName: "visualize" */ "../views/Charts.vue"),
    props: true
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
