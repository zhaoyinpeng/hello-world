<template>
  <div>
    vue123
    <Child1/>
  </div>
</template>
<script>
import FunctionMsg from 'zyp_npmtest'
import Child1 from './components/chile1.vue'
export default {
  name: '',
  components: {
    Child1
  },
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
