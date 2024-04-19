<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container">
      <router-link to="/home" class="navbar-brand">My Store</router-link>
      <router-link to="/cart" class="nav-link">
        <i class="fas fa-shopping-cart"></i>
      </router-link>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ms-auto">
          <li class="nav-item" v-if="loggedIn">
            <router-link to="/profile" class="nav-link">Profile</router-link>
          </li>
          <li class="nav-item" v-if="!loggedIn">
            <router-link to="/" class="nav-link">Login</router-link>
          </li>
          <li class="nav-item" v-if="loggedIn">
            <button @click="logout" class="nav-link btn btn-link">Logout</button>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
<script>
export default {
  computed: {
    loggedIn() {
      return this.$store.getters['auth/loggedIn']; 
    }
  },
  methods: {
    logout() {
      this.$store.dispatch('auth/logout');
    }
  }
};
</script>

<style scoped>
.navbar-brand,
.nav-link {
  color: white;
}

.navbar-toggler-icon {
  background-color: white;
}

.navbar-toggler {
  border-color: white;
}
</style>
