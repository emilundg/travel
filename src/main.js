import Vue from 'vue';
import BootstrapVue from "bootstrap-vue";
import App from './App.vue';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import router from './router';
import VueFirestore from 'vue-firestore';
import VModal from 'vue-js-modal'

Vue.use(VModal);

Vue.use(VueFirestore);

Vue.use(BootstrapVue);

Vue.config.productionTip = false;

new Vue({
  el: '#app',
  template: '<App/>',
  components: {
    App
  },
  router
});