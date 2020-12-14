<template>
    <div class="footer">
      <div class="cart_details">
        <p>Qty: {{qty}}</p>
        <p>Price: {{price}}</p>
      </div>
      <button @click="openModal" class="checkout_button"> Check Out</button>
    </div>
</template>

<script>
export default {
  name: 'Footer',
  props: ['qty', 'price'],
  methods: {
     //#.Opens modal pop up
      openModal() {
          this.$store.state.closeModal = true;
      }
   }
}
</script>
