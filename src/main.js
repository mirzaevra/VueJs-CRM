import Vue from 'vue';
import Vuelidate from "vuelidate";
import App from './App.vue';
import router from './router';
import store from './store';
import notificationPlugin from '@/plugins/notification.plugin.js';
import Loader from '@/components/common/Loader.vue';
import dateFilter from './filters/date.filter';
import currencyFilter from './filters/currency.filter';
import './registerServiceWorker';
import 'materialize-css/dist/js/materialize.min';
//Firebase
import firebase from "firebase/app";
import 'firebase/auth';
import 'firebase/database';

Vue.config.productionTip = false;

Vue.use(notificationPlugin);
Vue.use(Vuelidate);
Vue.filter('date', dateFilter);
Vue.filter('currency', currencyFilter);
Vue.component('Loader', Loader);


firebase.initializeApp({
  apiKey: "AIzaSyDEHU8_QJ7lphv88UcrvyPzI5cTu2HOWfc",
  authDomain: "vuejs-crm-f8265.firebaseapp.com",
  databaseURL: "https://vuejs-crm-f8265.firebaseio.com",
  projectId: "vuejs-crm-f8265",
  storageBucket: "",
  messagingSenderId: "924996096447",
  appId: "1:924996096447:web:fc765f116fe5259d"
});

let app;

firebase.auth().onAuthStateChanged(() => {
  if (!app) {
    app = new Vue({
      router,
      store,
      render: h => h(App)
    }).$mount('#app');
  }
});


