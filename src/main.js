import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// default import way. The import/export whole process is known as ESModule.
// import { key } from './db'; // named import way

import myDBStart from './db';

Vue.config.productionTip = false

myDBStart();

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')