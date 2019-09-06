<template>
    <nav class="navbar orange lighten-1">
        <div class="nav-wrapper">
            <div class="navbar-left">
                <a href="" @click.prevent="sidebarVisibility()">
                    <i class="material-icons black-text">dehaze</i>
                </a>
                <span class="black-text">{{date | date('datetime')}}</span>
            </div>

            <ul class="right hide-on-small-and-down">
                <li>
                    <a
                            class="dropdown-trigger black-text"
                            href="#"
                            data-target="dropdown"
                            ref="dropdown"
                    >
                        {{userName}}
                        <i class="material-icons right">arrow_drop_down</i>
                    </a>

                    <ul id='dropdown' class='dropdown-content'>
                        <li>
                            <router-link to="/profile" class="black-text">
                                <i class="material-icons">account_circle</i>Профиль
                            </router-link>
                        </li>
                        <li class="divider" tabindex="-1"></li>
                        <li>
                            <a href="#" class="black-text" @click.prevent="logout">
                                <i class="material-icons">assignment_return</i>Выйти
                            </a>
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
    </nav>
</template>

<script>
  import {mapActions} from 'vuex';

  export default {
    name: "Nav",
    data() {
      return {
        date: new Date(),
        interval: null,
        dropdown: null
      };
    },
    computed: {
      userName() {
        return this.$store.getters.info.name;
      }
    },
    methods: {
      ...mapActions([
        'logoutAction'
      ]),
      sidebarVisibility() {
        this.$emit('click');
      },
      async logout() {
        await this.logoutAction();
        this.$router.push('/login?message=logout');
      },
      refreshDate() {
        this.interval = setInterval(() => {
          this.date = new Date();
        }, 1000);
      }
    },
    mounted() {
      this.refreshDate();
      this.dropdown = M.Dropdown.init(this.$refs.dropdown, {
        constrainWidth: false
      });
    },
    beforeDestroy() {
      clearInterval(this.interval);
      if (this.dropdown && this.dropdown.destroy) {
        this.dropdown.destroy();
      }
    }
  };
</script>

<style scoped>

</style>
