<script>
import {defineComponent} from 'vue'
import {savePassage} from "@/requests/requests";

export default defineComponent({
  name: "PassageEdit",
  props: {
    rpid: String
  }, data() {
    return {passage: {title: "", detail: ""}}
  }, methods: {
    submit() {
      savePassage(this.passage, this.rpid).then((res) => {
        const {code} = res.data;
        if (code === 200) {
          window.$message.create("发送成功");
          location.reload();
        } else {
          window.$message.error("发送失败");
        }
      })
    }
  }
})
</script>

<template>
  <n-thing>
    <n-collapse>
      <n-collapse-item name="1">
        <template #arrow>
          <n-icon>
            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 32 32">
              <path
                  d="M16 4c6.6 0 12 5.4 12 12s-5.4 12-12 12S4 22.6 4 16S9.4 4 16 4m0-2C8.3 2 2 8.3 2 16s6.3 14 14 14s14-6.3 14-14S23.7 2 16 2z"
                  fill="currentColor"></path>
              <path d="M24 15h-7V8h-2v7H8v2h7v7h2v-7h7z" fill="currentColor"></path>
            </svg>
          </n-icon>
        </template>
        <template #header>
          <n-gradient-text type="success">
            {{ rpid ? '回复文章' : '新建文章' }}
          </n-gradient-text>
        </template>
        <n-form :model="passage" label-placement="left">
          <n-grid :cols="12" x-gap="24">
            <n-gi :span="11">
              <n-form-item label="文章标题">
                <n-input v-model:value="passage.title" placeholder="请输入标题"/>
              </n-form-item>
            </n-gi>
            <n-gi>
              <n-button type="primary" @click="submit">提交</n-button>
            </n-gi>
          </n-grid>
          <n-form-item-row>
            <n-input
                type="textarea"
                autosize
                v-model:value="passage.detail"
                placeholder="请输入内容"
            />
          </n-form-item-row>
        </n-form>
      </n-collapse-item>
    </n-collapse>
  </n-thing>
</template>

<style scoped>
.n-button {
  width: 100%;
}
</style>
