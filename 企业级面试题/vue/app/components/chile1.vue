<template>
  <div>子组件
    <input v-focus type="text" name="" id="">
    <div v-console>{{data1}}</div>
    <!-- <p v-color='red'>v-color</p> -->
    <p v-fun='fun'>v-fun</p>
  </div>
</template>
<script>
export default {
  name: '',
  components: {},
  directives: {
    focus: {
      inserted: (el) => {
        el.focus()
      }
    },
    console: {
      bind: (el, binding, vnode, oldvnode) => {
        console.log('bind')
      },
      inserted: (el) => {
        console.log('inserted')
      },
      update: () => {
        console.log('update')
      },
      componentUpdated: () => {
        console.log('componentUpdated')
      },
      unbind: () => {
        console.log('unbind')
      },
    },
    color: {
      bind: function (el, binding) {//被绑定
        console.log('1 - bind');
        el.style = 'color:' + binding.value;
      },
      inserted: function () {//绑定到节点
        console.log('2 - inserted');
      },
      update: function () {//组件更新
        console.log('3 - update');
      },
      componentUpdated: function () {//组件更新完成
        console.log('4 - componentUpdated');
      },
      unbind: function () {//解绑
        console.log('5 - unbind');
      }
    },
    fun: {
      bind: function (el, binding) {//被绑定
        console.log('1 - bind');
        let _this = binding.value()
        _this.data1 = 'v-fun 改变了data1'
      },
      inserted: function () {//绑定到节点
        console.log('2 - inserted');
      },
      update: function () {//组件更新
        console.log('3 - update');
      },
      componentUpdated: function () {//组件更新完成
        console.log('4 - componentUpdated');
      },
      unbind: function () {//解绑
        console.log('5 - unbind');
      }
    }
  },
  filters: {},
  mixins: [],
  props: [],
  data() {
    return {
      data1: 'v-console',
      red: 'red'
    }
  },
  computed: {},
  watch: {},
  created() { },
  mounted() { },
  methods: {
    fun() {
      console.log('fun')
      return this
    }
  }
}
</script>
<style lang="scss" scoped>
</style>
