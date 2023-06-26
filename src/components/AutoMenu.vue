<script>
import {defineComponent} from 'vue'

export default defineComponent({
  name: "AutoMenu",
  created() {
    const pathList = window.location.pathname.split('/');
    let curPath = pathList[pathList.length - 1];
    const arr = this.menuList.map(item => item.name);
    if (arr.indexOf(curPath) === -1) curPath = this.mainName;
    this.activeKey = curPath;
    this.menuList.forEach(item => {
      if (!item.invisible) this.list.push(item);
    })
  },
  data() {
    return {
      activeKey: null,
      list: []
    }
  },
  props: {
    mainName: String,
    menuList: Array
  },
})
</script>

<template>
  <n-menu v-model:value="activeKey" :options="list"/>
</template>

<style scoped>
</style>
