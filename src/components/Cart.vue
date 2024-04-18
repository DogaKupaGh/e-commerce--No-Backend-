<template>
    <div class="cart">
      <div v-for="item in cartItems" :key="item.id">
        <p>{{ item.title }}</p>
        <p>{{ item.price }}</p>
      </div>
    </div>
  </template>
  
  <script>
  import { mapState } from 'vuex';
  
  export default {
    computed: {
      ...mapState('cart', ['cartItems']),
    },
  };
  </script>
  