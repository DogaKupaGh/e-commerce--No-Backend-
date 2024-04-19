<template>
  <div>
    <NavbarHeader />
    <div class="container mt-5">
      <h1 class="text-center mb-5">Welcome to Our Store</h1>
      <div class="row">
        <div class="col-md-3">
          <h3>Filter by Category</h3>
          <ul class="list-group">
            <li
              class="list-group-item"
              v-for="category in categories"
              :key="category.id"
              :class="{ 'active-category': category.name === selectedCategory }"
              @click="selectCategory(category.name)"
            >
              {{ category.name }}
            </li>
          </ul>
        </div>
        <div class="col-md-9">
          <div class="row justify-content-center">
            <ItemBox
              v-for="item in filteredItems"
              :key="item.id"
              :item="item"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import ItemBox from "@/components/ListedItems.vue";
import NavbarHeader from "@/components/NavbarHeader.vue";

export default {
  components: {
    ItemBox,
    NavbarHeader
  },
  computed: {
    ...mapState('cart', ['cartItems'])
  },
  data() {
    return {
      items: [],
      categories: [],
      filteredItems: [],
      selectedCategory: "All" // Default selected category
    };
  },
  async mounted() {
    await this.fetchItems();
    await this.fetchCategories();
    this.filteredItems = this.items;
  },
  methods: {
    async fetchItems() {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        const data = await response.json();
        this.items = data;
      } catch (error) {
        console.error("Error fetching items:", error);
      }
    },
    async fetchCategories() {
      try {
        const response = await fetch(
          "https://fakestoreapi.com/products/categories"
        );
        const data = await response.json();
        this.categories = data.map((name, id) => ({ id, name }));
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    },
    selectCategory(categoryName) {
      this.selectedCategory = categoryName;
      if (categoryName === "All") {
        this.filteredItems = this.items;
      } else {
        this.filteredItems = this.items.filter(
          (item) => item.category === categoryName
        );
      }
    }
  }
};
</script>

<style scoped>
.active-category {
  background-color: lightgreen;
}
</style>

