<script>
import {defineComponent} from 'vue'
import { useDialog } from 'naive-ui'

// content
export default defineComponent({
  name: "useDialogueComponents",
  setup () {
    window.$dialog = useDialog()
  }
})
</script>

<style scoped>

</style>
