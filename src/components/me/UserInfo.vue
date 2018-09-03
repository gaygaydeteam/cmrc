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
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: 'UserInfo'
}
</script>

<style lang="scss" scoped>
.user-header {
    background-color: $orange;
    color: $white;
    padding-top: 0.2rem;
}
.user-avatar {
    float: left;
    margin-right: 0.3rem;

    img {
        width: 1.2rem;
        height: 1.2rem;
    }
}
.user-rank {
    > span {
        margin-left: 0.3rem;
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
.digital-sub-header,
.user-sub-header {
    display: flex;
    background-color: #f2562e;
    margin-bottom: 0.12rem;
    /deep/ li {
        text-align: center;
        -webkit-box-flex: 1;
        -ms-flex: 1;
        flex: 1;
        position: relative;
        text-align: center;
        padding-bottom: 0.2rem;
        padding-top: 0.2rem;
        &:after {
            content:'';
            position: absolute;
            background-color: #000;
            opacity: 0.2;
            top: 0;
            bottom: 0;
            left: 0;
            right: 0.02rem;
        }
        span {
            position: relative;
            z-index: 2;
        }
    }
}
</style>
