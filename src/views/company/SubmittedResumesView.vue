<script>
import {defineComponent} from 'vue'
import {companySubmitted} from "@/requests/requests";
import SubmittedResumeComp from "@/components/submittedComp/SubmittedResumeComp.vue";

export default defineComponent({
  name: "SubmittedResumesView",
  components: {SubmittedResumeComp},
  created() {
    companySubmitted().then((res) => {
      const {msg, data} = res.data;
      if (msg === '未登录') this.$router.push("/");
      this.list = (data ? data : []).reverse();
    })
  },
  methods: {
    show(item) {
      this.showResume = item;
      this.showModal = true
    }
  },
  data() {
    return {
      showModal: false,
      list: [],
      showResume: null
    }
  }
})
</script>

<template>
  <n-modal v-model:show="showModal">
    <n-card
        style="width: 1000px;height: 800px"
        :bordered="false"
        size="huge"
        role="dialog"
        preset="card"
        aria-modal="true"
    >
      <template #header>
        申请于
        <n-time :time="showResume.timespan" format="yyyy年MM月dd日 hh时mm分ss秒"/>
      </template>
      <submitted-resume-comp :resume="showResume"/>
    </n-card>
  </n-modal>
  <n-table :bordered="false" :single-line="false" style="text-align: center">
    <thead>
    <tr>
      <th>职位名称</th>
      <th>标签</th>
      <th>申请时间</th>
      <th>查看详情</th>
    </tr>
    </thead>
    <tbody>
    <tr v-for="item in list" :key="item.id">
      <td>{{ item.job.name }}</td>
      <td>
        <n-space size="large">
          <n-tag type="info" :bordered="false" v-for="tag in item.job.tags" :key="tag">
            {{ tag }}
          </n-tag>
        </n-space>
      </td>
      <td>
        <n-time :time="item.timespan" format="yyyy年MM月dd日 hh时mm分ss秒"/>
      </td>
      <td>
        <n-button @click="show(item)">查看详情</n-button>
      </td>
    </tr>
    </tbody>
  </n-table>
  <n-empty v-if="list.length===0"></n-empty>

</template>

<style scoped>

</style>
