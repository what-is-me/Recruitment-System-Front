<script>
import {defineComponent} from 'vue'
import {findAllJobs, findJobs} from "@/requests/requests";
import JobSearchCard from "@/components/JobSearchCard.vue";

export default defineComponent({
  name: "SearchView",
  components: {JobSearchCard},
  data() {
    return {
      eduOption: [
        {
          label: '不超过博士',
          value: '博士'
        },
        {
          label: '不超过研究生',
          value: '硕士'
        },
        {
          label: '不超过本科',
          value: '学士'
        },
        {
          label: '不超过大专',
          value: '大专'
        },
        {
          label: '低于大专',
          value: '不限'
        },
      ],
      list: [],
      queryParam: {
        name: "",
        address: "",
        edu: "博士",
        min: 0,
        max: 1000000000,
      }
    }
  },
  methods: {
    init() {
      findAllJobs().then((res) => {
        const {data} = res.data;
        this.list = data;
      })
    },
    search() {
      findJobs(this.queryParam).then((res) => {
        const {data} = res.data;
        this.list = data;
      })
    }
  },
  created() {
    this.init();
  }
})
</script>

<template>
  <n-layout style="position: relative;height: 100%;" :native-scrollbar="false">
    <n-layout-header style="position: absolute;left: 0;top: 0;height: 20%;padding-right: 5%;padding-left: 1.5%;">
      <n-form label-placement="left">
        <n-grid :cols="12" x-gap="12">
          <n-gi :span="11">
            <n-input v-model:value="queryParam.name" placeholder="输入想查找的职位名称"/>
          </n-gi>
          <n-gi>
            <n-button style="width: 100%;" type="info" @click="search">搜索</n-button>
          </n-gi>
        </n-grid>
        <n-row>
          <n-grid :cols="3" x-gap="50">
            <n-form-item-gi label="地址">
              <n-input v-model:value="queryParam.address" placeholder="输入职位所在地址"/>
            </n-form-item-gi>
            <n-form-item-gi label="要求学历" :span="2">
              <n-radio-group v-model:value="queryParam.edu" name="radio-group">
                <n-radio v-for="item in eduOption" :key="item.value" :value="item.value">
                  {{ item.label }}
                </n-radio>
              </n-radio-group>
            </n-form-item-gi>
          </n-grid>
        </n-row>
        <n-form-item label="最低薪资(月薪)">
          <n-slider
              v-model:value="queryParam.min"
              :step="1000"
              :min="0"
              :max="50000"
              :marks="{3000:'3K',5000:'5K',10000:'10K',20000:'20K',30000:'30K',50000:'50K'}"
              :format-tooltip="(value)=>`￥${(value/1000).toFixed(0)}K`"
          />
        </n-form-item>

      </n-form>
    </n-layout-header>
    <n-layout-content style="position: absolute;left: 0;top: 20%;height: 80%;width: 100%" :native-scrollbar="false">
      <n-empty v-if="list.length===0" description="没有找到任何职位" style="margin-right: 5%"/>
      <n-list hoverable clickable bordered style="margin-right: 5%">
        <n-list-item v-for="job in list" :key="job.jid">
          <job-search-card :job="job"></job-search-card>
        </n-list-item>
      </n-list>
    </n-layout-content>
  </n-layout>
</template>

<style scoped>

</style>
