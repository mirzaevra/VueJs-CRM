<template>
    <div class="grey darken-1 empty-layout">
        <router-view/>
    </div>
</template>

<script>
    import notifications from "@/utils/notifications";
  export default {
    name: "auth",
    computed: {
      error() {
        return this.$store.getters.error;
      },
    },
    watch: {
      error(fbError) {
        this.$error(notifications[fbError.code] || 'Что то пошло не так')
      }
    }
  };
</script>

<style scoped>

</style>
