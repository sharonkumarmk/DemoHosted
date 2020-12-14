import Vue from 'vue'
import Vuex from 'vuex'
import App from './App.vue'

Vue.config.productionTip = false
Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    closeModal: false,
    products: {}
  }
})

new Vue({
  store,
  render: h => h(App),
}).$mount('#app')
