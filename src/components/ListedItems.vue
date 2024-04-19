<template>
  <div class="col-md-6 mb-4">
    <div class="card">
      <div class="card-body">
        <img :src="item.image" class="card-img-top" alt="Product Image">
        <h5 class="card-title">{{ item.title }}</h5>
        <p class="card-text">{{ item.price }} TL</p> 
        <div class="d-flex justify-content-between align-items-center">
          <router-link :to="'/item/' + item.id" class="btn btn-primary">View Details</router-link>
          <button @click="addToCart(item)" class="btn btn-success"><i class="fas fa-shopping-cart"></i></button>
        </div>
        <NotificationMessage :show="showNotification" message="Item added to cart successfully!" />
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import NotificationMessage from '@/components/NotificationMessage.vue'; 

export default {
  props: {
    item: Object
  },
  data() {
    return {
      showNotification: false
    };
  },
  components: {
    NotificationMessage 
  },
  methods: {
    ...mapActions( ['addToCart']),
    addToCart(item) {
      this.$store.dispatch('addToCart', item);
      this.showNotification = true;
      setTimeout(() => {
        this.showNotification = false;
      }, 3000); 
    }
  }
};
</script>

<style scoped>
.card-body {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.card-img-top {
  object-fit: contain; 
  height: 400px; 
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}
</style>
