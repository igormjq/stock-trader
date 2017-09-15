<template>
  <div class="col-sm-6 col-md-4">
    <div class="panel panel-info">
      <div class="panel-heading">
        <h3 class="panel-title">{{ stock.name }}</h3>
        <small>Price: {{ stock.price }} | Quantity: {{ stock.quantity }}</small>
      </div>
      <div class="panel-body">
        <div class="pull-left">
          <input type="number" placeholder="quantity" class="form-control" :class="{ invalid: insufficientQuantity }" v-model="quantity" min="0">
        </div>
        <div class="pull-right">
          <button class="btn btn-success" @click="sellStock" :disabled=" insufficientQuantity || quantity <= 0">Sell</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  props: ['stock'],
  data() {
    return {
      quantity: 0
    }
  },
  computed: {
    insufficientQuantity() {
      return this.quantity > this.stock.quantity;
    }
  },
  methods: {
    ...mapActions({
      sendSellOrder: 'sellStock'
    }),
    sellStock() {
      const order = {
        stockId: this.stock.id,
        stockPrice: this.stock.price,
        quantity: this.quantity
      };
  
      this.sendSellOrder(order);
      this.quantity = 0;
    }
  }
}
</script>

<style lang="scss">
  .form-control:focus {
    border: 1px solid green;

    &.invalid {
      border: 1px solid #F00;
    }
  }
</style>
