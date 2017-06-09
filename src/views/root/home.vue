<template>
  <div class="home-page">
    <mt-header fixed title="风险管理">
      <router-link to="/paper" slot="left">
        <mt-button>
          <i class="iconfont icon-lishi"></i>
        </mt-button>
      </router-link>
      <mt-button slot="right">
        <i class="iconfont icon-download"></i>
      </mt-button>
    </mt-header>
    <div class="fix-holder">
      <mt-navbar v-model="selected" class="tabs">
        <mt-tab-item id="1">历史真题</mt-tab-item>
        <mt-tab-item id="2">模拟试题</mt-tab-item>
        <mt-tab-item id="3">章节练习</mt-tab-item>
      </mt-navbar>
    </div>
    <div class="scroll-list">
      <transition :name="transition">
        <div :key="selected" :title="selected" class="my-list">
          <mt-loadmore :top-method="loadTop" ref="loadmore" :bottomPullText="bottomPullText">
            <transition-group tag="ul" name="item">
              <home-item-one @handleTap="handleTap" v-bind:key="'我的'+item+selected" v-for="item in Math.ceil(Math.random()*10)+3" :title="`${item}-${selected}`" :item="item">
              </home-item-one>
            </transition-group>
          </mt-loadmore>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import Item from '@/components/HomeItemOne.vue'
Vue.component(Item.name, Item)
export default {
  name: 'page-tabbar',
  data: function () {
    return {
      selected: String(this.$store.getters.currentHomeType),
      transition: 'slide-left',
      allLoaded: false,
      bottomPullText: '上拉加载更多'
    }
  },
  computed: {
    type: function () {
      return this.$store.getters.currentHomeType
    }
  },
  watch: {
    selected: function (val, oldVal) {
      this.$router.push({ name: 'HomeType', params: { type: val } })
    },
    type: function (to, from) {
      this.transition = to > from ? 'slide-left' : 'slide-right'
      this.selected = String(to)
    }
  },
  methods: {
    selectedChangedHandler: function (val, oldVal) {
      this.selected = val
    },
    handleTap: function (target) {
      this.$router.push('/paper')
    },
    loadTop: function () {
      console.log('loadTop')
      setTimeout(() => {
        this.$refs.loadmore.onTopLoaded()
      }, 3000)
    },
    loadBottom: function () {
      console.log('loadBottom')
      setTimeout(() => {
        this.bottomPullText = '- End -'
        this.$refs.loadmore.onBottomLoaded()
      }, 3000)
    }
  }
}
</script>

<style lang="less">
.home-page {
  overflow: hidden;
  padding-top: 44px;
  .scroll-list {
    position: absolute;
    top: 90px;
    bottom: 55px;
    width: 100%;
    overflow: auto;
  }
}

.mint-loadmore {
  overflow: visible;
}

.fix-holder {
  position: relative;
  .tabs {
    position: fixed;
    z-index: 2;
    width: 100%;
  }
}



.scroll-list ul {
  padding: 0;
  height: 100%;
  margin: 0;
}

.my-list {
  position: absolute;
  width: 100%;
  transition: all .5s cubic-bezier(.55, 0, .1, 1);
}

.item-move,
.item-enter-active,
.item-leave-active {
  transition: all .5s cubic-bezier(.55, 0, .1, 1);
}

.item-enter {
  opacity: 0;
  transform: translate(30px, 0);
  transition: all .5s cubic-bezier(.55, 0, .1, 1);
}

.item-leave-active {
  position: absolute;
  opacity: 0;
  transform: translate(100px, 0);
}

.slide-left-enter,
.slide-right-leave-to {
  opacity: 0;
  transform: translate(100px, 0);
}

.slide-left-leave-to,
.slide-right-enter {
  opacity: 0;
  transform: translate(-100px, 0);
}
</style>
