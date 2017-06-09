<template>
  <div class="my-page">
    <mt-header fixed title="试卷详情">
      <mt-button slot="left" icon="back" @click="handleBack">返回</mt-button>
    </mt-header>
    <div class="scroll-list">
      <h3>2017年初级银行从业资格《风险管理》真题演练（一）</h3>
      <p class="stars">0人评价&nbsp;&nbsp;&nbsp;&nbsp;</p>
      <div class="begin-button">
        <mt-button size="small" @click="handleBeginExam">开始考试</mt-button>
        <mt-button size="small" type="primary" @click="handleBeginTest">开始练习</mt-button>
      </div>
      <div class="table-like">
        <div v-for="name in names" :data="name">
          <p>{{name}}</p>
          <p>20170909</p>
        </div>
      </div>
    </div>
    <div class="tool-bar">
      <mt-button>分享</mt-button>
      <mt-button>
        <i class="iconfont icon-download"></i>
      </mt-button>
      <mt-button>评论</mt-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'page-tabbar',
  data: function () {
    return {
      selected: '外卖',
      names: [
        '已答', '作答人数', '发布时间', '大小', '卷面总分', '及格分', '提供者', '所属年份'
      ]
    }
  },
  methods: {
    selectedChangedHandler: function (val, oldVal) {
      this.selected = val
    },
    handleBack: function () {
      this.$router.go(-1)
    },
    handleBeginExam: function () {
      this.$router.push('/paperItem')
    },
    handleBeginTest: function () {
      this.$router.push('/paperItem')
    }
  }
}
</script>

<style lang="less">
.my-page {
  display: flex;
  flex-direction: column;
  .tool-bar {
    width: 100%;
    height: 50px;
    background-color: white;
    position: fixed;
    bottom: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-top: solid 1px rgb(222, 222, 222);
  }
  .scroll-list {
    position: relative;
    overflow: auto;
    margin-top: 44px;
    margin-bottom: 55px;
    flex: 1 1 auto;
    h3 {
      font-size: 13px;
      font-weight: normal;
      padding: 0;
      margin: 12px 12px 5px;
      line-height: 1.4em;
    }
    .stars {
      font-size: 11px;
      color: lightgray;
      line-height: 1em;
      margin: 0 12px;
    }
    .begin-button {
      margin: 0 12px 0;
      padding: 20px 0 15px;
      display: flex;
      border-bottom: solid 1px rgb(234, 234, 234);
      button:first-child {
        flex: 1 1 50%;
      }
      button:last-child {
        margin-left: 15px;
        flex: 1 1 50%;
      }
    }
    .table-like {
      display: flex;
      flex-wrap: wrap;
      align-items: flex-start;
      padding: 12px;
      font-size: 13px;
      div {
        width: 50%;
        display: flex;
        p:first-child {
          width: 40%;
          color: gray;
        }
        p:last-child {
          width: 45%;
          color: lightgray
        }
      }
    }
  }
}
</style>
