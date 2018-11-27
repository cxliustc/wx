<template>
    <div class="collection-container">
        <div class="circle">
            <div>
                今日步数
            </div>
            <div class="step-number">
                8888
            </div>
            <div class="exchange-action">
                点击兑换
            </div>
            <div>
                （每日24点清零）
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data () {
        return {}
    }
}
</script>
<style lang="less">
@import '../../assert/css/varibale.less';
div.collection-container {
    width: 100%;
    height: 300px;
    .flex;
    flex-direction: row;
    justify-content: center;
    .circle {
        .flex;
        justify-content: center;
        width: 150px;
        height: 150px;
        border-radius: 50%;
        background-image: linear-gradient(to bottom right, hotpink, darkblue);
        animation: bigger 2s infinite;
        animation-timing-function: linear;
        animation-direction: alternate;
        // border: 1px solid darkblue;
        box-shadow: 0 0 15px darkblue;
        div {
            font-size: 10px;
            color: white;
        }
        div.step-number {
            font-size: 26px;
        }
        div.exchange-action {
            font-size: 14px;
        }
    }
}

    @keyframes bigger {
        from {
            transform: scale(1);
        }
        to {
            transform: scale(1.2);
        }
    }
</style>