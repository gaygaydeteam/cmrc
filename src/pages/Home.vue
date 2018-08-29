<template>
    <div>
        <h1>This is home page!</h1>
        <button @click="createQRBarcode">test</button>
    </div>
</template>

<script>
import {createBarcode} from '@/assets/js/H5PlusAPI.js'
export default {
    name: 'Home',
    methods: {
        createQRBarcode () {
            createBarcode()
        }
    }
}
</script>

<style lang="scss">

</style>
