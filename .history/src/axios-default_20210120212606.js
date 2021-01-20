import * as Storage from "./services/Storage";
import axios from "axios";

axios.defaults.baseURL =
const apiInstance = axios.create()
apiInstance.interceptors.request.use(
    async config => {
        const token = await Storage.getToken()
        if (token) {
            config.headers.Authorization = 'Bearer ' + token
        }
        return config
    },
    error => {
        return Promise.reject(error)
    }
)

export default apiInstance;