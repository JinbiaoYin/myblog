---
title: 智能化建筑集成系统
---

## 前言
首先的工作任务是分析现有系统，找出所有的api接口记录下来。使用`uniapp`开发出APP，用来做展现。

## 现有系统分析
整体采用 C/S 架构。
`IIS`:智能化集成软件。

- sw-iis 客户端100.1.0.171。
- sw-iis ngnix静态资源服务器。http://localhost:8086
- icms 服务器。http://100.1.0.170:8080
- idps 服务器。http://localhost:9000
- stream-server 流媒体服务器。http://localhost:9028
- 停车场数据查询服务。http://localhost:9007


以下可能为硬件提供商提供的系统：
- 动力环境。100.1.0.172
- 背景音乐。100.1.0.150
- 停车场系统。100.1.0.181:8087
- 信息发布系统。100.1.0.179:81
- 无线网络管理系统。192.168.200.253
- 天翼对讲系统。61.191.45.192

### sw-iis 客户端
使用的竟然是 `Electronjs`，一个使用 `JavaScript`,`HTML`和`CSS`构建跨平台的桌面应用程序。我还以为用的是 `C#`。于是我把 [electronjs](https://www.electronjs.org/) 提供的 DEMO 下了下来，并运行了一下。结果如下：

<img :src="$withBase('/others/work/electronjs.jpg')">

和 sw-iis 客户端的效果是一模一样的。

ip 配置的在 js 文件夹中的 `init.js`中

### iis 浏览器端

是一组静态html文件，放在 `nginx`下的。服务端 ip 配置的在 js 文件夹中的 `init.js`中，和 sw-iis 相同的效果，只不过是浏览器端的。

### icms 
icms 是为 上述 sw-iis 客户端提供部分服务的。使用javaee开发，不过技术太老了。

我把这个 icms 的 war 包反编译了下。里面主要使用的是`spring`,`mybatis`,`webx`。这个`webx`讲道理我是没听说过的，以前至少还用过`struts2`，这个`webx`是啥东西？

然后我把所有反编译的文件重构成了一个 web 工程。。各种报错，实在懒得搞了。

### stream-server

stream-server 为流媒体服务器，发布的端口为 9028。简单集成了 ffmpeg 用来推流到 stream-server ，使用 websocket 。

stream-server 是使用基于 node.js，使用ffmpeg 和 jsmpeg 做成的websocket服务器，使用go语言仅仅是用来跳转页面和查询摄像头配置，真正播放视频流主要是 ffmpeg 将 rtsp 视频流解析为 mpeg1video 推送给 stream-server 中的 websocket 接口。

页面上由 websocket 协议请求 stream-server ，由 canvas 标签绘制一帧帧绘制视频。


### isql.jar
停车场系统的服务。其实只是帮我们运行了几个sql语句，返回json数据给我们。没有任何权限。

### idps
采用定时任务从opc不断查询数据，写入到icmsdb的point_base数据库中。icms页面中进行轮询设备状态，用不同图片展示不同设备的状态。

采石中只有动力环境和广播系统。


## 参考资料
- [electronjs](https://www.electronjs.org/)
- [html5播放rtsp方案](https://blog.csdn.net/u014535295/article/details/99303890?depth_1-utm_source=distribute.pc_relevant.none-task-blog-BlogCommendFromBaidu-2&utm_source=distribute.pc_relevant.none-task-blog-BlogCommendFromBaidu-2)