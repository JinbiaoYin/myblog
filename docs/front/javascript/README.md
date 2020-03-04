---
title: 首页
---

## 几种数据类型
- Number    数字类型
- String    字符串
- Boolean   布尔
- Undefined 变量未初始化
- Null  变量取值为 null
- Object    对象
- Array 数组

::: tip
var s1;//当定义了变量，但是没有给变量赋值，那么该值的数据类型就是 undefined 类型。
var s1 = null;//表示变量值为空，该变量在内存中是不存在的。真正的空。这时s1的数据类型变为Object。
`null` 和 `undefined` 有最大的相似性。看看 null == undefined 的结果为 `true` 也就更加能说明这点。但是 `null ===undefined` 的结果为 `false`。不过相似归相似，还是有区别的，就是和数字运算时，10 + null结果为：10；10 + undefined结果为：NaN。任何数据类型和undefined运算都是NaN;任何值和null运算，null可看做0运算。
:::

## Date 对象常用方法
```js
var date = new Date();
console.log(date.getFullYear());//返回当前年份
console.log(date.getMonth()+1);//返回当前月份
console.log(date.getDate());//返回当前日
console.log(date.getHours());//返回当前小时
console.log(date.getMinutes());//返回当前分钟
console.log(date.getSeconds());//返回当前秒数
console.log(date.getTime());//返回1970/01/01至今的毫秒数
```

## Math 对象常用方法
```js
var n = 3.2;var m = 3.3;
console.log(Math.ceil(n));//向上取整
console.log(Math.floor(n));//向下取整
console.log(Math.max(n,m));//返回两个数中的最大值
console.log(Math.min(n,m));//返回两个数中的最小值
console.log(Math.pow(2,3));//返回2的3次方
console.log(Math.round(n));//四舍五入
console.log(Math.random());//0-1之间的随机数
```

## 等号运算符
- "=" 赋值运算符
- "==" 只判断内容是否相同，不判断数据类型。
- "===" 不仅判断内容，还判断数据类型是否相同。
- !=   只判断内容是否不相同，不判断数据类型。
- !== 不全等于,不仅判断内容是否不相同，还判断数据类型是否不相同。

## NaN和Infinity或-Infinity
`NaN` 为 Not a number 的简写，指结果不是数字。

`NaN` 与 `Infinity` 都是 Number 类型的一种特殊格式，当输出结果非数字时，为 `NaN` ，例如 `console.log("abc"/3)` 。

`Infinity` 指的是无穷，例如 0 为除数时，则会出现 `Infinity` 。

js中预定义了一个全局方法 `isNaN()` 来判断元素是不是非数字(not a number)。 例如 `isNaN(NaN)`结果为 true ,`isNaN("abc")` 结果为true,`isNaN(123)`结果为false。


## 参考资料