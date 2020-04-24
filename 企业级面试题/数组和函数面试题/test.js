function a(){
  let total = 0
  return function(...arg){
    arg.forEach(item => {
      total += item
    });
    return total
  }
}
let add = a()
console.log(add(1))
console.log(add(1)(2))
