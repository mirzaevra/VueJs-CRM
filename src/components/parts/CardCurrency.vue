<template>
    <div class="card orange darken-3 bill-card">
        <div class="card-content white-text">
            <div class="card-header">
                <span class="card-title">Курс валют</span>
            </div>
            <table>
                <thead>
                <tr>
                    <th>Валюта</th>
                    <th>Курс</th>
                    <th>Дата</th>
                </tr>
                </thead>

                <tbody>
                <tr v-for="cur in currencies"
                    :key="cur">
                    <td>{{cur}}</td>
                    <td>{{rates[cur].toFixed(3)}}</td>
                    <td>{{date | date('date')}}</td>
                </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
  export default {
    name: "CardCurrence",
    props: ['rates', 'date'],
    data() {
      return {
        currencies: ['RUB', 'USD', 'EUR']
      };
    }
  };
</script>

<style scoped>

</style>
