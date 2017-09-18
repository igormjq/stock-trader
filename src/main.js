import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import Vuex from 'vuex'

// Filters
import * as filters from './filters';

// Routes
import { routes } from './routes'

//Store
import { store } from './store/store'

Vue.config.productionTip = false;

Vue.use(VueRouter);
Vue.use(VueResource);
Vue.use(Vuex);

Vue.http.root = 'https://vuejs-stock-trader-346f5.firebaseio.com/';


const router = new VueRouter({
  mode: 'history',
  routes
})

new Vue({
  el: '#app',
  filters,
  router,
  store,
  render: h => h(App)
})
