const compileUtil = {
  text(node, vm, expr) { // 注意这里的expr，可以有很多种情况
    let value
    if (expr.indexOf('{{') !== -1) {
      value = expr.replace(/\{\{(.+?)\}\}/g, (...args) => {
        return this.getData(vm, args[1])
      })
    } else {
      value = this.getData(vm, expr)
    }
    this.updater.textUpdater(node, value)
  },
  html(node, vm, expr) {
    let value = this.getData(vm, expr)
    this.updater.htmlUpdater(node, value)
  },
  model(node, vm, expr) {
    let value = this.getData(vm, expr)
    this.updater.modelUpdater(node, value)
  },
  on(node, vm, expr, eventName) {
    let fn = vm.$options.methods && vm.$options.methods[expr]
    node.addEventListener(eventName, fn.bind(vm), false)
  },
  bind(node, vm, expr, eventName){

  },
  getData(vm, expr) {
    // return vm.$data[dataName]
    // console.log(expr)
    let keyList = expr.split('.')
    return keyList.reduce((result, currentVal) => {
      return result[currentVal]
    }, vm.$data)

  },
  updater: {
    textUpdater(node, value) {
      node.textContent = value
    },
    htmlUpdater(node, value) {
      node.innerHTML = value
    },
    modelUpdater(node, value) {
      node.value = value
    }
  }
}
class Compile {
  constructor(el, vm) {
    //1.判断是否是元素
    this.el = this.isElementNode(el) ? el : document.querySelector(el)
    this.vm = vm
    //2.创建fragment对象，防止重绘和回流
    const fragment = this.node2Fragement(this.el)
    // console.log(fragment)
    //处理文档碎片，编译文档
    this.compile(fragment)
    //4.追加dom
    this.el.appendChild(fragment)
  }
  compile(fragment) {
    //1.获取到每个子节点
    const childNodes = [...fragment.childNodes]
    childNodes.forEach(child => {
      if (this.isElementNode(child)) {
        //dom数据 编译元素
        // console.log('dom节点', child)
        this.compileElement(child)
      } else {
        //文档数据
        // console.log('文本节点', child)
        this.compileText(child)
      }
      if (child.childNodes && child.childNodes.length) {
        this.compile(child)
      }
    })
  }
  compileElement(node) {
    //获取v-html v-text v-on v-model等属性
    const attributes = [...node.attributes]
    attributes.forEach(attr => {
      const { name, value } = attr
      if (this.isDirective(name)) {
        const [, dirctive] = name.split('-') //v-html v-text等指令
        const [dirName, eventName] = dirctive.split(':') //v-on:click 事件
        // console.log(dirctive)
        compileUtil[dirName](node, this.vm, value, eventName)
      } else if (this.isEventName(name)) { //处理@:click
        const [, eventName] = name.split('@')
        // console.log(dirctive)
        compileUtil['on'](node, this.vm, value, eventName)
      }
      //去除标签
      node.removeAttribute(name)
    })
  }
  compileText(node) {
    const content = node.textContent
    if (/\{\{(.+?)\}\}/.test(content)) {
      compileUtil['text'](node, this.vm, content)
      // console.log(content)
      // content.replace(/\{\{(.+?)\}\}/g, (res) => {
      //   console.log(res)
      // })
    }
  }
  isEventName(attrName) {
    return attrName.startsWith('@')
  }
  isDirective(attrName) {
    return attrName.startsWith('v-')
  }
  node2Fragement(el) {
    //创建文档碎片
    let f = document.createDocumentFragment()
    //  取出ul中的所有子节点并保存到fragment
    let firstChild;
    while (firstChild = el.firstChild) {
      f.appendChild(firstChild)
    }
    return f
  }
  isElementNode(node) {
    return node && node.nodeType === 1
  }
}
class MVue {
  constructor(options) {
    this.$options = options;
    this.$el = options.el;
    this.$data = options.data;
    if (this.$el) {
      //1.实现数据观察者
      //2.实现指令解析器
      new Compile(this.$el, this)
    }
  }
}