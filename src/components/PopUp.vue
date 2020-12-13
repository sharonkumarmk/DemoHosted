<template>
    <div class="popup">
      <div class="popup_content">
        <button @click="closeModal" class="close">&times;</button>
        <p>Price: {{price}}</p>
        <p>Transaction Successfull &#10004;</p>
      </div>
    </div>
</template>

<script>
export default {
  name: 'PopUp',

  props: ['price'],
  methods: {
      //#.Closes modal pop up
      closeModal() {
          this.$store.state.closeModal = false;
      }
   }
}


</script>
