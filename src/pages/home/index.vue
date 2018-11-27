<template>
    <div class="home-page">
		<collection></collection>
		<div class="field-items-section">
			<header>
				<span>新人专区</span>
				<span>新人限时专享</span>
			</header>
			<scroll-view scroll-x>
				<div class="scroll-container">
					<a href="">
						<div class="product">
							<div class="image"></div>
							<div class="title">简易鞋架</div>
							<div class="price">1</div>
						</div>
					</a>
					<a href="">
						<div class="product">
							<div class="image"></div>
							<div class="title">简易鞋架</div>
							<div class="price">1</div>
						</div>
					</a>
					<a href="">
						<div class="product">
							<div class="image"></div>
							<div class="title">简易鞋架</div>
							<div class="price">1</div>
						</div>
					</a>
					<a href="">
						<div class="product">
							<div class="image"></div>
							<div class="title">简易鞋架</div>
							<div class="price">1</div>
						</div>
					</a>
					<a href="">
						<div class="product">
							<div class="image"></div>
							<div class="title">简易鞋架</div>
							<div class="price">1</div>
						</div>
					</a>
					<a href="">
						<div class="product">
							<div class="image"></div>
							<div class="title">简易鞋架</div>
							<div class="price">1</div>
						</div>
					</a>
					<a href="">
						<div class="product">
							<div class="image"></div>
							<div class="title">简易鞋架</div>
							<div class="price">1</div>
						</div>
					</a>
				</div>		
			</scroll-view>
		</div>
    </div>
</template>
<script>
import {homeApis} from '../../apis'
import ProductList from '../components/product-list'
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
export default {
	data () {
		return {
			fieldItems
		}
	},
	components: {
		'product-list': ProductList,
		// 'swiper-list': SwiperList,
		'collection': Collection
	}
}
</script>
<style lang="less" scoped>
@import '../../assert/css/varibale.less';

scroll-view {
	box-sizing: border-box;
	padding: 10px 10px 0;
}
.scroll-container {
	.flex;
	flex-direction: row;
	width: 100%;
	a {
		// height: 200px;
		>.product {
			width: 80px;
			height: 120px;
			text-decoration: none;
			position: relative;
			margin-left: 6px;
			.flex;
			>div.image {
				width: 80px;
				height: 80px;
			}
			>div.title {
				font-size: 12px;
				width: 100%;
			}
			>div.price {
				font-size: 12px;
				color: red;
				width: 100%;
			}
		}
	}
}
</style>
