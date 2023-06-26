<script>
import {defineComponent} from 'vue'
import {getCompanyProfile, postCompanyProfile} from "@/requests/requests";
import {setProperties} from "@/utils/utils";

export default defineComponent({
  name: "CompanyProfileEdit",
  methods: {
    handleFinish({event}) {
      const {status, data} = JSON.parse((event?.currentTarget).response)
      if (status) {
        const {links} = data;
        this.user.pic = links.url;
      } else {
        window.$message.error("上传失败")
      }
    },
    submit() {
      postCompanyProfile(this.user).then((res) => {
        const {msg, code} = res.data;
        if (msg === '未登录') this.$router.push('/');
        if (code === 200) {
          window.$message.success("修改成功");
        } else {
          window.$message.error("修改失败");
        }
      })
    }
  },
  created() {
    getCompanyProfile().then((res) => {
      const {msg, data} = res.data;
      if (msg === '未登录') this.$router.push('/');
      setProperties(this.user, data);
    });
  },
  data() {
    return {
      user: {
        uid: "",
        pic: "",
        name: "",
        tel: "",
        email: "",
        address: "",
        introduction: "",
        tags: [],
        jobs: []
      }
    }
  }
})
</script>

<template>
  <n-layout has-sider style="position: relative;height: 100%;margin-right: 5%" :native-scrollbar="false">
    <n-layout-header style="position: absolute;left: 0;top: 0;height: 10%;">
      <n-page-header title="公司详情">
        <template #extra>
          <n-button type="primary" @click="submit">提交</n-button>
        </template>
      </n-page-header>
    </n-layout-header>
    <n-layout-content style="position: absolute;left: 0;top: 10%;height: 90%;width: 90%" :native-scrollbar="false">
      <n-form
          :label-width="80"
          :model="user"
      >
        <n-form-item label="公司logo">
          <n-grid x-gap="12" :cols="4">
            <n-gi>
              <n-avatar
                  :size="120"
                  :src="user.pic"
              />
            </n-gi>
            <n-gi>
              <n-upload
                  action="http://10.100.164.30:8089/api/v1/upload"
                  @finish="handleFinish"
              >
                <n-button>上传图片</n-button>
              </n-upload>
            </n-gi>
          </n-grid>
        </n-form-item>
        <n-form-item label="公司详细名称">
          <n-input v-model:value="user.name" placeholder="输入公司详细名称"/>
        </n-form-item>
        <n-form-item label="电话">
          <n-input v-model:value="user.tel" placeholder="输入电话号码"/>
        </n-form-item>
        <n-form-item label="公司详细地址">
          <n-input v-model:value="user.address" placeholder="输入所在城市"/>
        </n-form-item>
        <n-form-item label="email">
          <n-input v-model:value="user.email" placeholder="输入email"/>
        </n-form-item>
        <n-form-item label="公司标签">
          <n-dynamic-tags v-model:value="user.tags"/>
        </n-form-item>
        <n-form-item label="公司介绍">
          <n-input
              v-model:value="user.introduction"
              type="textarea"
              placeholder="输入公司介绍"
              autosize
          />
        </n-form-item>
      </n-form>
    </n-layout-content>
  </n-layout>
</template>

<style scoped>
.n-icon {
  vertical-align: middle;
  margin-right: 3px;
}
</style>
