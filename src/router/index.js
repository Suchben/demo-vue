import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/root/home'
import Wrong from '@/views/root/wrong'
import Me from '@/views/root/me'
import Setting from '@/views/root/setting'
import Root from '@/views/root'

import Paper from '@/views/paper/paperDetails'
import PaperItem from '@/views/paper/paperDetailsItem'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/root/home'
    }, {
      path: '/root',
      redirect: '/root/home'
    }, {
      path: '/root',
      component: Root,
      children: [
        {
          path: 'home/:type(\\d+)?',
          name: 'HomeType',
          component: Home
        }, {
          path: 'wrong',
          component: Wrong
        }, {
          path: 'me',
          component: Me
        }, {
          path: 'setting',
          component: Setting
        }
      ]
    }, {
      path: '/paper',
      component: Paper
    }, {
      path: '/paperItem',
      component: PaperItem
    }
  ]
})
