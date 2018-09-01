<template>
    <div class="user-header">
        <div class="user-info-wrapper">
            <div class="user-avatar">
                <img src="">
            </div>
            <div class="right-info">
                <span class="user-name">用户名(昵称)</span>
                <span class="user-rank">级别: 金卡<span class="parent-id">推荐人: 123456</span></span>
            </div>
        </div>
        <user-sub-info></user-sub-info>
    </div>
</template>

<script>
import UserSubInfo from './UserSubInfo'
export default {
    name: 'UserInfo',
    components: {
        UserSubInfo
    }
}
</script>

<style lang="scss">

</style>
