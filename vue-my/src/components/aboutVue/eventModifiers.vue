<template>
  <div class='app-container'>
    <!-- header -->
    <header-box :title="'Vue计算属性'"></header-box>
    <!-- container -->
    <div class="conts">
      <p class="info">
        @click.stop 等价于 event.stopPropagation() <br>
        @click.prevent 等价于 event.preventDefault () <br>
        .exact 修饰符允许你控制由精确的系统修饰符组合触发的事件。<br>
        鼠标按钮修饰符 & 系统修饰键<br>
      </p>
    </div>
    <div class="box-conts">
      <div class="box1" @click="tapBox1">
        <div class="box2" @click="tapBox2">
          <div class="box3" @click="tapBox3">none</div>
        </div>
      </div>
      <br>
      <div class="box1" @click="tapBox1">
        <div class="box2" @click.self="tapBox2">
          <div class="box3" @click.stop="tapBox3">.stop</div>
        </div>
      </div>
    </div>
    <mt-button @keyup.enter="submit" style="margin-left:15px">click</mt-button>
  </div>
</template>
<script>
import headerBox from "../subcom/header";
export default {
  data() {
    return {
      num: ""
    };
  },
  methods: {
    tapBox1() {
      console.log(1111111111);
    },
    tapBox2() {
      console.log(2222222222);
    },
    tapBox3() {
      console.log(3333333333);
    },
    submit() {
      console.log('submit');
    }
  },
  components: {
    headerBox
  }
};
</script>
<style lang='scss' scoped>
.app-container {
  .box-conts {
    display: flex;
    padding: 15px;
    justify-content: space-between;
  }
  .box1 {
    width: 150px;
    height: 150px;
    background-color: skyblue;
  }
  .box2 {
    width: 100px;
    height: 100px;
    background-color: pink;
  }
  .box3 {
    width: 50px;
    height: 50px;
    background-color: #f2f3a0;
  }
}
</style>
