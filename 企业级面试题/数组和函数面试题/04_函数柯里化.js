//函数柯里化（curry）
function fun(a, b, c, d) {
  return a + b + c + d
}
//现在提供四个参数fun就能工作
fun(3, 4, 5, 6); //18

//如果少传了一个参数,这个函数有原来函数的功能（fn在等待第四个函数）
let fn = fun(3, 4, 5)

// fn(6) //18 这个函数不能柯里化

//让你写一个柯里化函数
function curry(fn) {
  return function () {
    var args = arguments;
    return function () {
      return fn(...args, ...arguments)
    }
  }
}
let fun2 = curry(fun)
let fn2 = fun2(3, 4, 5)
console.log(fn2(6))