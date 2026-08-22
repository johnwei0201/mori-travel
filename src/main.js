import './styles/reset.css'
import './styles/variables.css'
import { createApp } from 'vue'
import MoriTravelApp from './App.vue'
import router from './router'

const moriTravelApp = createApp(MoriTravelApp)

moriTravelApp.use(router)

moriTravelApp.mount('#mori-travel-app')
