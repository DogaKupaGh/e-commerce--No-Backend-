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
      fetch('https://fakestoreapi.com/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          username: this.username,
          password: this.password
        })
      })
      .then(res => res.json())
      .then(data => {
        if (data.token) {
          console.log('Login successful. Token:', data.token);
          this.$store.dispatch('auth/login'); 
          this.$router.push('/home');
        } else {
          console.error('Login failed:', data.error);
          alert('Incorrect username or password');
        }
      })
      .catch(error => {
        console.error('Error logging in:', error);
        alert('Wrong Password and Username, please try again');
      });
    }
  }
};

</script>

<style scoped>
.login-container {
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
