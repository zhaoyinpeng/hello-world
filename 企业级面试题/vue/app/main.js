import Vue from 'vue'
import App from './App.vue'
// import MyPlugin from './Plugin/vue-plugin'
new Vue({
  el: '#app',
  render(h) {
    return h(App)
  },
  data: {
    message: 'Hello Vue!'
  }
})