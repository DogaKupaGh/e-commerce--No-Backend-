
<template>
  <div id="app">
    <div class="content-wrapper">
      <router-view></router-view>
    </div>
    <AppFooter />
  </div>
</template>

<script>
import AppFooter from "@/components/AppFooter.vue";
export default {
  components: {
    AppFooter
  },
  name: 'App'
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: #4CAF50; 

}

.content-wrapper {
  flex: 1; /* Allow content to expand to fill remaining space */
}
</style>
