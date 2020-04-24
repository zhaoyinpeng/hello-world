<template>
  <div>
    {{text}}
    <div class="b">
      <span @click="onClick">点击</span>
    </div>
  </div>
</template>
<script>
export default {
  name: 'hello',
  components: {},
  directives: {},
  filters: {},
  mixins: [],
  props: {
    legendData: {
      type: Array,
      default() {
        return {
        }
      }
    }
  },
  data() {
    return {
      text: ''
    }
  },
  computed: {},
  watch: {
    legendData: {
      handler(newVal, oldVal) {
        console.log(newVal)
      },
      deep: true
    }
  },
  created() { },
  mounted() {

  },
  methods: {
    onClick() {
      console.log('点击事件')
    }
  }
}
</script>
<style scoped>
</style>
