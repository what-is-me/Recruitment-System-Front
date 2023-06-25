<script>
import { useMessage } from 'naive-ui'
import { defineComponent } from 'vue'

// content
export default defineComponent({
  setup () {
    window.$message = useMessage() // 关键代码
  }
})
</script>

<style scoped>

</style>
