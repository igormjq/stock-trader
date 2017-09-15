import Vue from 'vue'

export const currency = Vue.filter('toCurrency', value => {
    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 0
    }).format(value);
});
