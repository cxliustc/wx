<template>
    <ul>
        <li v-for="(array, index) in productList" :key="index">
            <div class="product-container">
                <div v-for="(item, key) in array" :key="key" :style="{width: productWidth}" class="product">
                    <a class="img-link" href="">
                        <div>
                            <div class="img-container" :style="{width, height: width}">
                                <img src="" alt="">
                            </div>
                        </div>
                        <div class="title">
                            <span>
                                hello world 
                            </span>
                        </div>
                    </a>
                    <div>
                        <span class="price">9</span>
                        <span class="exchange-number">兑换人数</span>
                    </div>
                    <a class="detail-link" href="">
                        <div>
                            免费兑换
                        </div>
                    </a>
                </div>
            </div>
        </li>
    </ul>
</template>
<script>
export default {
    props: {
        list: {
            type: Array,
            default () {
                return []
            }
        }
    },
    data () {
        return {
            productList: this.handleProductList(this.list),
            productWidth: '0px',
			width: '0px'
        }
    },
    methods: {
        handleProductList (list) {
			const dyadicArray = []
			let linearArray = []
			list.forEach((item, index) => {
				linearArray.push(item)
				if (index % 2 === 1) {
					dyadicArray.push(linearArray)
					linearArray = []
				}
			})
			return dyadicArray
		}
    },
    mounted () {
        let query = wx.createSelectorQuery()
		const imgContainerNode = query.select('.img-container')
		const clientWidth = wx.getSystemInfoSync().windowWidth
		const productWidth = (clientWidth - 30) / 2
		this.productWidth = `${productWidth}px`
		this.width = `${productWidth - 30}px`
    }
}
</script>
<style lang="less">
.default-flex (@flex: flex; @border: 0px solid black; @position: relative) {
	border: @border;
	position: relative;
	box-sizing: border-box;
	display: @flex;
	flex-direction: column;
	align-content: flex-start;
	flex-shrink: 0;
}
ul {
    >li {
        .default-flex;
        .product-container {
            border: 0px solid black;
            position: relative;
            box-sizing: border-box;
            display: flex;
            flex-flow: row wrap;
            margin: 0 12px;
            background-color: rgb(255, 255, 255);
            .product {
                &:nth-child(2n + 1) {
                    margin-right: 6px;
                }
                .default-flex(line-flex; 1px solid rgb(237, 237, 237));
                margin-top: 5px;
                margin-bottom: 5px;
                color: rgb(0, 0, 0);
                background-color: rgb(255, 255, 255);
                overflow: hidden;
                // height: 300px;
                >a.img-link {
                    >div {
                        .default-flex;
                        background-color: rgba(0, 0, 0, 0,03);
                        padding: 15px;
                        >div {
                            .default-flex;
                            background-color: rgb(255, 255, 255);
                            >img {
                                display: block;
                                width: 100%;
                                height: 100%;
                            }
                        }
                    }
                    >div.title {
                        .default-flex;
                        padding: 10px 10px 0px;
                        >span {
                            .default-flex(-webkit-box);
                            white-space: pre-wrap;
                            font-size: 14px;
                            text-align: left;
                            line-height: 20px;
                            margin-top: 5px;
                            margin-bottom: 5px;
                            color: rgb(62, 62, 62);
                            -webkit-line-clamp: 2;
                            overflow: hidden;
                        }
                    }
                }
                >a.detail-link {
                    text-decoration: none;
                    height: 45px;
                    width: 100%;
                    border-top: 1px solid rgb(238, 238, 238);
                    display: flex;
                    align-items: center;
                    align-content: center;
                    justify-content: center;
                    >div {
                        font-size: 14px;
                    }
                }
                >div {
                    .default-flex(flex; 0px solid black; absolute);
                    height: 40px;
                    width: 100%;
                    -webkit-box-align: center;
                    >span.price {
                        .default-flex(block; 0px solid black; relative);
                        font-size: 12px;
                        text-align: left;
                        line-height: 28px;
                        margin-left: 10px;
                    }
                    >span.exchange-number {
                        // height: 23px;
                        line-height: 28px;
                        position: absolute;
                        right: 8px;
                        // top: 8.5px;
                        font-size: 12px;
                    }
                }
            }
        }
    }
}
</style>