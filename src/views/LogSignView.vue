<script>
import {defineComponent} from 'vue'

export default defineComponent({
  name: "LogSignView"
})
</script>

<template>
  <div class="background">
  </div>
  <div class="login">
    <router-view/>
  </div>
</template>

<style scoped>
.background{
  width: 100%;
  height: 100%;
  margin: 0 auto;
  left: 50%;
  top: 50%;
  position: absolute;
  transform: translate(-50%, -50%);
  z-index: 1;
  background-size: 100% 100%;
  background-image: url(../assets/bg.png);
}
.login {
  left: 50%;
  top: 50%;
  position: absolute;
  transform: translate(-50%, -50%);
  width: 728px;
  height: 580px;
  background-color: #fff;
  box-shadow: 0 6px 13px 0 rgba(0,0,0,.1);
  border-radius: 28px;
  z-index: 2;
}
</style>
