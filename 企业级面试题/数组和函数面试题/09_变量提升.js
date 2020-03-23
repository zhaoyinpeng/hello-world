// 执行WriteNumber时，其作用域内并没有找到声明过的变量i，直接对i进行赋值，则隐式的将i声明为全局变量，（!!!!对于函数内部未声明过的变量，如果给它赋值，会隐式的将它声明为全局变量。!!!!） 循环开始，i = 1，调TenTimes方法，发现TenTimes方法也没有声明过变量i ，所以TenTimes里的i就是全局变量i，就和WriteNumber的i成了同一个。  这时line9 alert出来的自然是1了。TenTimes循环了10次，使得全局的i变成了11，自然WriteNumber就不会执行第2次循环操作了。
//情况一
function WriteNumber() {
  for (i = 1; i <= 10; i++) {
    console.log(TenTimes(i))
  }
}
function TenTimes(v) {
  var result = 0;
  alert(i);
  for (i = 1; i <= 10; i++) {
    result += v;
  }
  return result;
}
WriteNumber(); //结果 alert(1) 页面console.log(10)
alert(i) //这里是12 10+两次++

//情况二
// WriteNumber声明了i变量，即line3: var i=1，TenTimes未声明i变量，即line10: i=1。

// 　　运行结果：line9 alert(i)处报i未定义错误 ，因为WriteNumber有声明过变量i，所以没有成为全局的i，TenTimes执行时又没有声明过i，所以报未定义。若注释掉line9，输出结果正确。因为当TenTimes里运行到i=1时，隐式将i声明是全局变量，不影响WriteNumber里的i。WriteNumber仍然会执行10次循环。

// 　　验证：如果在WriteNumber();语句后加alert(i)，即取消line16的注释，会发现alert出11（11=10+TenTimes里的i++），证明了此时有windows.i。
function WriteNumber() {
  for (var i = 1; i <= 10; i++) {
    console.log(TenTimes(i))
  }
}
function TenTimes(v) {
  var result = 0;
  // alert(i); //报错未定义i
  for (i = 1; i <= 10; i++) {
    result += v;
  }
  return result;
}
WriteNumber(); //结果 页面console.log(10，20,30,40,50,60,70,80,90,100)
alert(i) //这里是11 10+一次++


//变量提升面试题
console.log(a);//function a(){}
console.log(b);//undefined
var a = 1;
function a() { }
var b = function () { };
console.log(a)//1

var a = 10;
(function () {
  console.log(a) //undefined
  a = 5
  console.log(window.a) //10
  var a = 20;
  console.log(a) //20
})()

//!!!!做错了
if ("a" in window) {
  var a = 10;
}
console.log(a); //10

//!!!!做错了
function test() {
  if ("a" in window) {
    var a = 10;
  }
  console.log(a);
}

test();//undefined

var foo = 1;
function bar() {
  if (!foo) {
    var foo = 10;
  }
  console.log(foo); 
}
bar()//10

//!!!做错
function Foo() {
  getName = function(){
      console.log("1");
  };
  return this;
}
Foo.getName = function() {
  console.log("2");
};

Foo.prototype.getName = function(){
  console.log("3");
};

var getName = function() {
  console.log("4");
};
function getName(){
  console.log("5");
}
Foo.getName();  //!3 //2
getName(); //4
Foo().getName();   //!3 //1
getName(); //!4 //1
new Foo.getName(); //!3 //2
new Foo().getName(); //3
new new Foo().getName(); //!报错 //3


//相当于
var getName = undefined;
function getName() {
  console.log("5");
}
getName = function() {
  console.log("4");
};