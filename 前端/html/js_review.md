__声明变量类型__
```javascript
var carname=new String;
var x=      new Number;
var y=      new Boolean;
var cars=   new Array;
var person= new Object;
```
__Javascript的作用域__
如果变量在函数内没有声明（没有使用 var 关键字），该变量为全局变量。
以下实例中 carName 在函数内，但是为全局变量。
```javascript
// 此处可调用 carName 变量
 
function myFunction() {
    carName = "Volvo";
    // 此处可调用 carName 变量
}
```
__常见的HTML时间__
|事件|描述|
|--|--|
|onchange|HTML元素改变|
|onclick|用户点击HTML元素
|onmousehover|鼠标移动到此HTML元素上
|onmouseout|鼠标从此HTML元素上移开
|onkeydown|用户按下键盘按键
|onload|浏览器已完成页面的加载

__转义字符__
反斜杠（\）可以用于转义撇号，换行，引号，等其他特殊字符。

__比较运算符__
- == 等于
- === 绝对等于（值和类型都均等）
- !== 不绝对等于（值和类型有一个不相等，或两个都不相等）

__条件运算符__
语法：variablename=(condition)?value1:value2 
```javascript
//如果变量 age 中的值小于 18，则向变量 voteable 赋值 "年龄太小"，否则赋值 "年龄已达到"。
voteable=(age<18)?"年龄太小":"年龄已达到";
```
__FOR/IN循环__

__跳出多重循环__
```javascript
outerloop:
for (var i = 0; i < 10; i++)
{
    innerloop:
    for (var j = 0; j < 10; j++)
    {
        if (j > 3)
        {
            break;
        }
        if (i == 2)
        {
            break innerloop;
        }
        if (i == 4)
        {
            break outerloop;
        }
        document.write("i=" + i + " j=" + j + "");
    }
}
```
__typeof__
```javascript
typeof "John"                // 返回 string
typeof 3.14                  // 返回 number
typeof false                 // 返回 boolean
typeof [1,2,3,4]             // 返回 object
typeof {name:'John', age:34} // 返回 object
```
null 和 undefined 的值相等，但类型不等：
```javascript
typeof undefined             // undefined
typeof null                  // object
null === undefined           // false
null == undefined            // true
```
[__正则表达式__](https://www.runoob.com/js/js-regexp.html)

__this关键字__
1、在对象方法中， this 指向调用它所在方法的对象。
 2、单独使用 this，它指向全局(Global)对象。
 3、函数使用中，this 指向函数的所属者。
 4、严格模式下函数是没有绑定到 this 上，这时候 this 是 undefined。
 5、在 HTML 事件句柄中，this 指向了接收事件的 HTML 元素。
 6、apply 和 call 允许切换函数执行的上下文环境（context），即 this 绑定的对象，可以将 this 引用到任何对象。

 __void__
 void()仅仅是代表不返回任何值，但是括号内的表达式还是要运行
 ```javascript
void(alert("Warnning!"))

 // 阻止链接跳转，URL不会有任何变化
<a href="javascript:void(0)" rel="nofollow ugc">点击此处</a>

// 虽然阻止了链接跳转，但URL尾部会多个#，改变了当前URL。（# 主要用于配合 location.hash）
<a href="#" rel="nofollow ugc">点击此处</a>

// 同理，# 可以的话，? 也能达到阻止页面跳转的效果，但也相同的改变了URL。（? 主要用于配合 location.search）
<a href="?" rel="nofollow ugc">点击此处</a>

// Chrome 中即使 javascript:0; 也没变化，firefox中会变成一个字符串0
<a href="javascript:0" rel="nofollow ugc">点击此处</a>
```