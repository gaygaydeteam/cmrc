import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/Home'
import Exchange from '@/pages/Exchange'
import Me from '@/pages/Me'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'Home',
            component: Home
        },
        {
            path: '/exchange',
            name: 'Exchange',
            component: Exchange
        },
        {
            path: '/me',
            name: 'Me',
            component: Me
        }
    ]
})
