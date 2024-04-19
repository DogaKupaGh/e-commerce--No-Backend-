<template>
  <div class="cart">
    <div v-for="item in cartItems" :key="item.id" class="cart-item">
      <div class="cart-item-details">
        <h3>{{ item.title }}</h3>
        <p>Price: {{ item.price }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  computed: {
    ...mapState(['cartItems']),
  },
};
</script>

<style scoped>
.cart-item {
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-bottom: 10px;
  padding: 10px;
  display: flex;
  align-items: center;
}

.cart-item-details {
  flex: 1;
}

.cart-item h3 {
  margin-top: 0;
}

.cart-item p {
  margin-bottom: 0;
}
</style>
