<template>
    <div class="component-content">
        <van-notice-bar left-icon="volume-o">
            这个导航页面
        </van-notice-bar>

        <van-divider :style="{ color: '#1989fa', borderColor: '#1989fa', padding: '0 16px' }">华丽分割线</van-divider>

        <van-cell title="首页(包含上拉加载、公用底部导航)" is-link to="/index"/>
        <van-cell title="拼图页面" is-link to="/activity/jigsawPuzzle"/>


        <van-divider :style="{ color: '#1989fa', borderColor: '#1989fa', padding: '0 16px' }">华丽分割线</van-divider>
    </div>
</template>

<script>
    export default {
        name: 'Index',
        components: {
            //
        },
        data() {
            return {
                //
            };
        },
        methods: {
            //
        }
    };
</script>

<style lang="scss" scoped>
    .component-content {
        position: relative;
    }
</style>
