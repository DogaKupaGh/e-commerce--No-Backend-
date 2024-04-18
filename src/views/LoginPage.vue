<template>
  <div class="login-container">
    <div class="login-box col-md-4">
      <h2 class="text-center">Login</h2>
      <form @submit.prevent="login" class="login-form">
        <div class="mb-3">
          <label for="username" class="form-label">Username:</label>
          <input type="text" id="username" v-model="username" required class="form-control">
        </div>
        <div class="mb-3">
          <label for="password" class="form-label">Password:</label>
          <input type="password" id="password" v-model="password" required class="form-control">
        </div>
        <div class="mb-3 form-check">
          <input type="checkbox" id="remember-me" v-model="rememberMe" class="form-check-input">
          <label for="remember-me" class="form-check-label">Remember Me</label>
        </div>
        <button type="submit" class="btn btn-primary btn-lg d-block mx-auto w-75">Login</button>
      </form>
      <p class="text-center mt-3">Don't have an account? <router-link to="/Registration">Register</router-link></p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: '',
      password: '',
      rememberMe: false
    };
  },
  methods: {
    login() {
      // Backend olduğu durumda burada verilere giriş yapılacaktı. 
      if (this.username === 'admin' && this.password === 'sifre') {
        this.$router.push('/home');
        console.log('Logging in with:', this.username, this.password, 'Remember Me:', this.rememberMe);
      } else {
        alert('Incorrect username or password');
      }
    }
  }
};
</script>

<style scoped>
.login-container {
  background-color: #4CAF50; 
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.login-box {
  background-color: #fff; 
  padding: 40px;
  border-radius: 8px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
}
</style>
