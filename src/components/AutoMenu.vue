<script>
import {defineComponent} from 'vue'

export default defineComponent({
  name: "AutoMenu",
  setup() {
    const pathList = window.location.pathname.split('/');
    return {curPath: pathList[pathList.length - 1]};

  },
  data() {
    return {
      activeKey: this.curPath,
    }
  },
  props: {
    menuList: Array
  }
})
</script>

<template>
  <n-menu v-model:value="activeKey" :options="menuList"/>
</template>

<style scoped>
</style>
