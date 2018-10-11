<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App"
};
</script>

<style>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.conts {
  padding: 10px;
}
.info-title {
  padding: 10px;
}
.info {
  font-size: 14px;
  color: #666;
  padding: 10px;
  background-color: #f8f8f8;
  margin-bottom: 10px;
}
</style>
