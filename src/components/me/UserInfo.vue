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

<style lang="scss" scoped>
.user-header {
    background-color: #f2562e;
    color: #fff;
    padding-top: 0.2rem;
}
.user-avatar {
    float: left;

    img {
        width: 1.2rem;
        height: 1.2rem;
    }
}
.right-info {
    display: inline-block;
    font-size: 14px;
    padding-top: 0.24rem;
    padding-bottom: 0.24rem;
    .user-name {
        display: block;
        margin-bottom: 0.2rem;
    }
}
.user-info-wrapper {
    margin-bottom: 0.2rem;
    padding-left: 0.4rem;
}
.user-sub-header {
    display: flex;
}
</style>
