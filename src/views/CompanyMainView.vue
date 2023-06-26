<script>
import {defineComponent} from 'vue'
import AutoMenu from "@/components/AutoMenu.vue";
import {companyRoute} from "@/router/company-route";

export default defineComponent({
  name: "CompanyMainView",
  methods: {},
  components: {AutoMenu},
  data() {
    return {
      companyRoute,
      token: "",
    }
  }
})
</script>

<template>
  <n-layout has-sider position="absolute">
    <n-layout-sider content-style="padding: 24px">
      <n-h3 style="text-align: center">我要招人</n-h3>
      <n-divider></n-divider>
      <auto-menu :menu-list="companyRoute" main-name="company-main"/>
    </n-layout-sider>
    <n-layout-content content-style="padding: 24px;">
      <router-view/>
    </n-layout-content>
  </n-layout>
</template>

<style scoped>

</style>
