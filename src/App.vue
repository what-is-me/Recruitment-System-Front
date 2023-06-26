<template>
  <n-message-provider>
    <usemessageComponents />
  </n-message-provider>
  <n-dialog-provider>
    <use-dialogue-components/>
  </n-dialog-provider>
  <n-config-provider :locale="zhCN" :date-locale="dateZhCN">
    <router-view/>
  </n-config-provider>
</template>

<style>
</style>
<script setup>
import UsemessageComponents from "@/components/usemessageComponents.vue";
import { zhCN, dateZhCN } from 'naive-ui'
import UseDialogueComponents from "@/components/useDialogueComponents.vue";

</script>
