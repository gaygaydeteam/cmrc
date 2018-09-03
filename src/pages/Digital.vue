<template>
    <div class="digital-page">
        <user-info><digital-sub-info></digital-sub-info></user-info>
        <ul class="digital-sub-header">
            <li v-for="item in subHeaderList" :key="item.id">
                <div class="digital-img">
                    <img :src="item.img">
                </div>
                <span class="text">{{item.text}}</span>
            </li>
        </ul>
        <ul class="digital-content">
            <li v-for="item in contentList" :key="item.id">
                <span class="title">{{item.title}}</span>
                <ul class="item-info">
                    <li>
                        <span class="number">{{item.number}}个</span>
                        <span class="mark">{{item.title}}资产</span>
                    </li>
                    <li>
                        <span class="money">¥{{item.money}}个</span>
                        <span class="mark">当前价格</span>
                    </li>
                    <li>
                        <span class="tile">零钱交易</span>
                    </li>
                </ul>
            </li>
        </ul>
    </div>
</template>

<script>
import UserInfo from '../components/me/UserInfo'
import DigitalSubInfo from '../components/me/DigitalSubInfo'
export default {
    name: 'Digital',
    components: {
        UserInfo,
        DigitalSubInfo
    },
    data () {
        return {
            subHeaderList: [{
                img: '',
                text: '转资产',
                id: 1
            }, {
                img: '',
                text: '提资金',
                id: 2
            }, {
                img: '',
                text: '转入',
                id: 3
            }, {
                img: '',
                text: '基石',
                id: 4
            }, {
                img: '',
                text: 'E宝',
                id: 5
            }],
            contentList: [{
                id: 1,
                title: 'CMRC',
                number: '000',
                money: '1.00'
            }, {
                id: 2,
                title: 'ETH',
                number: '000',
                money: '1.00'
            }, {
                id: 3,
                title: 'BTC',
                number: '000',
                money: '1.00'
            }, {
                id: 4,
                title: 'BTC',
                number: '000',
                money: '1.00'
            }]
        }
    }
}
</script>

<style lang="scss">

</style>
