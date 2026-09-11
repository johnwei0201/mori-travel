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
import AttractionView from '../views/AttractionView.vue'
import LoginView from '../views/LoginView.vue'

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
    { path: '/attractions/:slug', component: AttractionView },
    // 彈窗是主要入口,這頁是可分享、可加書籤的完整版
    { path: '/login', component: LoginView },
  ],
  scrollBehavior() {
    return { top: 0 }
  },
})

export default router
