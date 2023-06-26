<script>
import {defineComponent} from 'vue'
import {findCompany} from "@/requests/requests";
import {setProperties} from "@/utils/utils";

export default defineComponent({
  name: "CompanyComp",
  props:{
    cid:String
  },
  created() {
    findCompany(this.cid).then((res) => {
      const {data} = res.data;
      setProperties(this.user, data);
    })
  },
  data(){
    return {
      user:{
        uid: "",
        pic: "",
        name: "",
        tags: [],
        introduction: "",
        address: "",
        jobs: [],
        tel: "",
        email: ""
      }
    }
  }
})
</script>

<template>
  <n-grid cols="3" item-responsive>
    <n-grid-item span="1">
      <n-avatar
          :size="200"
          :src="user.pic"
      />
    </n-grid-item>
    <n-grid-item span="2">
      <n-h1>{{ user.name }}</n-h1>
      <n-tag v-for="tag in user.tags" :key="tag" type="info">{{ tag }}</n-tag>
      <br/>
      <n-icon>
        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24">
          <g fill="none">
            <path
                d="M15.75 2A2.25 2.25 0 0 1 18 4.25v15.5A2.25 2.25 0 0 1 15.75 22h-7.5A2.25 2.25 0 0 1 6 19.75V4.25A2.25 2.25 0 0 1 8.25 2h7.5zm0 1.5h-7.5a.75.75 0 0 0-.75.75v15.5c0 .414.336.75.75.75h7.5a.75.75 0 0 0 .75-.75V4.25a.75.75 0 0 0-.75-.75zm-2.501 14a.75.75 0 0 1 .002 1.5l-2.5.004a.75.75 0 0 1-.002-1.5l2.5-.004z"
                fill="currentColor"></path>
          </g>
        </svg>
      </n-icon>
      <n-text>{{ user.tel }}</n-text>
      <br/>
      <n-icon>
        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 32 32">
          <path
              d="M28 6H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h24a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2zm-2.2 2L16 14.78L6.2 8zM4 24V8.91l11.43 7.91a1 1 0 0 0 1.14 0L28 8.91V24z"
              fill="currentColor"></path>
        </svg>
      </n-icon>
      <n-text underline>{{ user.email }}</n-text>
      <br/>
      <n-icon>
        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24">
          <path
              d="M12 12c-1.1 0-2-.9-2-2s.9-2 2-2s2 .9 2 2s-.9 2-2 2zm6-1.8C18 6.57 15.35 4 12 4s-6 2.57-6 6.2c0 2.34 1.95 5.44 6 9.14c4.05-3.7 6-6.8 6-9.14zM12 2c4.2 0 8 3.22 8 8.2c0 3.32-2.67 7.25-8 11.8c-5.33-4.55-8-8.48-8-11.8C4 5.22 7.8 2 12 2z"
              fill="currentColor"></path>
        </svg>
      </n-icon>
      <n-text>{{ user.address }}</n-text>

    </n-grid-item>
  </n-grid>
</template>

<style scoped>

</style>
