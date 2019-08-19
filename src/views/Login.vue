<template>
    <form class="card auth-card" @submit.prevent="submitHandler">
        <div class="card-content">
            <span class="card-title">Домашняя бухгалтерия</span>
            <div class="input-field">
                <input
                        v-model.trim="email"
                        id="email"
                        type="text"
                        :class="{invalid: emailCheck}"
                >
                <label for="email">Email</label>
                <small
                        v-if="$v.email.$dirty && !$v.email.required"
                        class="helper-text invalid"
                >Поле Email не должно быть пустым
                </small>
                <small
                        v-if="$v.email.$dirty && !$v.email.email"
                        class="helper-text invalid"
                >Введите корректный Email
                </small>
            </div>
            <div class="input-field">
                <input
                        v-model.trim="password"
                        id="password"
                        type="password"
                        :class="{invalid: passwordCheck}"
                >
                <label for="password">Пароль</label>
                <small
                        v-if="$v.password.$dirty && !$v.password.required"
                        class="helper-text invalid"
                >Введите пароль
                </small>
                <small
                        v-if="$v.password.$dirty && !$v.password.minLength"
                        class="helper-text invalid"
                >Пароль должен состоять из {{ $v.password.$params.minLength.min }} и более символов. Сейчас он {{ password.length }}
                </small>
            </div>
        </div>
        <div class="card-action">
            <div>
                <button
                        class="btn waves-effect waves-light auth-submit"
                        type="submit"
                >
                    Войти
                    <i class="material-icons right">send</i>
                </button>
            </div>

            <p class="center">
                Нет аккаунта?
                <router-link to="/registr">Зарегистрироваться</router-link>
            </p>
        </div>
    </form>
</template>

<script>
  import {email, required, minLength} from 'vuelidate/lib/validators';

  export default {
    name: "Login",
    data() {
      return {
        email: '',
        password: ''
      };
    },
    validations: {
      email: {
        email,
        required
      },
      password: {
        required,
        minLength: minLength(6)
      }
    },
    computed: {
      emailCheck() {
        if ((this.$v.email.$dirty && !this.$v.email.required) || (this.$v.email.$dirty && !this.$v.email.email)) {
          return true;
        }
        return false;
      },
      passwordCheck() {
        if ((this.$v.password.$dirty && !this.$v.password.required) || (this.$v.password.$dirty && !this.$v.password.minLength)) {
          return true;
        }
        return false;
      }
    },
    methods: {
      submitHandler() {
        if (this.$v.$invalid) {
          this.$v.$touch();
          return;
        }

        const formData = {
          email: this.email,
          password: this.password
        }

        console.log(formData);

        this.$router.push('/');
      }
    }
  };
</script>

<style scoped>

</style>
