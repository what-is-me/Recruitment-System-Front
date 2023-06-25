import axios from "axios";
import service from "@/requests/service";
import {store} from "@/store";

export const require = (obj) => {
  return axios.create({
    baseURL: '/fapi',
    headers: {
      "ContentType": "application/json",
      "satoken": store.getters.getToken
    }
  })(obj)
}

export function doEmployeeLogin(user) {
  return service({
    url: '/api/employee/doLogin',
    method: 'post',
    data: user
  })
}

export function doCompanyLogin(user) {
  return service({
    url: '/api/company/doLogin',
    method: 'post',
    data: user
  })
}

export function doEmployeeSignUp(user) {
  return service({
    url: '/api/employee/sign-up',
    method: 'post',
    data: user
  })
}

export function doCompanySignUp(user) {
  return service({
    url: '/api/company/sign-up',
    method: 'post',
    data: user
  })
}

export function getJob(jid) {
  return service({
    url: '/api/job',
    method: 'get',
    params: {
      jid: jid
    }
  })
}

export function getEmployeeProfile() {
  return require({
    url: '/api/employee/profile',
    method: 'get',
  })
}

export function postEmployeeProfile(profile) {
  return require({
    url: '/api/employee/profile',
    method: 'post',
    data: profile
  })
}
