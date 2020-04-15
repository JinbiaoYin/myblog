---
title: ffmpeg
---

## 介绍
FFmpeg是一套可以用来记录、转换数字音频、视频，并能将其转化为流的开源计算机程序。采用LGPL或GPL许可证。它提供了录制、转换以及流化音视频的完整解决方案。它包含了非常先进的音频/视频编解码库libavcodec，为了保证高可移植性和编解码质量，libavcodec里很多code都是从头开发的。

打开[https://ffmpeg.zeranoe.com/builds/](https://ffmpeg.zeranoe.com/builds/)，该网站中的FFMPEG分为3个版本：Static，Shared，Dev。

前两个版本可以直接在命令行中使用，他们的区别在于：Static里面只有3个应用程序：ffmpeg.exe，ffplay.exe，ffprobe.exe，每个exe的体积都很大，相关的Dll已经被编译到exe里面去了。Shared里面除了3个应用程序：ffmpeg.exe，ffplay.exe，ffprobe.exe之外，还有一些Dll，比如说avcodec-54.dll之类的。Shared里面的exe体积很小，他们在运行的时候，到相应的Dll中调用功能。Dev版本是用于开发的，里面包含了库文件xxx.lib以及头文件xxx.h，这个版本不包含exe文件。

这里下载了static版本，是个zip压缩文件，解压到指定目录，去配置环境变量，比如D:\ffmpeg\bin，这样bin下面的ffmpeg.exe就可以在命令行中使用了，可以用ffmpeg -version测试一下。

放一个mp4视频，然后把声音提取到output.acc，用命令测试一下：ffmpeg -i test.mp4 -acodec copy -vn output.aac

播放 output.acc ，能正常播放。

## 基本命令
主要参数
```
-i 设定输入流
-f 设定输出时间
-ss 开始时间
```

视频参数：
```
-b 设定视频流量(码率)，默认为200Kbit/s 
-r 设定帧速率，默认为25 
-s 设定画面的宽与高 
-aspect 设定画面的比例 
-vn 不处理视频 
-vcodec 设定视频编解码器，未设定时则使用与输入流相同的编解码器 
```

音频参数：
```
-ar 设定采样率 
-ac 设定声音的Channel数 
-acodec 设定声音编解码器，未设定时则使用与输入流相同的编解码器 
-an 不处理音频
```

### 视频格式转换
比如一个avi文件，想转为mp4，或者一个mp4想转为ts。我高中时的手机只能播放mp4格式的文件，当时去网吧下载电影rmvb格式的还要转码为mp4，用的转码器应该就是基于 ffmpeg 。  
`ffmpeg -i input.avi output.mp4`  
`ffmpeg -i input.mp4 output.ts` 

比如我还想到一些视频网站上下载一些电影观看，但是它们只提供了在线播放功能，没有提供下载。这是很常见的吧。

我们就可以利用 ffmpeg 来自动下载视频到本地。例如我从百度百科上拉取了个视频：
`ffmpeg -i https://baikevideo.cdn.bcebos.com/media/mda-OgY9LkNvb4QWwVgf/e8b2d93e8ec20fddff8b91537e4fdb21.mp4 out.mp4`

### 提取音频
比如我之前喜欢听 asmr ，但是网上的资源都是视频形式的，太耗费流量。我只需要她的声音就行了。例如：
`ffmpeg -i asmr.mp4 -acodec copy -vn output.aac`

### 提取视频
> -an 不处理音频

`ffmpeg -i input.mp4 -vcodec copy -an output.mp4`


### 视频剪切
经常要测试视频，但是只需要测几秒钟，可是视频却有几个G，咋办？切啊！
下面的命令，就可以从时间为00:00:15开始，截取5秒钟的视频。

`ffmpeg -ss 00:00:15 -t 00:00:05 -i input.mp4 -vcodec copy -acodec copy output.mp4`

> -ss表示开始切割的时间，-t表示要切多少。下面就是从开始，切5秒钟出来。

### 码率控制
码率控制对于在线视频比较重要。因为在线视频需要考虑其能提供的带宽。

### 为视频添加logo水印
比如为一个视频添加爱奇艺的logo
`ffmpeg -i input.mp4 -i iQIYI_logo.png -filter_complex overlay output.mp4`

### 抓取视频的帧
`ffmpeg -i input.mp4 -r 1 -q:v 2 -f image2 pic-%03d.jpeg`

> -r 表示每一秒几帧  
> -q:v表示存储jpeg的图像质量，一般2是高质量。

设置开始的时间，和你想要截取的时间

`ffmpeg -i input.mp4 -ss 00:00:20 -t 10 -r 1 -q:v 2 -f image2 pic-%03d.jpeg`
> -ss 表示开始时间  
> -t表示共要多少时间。

如此，ffmpeg会从input.mp4的第20s时间开始，往下10s，即20~30s这10秒钟之间，每隔1s就抓一帧，总共会抓10帧。