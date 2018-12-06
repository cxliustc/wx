<template>
	<div class="goods-details">
		<!-- 
			@scrolltolower="scrolltolower"
			@scroll="scroll"
		 -->
		<scroll-view
			class="goods-details-content"
			:scroll-y="true"
		>
			<swiper class="goods-details-banner"
			circular="true"
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
					<div class="goods-price-box">
						<div class="goods-price">
							<img src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=377176237,4092470524&fm=26&gp=0.jpg" alt="">
							<span>99</span>
						</div>
						<div class="goods-price-num">
							<span>包邮</span>
							<span>剩余0件</span>
						</div>
					</div>
				</div>
				<div class="record">
					<div class="record-exchange-txt">兑换记录：</div>
					<ul class="record-exchange-img">
						<li v-for='(item, index) in banner_url' :key='index'>
							<img :src="item.imgUrl" alt="">
						</li>
					</ul>
					<div class="record-exchange-arrow iconfont icon-jiantou" @click='goToRecord'></div>
				</div>
			</div>
			<div class="instructions">
				<h3>兑换说明</h3>
				<p>1、商品库存每天6:00-24:00每个专区每小时至少补货一次</p>
				<p>2、兑换成功的商品将在5个工作日内发货</p>
				<p>3、邮寄区域暂不支持新疆、西藏地区</p>
				<p>4、免费兑换的商品均暂不支持退换货</p>
				<p>温馨提示：兑换商品前去“我的”“地址管理”内填写详细的邮寄地址并确认（要不商品怎么找到您）</p>
			</div>
			<div class="gray-bg"></div>
			<div class="goods-detail">
				<h3>商品详情</h3>
				<div>
					<img v-for='(item, index) in banner_url' :src="item.imgUrl" :key='index' alt="">
				</div>
			</div>
		</scroll-view>
		<div class="goods-details-btn">
			<div class="collection">
				<i class="iconfont">&#xe657;</i>
				<i>收藏</i>
			</div>
			<div class="invitation">燃力不足，快去邀请好友得步数吧</div>
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
	},
	methods: {
		// scrolltolower(){
		// 	console.log(7)
		// },
		// scroll(e) {
		// 	console.log(6)
		// 	console.log(e)
		// },
		goToRecord () {
            wx.navigateTo({
                url: '/pages/goods-details-record/main'
            })
        }
	}
}
</script>
<style lang="less" scoped>
@import '../../assert/css/varibale.less';
	.goods-details{
		height: 100%;
		position: absolute;
		.flex;
		.goods-details-content{
			width: 100%;
			overflow-y: auto;
			overflow-x: hidden;
			-webkit-overflow-scrolling: touch;
			flex: 1;
		}
		.goods-details-btn{
			width: 100%;
			height: 60px;
			padding: 10px 15px;
			box-sizing: border-box;
			.flex;
			flex-direction: row;
			.collection{
				width: 40px;
				height: 40px;
				border-radius: 50%;
				font-size: 8px;
				text-align: center;
				margin-right: 10px;
				border: 1px solid #f8f8f8;
				box-sizing: border-box;
				padding-top: 4px;
				cursor: pointer;
				-webkit-tap-highlight-color:rgba(255,255,255,0);
			}
			.invitation{
				flex: 1;
				height: 40px;
				line-height: 40px;
				font-size: 14px;
				border-radius: 20px;
				text-align: center;
				color: #fff;
				cursor: pointer;
				-webkit-tap-highlight-color:rgba(255,255,255,0);
				background:-webkit-linear-gradient(left,#7a62fe,#c87ae1);/*for safari5.1-6.0*/
				background:-o-linear-gradient(right,#7a62fe,#c87ae1);/*Opera 11.1-12.0*/
				background:-moz-linear-gradient(right,#7a62fe,#c87ae1);/*firefox 3.6-15*/
				background:linear-gradient(to right,#7a62fe,#c87ae1);/*标准语法*/
			}
		}
		.gray-bg{
			background: #f8f8f8;
			height: 30px;
		}
	}
	.goods-details-banner{
		width: 100%;
		height: 364px;
		position: relative;
		z-index: 1;
		.goods-details-swiper-slide, img{
			width: 100%;
			height: 100%;
		}
	}
	.goods-details-cart{
		width: 100%;
		height: 154px;
		background: #f8f8f8;
		padding: 0 15px;
		box-sizing: border-box;
		// position: relative;
		// top: -30px;
		margin-top: -30px;
		.goods-msg{
			width: 100%;
			height: 80px;
			line-height: 44px;
			padding-left: 15px;
			padding-right: 18px;
			margin-bottom: 15px;
			border-radius: 2px;
			padding-top: 2px;
			background: #fff;
			box-sizing: border-box;
			position: relative;
			z-index: 2;
			box-shadow: -1px -1px 5px rgba(0,0,0,0.2);
			.goods-name{
				height: 39px;
				line-height: 30px;
				padding-top: 9px;
				font-size: 16px;
				box-sizing: border-box;
			}
			.goods-price-box{
				height: 35px;
				line-height: 35px;
				.flex;
				flex-direction: row;
				> div{
					flex: 1;
				}
				.goods-price{
					span{
						font-size: 16px;
						color: red;
						display: inline-block;
						vertical-align: middle;
					}
					img{
						width: 16px;
						height: 16px;
						display: inline-block;
						margin-right: 6px;
						vertical-align: middle;
					}
				}
				.goods-price-num{
					color: #939393;
					font-size: 14px;
					text-align: right;
					span:first-child{
						margin-right: 10px;
					}
				}
			}
		}
		.record{
			width: 100%;
			height: 50px;
			line-height: 32px;
			background: #fff;
			font-size: 14px;
			padding: 9px 10px 9px 15px;
			box-sizing: border-box;
			.flex;
			flex-direction: row;
			.record-exchange-txt{
				width: 84px;
				height: 100%;
			}
			.record-exchange-img{
				flex: 1;
				height: 100%;
				overflow: hidden;
				li{
					width: 32px;
					height: 32px;
					border-radius: 50%;
					margin-right: 6px;
					float: left;
					overflow: hidden;
				}
				img{
					width: 100%;
					height: 100%;
					display: block;
				}
			}
			.record-exchange-arrow{
				width: 32px;
				height: 32px;
				line-height: 32px;
				color: #c6c6c6;
				text-align: center;
				border-radius: 50%;
				border: 1px solid #f7f7f7;
			}
		}
	}
	.instructions{
		height: 170px;
		padding: 6px 15px 10px;
		background: url(https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1543824464244&di=186913dca76e9a93d09fdbaf177bbe2a&imgtype=0&src=http%3A%2F%2Fpic.90sjimg.com%2Fback_pic%2F00%2F00%2F40%2F82%2F4db824aaf9f925a275d7146291fe8446.jpg) no-repeat center center;
		background-size: cover;
		h3{
			width: 100%;
			height: 40px;
			line-height: 40px;
			text-align: center;
			font-size: 16px;
			background: url('../../assert/images/bg-point.jpg') no-repeat center center;
			background-size: auto 10px;
		}
		p{
			line-height: 20px;
			font-size: 14px;
			color: #6c6c6c;
		}
	}
	.goods-detail{
		h3{
			width: 100%;
			height: 40px;
			line-height: 40px;
			text-align: center;
			font-size: 16px;
			background: url('../../assert/images/bg-point.jpg') no-repeat center center;
			background-size: auto 10px;
		}
		> div{
			overflow: hidden;
			img{
				width: 100%;
				display: block;
			}
		}
	}
</style>
