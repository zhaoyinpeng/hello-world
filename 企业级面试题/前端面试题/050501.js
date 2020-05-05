// ===============对象和数组的区别=============
// 数组和对象两者都可以用来表示数据的集合，曾一度搞不清楚”数组”(array)和”对象”(object)的根本区别在哪里。

// 有一个数组a=[1,2,3,4]，还有一个对象a={0:1,1:2,2:3,3:4}，然后你运行alert(a[1])，两种情况下的运行结果是相同的！这就是说，数据集合既可以用数组表示，也可以用对象表示，那么我到底该用哪一种呢？

// 我后来才知道，数组表示有序数据的集合，而对象表示无序数据的集合。如果数据的顺序很重要，就用数组，否则就用对象。
// 数组和对象的另一个区别是，数组的数据没有”名称”（name），对象的数据有”名称”（name）。

//===================不使用new和使用new穿件实例==========================

var me = Man({
  fullname: "小李"
});
var she = new Man({
  fullname: "小红",
  gender: "女"
});

console.group();
console.info("我的名字是：" + me.attr("fullname") + "\n我的性别是：" + me.attr("gender"));
console.info("她的名字是：" + she.attr("fullname") + "\n她的性别是：" + she.attr("gender"));
console.groupEnd();
/*------[执行结果]------

我的名字是：小李
我的性别是：<用户未输入>

她的名字是：小红
她的性别是：女
*/
//方法一
var Man = function (obj) {
  if (this instanceof arguments.callee) {
    for (var e in obj) {
      this[e] = obj[e];
    }
  } else {
    return new Man(obj);
  }
}
Man.prototype.attr = function (attr, val) {
  if (val) {
    this[attr] = val;
  } else {
    if (this[attr]) {
      return this[attr];
    } else {
      return "<用户未输入>";
    }
  }
}
//方法二
function Man(o) {
  function A() {}
  A.prototype.attr = function (str) {
    return str in this ? this[str] : "<用户未输入>";
  }
  var obj = new A;
  for (var e in o) {
    obj[e] = o[e];
  }
  return obj;
}
//区别是楼上的是通过判断是否执行的new 操作，如果没执行new 操作就返回一个new的实例;
// 我那个是构造函数里面返回一个对象，根据js构造函数的特性，如果返回的是一个对象的话，this指向的对象会被丢弃，所以实际的构造函数是里面的A,这样就可以new 和 没有new都一样的行为了


//============new 一个对象的过程！！！==============
//https://www.jianshu.com/p/517a33adc0eb