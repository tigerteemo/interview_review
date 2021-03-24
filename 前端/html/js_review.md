声明变量类型
```javascript
var carname=new String;
var x=      new Number;
var y=      new Boolean;
var cars=   new Array;
var person= new Object;
```
Javascript的作用域
如果变量在函数内没有声明（没有使用 var 关键字），该变量为全局变量。
以下实例中 carName 在函数内，但是为全局变量。
```javascript
// 此处可调用 carName 变量
 
function myFunction() {
    carName = "Volvo";
    // 此处可调用 carName 变量
}
```
常见的HTML时间
|事件|描述|
|--|--|
|onchange|HTML元素改变|
|onclick|用户点击HTML元素
|onmousehover|鼠标移动到此HTML元素上
|onmouseout|鼠标从此HTML元素上移开
|onkeydown|用户按下键盘按键
|onload|浏览器已完成页面的加载

