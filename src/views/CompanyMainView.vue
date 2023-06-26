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
      <n-h3 type="success" style="text-align: center">
        <n-icon style="vertical-align: middle;">
          <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512">
            <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"
                  d="M256 256v128"></path>
            <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"
                  d="M320 320H192"></path>
            <path
                d="M80 176a16 16 0 0 0-16 16v216c0 30.24 25.76 56 56 56h272c30.24 0 56-24.51 56-54.75V192a16 16 0 0 0-16-16z"
                fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                stroke-width="32"></path>
            <path d="M160 176v-32a96 96 0 0 1 96-96h0a96 96 0 0 1 96 96v32" fill="none" stroke="currentColor"
                  stroke-linecap="round" stroke-linejoin="round" stroke-width="32"></path>
          </svg>
        </n-icon>
        我要招人
      </n-h3>
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
