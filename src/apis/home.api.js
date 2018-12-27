import callApi from '../utils/httpConfig'
class HomeApi {
    getGoodsList = () => callApi({
        request: {
            type: '1',
            pageNum: 1
        },
        method: 'post',
        endpoint: 'https://bushu.yooqun.com/api/product/query'
    })
    login = ({request}) => callApi({
        endpoint: 'https://bushu.yooqun.com/api/user/authorize',
        request,
        method: 'post'
    })
    getUserInfo = ({request}) => callApi({
        endpoint: '',
        request,
        method: 'post'
    })
    decrypt = ({request}) => callApi({
        endpoint: 'https://bushu.yooqun.com/api/user/decrypt',
        method: 'post',
        request
    })
}
export default new HomeApi()