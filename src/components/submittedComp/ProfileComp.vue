<script>
import {defineComponent} from 'vue'
import VMdPreview from "@kangc/v-md-editor/lib/preview";

export default defineComponent({
  name: "ProfileComp",
  components: {VMdPreview},
  props: {
    user: Object
  }
})
</script>

<template>
  <n-page-header title="个人简历"></n-page-header>
  <n-divider></n-divider>
  <n-grid cols="2" item-responsive x-gap="60">
    <n-grid-item span="1" style="text-align: right">
      <n-avatar
          :size="200"
          :src="user.pic"
      />
    </n-grid-item>
    <n-grid-item span="1">
      <n-h1>{{ user.name }}</n-h1>
      <n-text style="color:#999">{{ user.sex }}·{{ user.edu_background }}·期望{{
          (user.want_price / 1000).toFixed(0)
        }}K
      </n-text>
      <br/>
      <n-icon size="18">
        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24">
          <g fill="none">
            <path
                d="M12 1c-.95 0-1.585.682-1.937 1.282c-.361.619-.563 1.374-.563 1.968c0 .494.063 1.174.432 1.746C10.342 6.63 11.038 7 12 7s1.658-.37 2.068-1.004c.37-.572.432-1.252.432-1.746c0-.594-.202-1.35-.563-1.968C13.586 1.682 12.95 1 12 1zm-1 3.25c0-.31.121-.805.358-1.21c.248-.424.487-.54.642-.54c.155 0 .394.116.642.54c.237.405.358.9.358 1.21c0 .41-.062.73-.193.932c-.09.14-.27.318-.807.318c-.538 0-.717-.178-.807-.318C11.063 4.98 11 4.66 11 4.25zm9.5 6v8.25h.75a.75.75 0 0 1 0 1.5H2.75a.75.75 0 0 1 0-1.5h.75v-8.25A2.25 2.25 0 0 1 5.75 8h12.5a2.25 2.25 0 0 1 2.25 2.25zm-15.5 0v2.091l2.447 1.58a1.25 1.25 0 0 0 1.356 0l1.747-1.128a2.75 2.75 0 0 1 2.9-.05l2.009 1.199a1.25 1.25 0 0 0 1.359-.05L19 12.36v-2.11a.75.75 0 0 0-.75-.75H5.75a.75.75 0 0 0-.75.75zm12.68 4.87a2.75 2.75 0 0 1-2.99.11l-2.008-1.2a1.25 1.25 0 0 0-1.319.023l-1.747 1.128a2.75 2.75 0 0 1-2.982 0L5 14.126V18.5h14v-4.307l-1.32.926z"
                fill="currentColor"></path>
          </g>
        </svg>
      </n-icon>
      <n-time :time="new Date(user.birthday)" format="yyyy年MM月dd日"/>
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
      <br/>
      <n-icon>
        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 32 32">
          <circle cx="21" cy="21" r="2" fill="currentColor"></circle>
          <circle cx="7" cy="7" r="2" fill="currentColor"></circle>
          <path d="M27 31a4 4 0 1 1 4-4a4.012 4.012 0 0 1-4 4zm0-6a2 2 0 1 0 2 2a2.006 2.006 0 0 0-2-2z"
                fill="currentColor"></path>
          <path
              d="M30 16A14.041 14.041 0 0 0 16 2a13.043 13.043 0 0 0-6.8 1.8l1.1 1.7a24.425 24.425 0 0 1 2.4-1A25.135 25.135 0 0 0 10 15H4a11.149 11.149 0 0 1 1.4-4.7L3.9 9A13.842 13.842 0 0 0 2 16a13.998 13.998 0 0 0 14 14a13.366 13.366 0 0 0 5.2-1l-.6-1.9a11.442 11.442 0 0 1-5.2.9A21.071 21.071 0 0 1 12 17h17.9a3.402 3.402 0 0 0 .1-1zM12.8 27.6a13.02 13.02 0 0 1-5.3-3.1A12.505 12.505 0 0 1 4 17h6a25.002 25.002 0 0 0 2.8 10.6zM12 15a21.446 21.446 0 0 1 3.3-11h1.4A21.446 21.446 0 0 1 20 15zm10 0a23.278 23.278 0 0 0-2.8-10.6A12.092 12.092 0 0 1 27.9 15z"
              fill="currentColor"></path>
        </svg>
      </n-icon>
      <n-button
          text
          tag="a"
          :href="user.website"
          target="_blank"
      >
        <n-text underline>{{ user.website }}</n-text>
      </n-button>

    </n-grid-item>
  </n-grid>
  <n-divider></n-divider>
  <n-h4>
    自我介绍
  </n-h4>
  <v-md-preview :text="user.self_introduce"></v-md-preview>
  <n-divider></n-divider>
  <n-h4>
    教育经历
  </n-h4>
  <n-list bordered>
    <n-list-item v-for="item in user.edu" :key="item.school">
      <n-thing content-style="margin-top: 10px;">
        <template #header>
          <n-space size="small" style="margin-top: 4px">
            <n-text>{{ item.school }}</n-text>
            <n-tag :bordered="false" type="info" size="small">
              {{ item.major }}
            </n-tag>
          </n-space>
        </template>
        <template #header-extra>
          <n-time :time="new Date(item.begin)" format="yyyy年MM月dd日"/>
          -
          <n-time :time="new Date(item.end)" format="yyyy年MM月dd日"/>
        </template>
        <v-md-preview :text="item.detail"></v-md-preview>
      </n-thing>
    </n-list-item>
  </n-list>
  <n-divider></n-divider>
  <n-h4>
    工作经历
  </n-h4>
  <n-list bordered>
    <n-list-item
        v-for="item in user.work_experiences"
        :key="item.company"
    >
      <n-thing content-style="margin-top: 10px;">
        <template #header>
          <n-space size="small" style="margin-top: 4px">
            <n-text>{{ item.company }}</n-text>
            <n-tag :bordered="false" type="info" size="small">
              {{ item.vocation }}
            </n-tag>
            <n-tag :bordered="false" type="info" size="small">
              {{ item.job_name }}
            </n-tag>
          </n-space>
        </template>
        <template #header-extra>
          <n-time :time="new Date(item.begin)" format="yyyy年MM月dd日"/>
          -
          <n-time :time="new Date(item.end)" format="yyyy年MM月dd日"/>
        </template>
        <v-md-preview :text="item.detail"></v-md-preview>
      </n-thing>
    </n-list-item>
  </n-list>
  <n-divider></n-divider>
  <n-h4>
    项目经历
  </n-h4>
  <n-list bordered>
    <n-list-item
        v-for="item in user.project_experiences"
        :key="item.name"
    >
      <n-thing content-style="margin-top: 10px;">
        <template #header>
          <n-space size="small" style="margin-top: 4px">
            <n-text>{{ item.name }}</n-text>
            <n-tag :bordered="false" type="info" size="small">
              {{ item.role }}
            </n-tag>
          </n-space>
        </template>
        <template #header-extra>
          <n-time :time="new Date(item.begin)" format="yyyy年MM月dd日"/>
          -
          <n-time :time="new Date(item.end)" format="yyyy年MM月dd日"/>
        </template>
        <v-md-preview :text="item.detail"></v-md-preview>
        <template #footer>
          项目地址:
          <n-a :href="item.url">{{ item.url }}</n-a>
        </template>
      </n-thing>
    </n-list-item>
  </n-list>
</template>

<style scoped>

</style>
