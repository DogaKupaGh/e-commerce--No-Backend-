<template>
    <div v-if="show" :class="[typeClass, 'alert', 'mt-3']" role="alert">
      {{ message }}
    </div>
  </template>
  
  <script>
  export default {
    props: {
      show: {
        type: Boolean,
        default: false
      },
      message: String,
      type: {
        type: String,
        default: 'success' 
      }
    },
    computed: {
      typeClass() {
        return 'alert-' + this.type;
      }
    }
  };
  </script>
  