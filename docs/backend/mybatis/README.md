---
title: 首页
---

## HikariCP 介绍
HikariCP 是数据库连接池的后起之秀，号称性能最好，可以完美的 PK 掉其它连接池。是一个高性能的 JDBC 连接池，基于 BoneCP 做了不少的改进和优化。
基于 BoneCP 做了不少的改进和优化。Spring Boot 2 宣布支持。

## Springboot 集成 HikariCP

Springboot2 版本锁定了 HikariCP 为 3.2.0 版本，所以只需要在自己的 pom.xml 中配置：
```xml
<dependency>
    <groupId>com.zaxxer</groupId>
    <artifactId>HikariCP</artifactId>
</dependency>
```
在 `application.yml`配置：
```yml
spring:
  datasource:
    type: com.zaxxer.hikari.HikariDataSource
    driver-class-name: com.mysql.jdbc.Driver
    url: jdbc:mysql://rm-m5ed8483kh091fs9n7o.mysql.rds.aliyuncs.com:3306?useUnicode=true&characterEncoding=utf-8&useSSL=false
    username: 
    password: 
    hikari:
      minimum-idle: 5
      idle-timeout: 600000
      maximum-pool-size: 10
      auto-commit: true
      pool-name: MyHikariCP
      max-lifetime: 1800000
      connection-timeout: 30000
      connection-test-query: SELECT 1
```

## SpringBoot2 集成 tk-MyBatis
```xml
<dependency>
    <groupId>tk.mybatis</groupId>
    <artifactId>mapper-spring-boot-starter</artifactId>
    <version>2.1.5</version>
</dependency>
```

新增 MyMapper 接口，直接实现了基本的增删改成，如下：
```java
package tk.mybatis.mapper;

import tk.mybatis.mapper.common.Mapper;
import tk.mybatis.mapper.common.MySqlMapper;

public interface MyMapper<T> extends Mapper<T>, MySqlMapper<T> {

}
```