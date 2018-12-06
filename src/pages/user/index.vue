<template>
    <div class="user">
        <div class="header">
            <div>
                <div class="userImage">
                    <img src="" alt="">
                </div>
                <div class="userName">
                    <p class='name'>小小</p>
                    <p class="idNum">ID:16262061</p>
                    <p class='sign'>
                        <i class="iconfont icon-jiaoyin"></i>
                        <span>连续签到：3天</span>
                    </p>
                </div>
            </div>
        </div>
        <div class="personal-order">
            <p class="title">
                <span class='myOrder'>我的订单</span>
                <span class='allOrders'>全部订单<i class='iconfont icon-gengduo'></i></span>
            </p>
            <ul class='icons'>
                <li v-for="(item, index) in personalOrders" :key='index'>
                    <i :class="[{'iconfont': true}, item.icon]"></i>
                    <span>{{item.name}}</span>
                </li>
            </ul>
        </div>
        <div class="personal-modules">
            <p class="title">
                <span class='myOrder'>常用功能</span>
            </p>
            <ul class='icons'>
                <li v-for="(item, index) in personalModules" :key='index' @click='goToLink(item.url)'>
                    <i :class="[{'iconfont': true}, item.icon]"></i>
                    <span>{{item.name}}</span>
                </li>
            </ul>
        </div>
        <div class="recommendation-app">
            <ul>
                <li></li>
            </ul>
        </div>
        <tab-bar :tabBarList="tabBarList" :current='3'></tab-bar>
    </div>
</template>
<script>
import {userApi} from '../../apis/index'
import TabBar from '../components/tab-bar'
const personalOrdersList = [
    {
        icon: 'icon-pay',
        name: '待支付'
    }, {
        icon: 'icon-send',
        name: '待发货'
    }, {
        icon: 'icon-deliver',
        name: '待收货'
    }, {
        icon: 'icon-refund',
        name: '退款/售后'
    }
]
const personalModulesList = [
    {
        icon: 'icon-present',
        name: '我的抽奖'
    }, {
        icon: 'icon-notice',
        name: '消息通知'
    }, {
        icon: 'icon-location',
        name: '地址管理',
        url: '/pages/addresslist/main'
    }, {
        icon: 'icon-jichumingxi',
        name: '步数明细'
    }, {
        icon: 'icon-copy',
        name: '规则说明'
    }, {
        icon: 'icon-ask',
        name: '常见问题'
    }, {
        icon: 'icon-phone_light',
        name: '联系我们'
    }, {
        icon: 'icon-settings_light',
        name: '设置'
    }, {
        icon: 'icon-service',
        name: '客服'
    }, {
        icon: 'icon-favor_light',
        name: '收藏'
    }, {
        icon: 'icon-peoplelist',
        name: '好友列表'
    }, {
        icon: 'icon-form_favor_light',
        name: '助力列表'
    }
]
const tabBarList = [{
	title: '首页',
	icon: ['iconfont', 'icon-home'],
	default: 0
}, {
	title: '活动',
	icon: ['iconfont', 'icon-present'],
	default: 1
}, {
	title: '汗水日记',
	icon: ['iconfont', 'icon-home'],
	default: 2
}, {
	title: '我的',
	icon: ['iconfont', 'icon-my'],
	default: 3
}]
export default {
    data () {
        return {
            personalOrders: personalOrdersList,
            personalModules: personalModulesList,
            recommendApps: [],
            tabBarList
        }
    },
    components: {
		'tab-bar': TabBar
	},
    created () {
    },
    methods: {
        goToLink (url) {
            if (!url) return
            wx.navigateTo({
                url
            })
        }
    }
}
</script>
<style lang="less">
@import '../../assert/css/varibale.less';
.user{
    .flex;
    width:100%;
    background: #ececec;
    height:600px;
    .header{
        height:145px;
        width:100%;
        background: #fff;
        margin-bottom: 10px;
        .flex;
        &>div{
            margin-top: 20px;
            border-radius: 5px;
            width:325px;
            height:100px;
            background: #fff;
            .flex;
            flex-direction: row;
            box-shadow: 2px 2px 5px #eee;
            justify-content:center;
            .userImage{
                width:55px;
                height:55px;
                border-radius: 50%;
                background: red;
                display: inline-flex;
                margin-right: 15px;
                img{
                    width:100%;
                    height:100%;
                    display: inline-flex;
                }
            }
            .userName{
                width:220px;
                .name{
                    font-size: 14px;
                    color:#353535;
                    font-weight: bold;
                    margin-bottom: 5px;
                }
                .idNum{
                    font-size: 12px;
                    color:#939393;
                    margin-bottom: 5px;
                }
                .sign{
                    .flex;
                    flex-direction: row;
                    .icon-jiaoyin{
                        font-size: 12px;
                        margin-right: 3px;
                        color:#FF8B9C;
                    }
                    span{
                        font-size: 12px;
                    }
                }
            }
        }
    }
    .personal-order,.personal-modules{
        .flex;
        padding:10px 15px;
        background: #fff;
        width:100%;
        box-sizing: border-box;
        margin-bottom: 10px;
        .title{
            width:100%;
            .flex;
            justify-content: space-between;
            flex-direction: row;
            padding-bottom: 10px;
            border-bottom: 1px solid #ececec;
            .myOrder{
                font-size: 14px;
                font-weight: bold;
            }
            .allOrders{
                .flex;
                flex-direction: row;
                font-size: 12px;
                 color:#939393;
                .icon-gengduo{
                    font-size: 12px;
                    color:#939393;
                }
            }
        }
        .icons{
            width:100%;
            .flex;
            flex-direction: row;
            justify-content: space-between;
            padding-top: 15px;
            box-sizing: border-box;
            li{
                .flex;
                width:80px;
                margin-bottom: 15px;
                i{
                    margin-bottom: 5px;
                    font-size: 19px;
                    background-image: -webkit-gradient(linear, left 0, right 0, from(rgb(99,169,236)), to(rgb(252,126,126)));
                    -webkit-background-clip: text; /*必需加前缀 -webkit- 才支持这个text值 */
                    -webkit-text-fill-color: transparent; 
                }
                span{
                    font-size: 12px;
                    color:#535353;
                }
            }
        }
    }
    .personal-modules{
        .icons{
            flex-wrap: wrap;
            li{
                margin-bottom: 20px;
            }
        }
        
    }
}
    
</style>