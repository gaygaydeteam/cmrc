<template>
    <div class="list-title-wrapper">
        <span class="title"><slot></slot></span>
    </div>
</template>

<script>
export default {
    name: 'ListTitle'
}
</script>

<style lang="scss" scoped>
.title {
    font-size: 0.34rem;
    margin-bottom: 0.35rem;
    margin-top: 0.35rem;
    padding-top: 0.05rem;
    padding-bottom: 0.05rem;
    display: inline-block;
    position: relative;

    &:before {
        content: '';
        height: 100%;
        width: 0.1rem;
        background-color: #f1552f;
        position: absolute;
        left: -0.3rem;
        top: 0;
        border-radius: 1000px;
    }
}
</style>
