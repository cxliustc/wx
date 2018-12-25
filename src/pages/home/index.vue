<template>
    <div class="home-page">
		<collection></collection>
		<text selectable="true">
		{{code}}
		</text>
		<div class="field-items-section" @click="test">
			<header>
				<span>新人专区</span>
				<span class='gray'>新人限时专享</span>
			</header>
			<product-list :list="fieldItems"></product-list>
			<scroll-view scroll-x>
				<div class="scroll-container">
					<a href="" v-for='(item, index) in list' :key='index'>
						<div class="product">
							<div class="image">
								<img :src="item.imgUrl" alt="">
							</div>
							<div class="title">{{item.title}}</div>
							<div class="price">
								<i class="iconfont icon-hotfill"></i>
								{{item.price}}
							</div>
						</div>
					</a>
				</div>		
			</scroll-view>
			<tab-bar :tabBarList="tabBarList" :current='0'></tab-bar>
		</div>
    </div>
</template>
<script>
import {homeApis} from '../../apis/index.js'
import ProductList from '../components/product-list'
import TabBar from '../components/tab-bar'
// import SwiperList from '../components/swiper-list'
import Collection from '../components/collection'
// import {v4} from 'node-uuid'
console.log(homeApis)
const fieldItems = [{
	id: 0,
	title: '步友圈',
	url: ''
}, {
	id: 1,
	title: '幸运夺宝',
	url: ''
}, {
	id: 2,
	title: '好运降临',
	url: ''
}, {
	id: 3,
	title: '我的好友',
	url: ''
}]
const list = [
	{
	imgUrl: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2441299304,3312807704&fm=27&gp=0.jpg',
	title: '哈哈',
	price: 1
}, {
	imgUrl: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2441299304,3312807704&fm=27&gp=0.jpg',
	title: '方式',
	price: 1
}, {
	imgUrl: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2441299304,3312807704&fm=27&gp=0.jpg',
	title: '回复',
	price: 1
}, {
	imgUrl: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2441299304,3312807704&fm=27&gp=0.jpg',
	title: 'uu',
	price: 1
}, {
	imgUrl: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2441299304,3312807704&fm=27&gp=0.jpg',
	title: '接口',
	price: 1
}, {
	imgUrl: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2441299304,3312807704&fm=27&gp=0.jpg',
	title: '头条',
	price: 1
}, {
	imgUrl: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2441299304,3312807704&fm=27&gp=0.jpg',
	title: '恩恩',
	price: 1
}]
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
			fieldItems,
			list,
			current: 'homepage',
			tabBarList,
			code: ''
		}
	},
	components: {
		'product-list': ProductList,
		// 'swiper-list': SwiperList,
		'collection': Collection,
		'tab-bar': TabBar
	},
	methods: {
		handleChange ({ detail }) {
			this.setData({
				current: detail.key
			});
		},
		test () {
			let that = this
			wx.login({
				success: function (resLogin) {
					if (resLogin.code) {
						that.code = resLogin.code
						homeApis.login({
							request: {
							code: resLogin.code
							}
						}).then(res => {
							console.log(res)
							wx.getWeRunData({
								success (resData) {
									console.log(resData)
									debugger
								},
								fail (error) {
									debugger
								}
							})
						}).catch(error => {
							debugger
						})
					}
				}
			})
		}
	},
	created () {
		// debugger
		homeApis.getGoodsList().then(function (res) {
			const response = res
			console.log(res)
			// debugger
		}).catch(function (error) {
			console.log(error)
			// debugger
		})
	},
}
</script>
<style lang="less" scoped>
@import '../../assert/css/varibale.less';
.field-items-section{
	header{
		padding:15px;
		.flex;
		flex-direction: row;
		span{
			font-size: 20px;
			color:#343434;
		}
		span.gray{
			font-size: 14px;
			color:#939393;
			margin-left: 10px;
		}
	}
}
scroll-view {
	box-sizing: border-box;
	padding: 10px 10px 0;
}
.scroll-container {
	.flex;
	flex-direction: row;
	width: 100%;
	margin-bottom: 60px;
	a {
		// height: 200px;
		>.product {
			width: 96px;
			height: 160px;
			text-decoration: none;
			position: relative;
			margin-right: 8px;
			padding-bottom: 60px;
			.flex;
			>div.image {
				width: 96px;
				height: 96px;
				img{
					width:100%;
					height:100%;
					display: block;
				}
			}
			>div.title {
				margin: 6px 0 10px;
				font-size: 14px;
				width: 100%;
			}
			>div.price {
				.flex;
				flex-direction: row;
				>i{
					font-size: 12px;
					color:#bd3a21;
					margin-right: 5px;
				}
				font-size: 12px;
				color: red;
				width: 100%;
			}
		}
	}
}
</style>
