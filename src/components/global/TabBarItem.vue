<template>
    <a class="tabbar-item" @click="changeTab" :class="{'is-active': isActive}">
        <span class="tabbar-icon-wrapper"><slot name="tab-icon"></slot></span>
        <span class="tabbar-text"><slot></slot></span>
    </a>
</template>

<script>
export default {
    name: 'TabBarItem',
    props: ['id', 'select'],
    computed: {
        isActive () {
            if (this.id === this.select) {
                return true
            }
        }
    },
    methods: {
        changeTab () {
            this.$emit('change-select', this.id)
            this.$router.push({name: this.id})
        }
    }
}
</script>

<style lang="scss">
.tabbar-item {
    flex-grow: 1;
}
.is-active {
    color: #B0171F;
}
</style>
