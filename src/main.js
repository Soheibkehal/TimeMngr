import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from 'vue'
import './plugins/bootstrap-vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import router from './router'
import 'bootstrap'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import Raphael from 'raphael/raphael'
global.Raphael = Raphael
global.jQuery = require('jquery');



Vue.use(BootstrapVue)
Vue.use(VueRouter)

//Vue.use(require("moment"));


Vue.config.productionTip = false




new Vue({
  template:'',
  router,
  render: h => h(App)
}).$mount('#app')

