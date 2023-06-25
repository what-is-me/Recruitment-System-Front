<script>
import {defineComponent} from 'vue'
import {tokenValue} from "@/requests/requests";
import AutoMenu from "@/components/AutoMenu.vue";
import {companyRoute} from "@/router/company-route";

export default defineComponent({
  name: "CompanyMainView",
  methods: {
  },
  components: {AutoMenu},
  data() {
    return {
      companyRoute,
      token: tokenValue,
    }
  }
})
</script>

<template>
  <n-layout has-sider position="absolute">
    <n-layout-sider content-style="padding: 24px;">
      <auto-menu :menu-list="companyRoute"/>
    </n-layout-sider>
    <n-layout-content content-style="padding: 24px;">
      <router-view/>
    </n-layout-content>
  </n-layout>
</template>

<style scoped>

</style>
