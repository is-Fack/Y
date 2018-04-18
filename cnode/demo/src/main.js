// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import AmazeVue from 'amaze-vue';
import 'amaze-vue/dist/amaze-vue.css';
import 'amaze-vue/dist/amaze-vue.js';

Vue.use(AmazeVue);
Vue.use(VueAxios, axios);
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
});
