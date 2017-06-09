<template>
  <div class="page-me">
    <mt-header fixed title="我的"></mt-header>
    <div class="scroll-list">
      <p class="tips">您还没有登录</p>
      <div class="begin-button">
        <mt-button size="small" @click="handleRegister">注册</mt-button>
        <mt-button size="small" type="primary" @click="handleLogin">登录</mt-button>
      </div>
      <mt-cell title="最近练习">
        <i class="iconfont icon-xiajiantou"></i>
        <i slot="icon" class="iconfont icon-shouye"></i>
      </mt-cell>
      <mt-cell title="模拟考试">
        <i class="iconfont icon-xiajiantou"></i>
        <i slot="icon" class="iconfont icon-shouye"></i>
      </mt-cell>
      <p class="table-space"></p>
      <mt-cell title="我的视频课">
        <i class="iconfont icon-xiajiantou"></i>
        <i slot="icon" class="iconfont icon-shouye"></i>
      </mt-cell>
      <p class="table-space"></p>
      <mt-cell title="我的下载">
        <i class="iconfont icon-xiajiantou"></i>
        <i slot="icon" class="iconfont icon-shouye"></i>
      </mt-cell>
      <mt-cell title="我的上传">
        <i class="iconfont icon-xiajiantou"></i>
        <i slot="icon" class="iconfont icon-shouye"></i>
      </mt-cell>
    </div>
  </div>
</template>

<script>
export default {
  name: 'page-tabbar',
  data: function () {
    return {
    }
  },
  methods: {
    handleRegister: function () {
      console.log('register')
    },
    handleLogin: function () {
      console.log('login')
    }
  }
}
</script>

<style lang="less">
.page-me {
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
