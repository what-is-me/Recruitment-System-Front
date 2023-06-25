<script>
import {defineComponent} from 'vue'
import {tokenValue} from "@/requests/requests";
import AutoMenu from "@/components/AutoMenu.vue";
import {employeeRoute} from "@/router/employee-route";

export default defineComponent({
  name: "EmployeeMainView",
  components: {AutoMenu},
  data() {
    return {
      employeeRoute,
      token: tokenValue,
    }
  }
})
</script>

<template>
  <n-layout has-sider position="absolute">
    <n-layout-sider content-style="padding: 24px;">
      <auto-menu :menu-list="employeeRoute"/>
    </n-layout-sider>
    <n-layout-content content-style="padding: 24px;">
      <router-view/>
    </n-layout-content>
  </n-layout>
</template>

<style scoped>
</style>
