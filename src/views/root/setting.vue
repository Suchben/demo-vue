<template>
  <div class="page-setting">
    <mt-header fixed title="设置"></mt-header>
    <div class="scroll-list">
      <p class="table-space"></p>
      <mt-cell title="切换考试">
        银行从业规格
        <i class="iconfont icon-xiajiantou"></i>
        <i slot="icon" class="iconfont icon-shouye"></i>
      </mt-cell>
      <mt-cell title="同步">
        <i class="iconfont icon-xiajiantou"></i>
        <i slot="icon" class="iconfont icon-shouye"></i>
      </mt-cell>
      <p class="table-space"></p>
      <mt-cell title="消息">
        <i class="iconfont icon-xiajiantou"></i>
        <i slot="icon" class="iconfont icon-shouye"></i>
      </mt-cell>
      <p class="table-space"></p>
      <mt-cell title="分享给好友">
        <i class="iconfont icon-xiajiantou"></i>
        <i slot="icon" class="iconfont icon-shouye"></i>
      </mt-cell>
      <mt-cell title="亲，给个好评吧">
        <i class="iconfont icon-xiajiantou"></i>
        <i slot="icon" class="iconfont icon-shouye"></i>
      </mt-cell>
      <mt-cell title="答题设置">
        <i class="iconfont icon-xiajiantou"></i>
        <i slot="icon" class="iconfont icon-shouye"></i>
      </mt-cell>
      <p class="table-space"></p>
      <mt-cell title="意见反馈">
        <i class="iconfont icon-xiajiantou"></i>
        <i slot="icon" class="iconfont icon-shouye"></i>
      </mt-cell>
      <mt-cell title="关于">
        V.1
        <i class="iconfont icon-xiajiantou"></i>
        <i slot="icon" class="iconfont icon-shouye"></i>
      </mt-cell>
      <mt-cell title="a">
        V.1
        <i class="iconfont icon-xiajiantou"></i>
        <i slot="icon" class="iconfont icon-shouye"></i>
      </mt-cell>
      <mt-cell title="c">
        V.1
        <i class="iconfont icon-xiajiantou"></i>
        <i slot="icon" class="iconfont icon-shouye"></i>
      </mt-cell>
      <mt-cell title="v">
        V.1
        <i class="iconfont icon-xiajiantou"></i>
        <i slot="icon" class="iconfont icon-shouye"></i>
      </mt-cell>
      <p class="table-space"></p>  
    </div>
  </div>
</template>

<script>
export default {
  name: 'page-tabbar',
  data: function () {
    return {
      selected: '外卖'
    }
  },
  methods: {
    selectedChangedHandler: function (val, oldVal) {
      this.selected = val
    }
  }
}
</script>

<style lang="less">
.page-setting {
  display: flex;
  flex-direction: column;
  .table-space {
    height: 15px;
    width: 100%;
    display: block;
  }
  .scroll-list {
    position: relative;
    overflow: auto;
    margin-top: 44px;
    margin-bottom: 55px;
    flex: 1 1 auto;
    .tips {
      margin-top: 15px;
      font-size: 13px;
      font-weight: normal;
      color: lightgray;
      text-align: center;
    }
    .begin-button {
      margin: 0 12px 0;
      padding: 20px 0 15px;
      display: flex;
      button:first-child {
        flex: 1 1 50%;
      }
      button:last-child {
        margin-left: 15px;
        flex: 1 1 50%;
      }
    }
  }
}
</style>
