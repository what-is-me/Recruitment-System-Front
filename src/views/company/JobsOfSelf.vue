<script>
import {defineComponent} from 'vue'
import {getCompanyProfile} from "@/requests/requests";
import JobEdit from "@/views/company/JobEdit.vue";
import JobCard from "@/components/JobCard.vue";

export default defineComponent({
  name: "JobsOfSelf",
  components: {JobCard, JobEdit},
  methods: {
    showModalEdit(jid) {
      this.editoringJid = jid ? jid : null;
      this.showModal = true;
    }
  },
  data() {
    return {
      showModal: false,
      list: [],
      editoringJid: null,
      filter_: "",
      keyWord: ""
    }
  },
  created() {
    getCompanyProfile().then((res) => {
      const {msg, data} = res.data;
      if (msg === '未登录') this.$router.push('/');
      this.list = (data.jobs ? data.jobs : []).reverse()
    });
  }
})
</script>

<template>
  <n-modal
      v-model:show="showModal"
      size="huge"
      style="width: 1000px"
      preset="card"
      :bordered="false"
      :mask-closable="false"
  >
    <job-edit v-model:jid="editoringJid"/>
  </n-modal>
  <n-layout style="position: relative;height: 100%;margin-right: 10%" :native-scrollbar="false">
    <n-layout-header style="position: absolute;left: 0;top: 0;height: 10%;">
      <n-grid :cols="8" x-gap="12" style="margin-top: 20px">
        <n-gi>
          <n-button @click="filter_=keyWord" type="primary" dashed style="width: 100%">
            <n-icon size="large">
              <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 32 32">
                <g fill="none">
                  <path
                      d="M13.5 3C7.701 3 3 7.701 3 13.5S7.701 24 13.5 24c2.45 0 4.703-.839 6.489-2.244l6.878 6.878a1.25 1.25 0 1 0 1.768-1.768l-6.879-6.878A10.455 10.455 0 0 0 24 13.5C24 7.701 19.299 3 13.5 3zm-8 10.5a8 8 0 1 1 16 0a8 8 0 0 1-16 0z"
                      fill="currentColor"></path>
                </g>
              </svg>
            </n-icon>
            筛选
          </n-button>
        </n-gi>
        <n-gi :span="4">
          <n-input v-model:value="keyWord" placeholder="请输入关键字"/>
        </n-gi>
        <n-gi :offset="2">
          <n-button type="primary" style="text-align: center;width: 100%" @click="showModalEdit(null)">
            新增职位
          </n-button>
        </n-gi>
      </n-grid>
    </n-layout-header>
    <n-layout-content style="position: absolute;left: 0;top: 10%;height: 90%;width: 100%" :native-scrollbar="false">
      <n-list hoverable clickable bordered>
        <job-card v-for="jid in list" :key="jid" :jid="jid" :filter="filter_" @click="showModalEdit(jid)"/>
      </n-list>
    </n-layout-content>
  </n-layout>
</template>

<style scoped>

</style>
