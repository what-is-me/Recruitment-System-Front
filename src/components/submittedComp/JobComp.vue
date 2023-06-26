<script>
import {defineComponent} from 'vue'

export default defineComponent({
  name: "JobComp",
  props: {
    job: Object
  }
})
</script>

<template>
  <n-card size="huge" :title="job.name">
    <n-descriptions size="large" bordered :column="3">
      <n-descriptions-item label="薪资范围">
        {{ (job.price_min / 1000).toFixed(0) }}K-{{ (job.price_max / 1000).toFixed(0) }}K
      </n-descriptions-item>
      <n-descriptions-item label="要求学历">
        <n-tag type="info" size="large" round>{{ job.edu_background }}</n-tag>
      </n-descriptions-item>
      <n-descriptions-item label="地址">
        <n-button
            text
            tag="a"
            :href="`https://ditu.amap.com/search?query=${job.address}`"
            target="_blank"
            type="primary"
        >
          {{ job.address }}
        </n-button>
      </n-descriptions-item>
      <n-descriptions-item label="具体需求" :span="3">
        <n-p v-for="passage in job.description.split('\n')" :key="passage">
          {{ passage }}
        </n-p>
      </n-descriptions-item>
    </n-descriptions>
  </n-card>
</template>

<style scoped>

</style>
