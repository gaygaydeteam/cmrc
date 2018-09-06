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
    watch: {
        $route (router) {
            const canQuitPage = ['Home', 'Me', 'Exchange']
            for (let i in canQuitPage) {
                if (router.name === canQuitPage[i]) {
                    this.$store.dispatch('updateIndex', 0)
                    return
                }
            }
            this.$store.dispatch('updateIndex', 1)
        }
    },
    methods: {
        needFooter () {
            const needFooterList = ['Home', 'Me', 'Exchange']
            let pageName = this.$route.name
            for (let i in needFooterList) {
                if (pageName === needFooterList[i]) {
                    return true
                }
            }
            return false
        }
    }
}

</script>

<style>

</style>
