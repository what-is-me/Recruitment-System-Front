import {createRouter, createWebHistory} from 'vue-router'
import {employeeRoute} from "@/router/employee-route";
import {companyRoute} from "@/router/company-route";

const routes = [
  {
    path: '/',
    name: 'login-and-sign-up',
    component: () => import( '../views/LogSignView.vue'),
    children: [
      {
        path: '',
        name: 'login',
        component: () => import('../components/LoginView.vue'),
      },
      {
        path: 'signup',
        name: 'signup',
        component: () => import('../components/SignUpView.vue'),
      }
    ]
  },
  {
    path: '/employee',
    name: 'employee-main-page',
    component: () => import('../views/EmployeeMainView.vue'),
    children: employeeRoute,
  },
  {
    path: '/company',
    name: 'company-main-page',
    component: () => import('../views/CompanyMainView.vue'),
    children: companyRoute,
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
