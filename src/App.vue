<script>
import {homeApis} from './apis/index.js'
export default {
	created () {
		// 调用API从本地缓存中获取数据
		const logs = wx.getStorageSync('logs') || []
		logs.unshift(Date.now())
		wx.setStorageSync('logs', logs)

		console.log('app created and cache logs by setStorageSync')
    debugger
    // 获取用户信息
    wx.login({
      success: function (resLogin) {
        if (resLogin.code) {
          debugger
          homeApis.login({
            request: {
              code: resLogin.code
            }
          })
          .then(res => {
            // 存储token
            console.log('res')
            debugger
            wx.setStorageSync('token', res.data.accessToken)
            return new Promise((resolve, reject) => {
              wx.getWeRunData({
                success (resData) {
                  resolve(resData)
                },
                fail (error) {
                  reject(error)
                }
              })
            })
          })
          .then(res => {
            debugger
            return homeApis.decrypt({
              request: {
                encryptedData: res.encryptedData,
                iv: res.iv
              },
              header: {
                Authorization: wx.getStorageSync('token')
              }
            })
          })
          .then(res => {
            console.log('encryptedData', res)
          })
          .catch(error => {
            debugger
          })
        }
      }
	  })
  }
}
</script>

<style>
@import './assert/css/index.less';
@import './assert/css/iconfont.css';
.container {
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 200rpx 0;
  box-sizing: border-box;
}
/* this rule will be remove */
* {
  transition: width 2s;
  -moz-transition: width 2s;
  -webkit-transition: width 2s;
  -o-transition: width 2s;
}
</style>
