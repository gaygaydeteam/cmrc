<template>
    <div>
        <back-nav></back-nav>
        <h1>This is qrcode page!</h1>
    </div>
</template>

<script>
import BackNav from '@/components/global/BackNav'
import {_createBarcode} from '@/assets/js/H5PlusAPI.js'
export default {
    name: 'Qrcode',
    components: {
        BackNav
    },
    mounted () {
        this.$nextTick(function () {
            _createBarcode()
        })
    }
}
</script>

<style lang="scss">

</style>
