import { httpGet, httpPost } from "../utils/http"
import base from "./base"

/**
 * 有多少的网络请求，一次性就看到了
 * 
 *  redux: action集中在一起
 * 
 */
const api = {
    getChengpin() {
        return httpGet(base.ownUrl + base.chengpin);
    },
    getLogin(params) {
        return httpPost(base.ownUrl + base.login, params);
    }

}

export default api;