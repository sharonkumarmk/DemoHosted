<template>
  <div class="products">
    <div v-for="product in products" :key="product.id" class="product">
      <!--Product Image -->
      <div class="product_image">
        <img
          :src="product.url"
          :alt="product.name">
        <p class="product_offer_details">{{product.offer}}</p>
      </div>
      <!--Product Details -->
      <div class="product_details">
        <h3 class="product_header">{{ product.brandName }}</h3>
        <p class="product_description">{{ product.productName }}</p>
        <p class="product_mrp_price">MRP: &#8377;
          <span style="text-decoration: line-through;"> {{ product.mrpPrice }} </span>
        </p>
        <p class="product_offer_price">  &#8377; {{product.offerPrice}}</p>
        <div class="cart">
          <button class="add_cart_button" @click="UpdateCart(product, 'add')"> Add Cart </button>
          <button class="remove_button" @click="UpdateCart(product, 'remove')"> - </button>
          <span class="product_quantity">{{ product.quantity }}</span>
          <button class="add_button" @click="UpdateCart(product, 'add')"> + </button>
        </div>
      </div>  
    </div>
    
    <!--Product Footer -->
    <Footer :qty="totalQty" :price="totalPrice"></Footer>

    <!--Modal PopUp -->
    <PopUp v-if="closeModal" :price="totalPrice"></PopUp>

  </div>  
</template>

<script>
import Footer from './Footer.vue'
import PopUp from './PopUp.vue'
import Vue from 'vue'
import axios from 'axios'

Vue.use(axios)

export default {
  name: 'Cart',
  components: {
    Footer,
    PopUp
  },
  props: {
    
  },

  data() {

    axios.get('https://sharonkumarmk.github.io/apidemo/product.json')
      .then(response => 
        this.$store.state.products = response.data.products);

    return this.$store.state;
  },

  computed: {
    totalQty() {
      return this.products.reduce((total, product) => total + product.quantity, 0 );
    },
    totalPrice() {
      return this.products.reduce((total, product) => total + (product.quantity * product.offerPrice), 0 );
    }
  },

   methods: {
     //#.Updates the cart details
      UpdateCart(product, action) {      
        for (let i = 0; i < this.products.length; i++) {
          if (this.products[i].id === product.id) {
            if (action === 'remove') {
              if (this.products[i].quantity !== 0) {
                this.products[i].quantity--;
              }
            } else {
              this.products[i].quantity++;
            }
            break;
          }
        }
      }
   }
}
</script>
