<template>
    <div class="exchange-page">
        <div class="header-img">
            <img :src="headerImg">
        </div>
        <div class="exchange-contain">
            <div class="btn-wrapper">
                <span class="hang-up">挂卖</span>
                <span class="buy">求购</span>
            </div>
            <table class="exchange-table">
                <thead>
                    <tr>
                        <th class="col">账号</th>
                        <th class="col">数量</th>
                        <th class="col">金额</th>
                        <th class="col">日期</th>
                        <th class="col">操作</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="item in itemList" :key="item.id">
                        <td>{{item.account}}</td>
                        <td>{{item.number}}</td>
                        <td>{{item.money}}</td>
                        <td>{{item.date}}</td>
                        <td><button class="send">出售</button></td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Exchange',
    data () {
        return {
            headerImg: '',
            itemList: [{
                id: 1,
                account: '1234567',
                number: '300',
                money: '255.00',
                date: '2018.08.28'
            }, {
                id: 2,
                account: '1234567',
                number: '300',
                money: '255.00',
                date: '2018.08.28'
            }, {
                id: 3,
                account: '1234567',
                number: '300',
                money: '255.00',
                date: '2018.08.28'
            }, {
                id: 4,
                account: '1234567',
                number: '300',
                money: '255.00',
                date: '2018.08.28'
            }, {
                id: 5,
                account: '1234567',
                number: '300',
                money: '255.00',
                date: '2018.08.28'
            }, {
                id: 6,
                account: '1234567',
                number: '300',
                money: '255.00',
                date: '2018.08.28'
            }, {
                id: 7,
                account: '1234567',
                number: '300',
                money: '255.00',
                date: '2018.08.28'
            }]
        }
    }
}
</script>

<style lang="scss">

</style>
