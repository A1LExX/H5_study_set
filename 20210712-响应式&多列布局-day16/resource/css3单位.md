<h1 align="center">css3单位</h1>
### 一、rem单位

1、rem介绍： (font size of the root element) 是指相对于根元素的字体大小的单位。

2、为什么web app要使用rem？

实现强大的屏幕适配布局(淘宝,腾讯,网易等网站都是rem布局适配)rem能等比例适配所有屏幕,根据变化html的字体大小来控制rem的大小,

3、适配方案

- 使用rem.js
- 使用vw

### 二、em单位

1、em介绍：是相对长度单位。相对于当前对象内文本的字体尺寸。如当前对行内文本的字体尺寸未被人为设置，则相对于浏览器的默认字体尺寸。

2、em特点：

- em的值并不是固定的

- em会继承父级元素的字体大小

  

### 三、vw、vh单位

1、单位介绍：

- vw：viewpoint width，视窗宽度，1vw等于视窗宽度的1%。
- vh：viewpoint height，视窗高度，1vh等于视窗高度的1%。
- vmin：vw和vh中较小的那个。
- vmax：vw和vh中较大的那个。
- vw, vh, vmin, vmax：IE9+局部支持，chrome/firefox/safari/opera支持，iOS safari 8+支持，Android 
- browser4.4+支持，chrome for android39支持

2、px转vw公式:

Vw = 元素所展示的大小（设计图固定大小）*100/设计稿宽度

1px = 0.1333333vw