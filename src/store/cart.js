const state = {
  cartItems: JSON.parse(localStorage.getItem('cartItems')) || []
};

const mutations = {
  addToCart(state, product) {
    state.cartItems.push(product);
    localStorage.setItem('cartItems', JSON.stringify(state.cartItems));
  },
  removeFromCart(state, productId) {
    state.cartItems = state.cartItems.filter(item => item.id !== productId);
    localStorage.setItem('cartItems', JSON.stringify(state.cartItems));
  },
  clearCart(state) {
    state.cartItems = [];
    localStorage.removeItem('cartItems');
  }
};

const actions = {
  addToCart({ commit }, product) {
    console.log('Dispatching addToCart action with product:', product);
    commit('addToCart', product);
  },
  removeFromCart({ commit }, productId) {
    commit('removeFromCart', productId);
  },
  clearCart({ commit }) {
    commit('clearCart');
  }
};

const getters = {
  cartItems: state => state.cartItems,
  cartTotal: state => state.cartItems.reduce((total, item) => total + item.price, 0)
};

export default {
  state,
  mutations,
  actions,
  getters
};
