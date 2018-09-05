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

<style lang="scss" scoped>
.digital-page {
    > .digital-sub-header {
        display: flex;
        background-color: $white;
        padding-left: 0.3rem;
        padding-right: 0.3rem;
        margin-bottom: 0.12rem;
        > li {
            width: 20%;
            text-align: center;
            -webkit-box-flex: 1;
            -ms-flex: 1;
            flex: 1;
            padding-top: 0.2rem;
            padding-bottom: 0.2rem;
        }
    }
}
.digital-page {
    > .digital-content {
        > li {
            margin-bottom: 0.12rem;
            margin-left: 0.2rem;
            margin-right: 0.2rem;
            padding: 0.16rem 0 0.16rem 0.4rem;
            background-color: $white;
            border-radius: 0.16rem;
            position: relative;
            overflow: hidden;
            &:before {
                position: absolute;
                content: '';
                left: 0;
                top: 0;
                width: 0.12rem;
                height: 100%;
                background-color: $orange;
            }
            .title {
                display: block;
                margin-bottom: 0.18rem;
                color: $orange;
            }
            .item-info {
                display: flex;

                > li {
                    -webkit-box-flex: 1;
                    -ms-flex: 1;
                    flex: 1;
                    width: 33.333333%;

                    span {
                        display: block;
                        margin-bottom: 0.06rem;

                        &:last-child {
                            margin-bottom: 0;
                            color: #aeaeae;
                        }
                    }
                    &:last-child {
                        span {
                            color: green;
                        }
                    }
                }
            }
        }
    }
}
</style>
