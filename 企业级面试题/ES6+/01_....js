/* ...
1.剩余参数
2.强制展开运算符 
*/
// 1
function fun(a, ...b) {
  console.log(a)
  console.log(b)
}
fun(1, 2, 3, 4)

// 2 强制展开这个数组
let arr = [2, 3, 4, 5, 234, 34, 123]
console.log(Math.max.apply(null, arr))
console.log(Math.max(...arr))