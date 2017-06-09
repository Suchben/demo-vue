<template>
  <div id="example">
    <router-view></router-view>
  </div>
</template>

<script>
import Vue from 'vue'
import './App.css'
import { Tabbar, Navbar, TabItem, TabContainer, TabContainerItem, Header, Button, Cell, Radio, Loadmore } from 'mint-ui'
Vue.component(Tabbar.name, Tabbar)
Vue.component(Navbar.name, Navbar)
Vue.component(TabItem.name, TabItem)
Vue.component(TabContainer.name, TabContainer)
Vue.component(TabContainerItem.name, TabContainerItem)
Vue.component(Header.name, Header)
Vue.component(Button.name, Button)
Vue.component(Cell.name, Cell)
Vue.component(Radio.name, Radio)
Vue.component(Loadmore.name, Loadmore)

export default new Vue({
  name: '#example'
})
</script>

<style>
  html, body {
    margin: 0;
    padding: 0;
    background-color: #fafafa;
    -webkit-overflow-scrolling: touch;
    user-select: none;
  }
  p {
    margin: 0;
    padding: 0;
  }
  li {
    list-style: none;
  }
</style>
