<template>
  <div class="my-page">
    <mt-header fixed title="错题"></mt-header>
  </div>
</template>

<script>
export default {
  name: 'page-tabbar',
  data () {
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

<style>

</style>
