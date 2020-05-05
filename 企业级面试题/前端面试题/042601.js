// 1.================闭包=====================
function fun(n, o) {
  console.log(o)
  return {
    fun: function (m) {
      return fun(m, n);
    }
  };
}
var a = fun(0);
a.fun(1);
a.fun(2);
a.fun(3); //undefined,0,0,0
var b = fun(0).fun(1).fun(2).fun(3); //undefined,0,1,2
var c = fun(0).fun(1);
c.fun(2);
c.fun(3); //undefined,0 1,1
// 2. ===============匿名函数=====================
// 匿名函数有两种用法：
// （1）赋值
// （2）自我执行
// 匿名函数用法
// 	1.声明一个匿名函数，直接赋值给某一个事件
windon.onload = function () {
  alert('hello');
};
// 	2.使用匿名函数表达式。将匿名函数，赋值给一个变量。
var show = function () {
  alert('hello');
};
show();
// 3.自执行函数。这里我总结了4种匿名函数调用方法：
//1.使用！开头，结构清晰，不容易混乱，推荐使用；
! function () {
  document.write('ni hao');
}

//2.无法表明函数与之后的()的整体性，不推荐使用。
(function () {
  document.write('wo hao');
})();

//3.能够将匿名函数与调用的()为一个整体，官方推荐使用；
(function () {
  document.write('hello');
}());

//4.
[function () {
  document.write('world');
}()];

//3.================函数有几种=========================
// 首先，在此之前需要了解的是，在JS中函数可以分为两种，具名函数（命名函数）和匿名函数。
// 区分这两种函数的方法非常简单，可以通过输出 fn.name 来判断，有name的就是具名函数，没有name的就是匿名函数

//4.=====================创建函数的几种方式============================
//1.var fn1=function (){}
//2.function fn1(){}
//3.var fn1=function xxcanghai(){}; //具名函数
//4.Function 构造函数
//5.(function(){alert(1);})(); //自执行
//6.当然还有其他创建函数或执行函数的方法，这里不再多说，比如采用 eval ， setTimeout ， setInterval 等非常用方法，这里不做过多介绍，属于非标准方法，这里不做过多展开

//5. ================输出下面的运行结果====================
//堆空间用于存储引用类型值得空间，栈空间用于存储基本类型和指定代码的环境
//example 1 
var a = {},
  b = '123',
  c = 123
a[b] = 'b';
a[c] = 'c'
console.log(a[b]) //c //因为a["123"] <=> a[123] a[c]把a[b]覆盖了
//example 2
var a = {},
  b = Symbol('123'),
  c = Symbol('123')
a[b] = 'b';
a[c] = 'c'
console.log(a[b]) //b //Symbol是新增的数据类型 它的值是惟一的
//example 3 //!!
var a = {},
  b = {
    key: '123'
  },
  c = {
    key: '456'
  }
a[b] = 'b';
a[c] = 'c'
console.log(a[b]) //c 
//**对象的属性名不能是对象，遇到对象属性名，会默认转化为字符串**
//普通对象的toString()就是原型链上的toString() 会返回[object Object]

// 6.====================对象中的key可以是什么类型的===========================
let otherObj1 = {
  a: 1
}
let otherObj2 = {
  b: 2
}
let array1 = [1, 2, 3]
let array2 = [1, 2, 3, [1, 2, 3]]
let obj = {
  undefined: 'undefined',
  null: 'null',
  true: 'true'
}
obj[otherObj1] = 'otherObj1';
obj[otherObj2] = 'otherObj2';
obj[array1] = 'array1';
obj[array2] = 'array2';

// 1,2,3: "array1"
// 1,2,3,1,2,3: "array2"
// [object Object]: "otherObj2"
// null: "null"
// true: "true"
// undefined: "undefined"