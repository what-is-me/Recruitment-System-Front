<script>
import {defineComponent} from 'vue'
import {doCompanySignUp, doEmployeeSignUp} from "@/requests/requests";

export default defineComponent({
  name: "SignUpView",
  data() {
    return {
      type: 'employee',
      types: [{
        label: "我要找工作",
        value: "employee"
      }, {
        label: "我要招聘",
        value: "company"
      }],
      user: {
        uid: '',
        pwd: '',
        reenteredPassword: ''
      },
    }
  },
  methods: {
    pushTo(path) {
      this.$router.push(path)
    },
    doSignUp() {
      const afterSignUp = (res) => {
        const {msg, code} = res.data;
        if (code === 200) {
          window.$message.info(msg);
          this.pushTo('/');
        } else {
          window.$message.error(msg);
        }
      }
      const check = (user) => {
        if (user.uid.length < 2 || user.uid.length > 20) return "用户名长度需在2~20之间";
        if (user.pwd.length < 6 || user.pwd.length > 20) return "密码长度需在6~20之间";
        if (user.reenteredPassword !== user.pwd) return "两次输入密码不一致";
        return null;
      }
      const chkRes = check(this.user);
      if (chkRes) {
        window.$message.error(chkRes);
      } else {
        if (this.type === 'employee') {
          doEmployeeSignUp(this.user).then(afterSignUp);
        } else {
          doCompanySignUp(this.user).then(afterSignUp);
        }
      }
    }
  }
})
</script>

<template>

  <n-form
      :label-width="80"
      :model="user"
      class="form"
  >
    <n-h1>注册</n-h1>
    <n-radio-group
        v-model:value="type"
        name="radio-button-group"
        style="margin:0 auto;text-align: center;width:100%"
        size="large"
    >
      <n-radio-button
          v-for="typ in types"
          :style="type===typ.value?'':'background-color:#ddd;color:#999'"
          :key="typ.value"
          :value="typ.value"
          :label="typ.label"
      />
    </n-radio-group>
    <n-form-item label="用户名">
      <n-input
          v-model:value="user.uid"
          placeholder="输入用户名"
          size="large"
          round
      />
    </n-form-item>
    <n-form-item label="密码">
      <n-input
          type="password"
          show-password-on="mousedown"
          v-model:value="user.pwd"
          placeholder="输入密码"
          size="large"
          round
      />
    </n-form-item>
    <n-form-item label="确认密码">
      <n-input
          type="password"
          show-password-on="mousedown"
          v-model:value="user.reenteredPassword"
          placeholder="再次输入密码"
          size="large"
          round
      />
    </n-form-item>
    <n-button
        text
        type="info"
        @click="pushTo('/')"
    >
      已有账号，前往登录
    </n-button>
    <n-form-item>
      <n-button
          size="large"
          type="primary"
          style="margin: 0 auto;width:300px"
          @click="doSignUp"
      >
        注册
      </n-button>
    </n-form-item>
  </n-form>
</template>

<style scoped>
.form {
  margin: 50px 180px;
}
</style>
