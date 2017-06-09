<template>
  <mt-tabbar v-model="selected" fixed>
    <mt-tab-item id="首页">
      <i slot="icon" class="iconfont icon-shouye"></i> 首页
    </mt-tab-item>
    <mt-tab-item id="错题">
      <i slot="icon" class="iconfont icon-cuotiben"></i> 错题
    </mt-tab-item>
    <mt-tab-item id="我的">
      <i slot="icon" class="iconfont icon-wo"></i> 我的
    </mt-tab-item>
    <mt-tab-item id="设置">
      <i slot="icon" class="iconfont icon-shezhi"></i> 设置
    </mt-tab-item>
  </mt-tabbar>
</template>

<script>
export default {
  name: 'main-tab-bar',
  props: {
    selectedChanged: Function
  },
  data () {
    return {
      selected: this.$store.getters.currentTab
    }
  },
  computed: {
    selectedWatch: function () {
      return this.$store.getters.currentTab
    }
  },
  watch: {
    selected: function (val, oldVal) {
      this.$emit('selectedChanged', val, oldVal)
    },
    selectedWatch: function (val, oldVal) {
      this.selected = val
    }
  }
}
</script>

