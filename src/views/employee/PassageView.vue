<script>
import {defineComponent} from 'vue'
import {getPassage} from "@/requests/requests";
import {setProperties} from "@/utils/utils";
import VMdPreview from "@kangc/v-md-editor/lib/preview";
import PassageComp from "@/components/PassageComp.vue";
import PassageEdit from "@/components/PassageEdit.vue";

export default defineComponent({
  name: "PassageView",
  components: {PassageEdit, PassageComp, VMdPreview},
  methods: {
    load() {
      getPassage(this.$route.params.pid).then((res) => {
        const {data} = res.data;
        setProperties(this.psg, data)
      })
    }
  },
  created() {
    this.load()
  },
  watch: {
    '$route'() {
      this.$router.go(0);
    }
  },
  data() {
    return {
      psg: {
        pid: "",
        title: "",
        detail: "",
        uid: "",
        timespan: 0,
        employee: {
          uid: "",
          pic: "",
          name: "邹秀兰",
        }
      }
    }
  }
})
</script>

<template>
  <n-layout style="position: relative;height: 100%;">
    <n-layout-header style="position: absolute;left: 0;top: 0;height: 10%;">
      <n-page-header :title="psg.title" @back="$router.go(-1)"/>
    </n-layout-header>
    <n-layout-content style="position: absolute;left: 0;top: 10%;height: 90%;width: 100%">
      <n-thing>
        <template #avatar>
          <n-avatar
              :src="psg.employee.pic"
          />
        </template>
        <template #header>
          {{ psg.employee.name }}
        </template>
        <template #description>
          发表于
          <n-time :time="psg.timespan" format="yyyy年MM月dd日 hh时mm分ss秒"/>
        </template>
        <v-md-preview :text="psg.detail"/>
      </n-thing>
      <n-divider>回复</n-divider>
      <n-list hoverable clickable bordered>
        <n-list-item>
          <passage-edit :rpid="psg.pid"/>
        </n-list-item>
        <n-list-item v-for="pid in psg.replies" :key="pid">
          <passage-comp :pid="pid"/>
        </n-list-item>
      </n-list>
    </n-layout-content>
  </n-layout>
</template>

<style scoped>

</style>
