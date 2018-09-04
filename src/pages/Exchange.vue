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
                        <td><button class="sale">出售</button></td>
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

<style lang="scss" scoped>
.header-img {
    margin-bottom: 0.2rem;
}
.exchange-contain {
    background-color: $white;
    padding-bottom: 0.3rem;
    .btn-wrapper {
        padding: 0.3rem 0.6rem;
        font-size: 0.36rem;
        display: flex;
        span {
            -webkit-box-flex: 1;
            -ms-flex: 1;
            flex: 1;
            width: 50%;
            text-align: center;
            background-color: $orange;
            color: $white;
            font-weight: 300;
            padding-top: 0.26rem;
            padding-bottom: 0.26rem;
            border-radius: 0.1rem;
            &:first-child {
                margin-right: 0.24rem;
            }
        }
    }
    .exchange-table {
        margin-left: 0.3rem;
        margin-right: 0.3rem;
        padding: 0.3rem 0.4rem 0.2rem;
        box-shadow: 0px 0px 6px #ccc;
        width: calc(100% - 0.6rem);
        border-radius: 0.08rem;

        th {
            color: $orange;
            text-align: center;
            width: 20%;
        }
        th,tr {
            line-height: 0.72rem;
        }
        tr {
            text-align: center;
        }
        .sale {
            background-color: $orange;
            color: $white;
            border-radius: 0.1rem;
            padding: 0.06rem 0.16rem;
            font-weight: 300;
        }
    }
}
</style>
