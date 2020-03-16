//闭包，函数能够记住自己定义时候的所在作用域，哪怕这个函数被放在其他地方执行
function fun() {
  a = 10
  console.log(a)
}
var a = 20
fun() //10

//！！！！！！！！！！！！！！！震惊
var b = 'b'
function funa() {
  console.log(b)
}
(function (fn) {
  var b = 'bbb'
  fn() //b
})(funa);