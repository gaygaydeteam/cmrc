<template>
    <div class="page-container">
        <div class="banner-img-wrapper">
            <router-link to="/qrcode">
                <img :src="bannerImg">
            </router-link>
        </div>
        <ul class="sort-list">
            <li v-for="item in sortList" :key="item.id">
                <div class="sort-img-wrapper">
                    <img :src="item.src" />
                </div>
                <span class="sort-text">{{item.text}}</span>
            </li>
        </ul>
        <div class="my-account">
            <list-title>我的账户</list-title>
            <div class="account-info">
                <span class="integral">积分: 4569.26</span>
                <span class="pocket-money">零钱: 430.74</span>
                <span class="view-more">查看更多<i></i></span>
            </div>
        </div>
        <div class="asset-management">
            <list-title>我的账户</list-title>
            <div class="management-info">
                <span class="integral">我的购买: 2018/8/28 23:55</span>
                <span class="pocket-money">购买数量: 300</span>
            </div>
        </div>
    </div>
</template>

<script>
import ListTitle from '../components/home/ListTitle'
export default {
    name: 'Home',
    components: {
        ListTitle
    },
    data () {
        return {
            bannerImg: require('../assets/img/banner.jpg'),
            sortList: [{
                id: 1,
                src: require('../assets/img/zhuanchu.png'),
                text: '转出'
            }, {
                id: 2,
                src: require('../assets/img/guamai.png'),
                text: '挂卖'
            }, {
                id: 3,
                src: require('../assets/img/shuzi.png'),
                text: '数字资产'
            }, {
                id: 4,
                src: require('../assets/img/zhuanru.png'),
                text: '转入'
            }, {
                id: 5,
                src: require('../assets/img/qiugou.png'),
                text: '求购'
            }, {
                id: 6,
                src: require('../assets/img/jifen.png'),
                text: '积分兑换'
            }]
        }
    }
}
</script>

<style lang="scss">
.page-container {
    padding-bottom: 1.12rem;
}
.sort-list,
.my-account,
.asset-management {
    background-color: #fff;
    margin-bottom: .2rem;
}
.banner-img-wrapper {
    margin-top: .2rem;
    margin-bottom: .2rem;
    > img {
        width: 100%;
        height: 100%;
    }
}
</style>
