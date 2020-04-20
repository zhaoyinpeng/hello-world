// 1.闭包知识
for (var i = 0; i < 5; i++) {
  setTimeout(function () {
    console.log(i)
  }, 1000)
}
//55555
for (var i = 0; i < 5; i++) {
  (function (j) {
    setTimeout(function () {
      console.log(j)
    }, 1000)
  })(i)
}
//01234

var output = function (i) {
  setTimeout(function () {
    console.log(i)
  }, 500)
}
for (var i = 0; i < 5; i++) {
  output(i)
}
console.log(i)
//501234

//使用let

//2.012345 分别隔离固定时间显示
for (var i = 0; i < 5; i++) {
  (function (j) {
    setTimeout(function () {
      console.log(j)
    }, 500 * j)
  })(i)
}
setTimeout(function () {
  console.log(i)
}, 500 * i)

//promise 定义多个异步任务
let tasks = []
for (var i = 0; i < 5; i++) {
  ((j) => {
    tasks.push(new Promise((resolve) => {
      setTimeout(function () {
        console.log(j)
        resolve()
      }, 500 * j)
    }))
  })(i)
}
Promise.all(tasks).then(()=>{
  console.log(i)
})