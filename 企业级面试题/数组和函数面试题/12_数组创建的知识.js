// 使用Array和[]创建数组的区别
// https://www.cnblogs.com/shcrk/p/9280343.html

// JS定义数组变量时，在不需要给定数组的维度和长度的情况下，通常有两种方法：
var arrTest = new Array();
var arrTest = [];
// 两者效果一样。但是经过查看与对比，在各种对外公开的JS大型开源类库的代码中，第一种方法基本看不到。
// 又或者你曾经尝试过下面这段代码：
console.time('using[]')
for (var i = 0; i < 2000000; i++) { var arr = [] };
console.timeEnd('using[]')

console.time('using new')
for (var i = 0; i < 2000000; i++) { var arr = new Array };
console.timeEnd('using new')
// 你会发现下面这段代码的结果有一些有意思的规律，那就是：使用using new的时间总是会比using []来的长。哦，yes,有可能你会觉得是因为代码的顺序的问题，那么我们改一下代码的顺序，但是你会很遗憾的发现，结果依然是使用using new的时间总是会比using []来的长，是不是感觉很神奇？下面就是本人对此问题收集到的一些解释和自己对这个问题的理解。

//造成区别的原因
// 针对这个问题进行了搜索与寻找。在CSDN上找到一篇关于new Array()与[]的差别的讨论帖。帖子中提到了两者的细微差别：使用new关键字的方法会在内存中开辟一些空间，用来记录与存储该变量，也就是这是一个实例化过程。
// 　　以下为原帖中引用的记录：
// 　　“new关键字的使用，除了在需要实例化一个对象，或罕见的需要延时加载数据的情况外，你基本上不需要使用new关键字。在Javascript里分配大量的new变量地址是一项很慢的操作，为了效率起见，你应该始终使用对象符号。
// 　　在另外一个搜索结果中，有提到这样的一个说法：“很简单，Array()是一个对象，[]是一个数据原型。使用new Array()系统每次都会新生成一个对象（浏览器每生成一个对象都会耗费资源去构造他的属性和方法），他的子集是[]；个人推荐使用[]，效率高。浏览器对于CPU很吃紧，所以很多时候要有技巧。比如数字转换成字符只要a=a+'';就可以了，比用String效率高了很多。但是如果乱用是会造成错误的

//个人理解
// 我在数据类型一章中有提到过一种数据包装类型，创建一个字符串的方式有：‘字符串’或者是new String('字符串')，一种是直接创建了一个字符串，一个是调用字符串的构造函数创建字符串对象然后再创建这个字符串，中间多了一个创建对象的过程，也许这在一般情况下是看不出什么区别的，但是像上述例子中，当这个技术足够大的时候，就会发现了问题所在。因此，如果可以通过[]创建一个纯净的数组，就不需要通过new Array()来创建数组。