import Vue from 'vue';
import Vuex from 'vuex';

// Modules
import stocks from './stocks/stocks'
import portfolio from './portfolio/portfolio'

// Actions
import * as actions from './actions'

Vue.use(Vuex);

export const store = new Vuex.Store({
    actions,
    modules: {
        stocks,
        portfolio
    }

});