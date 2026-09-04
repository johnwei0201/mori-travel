import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import DestinationView from '../views/DestinationView.vue'
import TripView from '../views/TripView.vue'
import DomesticView from '../views/DomesticView.vue'
import InternationalView from '../views/InternationalView.vue'
import BookingView from '../views/BookingView.vue'
import GuideView from '../views/GuideView.vue'
import PlanTripView from '../views/PlanTripView.vue'
import ConsultView from '../views/ConsultView.vue'
import ServiceView from '../views/ServiceView.vue'
import SearchView from '../views/SearchView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', component: HomeView },
    { path: '/destinations/:slug', component: DestinationView },
    { path: '/trips/:slug', component: TripView },
    { path: '/domestic', component: DomesticView },
    { path: '/international', component: InternationalView },
    { path: '/booking', component: BookingView },
    { path: '/guide', component: GuideView },
    { path: '/plan', component: PlanTripView },
    { path: '/consult', component: ConsultView },
    { path: '/service', component: ServiceView },
    { path: '/search', component: SearchView },
  ],
  scrollBehavior() {
    return { top: 0 }
  },
})

export default router
