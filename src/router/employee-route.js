import {R} from "@/router/methods";
import {PersonOutline, HomeOutline, DocumentOutline} from '@vicons/ionicons5'
import {Edit, MessageCircle} from '@vicons/tabler'

export const employeeRoute = [
  R({
    path: '',
    name: 'main',
    label: '主页',
    icon: HomeOutline,
    component: () => import('../views/employee/SearchView.vue'),
  }),
  R({
    path: 'profile-view',
    name: 'profile-view',
    label: '个人简历(预览)',
    icon: PersonOutline,
    component: () => import('../views/employee/ProfileView.vue'),
  }),
  R({
    path: 'profile-edit',
    name: 'profile-edit',
    label: '个人简历(编辑)',
    icon: Edit,
    component: () => import('../views/employee/ProfileEdit.vue'),
  }),
  R({
    path: 'submitted',
    name: 'submitted',
    label: '提交的简历',
    icon: DocumentOutline,
    component: () => import('../views/employee/SubmittedResumesView.vue'),
  }),
  R({
    path: 'passage',
    name: 'passage',
    label: '发帖交流',
    icon: MessageCircle,
    component: () => import('../views/employee/PassageListView.vue'),
  }),
  {
    path: 'job/:jid',
    name: 'job-main-view',
    invisible: true,
    component: () => import('../views/employee/JobView.vue')
  },
  {
    path: 'passage-view/:pid',
    name: 'passage-view',
    invisible: true,
    component: () => import('../views/employee/PassageView.vue')
  }
];
