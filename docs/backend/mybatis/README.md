---
title: 首页
---

## HikariCP 介绍
HikariCP 是数据库连接池的后起之秀，号称性能最好，可以完美的 PK 掉其它连接池。是一个高性能的 JDBC 连接池，基于 BoneCP 做了不少的改进和优化。
基于 BoneCP 做了不少的改进和优化。Spring Boot 2 宣布支持。

## Springboot 集成 HikariCP

Springboot2 版本锁定了 HikariCP 为 3.2.0 版本，所以只需要在自己的 `pom.xml` 中配置：
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

依赖如下:

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

## 使用 PageHelper 分页插件

依赖如下:

```xml
<dependency>
    <groupId>com.github.pagehelper</groupId>
    <artifactId>pagehelper-spring-boot-starter</artifactId>
    <version>1.2.13</version>
</dependency>
```

## 使用 mybatis-generate 插件代码生成

插件依赖如下：

```xml
<build>
    <plugins>
        <plugin>
            <groupId>org.mybatis.generator</groupId>
            <artifactId>mybatis-generator-maven-plugin</artifactId>
            <version>1.3.7</version>
            <configuration>
                <configurationFile>${basedir}/src/main/resources/generator/generatorConfig.xml</configurationFile>
                <overwrite>true</overwrite>
                <verbose>true</verbose>
            </configuration>
            <dependencies>
                <dependency>
                    <groupId>mysql</groupId>
                    <artifactId>mysql-connector-java</artifactId>
                    <version>${mysql.version}</version>
                </dependency>
                <dependency>
                    <groupId>tk.mybatis</groupId>
                    <artifactId>mapper</artifactId>
                    <version>4.1.5</version>
                </dependency>
            </dependencies>
        </plugin>
    </plugins>
</build>
```

在 resources 目录下，新建 generator 文件夹，并新建 `generatorConfig.xml`，如下：

```xml
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE generatorConfiguration
        PUBLIC "-//mybatis.org//DTD MyBatis Generator Configuration 1.0//EN"
        "http://mybatis.org/dtd/mybatis-generator-config_1_0.dtd">

<generatorConfiguration>
    <!-- 引入数据库连接配置 -->
    <properties resource="jdbc.properties"/>

    <context id="Mysql" targetRuntime="MyBatis3Simple" defaultModelType="flat">
        <property name="beginningDelimiter" value="`"/>
        <property name="endingDelimiter" value="`"/>

        <!-- 配置 tk.mybatis 插件 -->
        <plugin type="tk.mybatis.mapper.generator.MapperPlugin">
            <property name="mappers" value="tk.mybatis.mapper.MyMapper"/>
        </plugin>

        <!-- 配置数据库连接 -->
        <jdbcConnection
                driverClass="${jdbc.driverClass}"
                connectionURL="${jdbc.url}"
                userId="${jdbc.username}"
                password="${jdbc.password}">
        </jdbcConnection>

        <!-- 配置实体类存放路径 -->
        <javaModelGenerator targetPackage="top.yinjinbiao.video.domain" targetProject="src/main/java"/>

        <!-- 配置 XML 存放路径 -->
        <sqlMapGenerator targetPackage="mapper" targetProject="src/main/resources"/>

        <!-- 配置 DAO 存放路径 -->
        <javaClientGenerator
                targetPackage="top.yinjinbiao.video.mapper"
                targetProject="src/main/java"
                type="XMLMAPPER"/>

        <!-- 配置需要指定生成的数据库和表，% 代表所有表 -->
        <table catalog="video" tableName="%">
            <!-- mysql 配置 -->
            <generatedKey column="id" sqlStatement="Mysql" identity="true"/>
        </table>
    </context>
</generatorConfiguration>
```

新建 `jdbc.properties`，使 mybatis-generator 插件读取其中数据库连接配置。例如：

```properties
jdbc.driverClass=com.mysql.cj.jdbc.Driver
jdbc.url=jdbc:mysql://
jdbc.username=
jdbc.password=
```

在 IDEA 左侧，maven 插件中找到 mybatis-generator ，即可根据自定义的配置生成实体类即 Mapper 等。

