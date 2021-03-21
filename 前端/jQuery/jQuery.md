# 语法
基本的语法是<code>$(selector).action()</code>

比如：
<code>$(this).hide()</code> -隐藏当前元素

<code>$("p").hide()</code> -隐藏所有标签为p的元素

<code>$(".test").hide()</code> -隐藏所有class为test的元素

<code>$("#test").hide()</code> -隐藏所有id为test的元素

你可能经常看到jQuery的方程写成这样
```javascript
$(document).ready(function{
    //jQuery methods go here
})
```
主要是为了防止jQuery的代码在文件加载完之前就开始跑了。
也可以写成这样
```javascript
$(function(){
  // jQuery methods go here...
});
```
# 选择器
元素选择器
当用户点击任意一个button，所有p标签的元素都会消失
```javascript
$(document).ready(function(){
  $("button").click(function(){
    $("p").hide();
  });
});
```
id选择器
id为test的元素在按钮被按之后就会消失
```javascript
$(document).ready(function(){
  $("button").click(function(){
    $("#test").hide();
  });
});
```
class选择器
当用户点击任意一个button，所有class为test的元素都会消失
```javascript
$(document).ready(function(){
  $("button").click(function(){
    $(".test").hide();
  });
});
```
更多选择
![更多选择](./selector_more_example.png)

# 事件
|鼠标事件|键盘事件|表单事件|文档/窗口事件|
|--|--|--|--|
|click 点击|keypress按下键盘|submit表单提交|load|
|dbclick|keydown|change|resize|
|mouseenter|keyup|focus|scroll|
|mouseleave||blur|unload|
|hover|

mouseenter当鼠标穿过时，会发生mouseenter事件
mouseleave当师表离开时，会发生mouseleave事件
mousedown当鼠标指针移动到元素上方，并按下鼠标按键时，会发生 mousedown 事件。
mouseup当在元素上松开鼠标按钮时，会发生 mouseup 事件。
hover鼠标悬停。当鼠标移动到元素上时，会触发指定的第一个函数(mouseenter);当鼠标移出这个元素时，会触发指定的第二个函数(mouseleave)。
```javascript
$("#p1").hover(
    function(){
        alert("你进入了 p1!");
    },
    function(){
        alert("拜拜! 现在你离开了 p1!");
    }
);
```
change改变输入框里的内容，然后点回车或者点击输入框外面。
focus点击表单的时候获取焦点
blur获取焦点后，失去焦点
load当指定的元素已加载时，会发生 load 事件。
resize改变浏览器窗口大小



