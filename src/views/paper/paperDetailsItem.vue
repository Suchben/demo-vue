<template>
  <div class="my-page">
    <mt-header fixed title="单选题">
      <mt-button slot="left" icon="back" @click="handleBack">返回</mt-button>
    </mt-header>
    <div class="scroll-list">
      <h3>一、单项选择题（本大题共80小题，每小题0.5分，共40分。）</h3>
      <mt-radio title="1、风险管理最根本的动力来源是（ ）" v-model="selected" :options="['选项A', '选项B', '选项C', 'D自定义选项']">
        <p>内容></p>
      </mt-radio>
      <div class="result" v-if="!!selected">
        <p>您的答案：{{selected}}</p>
        <p>参考答案：{{selected}}</p>
        <p>题目解析：为什么应该选择{{selected}}</p>
      </div>
    </div>
    <div class="tool-bar">
      <mt-button>上一题</mt-button>
      <mt-button>收藏</mt-button>
      <mt-button>下一题</mt-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'page-tabbar',
  data: function () {
    return {
      selected: ''
    }
  },
  methods: {
    handleBack: function () {
      this.$router.go(-1)
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
    .result {
      margin-top: 10px;
      padding: 12px;
    }
  }
}
</style>
