import Vue from 'vue';
import Vuex from 'vuex';

// Modules
import stocks from './stocks/stocks'
import portfolio from './portfolio/portfolio'

Vue.use(Vuex);

export const store = new Vuex.Store({
    modules: {
        stocks,
        portfolio
    }

});