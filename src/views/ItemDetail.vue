<template>
  <div>
    <NavbarHeader />
    <div class="container mt-4">
      <h1 class="card-title">Product Details</h1>
      <div class="card">  
        <div class="card-body">
          <div v-if="loading" class="text-center">Loading...</div>
          <div v-else-if="product">
            <div class="row">
              <div class="col-md-6">
                <h2>{{ product.title }}</h2>
                <p class="card-text">{{ product.description }}</p>
                <p class="card-text mt-2">Price: {{ product.price }}</p>
                <button @click="addToCart(product)" class="btn btn-success">Add to Cart</button>
              </div>
              <div class="col-md-6">
                <img :src="product.image" :alt="product.title" class="img-fluid mb-2" style="max-width: 300px; float:right;" />
              </div>
            </div>
            <NotificationMessage :show="showNotification" :message="notificationMessage" />
          </div>
          <div v-else class="text-center">Product not found.</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NavbarHeader from "@/components/NavbarHeader.vue";
import NotificationMessage from "@/components/NotificationMessage.vue"; 

export default {
  components: {
    NavbarHeader,
    NotificationMessage 
  },
  data() {
    return {
      product: null,
      loading: false,
      showNotification: false, 
      notificationMessage: '' 
    };
  },
  mounted() {
    this.fetchProduct();
  },
  methods: {
    fetchProduct() {
      const productId = this.$route.params.id; 
      if (!productId) {
        console.error("Product ID not provided.");
        return;
      }

      this.loading = true;
      fetch(`https://fakestoreapi.com/products/${productId}`)
        .then(res => res.json())
        .then(product => {
          this.product = product;
          this.loading = false;
        })
        .catch(error => {
          console.error('Error fetching product:', error);
          this.loading = false;
        });
    },
    addToCart(product) {
      this.$store.dispatch('addToCart', product);
      this.notificationMessage = `${product.title} added to cart.`;
      this.showNotification = true;
      setTimeout(() => {
        this.showNotification = false;
      }, 3000); 
    }
  }
};
</script>

<style scoped>
</style>
