import Vue from 'vue'
import Vuex from 'vuex'
import App from './App.vue'

Vue.config.productionTip = false
Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
      closeModal: false,
      products: [
        {
          id: 1,
          brandName: 'Milk Food',
          productName: 'Milk food Rich Desi Danedar Ghee',
          quantity: 0,
          mrpPrice: 100,
          offerPrice:50,
          url:'',
          offer:'18% OFF'
        },
        {
          id: 2,
          brandName: 'Product 1',
          productName: 'This is an incredibly awesome product',
          quantity: 0,
          mrpPrice: 100,
          offerPrice:50,
          url:'',
          offer:''
        },
        {
          id: 3,
          brandName: 'Product 1',
          productName: 'This is an incredibly awesome product',
          quantity: 0,
          mrpPrice: 100,
          offerPrice:50,
          url:'',
          offer:''
        }
      ]
  }
})

new Vue({
  store,
  render: h => h(App),
}).$mount('#app')
