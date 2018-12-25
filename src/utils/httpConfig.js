// 封装请求的api
// import axios from 'axios'

// axios.defaults.timeout = 10000
// axios.defaults.withCredentials = true
// axios.defaults.headers.post['X-Requested-With'] = 'XMLHttpRequest'
// interceptors
// 请求的拦截器

// function handleError (error) {
// 	return Promise.reject(error)
// }

// axios.interceptors.request.use(config => {
// 	return config
// }, handleError)

// response的拦截器
// axios.interceptors.response.use(res => {
// 	if (res.status !== 200) {
// 		// 弹出错误提示，统一显示为网络异常
// 		return Promise.reject(res)
// 	}
// 	return res
// }, handleError)

async function httpRequest (options) {
	// request 有可能是任何类型的数据
	let {
		endpoint = '',
		method = 'get',
		request = {},
		header = {}
	} = options
	// if (!api) throw new Error('params api is required!!!')

	let res

	try {
		res = await new Promise(function (resolve, reject) {
			wx.request({
				method,
				url: endpoint,
				data: request,
				success (res) {
					resolve(res)
				},
				header,
				fail (error) {
					reject(error)
				}
			})
		})
	} catch (error) {
		return Promise.reject(error)
	}
	return res ? (res.data ? res.data : res) : res
}

/**
 *
 * @param {Object} options
 * {
 *  endpoint 请求的路径 string
 *  api 请求的标识符 Symbol
 *  request 请求的参数
 *  waiting 是否显示出加载loading
 *  header header的相关配置
 * }
 */
export default function callApi (options) {
	let request
	try {
		request = httpRequest(options)
	} catch (error) {
		throw new Error(error)
	}
	return request
}
/**
 * 用于处理不同环境下的请求url
 */

const PREFIX_URL = ''
// let channel
export function getUrl (endpoint) {
	return `https://${PREFIX_URL}.bldz.com/${endpoint}`
}