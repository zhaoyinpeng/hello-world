<template>
  <div>
    <p>v-extend</p>
    <button @click="change">修改MapLegend值</button>
    <hr>
  </div>
</template>
<script>
import Hello from '../../components/hello/hello.js'
import MapLegend from '../../components/MapLegend/MapLegend.js'
export default {
  name: 'extend',
  components: {},
  directives: {},
  filters: {},
  mixins: [],
  props: [],
  data() {
    return {
      mapLegend: null
    }
  },
  computed: {},
  watch: {},
  created() { },
  mounted() {
    Hello('123')
    Hello({
      text: '456'
    })
    this.mapLegend = new MapLegend()
  },
  methods: {
    change(){
      this.mapLegend.setVal([1245])
    }
  }
}
</script>
<style scoped>
</style>
