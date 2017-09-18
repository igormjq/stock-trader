import Vue from 'vue';

export const loadData = ({ commit }) => {

    Vue.http.get('data.json')
        .then(res => res.json())
        .then(data => {
            const { funds, stocks, stockPortfolio } = data;
            
            commit('SET_STOCKS', stocks);
            commit('SET_PORTFOLIO', { stockPortfolio, funds });
        });
}