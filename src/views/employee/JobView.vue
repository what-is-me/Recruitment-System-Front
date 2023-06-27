<script>
import {defineComponent} from 'vue'
import {getEmployeeProfile, getJob, starToggle, submitResume, viewJob} from "@/requests/requests";
import {setProperties} from "@/utils/utils";
import CompanyComp from "@/components/CompanyComp.vue";

export default defineComponent({
  name: "JobView",
  components: {CompanyComp},
  data() {
    return {
      job: {
        jid: "",
        company_id: "",
        name: "",
        address: "",
        edu_background: "",
        tags: [],
        description: "",
        price_min: 0,
        price_max: 0,
        stared: false,
      }
    }
  },
  created() {
    this.load()
  },
  methods: {
    back() {
      this.$router.go(-1);
    },
    load() {
      getJob(this.$route.params.jid).then((res) => {
        const {data} = res.data;
        setProperties(this.job, data);
      })
      getEmployeeProfile().then((res) => {
        const {data} = res.data;
        const {star} = data;
        //console.log(star, this.$route.params.jid, star[0] === this.$route.params.jid)
        this.job.stared = (star.includes(this.$route.params.jid));
      }).catch((res) => {
        console.log(res)
      })
      viewJob(this.$route.params.jid);
    },
    toggleStar() {
      starToggle(this.$route.params.jid).then((res) => {
        const {code} = res.data;
        if (code === 200) this.job.stared = !this.job.stared;
      })
    },
    submitResumeDialog() {
      window.$dialog.success({
        title: '确认提交',
        content: `确认提交简历给${this.job.name}?`,
        positiveText: '确定',
        negativeText: '取消',
        maskClosable: false,
        onPositiveClick: () => {
          this.submitResume()
        },
        onNegativeClick: () => {
          window.$message.error('取消投递')
        }
      })
    },
    submitResume() {
      submitResume(this.$route.params.jid).then((res) => {
        const {code} = res.data;
        if (code === 200) window.$message.success("投递成功");
        else window.$message.error("投递失败");
      })
    }
  },
})
</script>

<template>
  <n-page-header @back="back">
    <template #title>
      <n-h1>
        {{ job.name }}
      </n-h1>
    </template>
  </n-page-header>
  <n-card size="huge">
    <template #header>
      <n-h2 style="color:red">
        {{ (job.price_min / 1000).toFixed(0) }}K-{{ (job.price_max / 1000).toFixed(0) }}K
      </n-h2>
    </template>
    <template #header-extra>
      <n-space size="large">
        <n-button :type="job.stared?'warning':''" @click="toggleStar">
          <n-icon size="24">
            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                 viewBox="0 0 512 512">
              <path d="M480 208H308L256 48l-52 160H32l140 96l-54 160l138-100l138 100l-54-160z" fill="none"
                    stroke="currentColor" stroke-linejoin="round" stroke-width="32"></path>
            </svg>
          </n-icon>
          {{ job.stared ? '取消收藏' : '收藏' }}
        </n-button>
        <n-button type="primary" @click="submitResumeDialog">投递简历</n-button>
      </n-space>
    </template>
    <n-descriptions size="large" bordered :column="2">
      <n-descriptions-item label="要求学历">
        <n-tag type="info" size="large" round>{{ job.edu_background }}</n-tag>
      </n-descriptions-item>
      <n-descriptions-item label="地址">
        <n-button
            text
            tag="a"
            :href="`https://ditu.amap.com/search?query=${job.address}`"
            target="_blank"
            type="primary"
        >
          {{ job.address }}
        </n-button>
      </n-descriptions-item>
      <n-descriptions-item label="具体需求" :span="2">
        <n-p v-for="passage in job.description.split('\n')" :key="passage">
          {{ passage }}
        </n-p>
      </n-descriptions-item>
      <n-descriptions-item label="公司详情" :span="2">
        <company-comp v-if="job.company_id" :cid="job.company_id"/>
      </n-descriptions-item>
    </n-descriptions>
  </n-card>

</template>

<style scoped>
.n-icon {
  vertical-align: middle;
}
</style>
