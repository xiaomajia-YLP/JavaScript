<template>
  <div class='app-container'>
    <!-- header -->
    <base-header :title="'小马甲の中转站'"></base-header>
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
export default {
  data() {
    return {
      selected: "3",
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
        },{
          title: "事件修饰符",
          link: "/vue/event_modifiers"
        },{
          title: "表单相关",
          link: "/vue/form"
        },{
          title: "自定义组件的v-model",
          link: "/vue/customizing"
        },{
          title: "测试",
          link: "/vue/test"
        },{
          title: "递归组件",
          link: "/vue/recursive"
        }
      ]
    };
  },
  methods: {
    functionName(params) {}
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
