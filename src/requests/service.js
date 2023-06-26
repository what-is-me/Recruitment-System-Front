import axios from 'axios'
const service = axios.create({
  baseURL:'/fapi',
  headers:{
    "ContentType":"application/json"
  }
})
export const picture_upload_url="http://10.100.164.30:8089/api/v1/upload"

export default service
