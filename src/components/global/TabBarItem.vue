<template>
    <a class="tabbar-item">
        <span class="tabbar-icon-wrapper"><slot name="tab-icon"></slot></span>
        <span class="tabbar-text"><slot></slot></span>
    </a>
</template>

<script>
export default {
    name: 'TabBarItem'
}
</script>

<style lang="scss">
.tabbar-item {
    flex-grow: 1;
}
</style>
