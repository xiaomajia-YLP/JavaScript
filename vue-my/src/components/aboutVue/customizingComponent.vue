<template>
    <div class='app-container'>
        <!-- header -->
        <base-header :title="'自定义组件的v-model'"></base-header>
        <!-- container -->
        <div class="conts">
            <p>{{total}}</p>
            <son v-model="total"></son>
        </div>
    </div>
</template>
<script>
import son from '../subcom/son';
export default {
  data() {
    return {
      total: 0
    };
  },
  components: {
    son
  },
  methods: {
    reduceValue () {
      this.total--;
    }
  }
};
</script>
<style lang='scss' scoped>
.app-container {
  p {
    line-height: 40px;
  }
}
</style>
