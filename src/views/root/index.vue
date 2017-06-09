<template>
  <div class="page-root">
    <router-view class="page-wrap"></router-view>
    <main-tab-bar @selectedChanged="selectedChangedHandler"></main-tab-bar>
  </div>
</template>

<script>
import Vue from 'vue'
import MainTabBar from '../../components/MainTabBar.vue'
Vue.component(MainTabBar.name, MainTabBar)
import './index.styl'
export default {
  name: 'page-tabbar',
  methods: {
    selectedChangedHandler: function (val, oldVal) {
      switch (val) {
        case '首页':
          this.$router.push('/root/home')
          break
        case '错题':
          this.$router.push('/root/wrong')
          break
        case '我的':
          this.$router.push('/root/me')
          break
        case '设置':
          this.$router.push('/root/setting')
          break
      }
    }
  }
}
</script>

<style>

</style>
