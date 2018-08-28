<template>
    <div>
        <h1>This is home page!</h1>
        <button @click="createQRBarcode">test</button>
        <footer-tab></footer-tab>
    </div>
</template>

<script>
import {createBarcode} from '@/assets/js/H5PlusAPI.js'
import FooterTab from '@/components/global/Footer'
export default {
    name: 'Home',
    components: {
        FooterTab
    },
    methods: {
        createQRBarcode () {
            createBarcode()
        }
    }
}
</script>

<style lang="scss">

</style>
