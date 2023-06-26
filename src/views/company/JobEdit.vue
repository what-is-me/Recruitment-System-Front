<script>
import {defineComponent} from 'vue'
import {deleteJob, getJob, saveJob} from "@/requests/requests";
import {eduOption, setProperties} from "@/utils/utils";

export default defineComponent({
  name: "JobEdit",
  props: {jid: String},
  data() {
    return {
      eduOptions: eduOption,
      job: {
        jid: null,
        name: "",
        address: "",
        edu_background: "博士",
        tags: [],
        description: "",
        price_min: 0,
        price_max: 0,
      }
    }
  },
  created() {
    this.load();
  },
  methods: {
    callDelBox() {
      window.$dialog.warning({
        title: "删除确认",
        content: `你确定删除职位${this.job.name}?`,
        positiveText: "确定",
        negativeText: "取消",
        onPositiveClick: () => {
          deleteJob(this.job.jid).then((res) => {
            const {msg, code} = res.data;
            if (code === 200) window.$message.success(msg);
            else window.$message.error(msg);
            if (msg === '未登录') this.$router.push('/');
            location.reload();
          })
        }
      });
    },
    load() {
      if (this.jid !== "" && this.jid !== null) {
        getJob(this.jid).then((res) => {
          const {data} = res.data;
          setProperties(this.job, data);
        })
      } else {
        setProperties(this.job, {
          jid: null,
          name: "",
          address: "",
          edu_background: "不限",
          tags: [],
          description: "",
          price_min: 0,
          price_max: 0,
        });
      }
    },
    submit() {
      if (!this.job.name.length) {
        window.$message.error("未填写职位名称");
        return;
      }
      saveJob(this.job).then((res) => {
        const {msg, code} = res.data;
        if (msg === '未登录') this.$router.push('/');
        if (code === 200) {
          window.$message.success("更新成功");
          if (!this.jid) location.reload()
        } else {
          window.$message.error("修改失败");
        }
      })
    }
  }
})
</script>

<template>
  <n-form :model="job">
    <n-form-item-row label="职位名称">
      <n-input v-model:value="job.name"/>
    </n-form-item-row>
    <n-form-item-row label="工作地址">
      <n-input v-model:value="job.address"/>
    </n-form-item-row>
    <n-form-item-row label="需求学历">
      <n-radio-group v-model:value="job.edu_background" name="radio-group">
        <n-space>
          <n-radio v-for="item in eduOptions" :key="item.value" :value="item.value">
            {{ item.label }}
          </n-radio>
        </n-space>
      </n-radio-group>
    </n-form-item-row>
    <n-form-item-row label="标签">
      <n-dynamic-tags v-model:value="job.tags"/>
    </n-form-item-row>
    <n-form-item-row label="薪资范围">
      <n-grid cols="7">
        <n-gi :span="3">
          <n-input-number v-model:value="job.price_min" :min="0" :max="500000" :step="500"/>
        </n-gi>
        <n-gi style="text-align: center">
          <n-h3>-</n-h3>
        </n-gi>
        <n-gi :span="3">
          <n-input-number v-model:value="job.price_max" :min="job.price_min" :step="500"/>
        </n-gi>
      </n-grid>
    </n-form-item-row>
    <n-form-item-row label="职位描述">
      <n-input type="textarea" autosize v-model:value="job.description"/>
    </n-form-item-row>
    <n-form-item-row>
      <n-grid :cols="8">
        <n-gi>
          <n-button type="primary" @click="submit" style="width: 100%">提交</n-button>
        </n-gi>
        <n-gi :offset="6">
          <n-button v-if="jid" type="error" @click="callDelBox" style="width: 100%">删除</n-button>
        </n-gi>
      </n-grid>
    </n-form-item-row>
  </n-form>
</template>

<style scoped>
</style>
