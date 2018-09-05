<template>
    <div class="tab-bar">
        <tab-bar-item id="Exchange" :select="selected">
            <i class="icon-exchange iconfont cmrc-bussiness" slot="tab-icon"></i>
            交易
        </tab-bar-item>
        <tab-bar-item id="Home" :select="selected">
            <i class="icon-home iconfont cmrc-home" slot="tab-icon"></i>
            首页
        </tab-bar-item>
        <tab-bar-item id="Me" :select="selected">
            <i class="icon-my iconfont cmrc-user" slot="tab-icon"></i>
            我的
        </tab-bar-item>
    </div>
</template>

<script>
import TabBarItem from './TabBarItem'
export default {
    name: 'Footer',
    components: {
        TabBarItem
    },
    computed: {
        selected () {
            return this.$route.matched[0].name
        }
    }
}
</script>

<style lang="scss">
.tab-bar {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    display: flex;
    height: 1rem;
    justify-content: center;
    align-items: center;
    text-align: center;
    box-shadow: 0px 0px 6px #ccc;
    background-color: $white;
}
</style>
