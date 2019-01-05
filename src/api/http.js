import axios from 'axios'
import qs from 'qs'

// // axios.defaults.timeout = 5000;
// axios.interceptors.request.use(config => {
//     return config;
// }, error => {
//     return Promise.reject(error);
// });

// // 添加响应拦截器
// axios.interceptors.response.use(response => {
//     // 对响应数据做点什么

//     return response;
// }, error => {


//     return Promise.reject(error);
// });

/**
 * 
 * @param {*} method 
 * @param {*} url 
 * @param {*} data 
 * @param {*} sum  number 上传图片格式     function 为显示进度条传递的回调函数
 */


const fetch = (method, url, data, sum) => {
    let obj;
    if (sum) {
        if (typeof sum === 'number') {
            obj = {
                method: method,
                url: url,
                data: data,
                params: data,
            }
        } else {
            obj = {
                method: method,
                url: url,
                data: data,
                params: data,
                onUploadProgress: function (progressEvent) {
                    sum(progressEvent.loaded / progressEvent.total * 100 | 0)
                },

            }
        }

    } else {
        obj = {
            method: method,
            url: url,
            data: qs.stringify(data),
            params: qs.stringify(data),
        }
    }



    if (!data) {
        delete obj.data;
        delete obj.params;
    } else if (method === 'get') {
        delete obj.data
    } else {
        delete obj.params
    }

    return new Promise((resolve, reject) => {
        axios(obj)
            .then(res => {
                if (res.status === 200) {
                    resolve(res);
                }
            })
            .catch(err => {
                reject(err)
            })
    })
}

export {
    fetch
}