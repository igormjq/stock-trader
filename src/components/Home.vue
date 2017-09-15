<template>
  <div>
    <h1>Trade or view your portfolio</h1>
    <h6>Click on 'End day' to end the day</h6>
    <hr>
    <p>Your funds: {{ funds | toCurrency }}</p>
  </div>
</template>

<script>
export default {
  computed: {
    funds() {
      return this.$store.getters.funds;
    }
  }
}
</script>

<style lang="scss">

</style>
