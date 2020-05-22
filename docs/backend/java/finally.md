---
title: finally return
---

## try和finally中都有return语句，执行哪一个return？
try 中的 return 语句调用的函数先于 finally 中调用的函数执行，也就是说 try 中的 return 语句先执行，finally 语句后执行，但try中的 return 并不是让函数马上返回结果，而是 return 语句执行后，将把返回结果放置进函数栈中，此时函数并不是马上返回，它要执行 finally 语句后才真正开始返回。但此时会出现两种情况：

- 如果finally中也有return，则会直接返回finally中的return结果，并终止程序，函数栈中的return不会被完成
- 如果finally中没有return，则在执行完finally中的代码之后，会将函数栈中保存的try return的内容返回并终止程序

注意：

1. 不管有没有出现异常，finally块中代码都会执行
2. 当try和catch中有return时，finally仍然会执行
3. finally是在try中return后面的表达式运算后执行的（此时并没有返回运算后的值，而是先把要返回的值保存起来，管finally中的代码怎么样，返回的值都不会改变，仍然是之前保存的值），所以函数返回值是在finally执行前确定的
4. finally中最好不要包含return，否则程序会提前退出，返回值不是try或catch中保存的返回值