import 'core-js/stable';
import 'regenerator-runtime/runtime';
import Vue from 'vue';
import App from './App.vue';
import router from './router';
import './router/router.interceptor';
import './components/global';
import './icons';
import './filters';
import './services';
import './plugins/composition';
import './assets/style/app.less';

/* eslint-disable */
Vue.config.productionTip = process.env.NODE_ENV === 'production';

/* eslint-disable no-new */
new Vue({
  el: '#mirrorSource1rd5xn1vdpv',
  router,
  // use Runtime-only
  // https://vuejs.org/v2/guide/installation.html
  render: (h) => h(App)
});
