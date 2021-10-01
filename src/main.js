import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios';
import VueAxios from 'vue-axios';
import VueSwal from 'vue-swal'
 
Vue.use(VueSwal)
Vue.use(VueAxios, axios);
Vue.config.productionTip = false

new Vue({
  el: "#app",
  router,
  store,
  render: h => h(App)
}).$mount('#app')
