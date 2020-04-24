<template>
  <div>
    <p>自定义指令</p>
    <input v-focus type="text" name="" id="">
    <div v-console>{{data1}}</div>
    <!-- <p v-color='red'>v-color</p> -->
    <p>自定义指令，访问vm实例</p>
    <p v-fun='fun'>v-fun</p>
    <hr>
    <p>自定义过滤器</p>
    <h5>{{name|filter1|filter2}}</h5>
    <hr>
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
      bind: function (el, binding, vnode) {//被绑定
        console.log('1 - bind');
        console.log('vm实例直接是bing第三个参数中的vndoe.context', vnode.context);
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
  filters: {
    filter1(val) {
      console.log('自定义指令函数中的this', this) //undefined
      return val + '--1'
    },
    filter2(val) {
      return val + '--2'
    }
  },
  mixins: [],
  props: [],
  data() {
    return {
      data1: 'v-console',
      red: 'red',
      name: 'zhaoyp'
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
<style scoped>
</style>
