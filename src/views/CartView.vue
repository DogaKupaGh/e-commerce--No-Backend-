<template>
  <div>
    <NavbarHeader />
    <div class="container mt-5">
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
            <button @click="clearCart" class="clear-cart">Clear Cart</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import NavbarHeader from '@/components/NavbarHeader.vue';

export default {
  components: {
    NavbarHeader
  },
  computed: {
    ...mapState({
      cartItems: state => state.cart.cartItems
    })
  },
  methods: {
    ...mapActions(['removeFromCart', 'clearCart'])
  }
};
</script>

<style scoped>
.container {
  max-width: 800px;
  margin: 0 auto;
}

.cart {
  margin-top: 50px;
}

.cart h1 {
  font-size: 24px;
  margin-bottom: 20px;
}

.cart-item {
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  border: 1px solid #ddd;
  padding: 10px;
}

.cart-item img {
  width: 100px;
  height: auto;
  margin-right: 20px;
}

.cart-item-details h3 {
  font-size: 18px;
  margin: 0;
}

.cart-item-details p {
  font-size: 16px;
  margin: 5px 0;
}

.cart-item button {
  background-color: #dc3545;
  color: #fff;
  border: none;
  padding: 5px 10px;
  cursor: pointer;
}

.cart-item button:hover {
  background-color: #c82333;
}

.clear-cart {
  background-color: #007bff;
  color: #fff;
  border: none;
  padding: 10px 20px;
  margin-top: 20px;
}

.clear-cart:hover {
  background-color: #0056b3;
}
</style>
