const state = {
    funds: 1000,
    stocks: []
};

const mutations = {
    'BUY_STOCK' (state, { stockId, stockPrice, quantity }) {
        const current = state.stocks.find(element => element.id === stockId);

        if(current) {
            current.quantity += quantity;
        } else {
            state.stocks.push({
                id: stockId,
                quantity
            })
        }
        state.funds -= stockPrice * quantity;
    },
    'SELL_STOCK' (state, { stockId, stockPrice, quantity } ) {
        const current = state.stocks.find(stock => stock.id === stockId);

        if(current.quantity > quantity) {
            current.quantity -= quantity;
        } else {
            state.stocks.splice(state.stocks.indexOf(current), 1);
        }
        state.funds += stockPrice * quantity;
    }
};

const actions = {
    sellStock({ commit }, order) {
        commit('SELL_STOCK', order);
    }
};

const getters = {
    stockPortfolio(state, getters) {
        return state.stocks.map(stock => {
            const record = getters.stocks.find(element => element.id === stock.id);
            
            return {
                id: stock.id,
                quantity: stock.quantity,
                name: record.name,
                price: record.price
            }
        });
    },
    funds(state) {
        return state.funds
    }
};

export default {
    state,
    getters,
    mutations,
    actions
}