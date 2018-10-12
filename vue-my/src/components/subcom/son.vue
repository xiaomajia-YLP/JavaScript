<template>
    <div class='app-container'>
        <button @click="handleClick">点击</button>
    </div>
</template>
<script>
    export default {
        data () {
            return {
                counter: 0
            }
        },
        methods: {
            handleClick () {
                this.counter ++;
                this.$emit('input', this.counter);
            }
        }
    }
</script>
<style lang='scss' scoped>
    .app-container {
        button {
            width: 100px;
            height: 40px;
            border: 1px solid #ccc;
            background-color: #fff;
            border-radius: 5px;
        }
    }
</style>
