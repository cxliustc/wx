<template>
    <div class="submit-order">
        <div class="submit-order-detail">
            <div class="addressCont">
                <a class='addAddress' href="" @click='goToLink'>请添加收货地址</a>
            </div>
            <div class="goods-detail">
                <div class="detail">
                    <img src="https://ss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=2587346633,3449480076&fm=173&app=49&f=JPEG?w=218&h=146&s=142AF75811BB22272498AC000300E0D2" alt="">
                    <div class="cont">
                        <h3 class='title'>多功能插手暖手抱枕（样式随机）</h3>
                        <p class="priceAndNum">
                            <span class="price">
                                <i class="iconfont icon-hotfill"></i>
                                19
                            </span>
                            <span class="num">X 1</span>
                        </p>
                    </div>
                </div>
                <div class="remarks">
                    <span>买家备注：</span>
                    <input type="text" placeholder="限制100字以内">
                </div>
            </div>
            <div class="pay-detail">
                <h3 class="title">
                    支付信息
                </h3>
                <p class="prices">
                    <span>燃力：</span>
                    <span>19</span>
                </p>
                <p class="prices">
                    <span>运费：</span>
                    <span>￥9</span>
                </p>
            </div>
        </div>
        <div class="submit-btn">
            <p>
                实付：
                <i class="iconfont icon-hotfill"></i>
                <span>
                    19 + ￥9
                </span>
                <a href="">立即兑换</a>
            </p>
        </div>
    </div>
</template>
<script>
import {userApi} from '../../apis/index'
export default {
    data () {
        return {
        }
    },
    created () {
    },
    methods: {
        goToLink () {
            wx.navigateTo({
                url: '/pages/addresslist/main'
            })
        }
    }
}
</script>
<style lang="less">
@import '../../assert/css/varibale.less';
.submit-order{
    width:100vw;
    height:100vh;
    .flex;
    flex-direction: column;
    background: #f8f8f8;
    .submit-order-detail{
        width: 100%;
        flex:1;
        .addressCont{
            background: #fff;
            height:94px;
            margin-bottom: 10px;
            .flex;
            flex-direction: row;
            align-items: center;
            justify-content: center;
            .addAddress{
                .flex;
                width:190px;
                height:42px;
                border-radius: 50px;
                flex-direction: row;
                border:1px solid #dadadb;
                align-items: center;
                justify-content: center;
                color:orange;
                font-size: 14px;
            }
        }
        .goods-detail{
            margin-bottom: 6px;
            .flex;
            background: #fff;
            width:100%;
            flex-direction: column;
            .detail{
                width: 100%;
                padding:15px 15px 25px;
                box-sizing: border-box;
                border-bottom: 1px solid #dadadb;
                .flex;
                flex-direction: row;
                img{
                    width:75px;
                    height:75px;
                    .flex;
                    border-radius: 5px;
                    margin-right: 10px;
                }
                .cont{
                    flex:1;
                    .title{
                        font-size: 16px;
                        height: 32px;
                        margin-bottom: 10px;
                    }
                    .priceAndNum{
                        .flex;
                        flex-direction: row;
                        justify-content: space-between;
                        .price{
                            .flex;
                            flex-direction: row;
                            >i{
                                font-size: 16px;
                                color:#bd3a21;
                                margin-right: 5px;
                            }
                            color:red;
                            font-size: 14px;
                        }
                        .num{
                            color:#343434;
                            font-size: 14px;
                        }
                    }
                }
            }
            .remarks{
                width: 100%;
                height:64px;
                .flex;
                flex-direction: row;
                padding:0 15px;
                box-sizing: border-box;
                align-items: center;
                span{
                    color:#343434;
                    font-size: 16px;
                    .flex;
                    width:80px;
                }
                input{
                    color:#939393;
                    flex:1;
                    font-size: 16px;
                }
            }
        }
        .pay-detail{
            background: #fff;
            width:100%;
            padding:17px 15px;
            box-sizing: border-box;
            .title{
                font-size: 16px;
            }
            .prices{
                .flex;
                flex-direction: row;
                justify-content: space-between;
                font-size: 14px;
                color:#939393;
                margin-top: 10px;
            }
        }
    }
    .submit-btn{
        width:100%;
        background: #fff;
        p{
            .flex;
            height:60px;
            color:#343434;
            font-size: 16px;
            flex-direction: row;
            justify-content:flex-end;
            align-items: center;
            padding-right: 15px;
            >i{
                font-size: 16px;
                color:#bd3a21;
                margin-right: 5px;
            }
            span{
                color:red;
            }
            a{
                width:100px;
                height:35px;
                margin-left: 10px;
                color:#fff;
                font-size: 16px;
                .flex;
                align-items: center;
                justify-content: center;
                background: linear-gradient(to right, #f57761, #f79e5a);
                border-radius: 50px;
            }
        }
    }
    
}
</style>