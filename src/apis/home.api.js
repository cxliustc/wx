import callApi from '../utils/httpConfig'
class HomeApi {
    getGoodsList = (...args) => callApi(...args)
}
export default new HomeApi()