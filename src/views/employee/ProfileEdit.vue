<script>
import {defineComponent} from 'vue'
import {getEmployeeProfile, postEmployeeProfile} from "@/requests/requests";
import {setProperties} from "@/utils/utils";
import {picture_upload_url} from "@/requests/service";

export default defineComponent({
  name: "ProfileEdit",
  computed: {
    eduOptions() {
      return [
        {
          label: "其他",
          value: "不限"
        },
        {
          label: "大专",
          value: "大专"
        },
        {
          label: "本科",
          value: "学士"
        },
        {
          label: "研究生",
          value: "硕士"
        },
        {
          label: "博士",
          value: "博士"
        }
      ].reverse()
    }
  },
  methods: {
    picture_upload_url() {
      return picture_upload_url
    },
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
      postEmployeeProfile(this.user).then((res) => {
        const {msg, code} = res.data;
        if (msg === '未登录') this.$router.push('/');
        if (code === 200) {
          window.$message.success("修改成功");
        } else {
          window.$message.error("修改失败");
        }
      })
    },
    onCreateEdu() {
      return {
        school: "",
        major: "",
        begin: new Date(),
        end: new Date(),
        detail: ""
      };
    }
    ,
    onCreateWork() {
      return {
        company: "",
        vocation: "",
        job_name: "",
        begin: new Date(),
        end: new Date(),
        detail: ""
      };
    }
    ,
    onCreatePro() {
      return {
        name: "",
        role: "",
        url: "",
        begin: new Date(),
        end: new Date(),
        detail: ""
      };
    }
  },
  created() {
    getEmployeeProfile().then((res) => {
      const {msg, data} = res.data;
      if (msg === '未登录') this.$router.push('/');
      setProperties(this.user, data);
    });
  }
  ,
  data() {
    return {
      user: {
        uid: "",
        pic: "",
        name: "",
        tel: "",
        sex: "",
        address: "",
        birthday: 0,
        email: "",
        edu_background: "不限",
        edu: [],
        website: "",
        self_introduce: "",
        work_experiences: [],
        project_experiences: [],
        star: [],
        want_price: 0
      }
    }
  }
})
</script>

<template>
  <n-layout style="position: relative;width:100%;height: 100%;" :native-scrollbar="false">
    <n-layout-header style="position: absolute;left: 0;top: 0;height: 10%;margin-right: 5%">
      <n-page-header title="个人简历">
        <template #extra>
          <n-button type="primary" @click="submit">保存</n-button>
        </template>
      </n-page-header>
    </n-layout-header>
    <n-layout-content style="position: absolute;left: 0;top: 10%;height: 90%;width: 100%" :native-scrollbar="false">
      <n-form
          :label-width="80"
          :model="user"
          style="margin-right: 10%"
      >
        <n-form-item label="头像url">
          <n-grid x-gap="12" :cols="4">
            <n-gi>
              <n-avatar
                  :size="120"
                  :src="user.pic"
              />
            </n-gi>
            <n-gi>
              <n-upload
                  :action="picture_upload_url()"
                  @finish="handleFinish"
              >
                <n-button>上传图片</n-button>
              </n-upload>
            </n-gi>
          </n-grid>
        </n-form-item>
        <n-form-item label="姓名">
          <n-input v-model:value="user.name" placeholder="输入真实姓名"/>
        </n-form-item>
        <n-form-item label="性别">
          <n-radio-group v-model:value="user.sex" name="radio-group">
            <n-space>
              <n-radio v-for="sex in ['男','女']" :key="sex" :value="sex">
                {{ sex }}
              </n-radio>
            </n-space>
          </n-radio-group>
        </n-form-item>
        <n-form-item label="电话">
          <n-input v-model:value="user.tel" placeholder="输入电话号码"/>
        </n-form-item>
        <n-form-item label="所在城市">
          <n-input v-model:value="user.address" placeholder="输入所在城市"/>
        </n-form-item>
        <n-form-item label="出生日期">
          <n-date-picker v-model:value="user.birthday" type="date"/>
        </n-form-item>
        <n-form-item label="email">
          <n-input v-model:value="user.email" placeholder="输入email"/>
        </n-form-item>
        <n-form-item label="学历">
          <n-radio-group v-model:value="user.edu_background" name="radio-group">
            <n-space>
              <n-radio v-for="item in eduOptions" :key="item.value" :value="item.value">
                {{ item.label }}
              </n-radio>
            </n-space>
          </n-radio-group>
        </n-form-item>
        <n-form-item label="个人网站">
          <n-input v-model:value="user.website" placeholder="输入个人网站网址"/>
        </n-form-item>
        <n-form-item label="期望薪资">
          <n-input-number
              v-model:value="user.want_price"
              :default-value="8000"
              :min="0"
              button-placement="both"
          >
            <template #prefix>
              ￥
            </template>
          </n-input-number>
        </n-form-item>

        <n-divider>自我介绍</n-divider>
        <n-form-item label="自我介绍">
          <n-input
              v-model:value="user.self_introduce"
              type="textarea"
              placeholder="输入自我介绍"
              autosize
          />
        </n-form-item>
        <n-divider>教育经历</n-divider>
        <n-dynamic-input
            v-model:value="user.edu"
            :on-create="onCreateEdu"
            #="{ index, school }"
        >
          <n-form style="width: 100%">
            <n-grid x-gap="12" :cols="4">
              <n-gi>
                <n-form-item :label="(index+1)+'. 学校'">
                  <n-input
                      v-model:value="user.edu[index].school"
                      placeholder="学校名称"
                      @keydown.enter.prevent
                  />
                </n-form-item>
              </n-gi>
              <n-gi>
                <n-form-item label="专业">
                  <n-input
                      v-model:value="user.edu[index].major"
                      placeholder="专业名称"
                      @keydown.enter.prevent
                  />
                </n-form-item>
              </n-gi>
              <n-gi>
                <n-form-item label="开始日期">
                  <n-date-picker
                      v-model:value="user.edu[index].begin"
                      type="date"
                  />
                </n-form-item>
              </n-gi>
              <n-gi>
                <n-form-item label="结束日期">
                  <n-date-picker
                      v-model:value="user.edu[index].end"
                      type="date"
                  />
                </n-form-item>
              </n-gi>
            </n-grid>
            <n-form-item label="详细信息">
              <n-input
                  v-model:value="user.edu[index].detail"
                  type="textarea"
                  autosize
                  placeholder="详细信息"
              />
            </n-form-item>
          </n-form>
        </n-dynamic-input>
        <n-divider>工作经历</n-divider>
        <n-dynamic-input
            v-model:value="user.work_experiences"
            :on-create="onCreateWork"
            #="{ index, company }"
        >
          <n-form style="width: 100%">
            <n-grid x-gap="12" :cols="5">
              <n-gi>
                <n-form-item :label="(index+1)+'. 公司'">
                  <n-input
                      v-model:value="user.work_experiences[index].company"
                      placeholder="公司名称"
                      @keydown.enter.prevent
                  />
                </n-form-item>
              </n-gi>
              <n-gi>
                <n-form-item label="行业">
                  <n-input
                      v-model:value="user.work_experiences[index].vocation"
                      placeholder="如互联网/电子"
                      @keydown.enter.prevent
                  />
                </n-form-item>
              </n-gi>
              <n-gi>
                <n-form-item label="职位">
                  <n-input
                      v-model:value="user.work_experiences[index].job_name"
                      placeholder="工作职位"
                      @keydown.enter.prevent
                  />
                </n-form-item>
              </n-gi>
              <n-gi>
                <n-form-item label="开始日期">
                  <n-date-picker
                      v-model:value="user.work_experiences[index].begin"
                      type="date"
                  />
                </n-form-item>
              </n-gi>
              <n-gi>
                <n-form-item label="结束日期">
                  <n-date-picker
                      v-model:value="user.work_experiences[index].end"
                      type="date"
                  />
                </n-form-item>
              </n-gi>
            </n-grid>
            <n-form-item label="详细信息">
              <n-input
                  v-model:value="user.work_experiences[index].detail"
                  type="textarea"
                  autosize
                  placeholder="详细信息"
              />
            </n-form-item>
          </n-form>
        </n-dynamic-input>
        <n-divider>项目经历</n-divider>
        <n-dynamic-input
            v-model:value="user.project_experiences"
            :on-create="onCreatePro"
            #="{ index, name }"
        >
          <n-form style="width: 100%">
            <n-grid :cols="4" x-gap="12">
              <n-gi>
                <n-form-item :label="(index+1)+'. 项目名称'">
                  <n-input
                      v-model:value="user.project_experiences[index].name"
                      placeholder="项目名称"
                      @keydown.enter.prevent
                  />
                </n-form-item>
              </n-gi>
              <n-gi>
                <n-form-item label="角色">
                  <n-input
                      v-model:value="user.project_experiences[index].role"
                      placeholder="如组长，顾问..."
                      @keydown.enter.prevent
                  />
                </n-form-item>
              </n-gi>
              <n-gi>
                <n-form-item label="开始日期">
                  <n-date-picker
                      v-model:value="user.project_experiences[index].begin"
                      type="date"
                  />
                </n-form-item>
              </n-gi>
              <n-gi>
                <n-form-item label="结束日期">
                  <n-date-picker
                      v-model:value="user.project_experiences[index].end"
                      type="date"
                  />
                </n-form-item>
              </n-gi>
            </n-grid>
            <n-form-item label="项目网址">
              <n-input
                  v-model:value="user.project_experiences[index].url"
                  placeholder="项目网址"
                  @keydown.enter.prevent
              />
            </n-form-item>
            <n-form-item label="详细信息">
              <n-input
                  v-model:value="user.project_experiences[index].detail"
                  type="textarea"
                  autosize
                  placeholder="详细信息"
              />
            </n-form-item>
          </n-form>
        </n-dynamic-input>
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
