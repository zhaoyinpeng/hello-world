//1.高阶函数 生成函数的函数 作用预置变量，promise.all的实现原理
function after(times, cb) {
  return function () {
    if (--times === 0) {
      cb()
    }
  }
}
let fn = after(3, () => {
  console.log('after')
})
//执行n次后调用
fn()
fn()
fn()

//2.aop 面向切片变成 把原来的代码切成片 在中间加上自己的代码
// 装饰器，扩展原有的方法，重写原有的方法，不改变原有的方法

//不改变say函数的情况下，在say之前执行某个函数
function say() {
  console.log('说')
}
Function.prototype.before = function (cb) {
  return () => {
    cb()
    this()
  }
}
let afun = say.before(function () {
  console.log('小明')
})
afun()

//3.after使用方法 异步时，监听3个异步函数完成后再执行！！！
let fs = require('fs')
let after2 = function (times, cb) {
  let arr = []
  return function (data) {
    arr.push(data)
    if (--times === 0) {
      cb(arr)
    }
  }
}
let newFn = after2(3, function (arr) {
  console.log(arr)
})
fs.readFile('./xx.txt', 'utf-8', (err, data) => {
  newFn(data)
})
fs.readFile('./xx.txt', 'utf-8', (err, data) => {
  newFn(data)
})
fs.readFile('./xx.txt', 'utf-8', (err, data) => {
  newFn(data)
})