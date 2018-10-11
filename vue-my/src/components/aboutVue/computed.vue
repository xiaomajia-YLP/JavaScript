<template>
    <div class='app-container'>
        <!-- header -->
        <header-box :title="'Vue计算属性'"></header-box>
        <!-- container -->
        <div class="conts">
            <p class="info">计算属性是基于它们的依赖进行缓存的。<strong>计算属性只有在它的相关依赖发生改变时才会重新求值。</strong>这就意味着只要“依赖项”不改变，多次访问此计算属性会立即返回之前的计算结果，而不必再次执行函数。</p>
            <mt-field label="First name: " placeholder="first name" v-model="firstName"></mt-field>
            <mt-field label="Last name: " placeholder="last name" v-model="lastName"></mt-field>
            <mt-cell title="姓名:" :value="fullName"></mt-cell>
        </div>
    </div>
</template>
<script>
import headerBox from "../subcom/header";
export default {
  data() {
    return {
      firstName: "",
      lastName: "",
    };
  },
  components: {
    headerBox
  },
  computed: {
      fullName(){
          return this.firstName + '·' + this.lastName;
      }
  }
};
</script>
<style lang='scss' scoped>
.app-container {
  .info-course {
    padding: 10px;
    font-size: 14px;
    .course-title {
      padding: 5px;
      font-weight: 700;
    }
    .course-list {
      padding: 5px 0;
    }
    .course-tips {
      padding-left: 10px;
    }
  }
}
</style>
