<script>
import {defineComponent, h} from 'vue'
import {RouterLink} from 'vue-router'
import {NIcon} from "naive-ui";
import {ExitOutline} from '@vicons/ionicons5'

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
    this.list.push({
      label: () =>
        h(
          RouterLink,
          {
            to: {
              path: '/'
            }
          },
          {default: () => '切换用户'}
        ),
      key: 'exit',
      icon: () => h(NIcon, null, {default: () => h(ExitOutline)}),
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
