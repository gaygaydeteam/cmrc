<template>
    <div>
        <back-nav></back-nav>
        <h1>This is qrcode page!</h1>
        <router-link to="./test">
            test
        </router-link>
    </div>
</template>

<script>
import BackNav from '@/components/global/BackNav'
export default {
    name: 'Qrcode',
    components: {
        BackNav
    },
    mounted () {
        this.$nextTick(function () {
            this.$h5api.createBarcode()
        })
    }
}
</script>

<style lang="scss">

</style>
