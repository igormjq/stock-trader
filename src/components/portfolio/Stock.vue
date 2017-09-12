<template>
  <div class="col-sm-6 col-md-4">
    <div class="panel panel-success">
      <div class="panel-heading">
        <h3 class="panel-title">{{ stock.name }}</h3>
        <small>Price: {{ stock.price }} | Quantity: {{ stock.quantity }}</small>
      </div>
      <div class="panel-body">
        <div class="pull-left">
          <input type="number" placeholder="quantity" class="form-control" v-model="quantity">
        </div>
        <div class="pull-right">
          <button class="btn btn-success" @click="sellStock" :disabled="quantity <= 0">Sell</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['stock'],
  data() {
    return {
      quantity: 0
    }
  },
  methods: {
    sellStock() {
      const order = {
        stockId: this.stock.id,
        stockPrice: this.stock.price,
        quantity: this.quantity
      };
      this.$store.dispatch('buyStock', order);
      this.quantity = 0;
    }
  }
}
</script>

<style lang="scss">

</style>
