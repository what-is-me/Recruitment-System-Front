<script>
import {defineComponent} from 'vue'
import PassageComp from "@/components/PassageComp.vue";
import {getPassages} from "@/requests/requests";
import PassageEdit from "@/components/PassageEdit.vue";

export default defineComponent({
  name: "PassageListView",
  components: {PassageEdit, PassageComp},
  data() {
    return {
      keyWord: "",
      srcList: [],
      list: []
    }
  },
  methods: {
    search() {
      this.list = this.srcList.filter(item => (item.title.indexOf(this.keyWord) !== -1))
    }
  },
  created() {
    getPassages().then((res) => {
      const {data} = res.data;
      this.list = data.sort((a, b) => b.timespan - a.timespan);
      this.srcList = this.list
    })
  }
})
</script>

<template>
  <n-layout style="position: relative;height: 100%;" :native-scrollbar="false">
    <n-layout-header style="position: absolute;left: 0;top: 0;height: 10%;margin-right: 5%">
      <n-grid :cols="16" x-gap="12">
        <n-gi :span="15">
          <n-input v-model:value="keyWord" placeholder="请输入关键字"/>
        </n-gi>
        <n-gi>
          <n-button style="width: 100%" @click="search" type="primary">搜索</n-button>
        </n-gi>
      </n-grid>
    </n-layout-header>
    <n-layout-content style="position: absolute;left: 0;top: 10%;height: 90%;width: 100%" :native-scrollbar="false">
      <n-list hoverable clickable bordered style="margin-right: 5%">
        <n-list-item>
          <passage-edit style="margin-right: 20px"/>
        </n-list-item>
        <n-list-item v-for="passage in list" :key="passage.pid">
          <passage-comp :passage="passage"/>
        </n-list-item>
      </n-list>
    </n-layout-content>
  </n-layout>
</template>

<style scoped>

</style>
