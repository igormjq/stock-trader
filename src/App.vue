<template>
  <div class="container">
    <app-header></app-header>
    <hr>
    <router-view></router-view>
  </div>
</template>

<script>
import Header from './components/Header.vue'
export default {
  components: {
    appHeader: Header
  },
  created() {
    this.$store.dispatch('initStocks');
  }
}
</script>

<style lang="scss">
  .form-control {
    border-radius: 30px;
    &:focus {
      box-shadow: none;
    }
  }
</style>
