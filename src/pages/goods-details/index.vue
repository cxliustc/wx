<template>
    <div class="goods-details">
		<swiper class="goods-details-banner"
			:autoplay='bannerSeting.autoplay'
			:interval='bannerSeting.interval'
			:duration='bannerSeting.duration'
		>
			<swiper-item class="goods-details-swiper-slide" v-for='(item, index) in banner_url' :key='index'>
				<img v-if="item.imgUrl" class="imgw" :src='item.imgUrl' />
				<span v-else>默认图</span>
			</swiper-item>
		</swiper>
		<div class="goods-details-cart">
			<div class="goods-msg">
				<p class="goods-name">红花瓷碗2只</p>
				<p class="goods-price"></p>
			</div>
			<div class="record">
				兑换记录：
			</div>
		</div>
    </div>
</template>
<script>
import {homeApis} from '../../apis'
console.log(homeApis)
export default {
	data () {
		return {
			banner_url: [{
				imgUrl: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=377176237,4092470524&fm=26&gp=0.jpg'
			}, {
				imgUrl: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1874628832,491201434&fm=26&gp=0.jpg'
			}, {
				imgUrl: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=93545208,3548906171&fm=26&gp=0.jpg'
			}],
			bannerSeting: {
				autoplay: true,//是否开启自动切换
				interval: 3000,//自动切换时间间隔
				duration: 500//滑动动画时长
			}
		}
	},
	components: {
	}
}
</script>
<style lang="less" scoped>
@import '../../assert/css/varibale.less';
	.goods-details{
		
	}
	.goods-details-banner{
		width: 100%;
		height: 364px;
		.goods-details-swiper-slide, img{
			width: 100%;
			height: 100%;
		}
	}
	.goods-details-cart{
		width: 100%;
		height: 124px;
		background: #f8f8f8;
		padding: 0 15px;
		box-sizing: border-box;
		.goods-msg{
			width: 100%;
			height: 80px;
			line-height: 44px;
			padding-left: 15px;
			padding-right: 18px;
			margin-top: -30px;
			border-radius: 2px;
			padding-top: 2px;
			background: #fff;
			box-sizing: border-box;
			position: relative;
			z-index: 9;
			.goods-name{
				font-size: 16px;
			}
		}
	}
</style>
