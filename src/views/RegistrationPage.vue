<template>
  <div class="registration-container">
    <div class="registration-box col-md-4">
      <h2 class="text-center">Register</h2>
      <form @submit.prevent="register" class="registration-form">
        <div class="mb-3">
          <label for="fullname" class="form-label">Full Name:</label>
          <input type="text" id="fullname" v-model="fullname" required class="form-control">
        </div>
        <div class="mb-3">
          <label for="username" class="form-label">Username:</label>
          <input type="text" id="username" v-model="username" required class="form-control">
        </div>
        <div class="mb-3">
          <label for="password" class="form-label">Password:</label>
          <input type="password" id="password" v-model="password" required class="form-control">
          <small v-if="!isPasswordValid" class="text-danger">{{ passwordWarning }}</small>
        </div>
        <div class="mb-3">
          <label for="email" class="form-label">Email:</label>
          <input type="email" id="email" v-model="email" required class="form-control">
          <small v-if="!isEmailValid" class="text-danger">Please enter a valid email address.</small>
        </div>
        <div class="mb-3">
          <label for="phone" class="form-label">Phone:</label>
          <input type="tel" id="phone" v-model="phone" required class="form-control" @input="formatPhone">
          <small v-if="!isPhoneValid" class="text-danger">Please enter a valid phone number.</small>
        </div>

        <button type="submit" class="btn btn-primary btn-lg d-block mx-auto w-75">Register</button>
      </form>
      <p class="text-center mt-3">Already have an account? <router-link to="/">Login</router-link></p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      fullname: '',
      email: '',
      phone: '',
      username: '',
      password: '',
      isEmailValid: true,
      isPhoneValid: true,
      isPasswordValid: true
    };
  },
  methods: {
    register() {
      if (!this.isEmailValid || !this.isPhoneValid || !this.isPasswordValid) {
        return;
      }
      console.log('Registering with:', this.fullname, this.email, this.phone, this.username, this.password);
    },
    validateEmail() {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      this.isEmailValid = emailRegex.test(this.email);
    },
    validatePassword() {
      const passwordRegex = /^(?=.*[a-zA-Z])(?=.*\d).{6,16}$/;
      this.isPasswordValid = passwordRegex.test(this.password);
    },
    validatePhone() {
      const phoneRegex = /^\d{10}$/;
      this.isPhoneValid = phoneRegex.test(this.phone);
    },
    formatPhone() {
      let formattedPhone = this.phone.replace(/\D/g, '');
      formattedPhone = formattedPhone.slice(0, 10);
      if (formattedPhone.length === 10) {
        formattedPhone = `(${formattedPhone.slice(0, 3)}) ${formattedPhone.slice(3, 6)}-${formattedPhone.slice(6, 10)}`;
        this.isPhoneValid = true;
      } else {
        this.isPhoneValid = false;
      }
      this.phone = formattedPhone;
    }
  },
  computed: {
    passwordWarning() {
      if (!this.password) {
        return "Password is required.";
      } else if (this.password.length < 6 || this.password.length > 16) {
        return "Password must be between 6 and 16 characters.";
      } else if (!/\d/.test(this.password)) {
        return "Password must contain at least one number.";
      } else if (!/[a-zA-Z]/.test(this.password)) {
        return "Password must contain at least one letter.";
      } else {
        return "";
      }
    }
  },
  watch: {
    email() {
      this.validateEmail();
    },
    phone() {
      this.formatPhone();
    },
    password() {
      this.validatePassword();
    }
  }
};
</script>

<style scoped>
.registration-container {
  background-color: #4CAF50; /* Green background */
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.registration-box {
  background-color: #fff; /* White box */
  padding: 40px;
  border-radius: 8px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
}
</style>
