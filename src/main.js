// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import router from './router'
import Test from './Test'
import store from './store'
import { sync } from 'vuex-router-sync'
import './assets/iconfont.css'
Vue.config.productionTip = false
// sync the router with the vuex store.
// this registers `store.state.route`
sync(store, router)
/* eslint-disable no-new */
new Vue({
  el: '#example',
  store,
  router,
  template: '<Test/>',
  components: { Test }
})
