import Vue from 'vue'
import App from './App.vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

Vue.config.productionTip = false

// Optionally install the BootstrapVue icon components plugin

new Vue({
  render: h => h(App),
}).$mount('#app')

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)