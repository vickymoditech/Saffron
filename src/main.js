import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Vuetify from 'vuetify';
import 'viewerjs/dist/viewer.css'
import Viewer from 'v-viewer'

Vue.use(Vuetify);
Vue.use(Viewer);
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
