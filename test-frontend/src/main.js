import './assets/main.css'
import "bootstrap/dist/css/bootstrap.css"
import 'vuetify/styles'
import { createApp } from 'vue'
// import './style.css'
import App from './App.vue'

import { createRouter, createWebHistory } from 'vue-router'
// import routes from './routes'

// const router = createRouter({
//   history: createWebHistory(),
//   routes,
//   scrollBehavior (to, from, savedPosition) {
//     return { top: 0 }
//   }
// })

import { store } from './store/index'

import { createVuetify } from 'vuetify'; 
const vuetify = createVuetify();

createApp(App).use(store).use(vuetify).mount('#app')
import "bootstrap/dist/js/bootstrap.js"

// .use(router)

