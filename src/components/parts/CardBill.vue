<template>
    <div class="card light-blue bill-card">
        <div class="card-content white-text">
            <span class="card-title">Счет в валюте</span>

            <p v-for="cur of currencies"
               :key="cur"
               class="currency-line">
                <span>{{getCurrency(cur) | currency(cur)}}</span>
            </p>
        </div>
    </div>
</template>

<script>
  export default {
    name: "CardBill",
    props: ['rates'],
    data() {
      return {
        currencies: ['RUB', 'USD', 'EUR']
      };
    },
    computed: {
      baseCurrency() {
        return this.$store.getters.info.bill / (this.rates['RUB'] / this.rates['EUR']);
      }
    },
    methods: {
      getCurrency(currency) {
        return (this.baseCurrency * this.rates[currency]).toFixed(3);
      }
    }
  };
</script>

<style scoped>

</style>
