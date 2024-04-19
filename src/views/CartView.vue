<template>
  <div>
    <NavbarHeader />
    <div class="container mt-5">
      <div class="card">
        <h1 class="card-header">Your Cart</h1>
        <div class="card-body">
          <div v-if="cartItems.length === 0">
            <p class="card-text">Your cart is empty.</p>
          </div>
          <div v-else>
            <div class="row row-cols-1 row-cols-md-2 g-3">
              <div v-for="item in cartItems" :key="item.id" class="col">
                <div class="card">
                  <div class="row g-0">
                    <div class="col-md-4">
                      <img :src="item.image" :alt="item.title" class="img-fluid rounded-start" />
                    </div>
                    <div class="col-md-8">
                      <div class="card-body">
                        <h5 class="card-title">{{ item.title }}</h5>
                        <p class="card-text">Price: {{ item.price }} TL</p>
                        <button @click="removeFromCart(item.id)" class="btn btn-danger btn-sm">Remove</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="d-flex justify-content-between align-items-center mt-3">
              <div>
                <button @click="clearCart" class="btn btn-secondary">Clear Cart</button>
              </div>
              <div>
                <p class="fw-bold mb-0">Total: {{ totalPrice }} TL</p>
                <button @click="pay" class="btn btn-primary mt-2">Pay Now</button>
              </div>
            </div>
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
    }),
    totalPrice() {
      return this.cartItems.reduce((total, item) => total + item.price, 0);
    }
  },
  methods: {
    ...mapActions(['removeFromCart', 'clearCart']),
    pay() {
      alert('Payment successful!');
      this.clearCart();
    }
  },
};
</script>

<style scoped>
</style>
