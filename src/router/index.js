import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import DestinationView from '../views/DestinationView.vue'
import TripView from '../views/TripView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', component: HomeView },
    { path: '/destinations/:slug', component: DestinationView },
    { path: '/trips/:slug', component: TripView },
  ],
  scrollBehavior() {
    return { top: 0 }
  },
})

export default router
