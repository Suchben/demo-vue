<template>
  <li class="news-item" @click="onClick">
    <p class="title">这是一个很长的标题哦，必须要常国一行，一行就够了</p>
    <p class="sub-title">已答<span>0</span>/<span>140</span>{{title}}&nbsp;&nbsp;&nbsp;&nbsp;<span>1373</span>人次作答</p>
  </li>
</template>

<script>
export default {
  name: 'homeItemOne',
  props: ['item', 'title', 'handleTap'],
  methods: {
    onClick: function (e) {
      console.log(e.target)
      this.$emit('handleTap', e)
    }
  }
}
</script>

<style lang="stylus">
.news-item
  background-color #fff
  padding 8px 12px
  border-bottom 1px solid #eee
  position relative
  line-height 1.3em
  .title
    font-size 14px
  .sub-title
    font-size 12px
    color lightgray
</style>
