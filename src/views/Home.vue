<template>
    <div>
        <div class="page-title">
            <h3>Счет</h3>

            <button class="btn waves-effect waves-light btn-small" @click="refresh">
                <i class="material-icons">refresh</i>
            </button>
        </div>

        <Loader v-if="loading"/>

        <div
                v-else
                class="row">
            <div class="col s12 m6 l4">
                <card-bill :rates="currency.rates"/>
            </div>

            <div class="col s12 m6 l8">
                <card-currency :rates="currency.rates" :date="currency.date"/>
            </div>
        </div>
    </div>
</template>

<script>
  import CardBill from "@/components/parts/CardBill";
  import CardCurrency from "@/components/parts/CardCurrency";

  export default {
    name: 'home',
    data() {
      return {
        loading: true,
        currency: null
      };
    },
    components: {CardCurrency, CardBill},
    computed: {},
    async mounted() {
      this.currency = await this.$store.dispatch('fetchCurrencyAction');
      this.loading = false;
    },
    methods: {
      async refresh() {
        this.loading = true;
        this.currency = await this.$store.dispatch('fetchCurrencyAction');
        this.loading = false;
      }
    }
  };
</script>
