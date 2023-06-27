<script>
import {defineComponent} from 'vue'
import {doCompanyLogin, doEmployeeLogin} from "@/requests/requests";
import {store} from "@/store";

export default defineComponent({
  name: "LoginView",
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
      },
    }
  },
  methods: {
    pushTo(path) {
      this.$router.push(path)
    },
    doLogin() {
      const afterLogin = (res) => {
        const {code, data, msg} = res.data;
        if (code === 200) {
          store.commit('setToken', data["token_value"]);
          store.commit('setUid', this.user.uid);
          this.pushTo(`/${this.type}/`)
        } else {
          window.$message.error(msg);
        }
      }
      if (this.type === 'employee') {
        doEmployeeLogin(this.user).then(afterLogin);
      } else {
        doCompanyLogin(this.user).then(afterLogin);
      }
    }
  }
})
</script>

<template>
  <div class="login-register-unite">
    <n-form
        :label-width="80"
        :model="user"
        class="form"
    >
      <n-h1>登录</n-h1>
      <n-radio-group
          v-model:value="type"
          name="radio-button-group"
          style="margin:0 auto;text-align: center;width:100%"
          size="large"
      >
        <n-radio-button
            v-for="typ in types"
            :key="typ.value"
            :value="typ.value"
            :label="typ.label"
            :style="type===typ.value?'':'background-color:#ddd;color:#999'"
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
      <n-button
          text
          type="info"
          @click="pushTo('/signup')"
      >
        点击注册
      </n-button>
      <n-form-item>
        <n-button
            size="large"
            type="primary"
            style="margin: 0 auto;width:300px"
            @click="doLogin"
        >
          登录
        </n-button>
      </n-form-item>
    </n-form>
  </div>
</template>

<style scoped>
.form {
  margin: 50px 180px;
}
</style>
