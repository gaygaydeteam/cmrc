<template>
    <a class="tabbar-item" @click="changeTab" :class="{'is-active': isActive}">
        <div class="inner-wrapper">
            <span class="tabbar-icon-wrapper"><slot name="tab-icon"></slot></span>
            <span class="tabbar-text"><slot></slot></span>
        </div>
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
    color: #000;
    > .inner-wrapper {
        height: 50px;
        width: 50px;
        margin: 0 auto;

        .tabbar-icon-wrapper {
            display: block;
            padding-top: 3px;
            padding-bottom: 5px;
        }
    }
    &.home {
        .inner-wrapper {
            background-color: #f2562e;
            border-radius: 1000px;
            color: #fff;
        }
    }
}
</style>
