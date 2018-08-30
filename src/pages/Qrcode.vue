<template>
    <div>
        <h1>This is qrcode page!</h1>
    </div>
</template>

<script>
import {createBarcode} from '@/assets/js/H5PlusAPI.js'
export default {
    name: 'Qrcode',
    mounted () {
        this.$nextTick(function () {
            createBarcode()
        })
    }
}
</script>

<style lang="scss">

</style>
