// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import upperFirst from 'lodash/upperFirst'
import camelCase from 'lodash/camelCase'
// mint-ui
import Mint from 'mint-ui';
import 'mint-ui/lib/style.css'
Vue.use(Mint)
// vuex
import Vuex from 'vuex'
Vue.use(Vuex)
// 全局导入组件
const requireComponent = require.context(
  './components/baseCom',     // 其组件目录的相对路径
  false,                      // 是否查询其子目录
  /Base[A-Z]\w+\.(vue|js)$/   // 匹配基础组件文件名的正则表达式, 匹配文件名为BaseXxxx.vue
)
requireComponent.keys().forEach(fileName => {
  // 获取组件配置
  const componentConfig = requireComponent(fileName)
  // 获取组件的 PascalCase 命名
  const componentName = upperFirst(
    camelCase(
      // 剥去文件名开头的 `'./` 和结尾的扩展名
      fileName.replace(/^\.\/(.*)\.\w+$/, '$1')
    )
  )
  // 全局注册组件
  Vue.component(
    componentName,
    // 如果这个组件选项是通过 `export default` 导出的，那么就会优先使用 `.default`，否则回退到使用模块的根。
     componentConfig.default || componentConfig
  )
})
// 创建vue实例
// 阻止启动生产消息（提示警告）
Vue.config.productionTip = false
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {
    App
  },
  template: '<App/>'
})

router.beforeEach((to, from, next) => {
  /* 路由发生变化的时候修改页面title */
  if (to.meta.title) {
    document.title = to.meta.title
  }
  next()
})
