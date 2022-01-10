import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import Home from "./components/Home.vue";
import Vaccine from "./components/Vaccine.vue"
import { library } from '@fortawesome/fontawesome-svg-core'
import { faFileDownload, faCaretSquareLeft } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faFileDownload)
library.add(faCaretSquareLeft)
library.add(faGithub)
library.add(faLinkedinIn)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

Vue.use(VueRouter)

const routes = [
  { path: '/', component: Home },
  { path: '/vaccine', component: Vaccine }
]

const router = new VueRouter({
  routes // short for `routes: routes`
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
