### CSS背景
- background-color
- background-image
- background-repeat 设置背景图像是否及如何重复。

    |值|说明|
    |--|--|
    |repeat|背景图像将向垂直和水平方向重复。这是默认|
    |repeat-x|只有水平位置会重复背景图像|
    |repeat-y|只有垂直位置会重复背景图像|
    |no-repeat|background-image不会重复|
    |inherit|指定background-repea属性设置应该从父元素继承|
- background-attachment 背景图像是否固定或者随着页面的其余部分滚动。
    |值|说明|
    |--|--|
    |scroll|背景图片随着页面的滚动而滚动，这是默认的。|
    |fixed|背景图片不会随着页面的滚动而滚动。|
    |local|背景图片会随着元素内容的滚动而滚动。|
    |initial|
    |inherit|指定 background-attachment 的设置应该从父元素继承。|
- background-position 设置背景图像的起始位置。

### CSS文本
文本颜色 color
文本方向 direction
字符间距 letter-spacing
行高 line-height
对齐元素中的文本 text-align
向文本添加修饰 text-decoration
缩进元素中文本的首行 text-indent
文本阴影 text-shadow
控制元素中的字母 text-transform
设置或返回文本是否被重写 unicode-bidi
元素垂直对齐 vertical-align
元素中空白的处理方式 white-space
设置字间距 word-spacing

### CSS字体
font 字体的全部属性
font-family 字体
font-size   字体大小
font-style  字体的样式
比如：
- italic
- oblique
- inherit
font-variant 以小型大写字体或者正常字体现实文本
font-weight 字体的粗细

### CSS链接
a:link 正常，未访问过的链接
a:visited  用户已访问过的链接
a:hover 当用户鼠标放在链接上时
a:active 链接被点击的那一刻

### CSS列表
list-style 简写属性。所有用于列表的属性设置于一个声明中。
list-style-image 将图像设置为列表项标志
list-style-position 列表项标志的位置
- inside
- outside 
- inherit
list-style-type 列表项标志的类型
- circle
- square
- upper-roman
- lower-alpha

### CSS表格

```css
//表格边框
table, th, td{
    border: 1px solid black;
}

//折叠边框
//上边的表格因为th，td有独立的边界所有有双边框
table{
    border-collapse: collapse;
}

//高度和宽度
table{
    width:100%;
}
th{
    height: 50px;
}

//文字对齐
td{
    text-align:right;
}
//垂直对齐
td{
    height:50px;
    vertical-align: bottom;
}
```
### CSS盒子模型
Margin 外边距
Border 边框
Padding 内边距
Content 内容

### border
border-style
- dotted 点线边框
- dashed 虚线边框
- solid 实线
- double
- groove 3D沟槽边框
- ridge 3D脊边框
- inset 3D嵌入式边框
- outset 3D突出式边框
border-width
border-color
边框可以单独设置各边的样式，顺序分别为上右下左，上（左右）下，（上下）（左右）

### CSS outline轮廓
outline是绘于元素周围的一条线，位于边框的外围，可起到突出元素的作用。
outline
outline-color
outline-style
outline-width

### 组合器
|Combination|Select|
|--|--|
|A,B| 匹配满足A（和或）B的任意元素|
|A B| 匹配任意元素，满足条件：B是A的后代节点（子节点或者子节点的子节点）|
|A > B| B是A的子节点
|A + B| B是A的下一个兄弟节点（AB有相同的父节点，并且B紧跟在A后面）|
|A ~ B| B是之后的兄弟节点的任意一个

### 尺寸
height
line-height
max-height
max-width
min-height
min-width
width

### Position 位置
static
fixed
relative
absolute

