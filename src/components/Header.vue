<template>
  <nav class="navbar navbar-inverse">
    <div class="container-fluid">
      <div class="navbar-header">
        <router-link to="/" tag="a" class="navbar-brand">Stock Trader</router-link>
      </div>
      <ul class="nav navbar-nav">
        <router-link to="/portfolio" activeClass="active" tag="li"><a>Portfolio</a></router-link>
        <router-link to="/stocks" activeClass="active" tag="li"><a>Stocks</a></router-link>
      </ul>
      <ul class="nav navbar-nav navbar-right">
        <li><a @click="randomizeStocks">End day</a></li>
         <li class="dropdown" :class="{ open: isDropdownOpen }" @click="isDropdownOpen = !isDropdownOpen">
          <a class="dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" role="button">Save & Load
          <span class="caret"></span></a>
          <ul class="dropdown-menu">
            <li><a @click="saveData">Save</a></li>
            <li><a @click="loadData">Load</a></li>
          </ul>
        </li>
        <li><a style="color: #FFF">Funds: {{ funds | toCurrency }}</a></li>
      </ul>
    </div>
  </nav>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  data() {
    return {
      isDropdownOpen: false
    }
  },
  computed: {
    ...mapGetters(['funds', 'stocks'])
  },
  methods: {
    ...mapActions(['randomizeStocks', 'loadData']),
    saveData() {
      const data = {
        funds: this.funds,
        stockPortfolio: this.$store.getters.stockPortfolio,
        stocks: this.stocks
      };

      this.$http.put('data.json', data);

    }
  }

}
</script>

<style lang="scss">
  .nav {
    li > a {
      cursor: pointer;
    }
  }
</style>
