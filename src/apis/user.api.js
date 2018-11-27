import callApi from '../utils/httpConfig'
const defaultApi = (...args) => callApi(...args)
class UserApi {
    getUserInfo = defaultApi
    getPersonalOrders = defaultApi
    getPersonalModules = defaultApi
    getRecommendApps = defaultApi
}
export default new UserApi()