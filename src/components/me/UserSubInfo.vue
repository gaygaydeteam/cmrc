<template>
    <ul class="user-sub-header">
        <li>
            <span class="integral"><i></i>积分</span>
            <span class="number">4569.26</span>
        </li>
        <li>
            <span class="dib"><i></i>零钱</span>
            <span class="number">4569.26</span>
        </li>
        <li>
            <span class="settlement"><i></i>昨日结算</span>
            <span class="number">4569.26</span>
        </li>
    </ul>
</template>

<script>
export default {
    name: 'UserSubInfo'
}
</script>

<style lang="scss" scoped>
.user-sub-header {
li {
width: 33.333333%;
-webkit-box-flex: 1;
-ms-flex: 1;
flex: 1;
position: relative;
text-align: center;
padding-bottom: 0.2rem;
padding-top: 0.2rem;
&:after {
content:'';
position: absolute;
background-color: #000;
opacity: 0.2;
top: 0;
bottom: 0;
left: 0;
right: 0.02rem;
}
span {
position: relative;
z-index: 2;
}
    .dib,
    .settlement,
    .integral {
    display: block;
    margin-bottom: 0.1rem;
    }
    &:last-child {
        &:after {
        right:0;
        }
    }
}
}
</style>
