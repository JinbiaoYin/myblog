---
title : 如何使用 RabbitMQ ?
---

## 使用过程
- 客户端连接到消息队列服务器，打开一个 Channel。
- 客户端声明一个 ExChange，并设置相关属性。
- 客户端声明一个 Queue，并设置相关属性。
- 客户端使用 Routing Key，在 ExChange 和 Queue 之间建立好绑定关系。
- 客户端投递消息到 ExChange。
- ExChange 接收到消息后，就根据消息的 key 和已经设置的 binding，进行消息路由，将消息投递到一个或多个队列里

## 安装 RabbitMQ

我们基于 Docker 来安装 RabbitMQ

docker-compose.yml

```yml
version: '3.1'
services:
  rabbitmq:
    restart: always
    image: rabbitmq:management
    container_name: rabbitmq
    ports:
      - 5672:5672
      - 15672:15672
    environment:
      TZ: Asia/Shanghai
      RABBITMQ_DEFAULT_USER: rabbit
      RABBITMQ_DEFAULT_PASS: 123456
    volumes:
      - ./data:/var/lib/rabbitmq
```

访问地址：http://ip:15672