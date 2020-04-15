---
title: 智能化建筑集成系统
---

## 前言
首先的工作任务是分析现有系统，找出所有的api接口记录下来。使用`uniapp`开发出APP，用来做展现。

## 现有系统分析
整体采用 C/S 架构。
`IIS`:智能化集成软件。

- sw-iis 客户端。
- sw-iis ngnix静态资源服务器
- icms 服务器
- stream-server 流媒体服务器

### sw-iis 客户端
使用的竟然是 `Electronjs`，一个使用 `JavaScript`,`HTML`和`CSS`构建跨平台的桌面应用程序。我还以为用的是 `C#`。于是我把 [electronjs](https://www.electronjs.org/) 提供的 DEMO 下了下来，并运行了一下。结果如下：

<img :src="$withBase('/others/work/electronjs.jpg')">

和 sw-iis 客户端的效果是一模一样的。

ip 配置的在 js 文件夹中的 `init.js`中

### iis 浏览器端

是一组静态html文件，放在 `nginx`下的。服务端 ip 配置的在 js 文件夹中的 `init.js`中，和 sw-iis 相同的效果，只不过是浏览器端的。

`nginx` 发布端口为 8086。


### icms 
icms 是为 上述 sw-iis 客户端提供部分服务的。使用javaee开发，不过技术太老了。

我把这个 icms 的 war 包反编译了下。里面主要使用的是`spring`,`mybatis`,`webx`。这个`webx`讲道理我是没听说过的，以前至少还用过`struts2`，这个`webx`是啥东西？

然后我把所有反编译的文件重构成了一个 web 工程。。各种报错，实在懒得搞了。

icms 发布端口为 8080 

### stream-server

stream-server 为流媒体服务器，发布的端口为 9028。简单集成了 ffmpeg 用来推流到 stream-server ，使用 websocket 。

## isql.jar
好像是停车场系统的服务。


## 参考资料
- [electronjs](https://www.electronjs.org/)
