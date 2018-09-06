<template>
    <div class="page-container">
        <div class="header">
            <div class="user-info">
                <div class="user-avatar">
                    <img src="@/assets/img/banner.jpg">
                </div>
                <p class="username">{{username}}</p>
            </div>
            <router-link class="saoyisao" to="/qrcode">
                <i class="iconfont cmrc-saoyisao"></i>
            </router-link>
        </div>
        <div class="banner-img-wrapper">
            <img :src="bannerImg">
        </div>
        <ul class="sort-list">
            <li v-for="item in sortList" :key="item.id">
                <router-link :to="{ name: item.link }">
                    <div class="sort-img-wrapper">
                        <img :src="item.src" />
                    </div>
                    <span class="sort-text">{{item.text}}</span>
                </router-link>
            </li>
        </ul>
        <div class="my-account">
            <list-title>我的账户</list-title>
            <div class="account-info">
                <span class="integral">积分: <span>4569.26</span></span>
                <span class="pocket-money">零钱: <span>430.74</span></span>
                <span class="view-more">查看更多<i></i></span>
            </div>
        </div>
        <div class="asset-management">
            <list-title>资产管理</list-title>
            <div class="management-info">
                <span class="integral">最近购入: <span>2018/8/28 23:55</span></span>
                <span class="pocket-money">数量: <span>300</span></span>
            </div>
        </div>
    </div>
</template>

<script>
import ListTitle from '@/components/home/ListTitle'
export default {
    name: 'Home',
    components: {
        ListTitle
    },
    data () {
        return {
            username: '未登录',
            bannerImg: require('@/assets/img/banner.jpg'),
            sortList: [{
                id: 1,
                src: require('@/assets/img/zhuanchu.png'),
                text: '转出',
                link: '#'
            }, {
                id: 2,
                src: require('@/assets/img/guamai.png'),
                text: '挂卖',
                link: '#'
            }, {
                id: 3,
                src: require('@/assets/img/shuzi.png'),
                text: '数字资产',
                link: 'Digital'
            }, {
                id: 4,
                src: require('@/assets/img/zhuanru.png'),
                text: '转入',
                link: '#'
            }, {
                id: 5,
                src: require('@/assets/img/qiugou.png'),
                text: '求购',
                link: '#'
            }, {
                id: 6,
                src: require('@/assets/img/jifen.png'),
                text: '积分兑换',
                link: '#'
            }]
        }
    }
}
</script>

<style lang="scss" scoped>
.header {
    display: flex;
    background-color: #fff;
    padding: 0.1rem 0.3rem;
    justify-content: space-between;
    align-items: center;
    .user-info {
        display: flex;
        align-items: center;
        .user-avatar {
            width: 0.72rem;
            height: 0.72rem;
            border-radius: 100%;
            overflow: hidden;
            img {
                width: 100%;
                height: 100%;
            }
        }
        .username {
            margin-left: 0.2rem;
            font-size: 0.4rem;
        }
    }
    .saoyisao {
        .cmrc-saoyisao {
            font-size: 0.56rem;
            color: #F1552F;
        }
    }
}
.banner-img-wrapper {
    img {
        width: 100%;
    }
}
.page-container {
    padding-bottom: 1.12rem;
}
.sort-list,
.my-account,
.asset-management {
    background-color: $white;
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
.sort-list {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    padding-top: 0.3rem;
    padding-bottom: 0.1rem;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;

    li {
        min-width: 33.333333%;
        text-align: center;
        -webkit-box-flex: 1;
        -ms-flex: 1;
        flex: 1;
        margin-bottom: 0.2rem;

        span {
            color: #000;
        }
        img {
            width: calc(100% - 1.2rem);
            margin-bottom: 0.1rem;
        }
        .sort-text {
            font-size: 0.32rem;
        }
    }
}
.my-account,
.asset-management {
    padding-left: 0.6rem;
    padding-right: 0.5rem;
}
.account-info,
.management-info {
    padding-top: 0.1rem;
    padding-bottom: 0.4rem;
    font-size: 0.30rem;

    > span {
        margin-right: 0.1rem;

        &:last-child {
            margin-right: 0;
        }
        > span {
            color: #f1552f;
        }
    }
}
</style>
