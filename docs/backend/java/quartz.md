---
title: quartz
---

## 介绍
Quartz 是 OpenSymphony 开源组织在 Job Scheduling 领域又一个开源项目，它可以与 J2EE 与 J2SE 应用程序相结合也可以单独使用。Quartz 可以用来创建简单或为运行十个，百个，甚至是好几万个 Jobs 这样复杂的程序。Jobs 可以做成标准的 Java 组件或 EJBs。

## 为什么使用 Quartz？
Quartz 是一个任务调度框架。比如你遇到这样的问题：

- 每天 02:00 发送一份工作邮件给工作组成员并抄送给老板（假装自己很努力的工作到深夜）
- 每月 2 号提醒自己还信用卡或自动还款
- 每秒钟发 N 笔脏数据给竞争对手公司的服务器（！←_←）

这些问题总结起来就是：在某一个有规律的时间点干某件事。并且时间的触发的条件可以非常复杂，复杂到需要一个专门的框架来干这个事。Quartz 就是来干这样的事，你给它一个触发条件的定义，它负责到了时间点，触发相应的 Job 起来干活。

## Spring Boot 集成 Quartz
maven 依赖：

```xml
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-quartz</artifactId>
</dependency>
```

使用 `@EnableScheduling` 注解在`XXXApplication`来开启计划任务功能

```java{7}
package com.funtl.hello.quatrz;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.scheduling.annotation.EnableScheduling;

@EnableScheduling
@SpringBootApplication
public class HelloQuatrzApplication {
    public static void main(String[] args) {
        SpringApplication.run(HelloQuatrzApplication.class, args);
    }
}
```

我们创建一个每 5 秒钟打印当前时间的任务来测试 Quartz

```java{11}
package com.funtl.hello.quatrz.tasks;

import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;

import java.text.SimpleDateFormat;
import java.util.Date;

@Component
public class PrintCurrentTimeTask {
    @Scheduled(cron = "0/5 * * * * ? ")
    public void printCurrentTime() {
        System.out.println("Current Time is:" + new SimpleDateFormat("yyyy-MM-dd HH:mm:ss").format(new Date()));
    }
}
```