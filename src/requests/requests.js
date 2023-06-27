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

export function getCompanyProfile() {
  return require({
    url: '/api/company/profile',
    method: 'get',
  })
}

export function postCompanyProfile(profile) {
  return require({
    url: '/api/company/profile',
    method: 'post',
    data: profile
  })
}

export function findAllJobs() {
  return service({
    url: '/api/jobs',
    method: 'get'
  })
}

export function findJobs(param) {
  return service({
    url: '/api/jobs',
    method: 'post',
    data: param
  })
}

export function submitResume(jid) {
  return require({
    url: '/api/employee/submit',
    method: 'post',
    params: {jid: jid}
  })
}

export function starToggle(jid) {
  return require({
    url: '/api/employee/star-toggle',
    method: 'get',
    params: {jid: jid}
  })
}

export function findCompany(uid) {
  return service({
    url: '/api/company/profile',
    method: 'get',
    params: {id: uid}
  })
}

export function employeeSubmitted() {
  return require({
    url: '/api/employee/submitted',
    method: 'get'
  })
}

export function companySubmitted() {
  return require({
    url: '/api/company/submitted',
    method: 'get'
  })
}

export function getPassages() {
  return service({
    url: '/api/passage/all',
    method: 'get'
  })
}

export function getPassage(pid) {
  return service({
    url: `/api/passage/${pid}`,
    method: 'get'
  })
}

export function savePassage(passage, rpid) {
  rpid = rpid ? rpid : null;
  return require({
    url: '/api/passage/new',
    method: 'post',
    data: passage,
    params: {replyId: rpid}
  })
}

export function saveJob(job) {
  return require({
    url: '/api/save-job',
    method: 'post',
    data: job
  })
}

export function deleteJob(jid) {
  return require({
    url: '/api/delete-job',
    method: 'delete',
    params: {jid}
  })
}

export function viewJob(jid) {
  return require({
    url: '/api/employee/view',
    method: 'post',
    params: {jid}
  })
}

export function getRecommendJobs() {
  let uid = store.getters.getUid;
  if (!uid || uid === '') uid = '0'
  return axios.create({
    baseURL: 'http://10.100.164.30:8233',
    headers: {
      "ContentType": "application/json"
    }
  })({
    url: `/recommend/${uid}`,
    method: 'get'
  })
}
