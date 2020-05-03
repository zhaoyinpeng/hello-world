//请编写一个函数，接收（a,b）两个参数，能够返回a+b
// function sum(a, b) {
//   return a + b
// }
// let m = sum(2, 2)
// console.log(m)

//请编写一个函数，接收（a,b）两个参数，2000ms后能够返回a+b
// function sum2(a, b) { 错误写法
//   setTimeout(function () {
//     return a + b
//   }, 2000)
// }
// let m = sum2(2, 2)
// console.log(m)

// function sum2(a, b, cb) { //回调地狱，callback hell
//   setTimeout(function () {
//     cb(a + b)
//   }, 2000)
// }
// let m = sum2(2, 2, function (m) {
//   console.log(m)
// })

//使用promise 方法
function sum2(a, b) {
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      resolve(a + b)
    }, 2000)
  })
}
let m = sum2(2, 2).then(resolve => {
  console.log(resolve)
  return sum2(4, 5)
}).then(resolve => {
  console.log(resolve)
})

//1.promise是异步编程的一种解决方案。
//2.解决的问题是回调地狱。
//3.
var b = function(){
	return new Promise(function(res){
		setTimeout((a)=>{res(a)},3000,6)
	})
}
b().then(res=>console.log(res))


let c = function(){
  console.log('执行')
}
setTimeout(c,3000)