---
title: 如何解决日志循环依赖
---

## 常用日志框架
日志通常用来记录系统运行时的一些信息，如运行状况，错误信息等。
市面上的日志框架：
- `JUL`。日志实现，jdk中自带的日志工具。
- `JCL`。日志门面，已经过时，不再用了。就是`commons-logging`
- `jboss-logging`。日志门面，不常用。
- `logback`。日志实现。`log4j`的升级版。
- `log4j`。日志实现。
- `log4j2`。日志实现，**apache**下的。
- `slf4j`。日志门面。

slf4j,log4j,logback都是一个人开发的。log4j2属于apache下的日志框架。
其中：
- `Spring`框架默认使用`JCL`(`commons-logging`)
- `SpringBoot2`默认使用`slf4j`和`logback`。

## 如何使用slf4j
开发时，不应该直接使用日志实现类，而是调用日志抽象层。目前大多选用`slf4j`作为日志门面，应当导入`slf4j-api.jar`。

- `logback`。导入`logback-classic.jar`和`logback-core.jar`。
- `log4j`。由于`log4j`出现的较早，当时还未提出日志门面的概念，因此若要使用`log4j`和`slf4j`。除了需要导入`log4j.jar`，还需要导入一个适配层`slf4j-log412.jar`。
- `JUL`。同`log4j`，也需要导入一个适配层`slf4j-jdk14.jar`。

::: tip
配置文件还是使用所选日志框架本身的日志文件配置。
:::

## 遗留问题
项目中所使用的框架几乎都集成了自己的日志框架。因此会造成日志框架太多无法选择。这时会采用一些适配层包来进行转换。

- `jcl-over-slf4j.jar`。
- `log4j-over-slf4j.jar`。
- `jul-to-slf4j.jar`。

例如，如果你想要使用`logback`，但是引入的其它依赖中又依赖了`log4j`，这时候的解决方法就是:**排除依赖中的`log4j`，并用相应的包，如`log4j-over-slf4j`来替换。**

`SpringBoot`便是使用了这种方式，因此当我们引入其它依赖时，如果依赖中存在`log4j`等日志实现框架，就会产生冲突，因为`log4j-over-slf4j`的实现方法是使用包命覆盖的方法，如果再引入`log4j`，就等于存在两个相同的包和类，这时我们只需要将它排除即可。因为`SpringBoot`已经引入了大多数适配包。