<template>
    <div class="app-main-layout">

        <Nav @click="someTest"/>

        <Sidebar v-model="isVisible"/>

        <main class="app-content" :class="{full: !isVisible}">
            <Loader
                    v-if="loading"/>
            <div
                    v-else
                    class="app-page">
                <router-view/>
            </div>
        </main>

        <div class="fixed-action-btn">
            <router-link to="/record" class="btn-floating btn-large blue">
                <i class="large material-icons">add</i>
            </router-link>
        </div>
    </div>
</template>

<script>
  import Sidebar from '@/components/common/Sidebar';
  import Nav from '@/components/common/Nav';

  export default {
    name: "MainLayout",
    data() {
      return {
        isVisible: true,
        loading: true
      };
    },
    components: {
      Sidebar,
      Nav
    },
    methods: {
      someTest() {
        this.isVisible = !this.isVisible;
      }
    },
    async mounted() {
      if (!Object.keys(this.$store.getters.info).length) {
        await this.$store.dispatch('fetchInfoAction');
      }

      this.loading = false;
    }
  };
</script>

<style scoped>

</style>
