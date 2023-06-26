<script>
import {defineComponent} from 'vue'
import {getPassage} from "@/requests/requests";
import {setProperties} from "@/utils/utils";

export default defineComponent({
    name: "PassageComp",
    props: {
      pid: String,
      passage: Object
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
    },
    created() {
      if (!this.passage) {
        getPassage(this.pid).then((res) => {
          const {data} = res.data;
          setProperties(this.psg, data)
        })
      } else {
        setProperties(this.psg, this.passage)
      }
    },
    methods: {
      pushTo(path) {
        this.$router.push(path);
      }
    }
  }
)
</script>

<template>
  <n-thing style="width: 100%" @click="pushTo({name:'passage-view',params:{pid:psg.pid}})">
    <template #avatar>
      <n-avatar
          :src="psg.employee.pic"
      />
    </template>
    <template #header>
      {{ psg.title }}
    </template>
    <template #description>
      {{ psg.employee.name }}
    </template>
    <template #header-extra>
      <n-time :time="psg.timespan" format="yyyy年MM月dd日 hh时mm分ss秒"/>
    </template>
    <n-ellipsis line-clamp="1" :tooltip="false">
      {{ psg.detail }}
    </n-ellipsis>
  </n-thing>
</template>
<style scoped>

</style>
