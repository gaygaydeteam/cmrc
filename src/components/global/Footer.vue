<template>
    <div class="tab-bar">
        <tab-bar-item id="tab1" :select="selected" @change-select="changeSelect">
            <i class="icon-home iconfont cmrc-home" slot="tab-icon"></i>
            首页
        </tab-bar-item>
        <tab-bar-item id="tab2" :select="selected" @change-select="changeSelect">
            <i class="icon-exchange iconfont cmrc-bussiness" slot="tab-icon"></i>
            交易
        </tab-bar-item>
        <tab-bar-item id="tab3" :select="selected" @change-select="changeSelect">
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
    data () {
        return {
            selected: 'tab1'
        }
    },
    methods: {
        changeSelect (params) {
            this.selected = params
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
    justify-content: center;
    align-items: center;
    text-align: center;
    padding: 10px;
    box-shadow: 0px 0px 6px #ccc;
}
</style>
