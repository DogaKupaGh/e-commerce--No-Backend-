
const state = {
    cartItems: [],
  };
  
  const mutations = {
    addToCart(state, product) {
      state.cartItems.push(product);
    },
    removeFromCart(state, productId) {
      state.cartItems = state.cartItems.filter(item => item.id !== productId);
    },
    clearCart(state) {
      state.cartItems = [];
    },
  };
  
  const actions = {
    addToCart({ commit }, product) { 
      commit('addToCart', product); 
    },
    removeFromCart({ commit }, productId) {
      commit('removeFromCart', productId);
    },
    clearCart({ commit }) {
      commit('clearCart');
    },
  };
  
  const getters = {
    cartItems: state => state.cartItems,
    cartTotal: state => state.cartItems.reduce((total, item) => total + item.price, 0),
  };
  
  // Export the module
  export default {
    state,
    mutations,
    actions,
    getters,
  };
