import axios from 'axios'

export function requestGetUser(code){
    return axios.request({
        method:'post',
        url:'http://localhost:5000/oauth/authorize',
        data:code
    })
}
