import {R} from "@/router/methods";
import {PersonOutline} from '@vicons/ionicons5'
import {Edit} from '@vicons/tabler'
export const employeeRoute = [
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
  })
];
