// index.js

import { createStore } from 'vuex';
import cartModule from './cart';
import authModule from './auth'; // Import the auth module

const store = createStore({
  modules: {
    cart: cartModule,
    auth: authModule, // Register the auth module
  },
});

export default store;
