import axios from 'axios'

const axs = axios.create({
    baseURL: 'http://localhost:5000/',
    timeout: 5 * 1000
})

axs.interceptors.request.use(function (config) {
    // config.headers['X-Text'] = 'Text';
    return config
})

axs.interceptors.response.use(function (response) {
    // console.log(response.data)
    return response
}, function (error) {
    if (error.response.status >= 400) {
        console.error("Error", error)
        alert(error.response.status)
    }
    return Promise.reject(error)
})

export default axs