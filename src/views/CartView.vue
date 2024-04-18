<template>
    <div class="cart">
      <h1>Your Cart</h1>
      <div v-if="cartItems.length === 0">
        <p>Your cart is empty.</p>
      </div>
      <div v-else>
        <div v-for="item in cartItems" :key="item.id" class="cart-item">
          <img :src="item.image" :alt="item.title" class="cart-item-image" />
          <div class="cart-item-details">
            <h3>{{ item.title }}</h3>
            <p>Price: {{ item.price }} TL</p>
            <button @click="removeFromCart(item.id)">Remove</button>
          </div>
        </div>
        <div>
          <button @click="clearCart">Clear Cart</button>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import { mapState, mapActions } from 'vuex';
  
  export default {
    computed: {
      ...mapState('cart', ['cartItems']),
    },
    methods: {
      ...mapActions('cart', ['removeFromCart', 'clearCart']),
    },
  };
  </script>
  
  <style scoped>
  /* Add your cart styles here */
  </style>
  