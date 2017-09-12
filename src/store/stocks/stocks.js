import stocks from '../../data/stocks'

const state = {
    stocks: []
};

const getters = {
    stocks: state => {
        return state.stocks;
    }
};

const mutations = {
    'SET_STOCKS' (state, stocks) {
        state.stocks = stocks;
    },
    'RDN_STOCKS' () {

    }
};

const actions = {
    buyStock: ({ commit }, order) => {
        console.log('order', order);
        commit('BUY_STOCK', order);
    },
    initStocks: ({ commit }) => {
        commit('SET_STOCKS', stocks);
    }
};

export default {
    state,
    getters,
    mutations,
    actions
}