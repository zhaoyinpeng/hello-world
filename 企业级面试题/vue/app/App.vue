<template>
  <div>
    vue123
  </div>
</template>
<script>
import FunctionMsg from 'zyp_npmtest'
export default {
  name: '',
  components: {},
  directives: {},
  filters: {},
  mixins: [],
  props: [],
  data() {
    return {
    }
  },
  computed: {},
  watch: {},
  created() {
    console.log('请求方法')
    console.log(FunctionMsg)
    // FunctionMsg.showMsg()
  },
  mounted() { },
  methods: {}
}
</script>
<style scoped>
</style>
