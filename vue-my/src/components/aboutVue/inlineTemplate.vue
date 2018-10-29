<template>
  <div id="box">
    <!-- header -->
    <base-header :title="'动态组件'"></base-header>
    <!-- container -->
    <div class="conts">
      <component :is="currentView"></component>
      <br>
      <mt-button @click="handleChangeView('comB')">动态组件切换至B</mt-button>
      <mt-button @click="handleChangeView('comA')">动态组件切换至A</mt-button>
    </div>
  </div>
</template>
<script>
import comA from '../subcom/comA';
import comB from '../subcom/comB';
export default {
  data: function () {  
    return {
      currentView: 'comA'
    }
  },
  components: {
    comA,
    comB
  },
  methods: {
    handleChangeView(component){
      this.currentView = component;
    }
  },
  mounted() {

  }
}
</script>
<style lang='scss' scoped>
.app-container {
}
</style>
