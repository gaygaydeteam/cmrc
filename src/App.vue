<template>
  <div id="app">
    <router-view/>
    <footer-tab v-if="needFooter()"></footer-tab>
  </div>
</template>

<script>
import FooterTab from '@/components/global/Footer'
export default {
    name: 'App',
    components: {
        FooterTab
    },
    methods: {
        needFooter () {
            const noNeedFooterList = ['qrcode']
            let path = this.$route.path
            for (var i = 0; i < noNeedFooterList.length; i++) {
                if (path.substr(1) === noNeedFooterList[i]) {
                    return false
                }
            }
            return true
        }
    }
}
</script>

<style>

</style>
