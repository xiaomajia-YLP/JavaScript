<template>
  <div class='app-container'>
    <!-- header -->
    <header-box :title="'金额千分位格式化'"></header-box>
    <!-- container -->
    <div class="conts">
      <mt-field label="转账金额：" placeholder="请输入转账金额" v-model="num"></mt-field>
      <mt-button type="primary" size="small" @click="formatNum">格式化</mt-button>　
      <mt-button type="primary" plain size="small" @click="resetNum">还原</mt-button>
      <mt-cell title="用户输入金额:" :value="num"></mt-cell>
      <mt-cell title="千分位格式化:" :value="str"></mt-cell>
      <mt-cell title="取消格式化:" :value="toNum"></mt-cell>
    </div>
  </div>
</template>
<script>
import headerBox from "../subcom/header";
export default {
  data() {
    return {
      num: "",
      str: "",
      toNum: ""
    };
  },
  methods: {
    formatNumExp() {
      this.str = (this.num || 0)
        .toString()
        .replace(/(\d)(?=(?:\d{3})+$)/g, "$1,");
    },
    formatNum() {
      let _num = (this.num || 0).toString(),
        _result = "";
      while (_num.length > 3) {
        _result = "," + _num.slice(-3) + _result;
        _num = _num.slice(0, _num.length - 3);
      }
      if (_num) {
        _result = _num + _result;
      }
      this.str = _result;
    },
    resetNum() {
      let _str = this.str;
      if (_str.indexOf(",") > 0) {
        this.toNum = _str.split(",").join("");
      } else {
        this.toNum = _str;
      }
    }
  },
  components: {
    headerBox
  }
};
</script>
<style lang='scss' scoped>
.app-container {
  .conts {
    padding: 10px;
  }
  .mint-button--small {
    margin-left: 10px;
    padding: 0 20px;
    margin-bottom: 20px;
  }
}
</style>
