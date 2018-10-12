<template>
    <div class='app-container'>
        <input type="text" :value="value" @input="updateValue">
    </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  props: ["value"],
  methods: {
    updateValue(e) {
      this.counter++;
      this.$emit("input", e.target.value);
    }
  }
};
</script>
<style lang='scss' scoped>
.app-container {
}
</style>
 