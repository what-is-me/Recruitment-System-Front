<script>
import {defineComponent} from 'vue'
import JobComp from "@/components/submittedComp/JobComp.vue";
import ProfileComp from "@/components/submittedComp/ProfileComp.vue";

export default defineComponent({
  name: "SubmittedResumeComp",
  components: {ProfileComp, JobComp},
  props: {
    resume: Object
  }
})
</script>

<template>
  <n-tabs type="segment">
    <n-tab-pane name="resume" tab="简历" style="position: relative;height: 600px">
      <n-layout-content style="position:absolute;width:100%;height: 100%" :native-scrollbar="false">
        <profile-comp :user="resume.employee"/>
      </n-layout-content>
    </n-tab-pane>
    <n-tab-pane name="job" tab="职位" style="position: relative;height: 600px">
      <n-layout-content style="position:absolute;width:100%;height: 100%" :native-scrollbar="false">
        <job-comp :job="resume.job"/>
      </n-layout-content>
    </n-tab-pane>
  </n-tabs>
</template>

<style scoped>

</style>
