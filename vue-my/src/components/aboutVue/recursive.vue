<template>
  <div id="box">
    <!-- header -->
    <base-header :title="'递归组件'"></base-header>
    <!-- container -->
    <div class="conts">
      <son :count="1"></son>
    </div>
  </div>
</template>
<script>
export default {
  data: function () {  
    return {

    }
  },
  components: {
    son: {
      name: "son",
      props: {
        count: {
          type: Number,
          default: 1
        }
      },
      template: '\
        <div class="child">\
          <son :count="count + 1" v-if="count < 5" ></son>\
        </div>'
    }
  },
  methods: {},
  mounted() {}
}
</script>
<style lang='scss' scoped>
.app-container {
}
</style>
