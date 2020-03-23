class Dep {
  constructor() {
    this.subs = [];
  }
}
class Observer {
  constructor(data) {
    this.observe(data)
  }
  observe(data) {
    if (data && typeof data === 'object') {
      Object.keys(data).forEach(key => {
        this.formatData(data, key, data[key])
      })
    }
  }
  //劫持监听 重新设置get和set方法
  formatData(obj, key, value) {
    this.observe(value)
    Object.defineProperty(obj, key, {
      enumerable: true,
      configurable: false,
      get() {
        //订阅数据变化时，往Dep中去添加监听
        console.log('调用了get方法')
        return value
      },
      set: (newVal) => {
        if (newVal !== value) {
          this.observe(newVal)
          console.log('调用了set方法')
          value = newVal
        }
      }
    })
  }
}