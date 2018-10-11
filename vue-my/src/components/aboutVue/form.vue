<template>
  <div class='app-container'>
    <!-- header -->
    <header-box :title="'表单相关'"></header-box>
    <!-- radio -->
    <div class="conts">
      <h3>radio</h3>
      <!-- 原生 -->
      <ul>
        <li style="font-size:12px;color:#888">html单选框列表</li>
        <li>
          <input type="radio" v-model="isChecked" value="html" id="html">
          <label for="html">html</label>
        </li>
        <li>
          <input type="radio" v-model="isChecked" value="css" id="css">
          <label for="css">css</label>
        </li>
        <li>
          <input type="radio" v-model="isChecked" value="js" id="js">
          <label for="js">js</label>
        </li>
      </ul>
      <!-- mint-ui -->
      <mt-radio title="mint-ui单选框列表" v-model="value" :options="['选项A', '选项B', '选项C']">
      </mt-radio>
    </div>
    <!-- checkbox -->
    <div class="conts">
      <h3>checkbox</h3>
      <p class="info">复选框单独使用时：v-model对应的是一个Boolean；<br>多个复选框组合使用时：v-model对应的是一个Array数组</p>
      <!-- 原生 -->
      <ul>
        <li style="font-size:12px;color:#888">html复选框列表</li>
        <li>
          <input type="checkbox" v-model="checked" value="html" id="html1">
          <label for="html1">html</label>
        </li>
        <li>
          <input type="checkbox" v-model="checked" value="css" id="css1">
          <label for="css1">css</label>
        </li>
        <li>
          <input type="checkbox" v-model="checked" value="js" id="js1">
          <label for="js1">js</label>
        </li>
      </ul>
      <!-- mint-ui -->
      <mt-checklist title="复选框列表" v-model="valueCheck" :options="['选项A', '选项B', '选项C']">
      </mt-checklist>
    </div>
    <!-- select -->
    <div class="conts">
      <h3>SELECT</h3>
      <p class="info">下拉框单选时：v-model对应的是一个Boolean；<br>下拉框多选时（给select添加multiple属性）：v-model对应的是一个Array数组</p>
      <!-- 原生 -->
      <br>
      <!-- 单选select -->
      <p style="font-size:12px;color:#888">单选select</p>
      <select class="select-box" v-model="selected">
        <option value="11111">11111</option>
        <option value="22222">22222</option>
        <option value="33333">33333</option>
        <option value="44444">44444</option>
      </select>
      <p>已选择：{{selected}}</p>
      <!-- 多选select -->
      <br>
      <p style="font-size:12px;color:#888">多选select</p>
      <select class="select-multiple" v-model="valueSelect" multiple>
        <option value="11111">11111</option>
        <option value="22222">22222</option>
        <option value="33333">33333</option>
        <option value="44444">44444</option>
      </select>
      <p>已选择：{{valueSelect}}</p>
      <!-- mint-ui -->
      <p style="font-size:12px;color:#888">mint-ui select</p>
      <mt-picker :slots="slots" @change="onValuesChange" :visibleItemCount='visibleItemCount'></mt-picker>
    </div>
    <!-- v-model的修饰符 -->
    <div class="conts">
      <h3>checkbox</h3>
      <p class="info">.lazy：在“change”时而非“input”时更新<br>.number：自动将用户的输入值转为数值类型<br>.trim：自动过滤用户输入的首尾空白字符</p>
      <p style="font-size:12px;color:#888">v-model.lazy</p>
      <input type="text" v-model.lazy="msg" class="modifiers">
      <p>input输入框内容：{{msg}}</p>
      <p style="font-size:12px;color:#888">v-model.trim</p>
      <input type="text" v-model.trim="msgTrim" class="modifiers">
      <p>input输入框内容：{{msgTrim}}</p>
    </div>
  </div>
</template>
<script>
import headerBox from "../subcom/header";
export default {
  data() {
    return {
      // radio
      isChecked: "css",
      value: "选项A",
      // checkbox
      checked: ["css"],
      valueCheck: ["选项A", "选项B"],
      // select
      selected: "33333",
      valueSelect: ["33333", "22222"],
      slots: [
        {
          flex: 1,
          values: [
            "2015-01",
            "2015-02",
            "2015-03",
            "2015-04",
            "2015-05",
            "2015-06"
          ],
          className: "slot1",
          textAlign: "right"
        },
        {
          divider: true,
          content: "-",
          className: "slot2"
        },
        {
          flex: 1,
          values: [
            "2015-01",
            "2015-02",
            "2015-03",
            "2015-04",
            "2015-05",
            "2015-06"
          ],
          className: "slot3",
          textAlign: "left"
        }
      ],
      visibleItemCount: 3,
      // 修饰符
      msg: '',
      msgTrim: ''

    };
  },
  methods: {
    onValuesChange(picker, values) {
      if (values[0] > values[1]) {
        picker.setSlotValue(1, values[0]);
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
  h3 {
    line-height: 40px;
  }
  li {
    height: 40px;
    width: 100%;
    padding: 10px;
    input {
      margin-right: 10px;
    }
  }
  .select-box {
    width: 60%;
    height: 30px;
  }
  .select-multiple {
    width: 60%;
    height: 122px;
    option {
      height: 30px;
      padding: 7px 0;
    }
  }
  p {
    line-height: 30px;
  }
  .modifiers {
    height: 30px;
    width: 60%;
  }
}
</style>
