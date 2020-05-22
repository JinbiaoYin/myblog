---
title: websocket
---

## 简介
长连接的连接资源随着连接数量的增多，必会造成资源耗尽，客户端轮询会给服务器造成巨大的压力。

而 websocket 是在物理层非网络层建立一条客户端至服务器的长连接。以此来保证服务器向客户端的即时推送，既不耗费线程资源，又不会不断向服务器轮询请求。

## 通信过程
1. 客户端发起 http 请求，附加头信息为：“Upgrade Websocket”
```
收到客户端信息：GET /Get HTTP/1.1
Upgrade: websocket
Connection: Upgrade
Host: 127.0.0.1:10000
Origin: http://127.0.0.1:8020
Pragma: no-cache
Cache-Control: no-cache
Sec-WebSocket-Key: tSYYnx6EFK/hevZK63bLsQ==
Sec-WebSocket-Version: 13
Sec-WebSocket-Extensions: permessage-deflate; client_max_window_bits, x-webkit-deflate-frame
User-Agent: Morilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/35.0.1916.138 Safari/537.36
```
- `Upgrade`表示的意思是“客户端准备使用 websocket 协议进行通信，服务端如果支持的话，咱就就换 websocket 协议吧”。
- `sec-websocket-version`是指浏览器支持的 websocket版本号，需注意这里不会出现 9-12 的版本号，因为 websocket 协议规定 9-12 是保留字段。
- `sec-websocket-key`是一种验证服务端是不是支持 websocket 的验证算法。与 Response 中的 sec-websocket-accept 是对应的。
- `sec-websocket-accept`与`sec-websocket-key`的对应算法是`sec-websocket-accept = base64(hsal(sec-websocket-key + 258EAFA5-E914-47DA-95CA-C5AB0DC85B11))`,如果返回的`sec-websocket-accept`不对，在 chrome 下会出现 `Sec-WebSocket-Accept dismatch`的错误。
- `HTTP Status`: Response 返回的是 101 ，代表服务端说：“我们双方就按照 websocket 协议来进行数据传输吧！”

2. 服务端解析，并返回握手信息，从而建立连接。
```
回复客户端握手信息： HTTP/1.1 101 Switching Protocols
Upgrade: websocket
Connection: Upgrade
Sec-WebSocket-Accept: F/HQ8pdrwCHDUDYHjWp7C6EcxO8=
```

3. 传输数据（双向）

4. 客户端或服务端主动断开连接。客户端主动断开：客户端发起 http 请求，请求断开连接，服务端收到消息后断开 WebSocket 连接；服务端主动断开：直接断开 WebSocket 连接，客户端的 API 会立刻得知。

## 客户端 api
```js
//建立连接
websocket = new WebSocket("ws://"+path+"ws");
```
```js
//发送消息
websocket.send(JSON.stringify(data));
```
```js
//监听服务端推送的消息
websocket.onmessage = function(event){
//
}
```
```js
//客户端主动提出分手
websocket.close();
//监听服务端提出的分手
websocket.onclose = function(event){
    //
}
```
```js
//监听异常
websocket.onerror = function(event){
    //
}
```

## 服务端的 API
Spring WebSocket
