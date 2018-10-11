<template>
  <div class='app-container'>
    <!-- header -->
    <header-box :title="'小马甲の中转站'"></header-box>
    <!-- navbar -->
    <mt-navbar v-model="selected">
      <mt-tab-item id="1">JS相关</mt-tab-item>
      <mt-tab-item id="2">CSS相关</mt-tab-item>
      <mt-tab-item id="3">Vue相关</mt-tab-item>
    </mt-navbar>
    <!-- tab-container -->
    <mt-tab-container v-model="selected">
      <mt-tab-container-item id="1">
        <mt-cell v-for="(val, i) in jsList" :key="i" :title="val.title" :to="val.link" is-link>
        </mt-cell>
      </mt-tab-container-item>
      <mt-tab-container-item id="2">
        <mt-cell v-for="(val, i) in cssList" :key="i" :title="val.title" :to="val.link" is-link>
        </mt-cell>
      </mt-tab-container-item>
      <mt-tab-container-item id="3">
        <mt-cell v-for="(val, i) in vueList" :key="i" :title="val.title" :to="val.link" is-link>
        </mt-cell>
      </mt-tab-container-item>
    </mt-tab-container>
  </div>
</template>
<script>
import headerBox from "./subcom/header";
export default {
  data() {
    return {
      selected: "1",
      jsList: [
        {
          title: "金额千分位加逗号",
          link: "/js/format_num"
        }
      ],
      cssList: [
        {
          title: "渐进式图片加载",
          link: "/css/progress"
        }
      ],
      vueList: [
        {
          title: "计算属性",
          link: "/vue/computed"
        }
      ]
    };
  },
  methods: {
    functionName(params) {}
  },
  components: {
    headerBox
  }
};
</script>
<style lang='scss'>
.app-container {
  .mint-navbar {
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
    margin-bottom: 10px;
    .mint-tab-item.is-selected {
      margin-bottom: -1px;
    }
    .mint-tab-item-label {
      font-size: 14px;
    }
  }
  .mint-cell-wrapper {
    color: #333;
    font-size: 14px;
  }
}
</style>
