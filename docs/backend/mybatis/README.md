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


## DataSource

当我们在 `application.yml` 中配置 `spring.datasource`,容器启动时，就会装载这些配置，根据默认的方法去启动一个 `DataSource` 数据源。

## SpringBoot2 集成 MyBatis

依赖如下:

```xml
<dependency>
    <groupId>org.mybatis.spring.boot</groupId>
    <artifactId>mybatis-spring-boot-starter</artifactId>
    <version>2.1.2</version>
</dependency>
```

在 `application.yml` 中配置 `mapper` 所在路径

```yml
mybatis:
  type-aliases-package: top.yinjinbiao.video.*.domain
  mapper-locations: classpath:mapper/*.xml
```

在 启动类 上加上注解 `@MapperScan` 包扫描路径

```java{10}
package top.yinjinbiao.video;

import org.mybatis.spring.annotation.MapperScan;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import springfox.documentation.swagger2.annotations.EnableSwagger2;

@EnableSwagger2
@SpringBootApplication
@MapperScan(basePackages = "top.yinjinbiao.video.admin.mapper")
class VideoApplication {
    public static void main(String[] args) {
        SpringApplication.run(VideoApplication.class,args);
    }
}
```

新建 SysUser.java
```java
package top.yinjinbiao.video.admin.domain;

import lombok.Data;
import top.yinjinbiao.video.common.domain.BaseDomain;

import java.io.Serializable;

/**
* @author yin.jinbiao
* @date 2020-03-12
*/
@Data
public class SysUser implements Serializable {

	private static final long serialVersionUID = 1L;

	private Long id;	
    private String username;
    private String loginname;
    private String password;
    private Date createTime;
    private Date updateTime;
    private Long createBy;
    private Long updateBy;
    private Boolean delete;
}
```

`resources` 目录下新建 `mapper` 文件夹，并新增 `SysUserMapper.xml`

```xml
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE mapper PUBLIC "-//mybatis.org//DTD Mapper 3.0//EN" "http://mybatis.org/dtd/mybatis-3-mapper.dtd">
<mapper namespace="top.yinjinbiao.video.admin.mapper.SysUserMapper">
    <resultMap id="BaseResultMap" type="top.yinjinbiao.video.admin.domain.SysUser">
        <!--
          WARNING - @mbg.generated
        -->

        <id column="id" jdbcType="BIGINT" property="id" />
        <result column="username" jdbcType="VARCHAR" property="username" />
        <result column="loginname" jdbcType="VARCHAR" property="loginname" />
        <result column="password" jdbcType="VARCHAR" property="password" />
        <result column="create_time" jdbcType="TIMESTAMP" property="createTime" />
        <result column="create_by" jdbcType="BIGINT" property="createBy" />
        <result column="update_time" jdbcType="TIMESTAMP" property="updateTime" />
        <result column="update_by" jdbcType="BIGINT" property="updateBy" />
        <result column="is_delete" jdbcType="TINYINT" property="delete" />
    </resultMap>

    <select id="listByLoginname" parameterType="String" resultType="SysPermission">
        SELECT
            c.*
        FROM
            sys_user t,
            sys_role_user a,
            sys_role_permission b,
            sys_permission c,
            sys_role d
        WHERE
            t.id = a.user_id
        AND a.role_id = b.role_id
        AND b.permission_id = c.id
        AND t.loginname = #{loginname}
        AND t.is_delete = 0
        AND d.is_delete = 0
        AND c.is_delete = 0
    </select>

    <select id="findByLoginname" parameterType="String" resultMap="BaseResultMap">
        SELECT
            t.username,t.loginname,t.password
        FROM
            sys_user t
        WHERE
            t.loginname = #{loginname}
        AND t.is_delete = 0
    </select>

</mapper>
```

对应的接口 `SysUserMapper.java`
```java
package top.yinjinbiao.video.admin.mapper;

import org.apache.ibatis.annotations.Param;
import top.yinjinbiao.video.admin.domain.SysPermission;
import top.yinjinbiao.video.admin.domain.SysUser;

import java.util.List;

public interface SysUserMapper {

    List<SysPermission> listByLoginname(@Param("loginname") String loginname);

    SysUser findByLoginname(@Param("loginname") String loginname);
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

