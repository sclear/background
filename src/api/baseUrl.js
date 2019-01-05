import { fetch } from './http'
import { ipUrl } from './env'


class api  {

    //上传图片
    upload(data) {
        return fetch('post',`${ipUrl}/kxk01yx_ierdh/Uploader/add`,data,1)
    }
    //上传视频
    upvideo(data,el) {
        return fetch('post',`${ipUrl}/kxk01yx_ierdh/Uploader/video`,data,el)
    }
    //上传图片
    aaa(data) {
        return fetch('post',`${ipUrl}/kxk01yx_ierdh/Uploader/aaa`,data,1)
    }
}



export default new api()

