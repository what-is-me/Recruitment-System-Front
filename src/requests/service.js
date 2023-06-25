import axios from 'axios'
const service = axios.create({
  baseURL:'/fapi',
  headers:{
    "ContentType":"application/json"
  }
})


export default service
