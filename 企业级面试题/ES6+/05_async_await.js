
//使用promise 方法
function sum2(a, b) {
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      resolve(a + b)
    }, 2000)
  })
}
async function main() {
  const m = await sum2(3, 4).then(data => data)
  console.log(m)
}
main()

//与Generator函数十分类似，就是生成器函数的语法糖