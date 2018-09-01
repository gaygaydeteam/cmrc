<template>
    <div>
        <user-info></user-info>
        <ul class="item-list">
            <li v-for="items in itemList" :key="items.id">
                <list-title>{{items.title}}</list-title>
                <ul class="sort-list">
                    <li v-for="item in items.sortList" :key="item.id">
                        <a :href="item.src">
                            <div class="icon-img">
                                <img :src="item.icon">
                            </div>
                            <span class="item-text">{{item.text}}<i></i></span>
                        </a>
                    </li>
                </ul>
            </li>
        </ul>
    </div>
</template>

<script>
import UserInfo from '../components/me/UserInfo'
import ListTitle from '../components/home/ListTitle'
export default {
    name: 'me',
    components: {
        UserInfo,
        ListTitle
    },
    data () {
        return {
            itemList: [{
                title: '资产管理',
                id: 1,
                sortList: [{
                    src: '',
                    icon: '',
                    id: 1,
                    text: '积分明细列表'
                }, {
                    src: '',
                    icon: '',
                    id: 2,
                    text: '零钱明细列表'
                }, {
                    src: '',
                    icon: '',
                    id: 3,
                    text: '零钱销售列表'
                }, {
                    src: '',
                    icon: '',
                    id: 4,
                    text: '零钱购买列表'
                }]
            }, {
                title: '市场',
                id: 2,
                sortList: [{
                    src: '',
                    icon: '',
                    id: 1,
                    text: '注册新会员'
                }, {
                    src: '',
                    icon: '',
                    id: 2,
                    text: '分享二维码'
                }, {
                    src: '',
                    icon: '',
                    id: 3,
                    text: '积分兑换'
                }, {
                    src: '',
                    icon: '',
                    id: 4,
                    text: '我的粉丝'
                }]
            }, {
                title: '个人专区',
                id: 3,
                sortList: [{
                    src: '',
                    icon: '',
                    id: 1,
                    text: '银行资料'
                }, {
                    src: '',
                    icon: '',
                    id: 2,
                    text: '密码修改'
                }, {
                    src: '',
                    icon: '',
                    id: 3,
                    text: '在线留言'
                }, {
                    src: '',
                    icon: '',
                    id: 4,
                    text: '安全退出'
                }]
            }]
        }
    }
}
</script>

<style lang="scss">

</style>
