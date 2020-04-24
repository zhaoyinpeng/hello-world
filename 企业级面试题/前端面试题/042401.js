//订阅发布者模式
class Event {
  constructor() {
    this.eventList = []
  }
  //订阅
  on(event) {
    this.eventList.push(event)
  }
  //发布
  emit(eventName) {
    this.eventList.forEach((eventItem) => {
      if (eventItem.name === eventName) {
        eventItem.cb()
      }
    })
  }
}

let event = new Event()
let addEvent = () => {
  event.on({
    name: 'say',
    cb: () => {
      console.log('say something')
    }
  })
}
let emitEvent = () => {
  event.emit('say')
}
addEvent()
addEvent()
emitEvent()
console.log('===========================')


//观察者模式
// 定义观察者
class Observe {
  constructor(name) {
    this.name = name
  }
  attach(newVal, theOName) {
    console.log(this.name + '观察者观察到了被观察者' + theOName + '数据变化为：' + newVal)
  }
}
//定义被观察者
class TheObserved {
  constructor(name) {
    this.name = name
    this.observeList = []
    this.status = 'good'
  }
  addObserve(observe) {
    this.observeList.push(observe)
  }
  //被观察者改变了属性
  setStatus(newVal) {
    this.status = newVal
    this.observeList.forEach(o => o.attach(newVal, this.name))
  }
}
let o1 = new Observe('o1')
let o2 = new Observe('o2')
let theO1 = new TheObserved('theO1')
let theO2 = new TheObserved('theO2')
theO1.addObserve(o1)
theO1.addObserve(o2)
theO2.addObserve(o2)
theO1.setStatus('thieo1改了')
theO2.setStatus('theo2改了')

//2.如何把一个字符串的大小去反，例如’AbC‘,变成’aBc‘
let str = 'asdfsfDSDF,你哈！，与*2130！';
str = str.replace(/[a-zA-Z]/g, (content) => {
  //content是每次匹配到的字符串
  //验证是否为大写字母，与之前比较
  //获取大写字母的ASCII，比较(65-90)
  // content.toUpperCase() === content
  // content.charCodeAt()>=65 && content.charCodeAt()<=90
  return content.toUpperCase() === content ? content.toLowerCase() : content.toUpperCase()
})
console.log(str)