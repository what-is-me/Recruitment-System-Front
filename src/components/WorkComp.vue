<script>
import {defineComponent} from 'vue'
import {getJob} from "@/requests/requests";
import {setProperties} from "@/utils/utils";

export default defineComponent({
  name: "WorkComp",
  props: {
    jid: String
  },
  created() {
    this.load()
  },
  methods: {
    load() {
      getJob(this.jid).then((res) => {
        const {data} = res.data;
        setProperties(this.job, data);
      })
    },
    pushTo(path) {
      this.$router.push(path)
    }
  },
  data() {
    return {
      job: {
        jid: "",
        company_id: "",
        name: "",
        address: "",
        edu_background: "",
        tags: [],
        description: "",
        price_min: 0,
        price_max: 0
      }
    }
  },
})
</script>

<template>
  <n-thing @click="pushTo(`/employee/job/${job.jid}`)">
    <template #header>
      {{ job.name }}
    </template>
    <template #header-extra>
      {{ (job.price_min / 1000).toFixed(0) }}K-{{ (job.price_max / 1000).toFixed(0) }}K
    </template>
    <template #description>
      <n-space size="small" style="margin-top: 4px">
        <n-tag v-for="tag in job.tags" :key="tag" type="info">{{ tag }}</n-tag>
      </n-space>
    </template>
    <n-icon>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
        <path
            d="M26 30h-2v-3a5.006 5.006 0 0 0-5-5h-6a5.006 5.006 0 0 0-5 5v3H6v-3a7.008 7.008 0 0 1 7-7h6a7.008 7.008 0 0 1 7 7z"
            fill="currentColor"></path>
        <path d="M5 6a1 1 0 0 0-1 1v9h2V7a1 1 0 0 0-1-1z" fill="currentColor"></path>
        <path d="M4 2v2h5v7a7 7 0 0 0 14 0V4h5V2zm7 2h10v3H11zm5 12a5 5 0 0 1-5-5V9h10v2a5 5 0 0 1-5 5z"
              fill="currentColor"></path>
      </svg>
    </n-icon>
    {{ job.edu_background }}
    <br/>
    <n-icon>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <path
            d="M12 12c-1.1 0-2-.9-2-2s.9-2 2-2s2 .9 2 2s-.9 2-2 2zm6-1.8C18 6.57 15.35 4 12 4s-6 2.57-6 6.2c0 2.34 1.95 5.44 6 9.14c4.05-3.7 6-6.8 6-9.14zM12 2c4.2 0 8 3.22 8 8.2c0 3.32-2.67 7.25-8 11.8c-5.33-4.55-8-8.48-8-11.8C4 5.22 7.8 2 12 2z"
            fill="currentColor"></path>
      </svg>
    </n-icon>
    {{ job.address }}
    <br/>
    <n-icon>
      <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24">
        <path
            d="M14 6V4h-4v2h4zM4 9v9c0 .55.45 1 1 1h14c.55 0 1-.45 1-1V9c0-.55-.45-1-1-1H5c-.55 0-1 .45-1 1zm16-3c1.11 0 2 .89 2 2v11c0 1.11-.89 2-2 2H4c-1.11 0-2-.89-2-2l.01-11c0-1.11.88-2 1.99-2h4V4c0-1.11.89-2 2-2h4c1.11 0 2 .89 2 2v2h4z"
            fill="currentColor"></path>
      </svg>
    </n-icon>
    {{ job.company_id }}
  </n-thing>
</template>

<style scoped>
.n-icon {
  vertical-align: middle;
  margin-right: 3px;
}
</style>
