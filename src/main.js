// import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import FoodItem from './components/FoodItem.vue'


const app = createApp(App)
app.component('foodItem', FoodItem)
app.mount('#app')
