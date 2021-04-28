import Vue from 'vue'
import VueTailwind from 'vue-tailwind'
import App from './App.vue'
import './style.css'
import { tailwindSettings } from './tailwindSettings'
import vClickOutside from 'v-click-outside'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
 
import './faIcons';

Vue.config.productionTip = false

Vue.use(VueTailwind, tailwindSettings)
Vue.use(vClickOutside)
Vue.component('fa-icon', FontAwesomeIcon)

new Vue({
  render: h => h(App),
}).$mount('#app')
