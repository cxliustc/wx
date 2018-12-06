<template>
	<div class="goods-details-record">
		<ul>
			<li v-for="(item, index) in recordList" :key='index + item.time'>
				<div class="user-img"><img :src="item.imgUrl" alt=""/></div>
				<div class="name">{{item.name}}</div>
				<div class="time">{{item.time}}</div>
			</li>
		</ul>
		<p class="total">总兑换人数：21212</p>
	</div>
</template>
<script>
import {homeApis} from '../../apis'
import {formatTime} from '../../utils/index.js'
export default {
	data () {
		return {
			recordList: [{
				name: '张三',
				time: 1543822012033,
				imgUrl: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=93545208,3548906171&fm=26&gp=0.jpg'
			}, {
				name: '李四',
				time: 1543822014033,
				imgUrl: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=93545208,3548906171&fm=26&gp=0.jpg'
			}, {
				name: '王五',
				time: new Date().getTime(),
				imgUrl: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=93545208,3548906171&fm=26&gp=0.jpg'
			}, {
				name: '赵六六',
				time: 1543822010033,
				imgUrl: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=93545208,3548906171&fm=26&gp=0.jpg'
			}]
		}
	},
	created () {
		this.recordList.map((item) => {
			item.name = this.filterName(item.name)
			item.time = this.filterTime(item.time)
		})
	},
	methods: {
		filterName(val) {
			if (val) {
				return val[0] + this.copyFn(val, '*')
			}
			return val
		},
		copyFn (val, sign) {
			var str = ''
			for (var i=0; i<val.length-1; i++) {
				str += sign
			}
			return str
		},
		filterTime (time) {
			console.log(formatTime(new Date(time)))
			return formatTime(new Date(time))
		}
	}
}
</script>
<style lang="less" scoped>
@import '../../assert/css/varibale.less';
	.goods-details-record{
		width: 100%;
		height: 100%;
		ul{
			width: 100%;
			height: 100%;
			border-top: 1px solid #f8f8f8;
			li{
				width: 100%;
				height: 40px;
				line-height: 30px;
				padding: 5px 45px 5px 15px;
				border-bottom: 1px solid #f8f8f8;
				box-sizing: border-box;
				.flex;
				flex-direction: row;
				.user-img{
					flex: 1;
					height: 30px;
					display: inline-block;
					vertical-align: middle;
					img{
						width: 30px;
						height: 30px;
						border-radius: 50%;
					}
				}
				.name{
					flex: 1;
					height: 30px;
					line-height: 30px;
					font-size: 16px;
					color: #333;
					display: inline-block;
					vertical-align: middle;
				}
				.time{
					flex: 2;
					font-size: 16px;
					color: #737373;
					display: inline-block;
					vertical-align: middle;
					text-align: right;
				}
			}	
		}
		.total{
			width: 100%;
			height: 30px;
			font-size: 12px;
			line-height: 30px;
			text-align: center;
			color: #737373;
		}
	}
</style>