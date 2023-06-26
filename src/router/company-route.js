import {R} from "@/router/methods";
import {Edit} from "@vicons/tabler";
import {DocumentOutline, HomeOutline} from "@vicons/ionicons5";

export const companyRoute = [
  R({
    path: '',
    name: 'company-main',
    label: '职位管理',
    icon: HomeOutline,
    component: () => import('../views/company/JobsOfSelf.vue'),
  }),
  R({
    path: 'company-profile-edit',
    name: 'company-profile-edit',
    label: '企业详情',
    icon: Edit,
    component: () => import('../views/company/ProfileEdit.vue'),
  }),
  R({
    path: 'company-submitted',
    name: 'company-submitted',
    label: '收信箱',
    icon: DocumentOutline,
    component: () => import('../views/company/SubmittedResumesView.vue'),
  }),
];
