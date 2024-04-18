
import { createStore } from 'vuex';
import cartModule from './cart';

const store = createStore({
  modules: {
    cart: cartModule,
  },
});

export default store;
