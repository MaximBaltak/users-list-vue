import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import store from './store'
import {VList} from "vuetify/lib";

Vue.config.productionTip = false
Vue.component('v-list',VList)

new Vue({
  vuetify,
  store,
  render: h => h(App)
}).$mount('#app')
