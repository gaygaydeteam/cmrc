// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import H5API from '@/assets/js/H5PlusAPI.js'

import './assets/styles/border.css'
import './assets/styles/reset.css'
import './assets/styles/iconfont.css'
import './assets/styles/fonts/iconfont.js'

Vue.config.productionTip = false
Vue.use(H5API)
/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    store,
    H5API,
    components: { App },
    template: '<App/>'
})
