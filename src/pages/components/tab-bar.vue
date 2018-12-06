<template>
    <div class='tabBar'>
        <div
            class='tabBar-item'
            v-for='(item, index) in tabBarList' :key='index'
            :class="{'active': current === index}"
            @click='tabChange(index)'
        >
            <i :class='[item.icon]'></i>
            <span>{{item.title}}</span>
        </div>
    </div>
</template>
<script>
export default {
    props: {
        tabBarList: {
            type: Array,
            default () {
                return []
            }
        },
        current: {
            type: Number,
            default: 0
        }
    },
    data () {
        return {
            tabBarList: this.tabBarList,
            current: this.current
        }
    },
    methods: {
        tabChange (ind) {
            if (ind === this.current) return
            switch (ind) {
                case 0: // 首页
                    wx.navigateTo({
                        url: '/pages/home/main'
                    })
                    break;
                case 1: // 活动
                    break;
                case 2: // 汗水日记
                    break;
                case 3: // 我的
                    wx.navigateTo({
                        url: '/pages/user/main'
                    })
            }
        }
    },
    mounted () {
        // debugger
    }
}
</script>
<style lang="less">
@import '../../assert/css/varibale.less';
.tabBar{
	position: fixed;
	bottom:0;
	width:100%;
	height:60px;
	.flex;
	flex-direction: row;
	background: #fff;
	flex-flow: row nowrap;
	border-top: 1px solid #eee;
	.tabBar-item{
		i{
			font-size: 16px;
			margin-bottom: 5px;
		}
		font-size: 12px;
		text-align: center;
		flex:1 1 100%;
    }
    .active {
        i{
            color:#FF8C00;
        }
        span{
            color:#FF8C00;
        }
    }
}
</style>