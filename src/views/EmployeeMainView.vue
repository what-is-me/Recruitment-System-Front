<script>
import {defineComponent} from 'vue'
import AutoMenu from "@/components/AutoMenu.vue";
import {employeeRoute} from "@/router/employee-route";

export default defineComponent({
  name: "EmployeeMainView",
  components: {AutoMenu},
  data() {
    return {
      employeeRoute,
    }
  }
})
</script>

<template>
  <n-layout has-sider position="absolute">
    <n-layout-sider content-style="padding: 24px;">
      <n-h3 style="text-align: center">我要找工作</n-h3>
      <n-divider></n-divider>
      <auto-menu :menu-list="employeeRoute" main-name="main"/>
    </n-layout-sider>
    <n-layout-content content-style="padding: 24px;">
      <router-view/>
    </n-layout-content>
  </n-layout>
</template>

<style scoped>
</style>
