<template>
  <div class='app-container'>
    <div id="list-demo" class="demo">
      <mt-button v-on:click="shuffle">Shuffle</mt-button>
      <mt-button v-on:click="add">Add</mt-button>
      <mt-button v-on:click="remove">Remove</mt-button>
      <br>
      <br>
      <transition-group name="list" tag="p">
        <span v-for="item in items" v-bind:key="item" class="list-item">
          {{ item }}
        </span>
      </transition-group>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      items: [1, 2, 3, 4, 5, 6, 7, 8, 9],
      nextNum: 10
    };
  },
  methods: {
    randomIndex: function() {
      return Math.floor(Math.random() * this.items.length);
    },
    add: function() {
      this.items.splice(this.randomIndex(), 0, this.nextNum++);
    },
    remove: function() {
      this.items.splice(this.randomIndex(), 1);
    },
    shuffle: function() {
      this.items = _.shuffle(this.items);
    }
  }
};
</script>
<style lang='scss' scoped>
.app-container {
  .list-item {
    transition: all 1s;
    display: inline-block;
    margin-right: 10px;
  }
  .list-leave-active {
    position: absolute;
  }
  .list-enter, .list-leave-to {
    opacity: 0;
    transform: translateY(30px);
  }
}

</style>
