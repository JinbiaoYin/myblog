(window.webpackJsonp=window.webpackJsonp||[]).push([[61],{272:function(e,t,a){"use strict";a.r(t);var p=a(19),v=Object(p.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h2",{attrs:{id:"介绍"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#介绍"}},[e._v("#")]),e._v(" 介绍")]),e._v(" "),a("p",[e._v("FFmpeg是一套可以用来记录、转换数字音频、视频，并能将其转化为流的开源计算机程序。采用LGPL或GPL许可证。它提供了录制、转换以及流化音视频的完整解决方案。它包含了非常先进的音频/视频编解码库libavcodec，为了保证高可移植性和编解码质量，libavcodec里很多code都是从头开发的。")]),e._v(" "),a("p",[e._v("打开"),a("a",{attrs:{href:"https://ffmpeg.zeranoe.com/builds/",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://ffmpeg.zeranoe.com/builds/"),a("OutboundLink")],1),e._v("，该网站中的FFMPEG分为3个版本：Static，Shared，Dev。")]),e._v(" "),a("p",[e._v("前两个版本可以直接在命令行中使用，他们的区别在于：Static里面只有3个应用程序：ffmpeg.exe，ffplay.exe，ffprobe.exe，每个exe的体积都很大，相关的Dll已经被编译到exe里面去了。Shared里面除了3个应用程序：ffmpeg.exe，ffplay.exe，ffprobe.exe之外，还有一些Dll，比如说avcodec-54.dll之类的。Shared里面的exe体积很小，他们在运行的时候，到相应的Dll中调用功能。Dev版本是用于开发的，里面包含了库文件xxx.lib以及头文件xxx.h，这个版本不包含exe文件。")]),e._v(" "),a("p",[e._v("这里下载了static版本，是个zip压缩文件，解压到指定目录，去配置环境变量，比如D:\\ffmpeg\\bin，这样bin下面的ffmpeg.exe就可以在命令行中使用了，可以用ffmpeg -version测试一下。")]),e._v(" "),a("p",[e._v("放一个mp4视频，然后把声音提取到output.acc，用命令测试一下：ffmpeg -i test.mp4 -acodec copy -vn output.aac")]),e._v(" "),a("p",[e._v("播放 output.acc ，能正常播放。")]),e._v(" "),a("h2",{attrs:{id:"基本命令"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#基本命令"}},[e._v("#")]),e._v(" 基本命令")]),e._v(" "),a("p",[e._v("主要参数")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("-i 设定输入流\n-f 设定输出时间\n-ss 开始时间\n")])])]),a("p",[e._v("视频参数：")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("-b 设定视频流量(码率)，默认为200Kbit/s \n-r 设定帧速率，默认为25 \n-s 设定画面的宽与高 \n-aspect 设定画面的比例 \n-vn 不处理视频 \n-vcodec 设定视频编解码器，未设定时则使用与输入流相同的编解码器 \n")])])]),a("p",[e._v("音频参数：")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("-ar 设定采样率 \n-ac 设定声音的Channel数 \n-acodec 设定声音编解码器，未设定时则使用与输入流相同的编解码器 \n-an 不处理音频\n")])])]),a("h3",{attrs:{id:"视频格式转换"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#视频格式转换"}},[e._v("#")]),e._v(" 视频格式转换")]),e._v(" "),a("p",[e._v("比如一个avi文件，想转为mp4，或者一个mp4想转为ts。我高中时的手机只能播放mp4格式的文件，当时去网吧下载电影rmvb格式的还要转码为mp4，用的转码器应该就是基于 ffmpeg 。"),a("br"),e._v(" "),a("code",[e._v("ffmpeg -i input.avi output.mp4")]),a("br"),e._v(" "),a("code",[e._v("ffmpeg -i input.mp4 output.ts")])]),e._v(" "),a("p",[e._v("比如我还想到一些视频网站上下载一些电影观看，但是它们只提供了在线播放功能，没有提供下载。这是很常见的吧。")]),e._v(" "),a("p",[e._v("我们就可以利用 ffmpeg 来自动下载视频到本地。例如我从百度百科上拉取了个视频：\n"),a("code",[e._v("ffmpeg -i https://baikevideo.cdn.bcebos.com/media/mda-OgY9LkNvb4QWwVgf/e8b2d93e8ec20fddff8b91537e4fdb21.mp4 out.mp4")])]),e._v(" "),a("h3",{attrs:{id:"提取音频"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#提取音频"}},[e._v("#")]),e._v(" 提取音频")]),e._v(" "),a("p",[e._v("比如我之前喜欢听 asmr ，但是网上的资源都是视频形式的，太耗费流量。我只需要她的声音就行了。例如：\n"),a("code",[e._v("ffmpeg -i asmr.mp4 -acodec copy -vn output.aac")])]),e._v(" "),a("h3",{attrs:{id:"提取视频"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#提取视频"}},[e._v("#")]),e._v(" 提取视频")]),e._v(" "),a("blockquote",[a("p",[e._v("-an 不处理音频")])]),e._v(" "),a("p",[a("code",[e._v("ffmpeg -i input.mp4 -vcodec copy -an output.mp4")])]),e._v(" "),a("h3",{attrs:{id:"视频剪切"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#视频剪切"}},[e._v("#")]),e._v(" 视频剪切")]),e._v(" "),a("p",[e._v("经常要测试视频，但是只需要测几秒钟，可是视频却有几个G，咋办？切啊！\n下面的命令，就可以从时间为00:00:15开始，截取5秒钟的视频。")]),e._v(" "),a("p",[a("code",[e._v("ffmpeg -ss 00:00:15 -t 00:00:05 -i input.mp4 -vcodec copy -acodec copy output.mp4")])]),e._v(" "),a("blockquote",[a("p",[e._v("-ss表示开始切割的时间，-t表示要切多少。下面就是从开始，切5秒钟出来。")])]),e._v(" "),a("h3",{attrs:{id:"码率控制"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#码率控制"}},[e._v("#")]),e._v(" 码率控制")]),e._v(" "),a("p",[e._v("码率控制对于在线视频比较重要。因为在线视频需要考虑其能提供的带宽。")]),e._v(" "),a("h3",{attrs:{id:"为视频添加logo水印"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#为视频添加logo水印"}},[e._v("#")]),e._v(" 为视频添加logo水印")]),e._v(" "),a("p",[e._v("比如为一个视频添加爱奇艺的logo\n"),a("code",[e._v("ffmpeg -i input.mp4 -i iQIYI_logo.png -filter_complex overlay output.mp4")])]),e._v(" "),a("h3",{attrs:{id:"抓取视频的帧"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#抓取视频的帧"}},[e._v("#")]),e._v(" 抓取视频的帧")]),e._v(" "),a("p",[a("code",[e._v("ffmpeg -i input.mp4 -r 1 -q:v 2 -f image2 pic-%03d.jpeg")])]),e._v(" "),a("blockquote",[a("p",[e._v("-r 表示每一秒几帧"),a("br"),e._v("\n-q:v表示存储jpeg的图像质量，一般2是高质量。")])]),e._v(" "),a("p",[e._v("设置开始的时间，和你想要截取的时间")]),e._v(" "),a("p",[a("code",[e._v("ffmpeg -i input.mp4 -ss 00:00:20 -t 10 -r 1 -q:v 2 -f image2 pic-%03d.jpeg")])]),e._v(" "),a("blockquote",[a("p",[e._v("-ss 表示开始时间"),a("br"),e._v("\n-t表示共要多少时间。")])]),e._v(" "),a("p",[e._v("如此，ffmpeg会从input.mp4的第20s时间开始，往下10s，即20~30s这10秒钟之间，每隔1s就抓一帧，总共会抓10帧。")])])}),[],!1,null,null,null);t.default=v.exports}}]);