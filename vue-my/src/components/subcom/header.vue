<template>
    <div class='app-container'>
        <mt-header :title="title">
            <router-link to="/" slot="left">
                <mt-button icon="back"></mt-button>
            </router-link>
            <mt-button icon="more" slot="right"></mt-button>
        </mt-header>
    </div>
</template>
<script>
export default {
  props: ['title']
};
</script>
<style lang='scss' scoped>
.app-container {
}
</style>
