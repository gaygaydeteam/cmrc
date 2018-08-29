<template>
  <div id="app">
    <router-view/>
    <footer-tab></footer-tab>
  </div>
</template>

<script>
import FooterTab from '@/components/global/Footer'
export default {
    name: 'App',
    components: {
        FooterTab
    }
}
</script>

<style>

</style>
