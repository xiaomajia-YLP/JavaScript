import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import progressiveImg from '@/components/aboutCss/progressiveImg'
import formatNum from '@/components/aboutJs/formatNumber'
import vueComputed from '@/components/aboutVue/computed'
import eventModifiers from '@/components/aboutVue/eventModifiers'
import form from '@/components/aboutVue/form'
import customizingComponent from '@/components/aboutVue/customizingComponent'
import test from '@/components/aboutVue/test'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld,
      meta: {
        title: "小马甲中转站"
      }
    }, {
      path: '/css/progress',
      name: 'progressiveImg',
      component: progressiveImg,
      meta: {
        title: "渐进式图片加载"
      }
    }, {
      path: '/js/format_num',
      name: 'formatNum',
      component: formatNum,
      meta: {
        title: "金额按千位逗号分隔"
      }
    }, {
      path: '/vue/computed',
      name: 'vueComputed',
      component: vueComputed,
      meta: {
        title: "计算属性"
      }
    }, {
      path: '/vue/event_modifiers',
      name: 'eventModifiers',
      component: eventModifiers,
      meta: {
        title: "事件修饰符"
      }
    }, {
      path: '/vue/form',
      name: 'form',
      component: form,
      meta: {
        title: "表单相关"
      }
    }, {
      path: '/vue/test',
      name: 'test',
      component: test,
      meta: {
        title: "测试"
      }
    }, {
      path: '/vue/customizing',
      name: 'customizingComponent',
      component: customizingComponent,
      meta: {
        title: "自定义组件的v-model"
      }
    },
  ]
})
