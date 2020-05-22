---
title: Spring Security Oauth2
---


## 什么是 OAuth
OAuth 协议为用户资源的授权提供了一个安全的，开放而又简易的标准。与以往的授权方式不同之处是 OAuth 的授权不会使第三方触及到用户的账号信息（如用户名密码），即第三方无需使用用户的用户名密码就可以申请获得该用户资源的授权，因此 OAuth 是安全的。

## 什么是 Spring Security
Spring Security 是一个安全框架，前身是 Acegi Security，能够为 Spring 企业应用系统提供声明式的安全访问控制。Spring Security 基于 Servlet 过滤器，IoC 和 AOP ，为 Web 请求和方法调用提供身份确认和授权处理，避免了代码耦合。

## 为什么需要 OAuth2
我们假设你有一个“云笔记”产品，并提供了“云笔记服务”和“云相册服务”，此时用户需要在不同的设备（PC、Android、iPhone、TV、Watch）上去访问这些“资源”（笔记，图片）

那么用户如何才能访问属于自己的那部分资源呢？此时传统的做法就是提供自己的账号和密码给我们的“云笔记”，登录成功后就可以获取资源了。但这样的做法会有以下几个问题：

- “云笔记服务”和“云相册服务”会分别部署，难道我们要分别登录吗？
- 如果有第三方应用程序想要接入我们的“云笔记”，难道需要用户提供账号和密码给第三方应用程序，让他记录后再访问我们的资源吗？
- 用户如何限制第三方应用程序在我们“云笔记”的授权范围和使用期限？难道把所有资料都永久暴露给它吗？
- 如果用户修改了密码收回了权限，那么所有第三方应用程序会全部失效。
- 只要有一个接入的第三方应用程序遭到破解，那么用户的密码就会泄露，后果不堪设想。

为了解决如上问题，oAuth 应运而生。

## oAuth2 开放平台

开放平台是由 oAuth2.0 协议衍生出来的一个产品。它的作用是让客户端自己去这上面进行注册、申请，通过之后系统自动分配 client_id ，并完成配置的自动更新（通常是写进数据库）。

客户端要完成申请，通常需要填写客户端程序的类型（Web、App 等）、企业介绍、执照、想要获取的权限等等信息。这些信息在得到服务提供方的人工审核通过后，开发平台就会自动分配一个 client_id 给客户端了。

到这里，已经实现了登录认证、授权页的信息展示。那么接下来，当用户成功进行授权之后，认证服务器需要把产生的 access_token 发送给客户端，方案如下：

- 让客户端在开放平台申请的时候，填写一个 URL，例如：https://blog.yinjinbiao.top
- 每次当有用户授权成功之后，认证服务器将页面重定向到这个 URL（回调），并带上 access_token，例如：https://blog.yinjinbiao.top?access_token=123456789
- 客户端接收到了这个 access_token，而且认证服务器的授权动作已经完成，刚好可以把程序的控制权转交回客户端，由客户端决定接下来向用户展示什么内容

## 四种授权模式

### 简化模式

简化模式适用于纯静态页面应用。所谓纯静态页面应用，也就是应用没有在服务器上执行代码的权限（通常是把代码托管在别人的服务器上），只有前端 JS 代码的控制权。

这种场景下，应用是没有持久化存储的能力的。因此，按照 oAuth2.0 的规定，这种应用是拿不到 Refresh Token 的。

该模式下，access_token 容易泄露且不可刷新。

### 授权码模式
授权码模式适用于有自己的服务器的应用，它是一个一次性的临时凭证，用来换取 `access_token` 和 `refresh_token`。认证服务器提供了一个类似这样的接口：

```
https://www.funtl.com/exchange?code=&client_id=&client_secret=
```

1. 客户端请求第三方授权
2. 用户（资源拥有者）同意给客户端授权
3. 客户端获取到授权码，请求认证服务器申请令牌
4. 认证服务器向客户端响应令牌
5. 客户端请求资源服务器的资源
6. 资源服务器返回受保护资源

需要传入 `code`、`client_id` 以及 `client_secret`。验证通过后，返回 `access_token` 和 `refresh_token`。一旦换取成功，`code` 立即作废，不能再使用第二次。

这个 `code` 的作用是保护 `token` 的安全性。简单模式下，`token` 是不安全的。这是因为直接把 token 返回给应用容易被拦截、窃听。引入了 `code` 之后，即使攻击者能够窃取到 `code`，但是由于他无法获得应用保存在服务器的 `client_secret`，因此也无法通过 `code` 换取 `token`。为什么不容易被拦截、窃听呢？这是因为，首先，这是一个从服务器到服务器的访问，黑客比较难捕捉到；其次，这个请求通常要求是 https 的实现。即使能窃听到数据包也无法解析出内容。

有了这个 `code`，`token` 的安全性大大提高。因此，oAuth2.0 鼓励使用这种方式进行授权，而简单模式则是在不得已情况下才会使用。

### 密码模式

密码模式中，用户向客户端提供自己的用户名和密码。客户端使用这些信息，向 "服务商提供商" 索要授权。在这种模式中，用户必须把自己的密码给客户端，但是客户端不得储存密码。这通常用在用户对客户端高度信任的情况下，比如客户端是操作系统的一部分。

一个典型的例子是同一个企业内部的不同产品要使用本企业的 oAuth2.0 体系。在有些情况下，产品希望能够定制化授权页面。由于是同个企业，不需要向用户展示“xxx将获取以下权限”等字样并询问用户的授权意向，而只需进行用户的身份认证即可。这个时候，由具体的产品团队开发定制化的授权界面，接收用户输入账号密码，并直接传递给鉴权服务器进行授权即可。

有一点需要特别注意的是，在第 2 步中，认证服务器需要对客户端的身份进行验证，确保是受信任的客户端。

### 客户端模式

如果信任关系再进一步，或者调用者是一个后端的模块，没有用户界面的时候，可以使用客户端模式。鉴权服务器直接对客户端进行身份验证，验证通过后，返回 token。

## 令牌的访问与刷新

### Access Token
`Access Token` 是客户端访问资源服务器的令牌。拥有这个令牌代表着得到用户的授权。然而，这个授权应该是**临时**的，有一定有效期。这是因为，`Access Token` 在使用的过程中**可能会泄露**。给 `Access Token` 限定一个 较短的有效期 可以降低因 `Access Token` 泄露而带来的风险。

然而引入了有效期之后，客户端使用起来就不那么方便了。每当 Access Token 过期，客户端就必须重新向用户索要授权。这样用户可能每隔几天，甚至每天都需要进行授权操作。这是一件非常影响用户体验的事情。希望有一种方法，可以避免这种情况。

于是 oAuth2.0 引入了 Refresh Token 机制


### Refresh Token

Refresh Token 的作用是用来刷新 `Access Token`。认证服务器提供一个刷新接口，例如：

```
http://blog.yinjinbiao.top/refresh?refresh_token=&client_id=
```

传入 `refresh_token` 和 `client_id`，认证服务器验证通过后，返回一个新的 `Access Token`。为了安全，oAuth2.0 引入了两个措施：

- OAuth2.0 要求，Refresh Token 一定是保存在客户端的服务器上 ，而绝不能存放在狭义的客户端（例如 App、PC 端软件）上。调用 refresh 接口的时候，一定是从服务器到服务器的访问。
- OAuth2.0 引入了 `client_secret` 机制。即每一个 `client_id` 都对应一个 `client_secret`。这个 `client_secret` 会在客户端申请 `client_id` 时，随 `client_id` 一起分配给客户端。客户端必须把 `client_secret` 妥善保管在服务器上，决不能泄露。刷新 `Access Token` 时，需要验证这个 `client_secret`。

实际上的刷新接口类似于：

```
http://blog.yinjinbiao.top/refresh?refresh_token=&client_id=&client_secret=
```

以上就是 `Refresh Token` 机制。`Refresh Token` 的有效期非常长，会在用户授权时，随 `Access Token` 一起重定向到回调 URL，传递给客户端。

## 说明

本篇示例为 **授权码模式** 的示例

环境：
- spring-boot-starter-parent 2.2.5.RELEASE
- spring-security-oauth2-autoconfigure 2.2.5.RELEASE
- MySQL 8.0.16
- MyBatis

## OAuth2 表结构

```sql
CREATE TABLE `clientdetails` (
  `appId` varchar(128) NOT NULL,
  `resourceIds` varchar(256) DEFAULT NULL,
  `appSecret` varchar(256) DEFAULT NULL,
  `scope` varchar(256) DEFAULT NULL,
  `grantTypes` varchar(256) DEFAULT NULL,
  `redirectUrl` varchar(256) DEFAULT NULL,
  `authorities` varchar(256) DEFAULT NULL,
  `access_token_validity` int(11) DEFAULT NULL,
  `refresh_token_validity` int(11) DEFAULT NULL,
  `additionalInformation` varchar(4096) DEFAULT NULL,
  `autoApproveScopes` varchar(256) DEFAULT NULL,
  PRIMARY KEY (`appId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE `oauth_access_token` (
  `token_id` varchar(256) DEFAULT NULL,
  `token` blob,
  `authentication_id` varchar(128) NOT NULL,
  `user_name` varchar(256) DEFAULT NULL,
  `client_id` varchar(256) DEFAULT NULL,
  `authentication` blob,
  `refresh_token` varchar(256) DEFAULT NULL,
  PRIMARY KEY (`authentication_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE `oauth_approvals` (
  `userId` varchar(256) DEFAULT NULL,
  `clientId` varchar(256) DEFAULT NULL,
  `scope` varchar(256) DEFAULT NULL,
  `status` varchar(10) DEFAULT NULL,
  `expiresAt` timestamp NULL DEFAULT NULL,
  `lastModifiedAt` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE `oauth_client_details` (
  `client_id` varchar(128) NOT NULL,
  `resource_ids` varchar(256) DEFAULT NULL,
  `client_secret` varchar(256) DEFAULT NULL,
  `scope` varchar(256) DEFAULT NULL,
  `authorized_grant_types` varchar(256) DEFAULT NULL,
  `web_server_redirect_uri` varchar(256) DEFAULT NULL,
  `authorities` varchar(256) DEFAULT NULL,
  `access_token_validity` int(11) DEFAULT NULL,
  `refresh_token_validity` int(11) DEFAULT NULL,
  `additional_information` varchar(4096) DEFAULT NULL,
  `autoapprove` varchar(256) DEFAULT NULL,
  PRIMARY KEY (`client_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE `oauth_client_token` (
  `token_id` varchar(256) DEFAULT NULL,
  `token` blob,
  `authentication_id` varchar(128) NOT NULL,
  `user_name` varchar(256) DEFAULT NULL,
  `client_id` varchar(256) DEFAULT NULL,
  PRIMARY KEY (`authentication_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE `oauth_code` (
  `code` varchar(256) DEFAULT NULL,
  `authentication` blob
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE `oauth_refresh_token` (
  `token_id` varchar(256) DEFAULT NULL,
  `token` blob,
  `authentication` blob
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

INSERT INTO `video`.`oauth_client_details` (`client_id`, `resource_ids`, `client_secret`, `scope`, `authorized_grant_types`, `web_server_redirect_uri`, `authorities`, `access_token_validity`, `refresh_token_validity`, `additional_information`, `autoapprove`) VALUES ('client', NULL, '$2a$10$HwsFg7I134aWI3eLxYq4l.EOMHve3tY5OyLVivM9uuW6RxWLok8hG', 'app', NULL, 'https://blog.yinjinbiao.top', 'authorization_code', NULL, NULL, NULL, NULL);
```

## 依赖

```xml
<dependency>
    <groupId>org.springframework.security.oauth.boot</groupId>
    <artifactId>spring-security-oauth2-autoconfigure</artifactId>
    <version>2.2.5.RELEASE</version>
</dependency>
```

## WebSecurityConfiguration

新建  `WebSecurityConfiguration` 类，例如：

```java
package top.yinjinbiao.video.sso.server.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.method.configuration.EnableGlobalMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.builders.WebSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;

import javax.annotation.Resource;


@Configuration
@EnableWebSecurity
@EnableGlobalMethodSecurity(prePostEnabled = true, securedEnabled = true, jsr250Enabled = true)
public class WebSecurityConfiguration extends WebSecurityConfigurerAdapter {

    /**
     * 注入自定义的 登录名 查询方法
     */
    @Resource(name="myUserDetailsServiceImpl")
    private UserDetailsService userDetailsService;

    /**
     * 密码校验，从数据库中校验密码
     * @param auth
     * @throws Exception
     */
    @Override
    protected void configure(AuthenticationManagerBuilder auth) throws Exception {
        auth.userDetailsService(userDetailsService).passwordEncoder(passwordEncoder());
    }

    /**
     *
     * @return
     * @throws Exception
     */
    @Bean
    @Override
    public AuthenticationManager authenticationManager() throws Exception {
        return super.authenticationManager();
    }

    /**
     * 使用 BCryptPasswordEncoder 进行密码加密
     * @return
     */
    @Bean
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }

    /**
     *
     * @param web
     * @throws Exception
     */
    @Override
    public void configure(WebSecurity web) throws Exception{
        super.configure(web);
    }

    /**
     * 通过HttpSecurity实现Security的自定义过滤配置
     *
     * @param httpSecurity
     * @throws Exception
     */
    @Override
    protected void configure(HttpSecurity httpSecurity) throws Exception {
        httpSecurity
                .requestMatchers().anyRequest()
                .and()
                .authorizeRequests()
                .antMatchers("/oauth/**").permitAll();
    }
}
```

## MyUserDetailsServiceImpl

新建 `MyUserDetailsServiceImpl` 实现 `UserDetailsService` 接口的 `loadUserByUsername` 方法，该方法实际上等同于 登录 方法。

其中 `SysUserService` 和 `SysPermissionService` 根据自己需求编写。

```java
package top.yinjinbiao.video.sso.server.service.impl;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import top.yinjinbiao.video.admin.domain.SysPermission;
import top.yinjinbiao.video.admin.domain.SysUser;
import top.yinjinbiao.video.admin.service.SysUserService;

import java.util.ArrayList;
import java.util.List;

@Service
public class MyUserDetailsServiceImpl implements UserDetailsService {

    /**
     * TODO 跨包调用
     */
    @Autowired
    private SysUserService sysUserService;

    /**
     * 根据用户名查找用户，如果用户不存在抛出异常。
     * @param loginname
     * @return
     * @throws UsernameNotFoundException
     */
    public UserDetails loadUserByUsername(String loginname) throws UsernameNotFoundException {
        SysUser sysUser = sysUserService.findByLoginname(loginname);
        if(sysUser == null){
            throw new UsernameNotFoundException(loginname);
        }
        List<SimpleGrantedAuthority> authorities = new ArrayList<SimpleGrantedAuthority>();
        // 根据账号查询权限列表
        List<SysPermission> sysPermissionList = sysUserService.listByLoginname(loginname);
        for (SysPermission sysPermission : sysPermissionList) {
            authorities.add(new SimpleGrantedAuthority(sysPermission.getCode()));
        }
        return new User(sysUser.getUsername(),sysUser.getPassword(),authorities);
    }
}
```

## AuthorizationServerConfiguration

新建 `AuthorizationServerConfiguration` 认证服务，实现 `AuthorizationServerConfigurerAdapter`

```java
package top.yinjinbiao.video.sso.server.config;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.boot.jdbc.DataSourceBuilder;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Primary;
import org.springframework.http.HttpMethod;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.oauth2.config.annotation.configurers.ClientDetailsServiceConfigurer;
import org.springframework.security.oauth2.config.annotation.web.configuration.AuthorizationServerConfigurerAdapter;
import org.springframework.security.oauth2.config.annotation.web.configuration.EnableAuthorizationServer;
import org.springframework.security.oauth2.config.annotation.web.configurers.AuthorizationServerEndpointsConfigurer;
import org.springframework.security.oauth2.provider.client.JdbcClientDetailsService;
import org.springframework.security.oauth2.provider.token.TokenStore;
import org.springframework.security.oauth2.provider.token.store.JdbcTokenStore;

import javax.sql.DataSource;

/**
 * 配置授权服务器
 *
 * @author yin.jinbiao
 *
 */
@Configuration
@EnableAuthorizationServer
public class AuthorizationServerConfiguration extends AuthorizationServerConfigurerAdapter {


    @Autowired
    private AuthenticationManager authenticationManager;


    @Bean
    @Primary
    @ConfigurationProperties(prefix = "spring.datasource")
    public DataSource dataSource() {
        return DataSourceBuilder.create().build();
    }


    /**
     * token 的存储方式
     * @return
     */
    @Bean
    public TokenStore tokenStore(){
        return new JdbcTokenStore(dataSource());
    }

    /**
     * 使用 jdbc 的方式查询客户端信息
     * @return
     */
    @Bean
    public JdbcClientDetailsService jdbcClientDetailsService(){
        return new JdbcClientDetailsService(dataSource());
    }

    /**
     * 配置ClientDetailsService
     * 注意，除非你在下面的configure(AuthorizationServerEndpointsConfigurer)
     * 中指定了一个AuthenticationManager，否则密码授权方式不可用。 至少配置一个client，否则服务器将不会启动。
     */
    @Override
    public void configure(ClientDetailsServiceConfigurer clients) throws Exception {
        //jdbc模式
        clients.withClientDetails(jdbcClientDetailsService());
    }

    @Override
    public void configure(AuthorizationServerEndpointsConfigurer endpoints) throws Exception {
        // 密码模式需要开启
        endpoints.allowedTokenEndpointRequestMethods(HttpMethod.GET, HttpMethod.POST);// add get method
        endpoints.authenticationManager(authenticationManager);
        // 存储token
        endpoints.tokenStore(tokenStore());
    }

}

```

## 资源服务器 ResourceServerConfiguration

新建 `ResourceServerConfiguration.java` 

```java
package top.yinjinbiao.video.resource;

import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.method.configuration.EnableGlobalMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.oauth2.config.annotation.web.configuration.EnableResourceServer;
import org.springframework.security.oauth2.config.annotation.web.configuration.ResourceServerConfigurerAdapter;

/**
 * 客户端配置
 */
@Configuration
@EnableResourceServer
@EnableGlobalMethodSecurity(prePostEnabled = true, securedEnabled = true ,jsr250Enabled = true)
public class ResourceServerConfiguration extends ResourceServerConfigurerAdapter{

    @Override
    public void configure(HttpSecurity http) throws Exception{
        http
                .exceptionHandling()
                .and()
                .sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS)
                .and()
                .authorizeRequests()
                // 以下为配置所需保护的资源路径及权限，需要与认证服务器配置的授权部分对应
                .antMatchers("/profile/**").authenticated()
                .antMatchers("/sysuser/**").hasAuthority("system")
                //.antMatchers("/view/**").hasAuthority("SystemContentView")
                //.antMatchers("/insert/**").hasAuthority("SystemContentInsert")
                //.antMatchers("/update/**").hasAuthority("SystemContentUpdate")
                //.antMatchers("/delete/**").hasAuthority("SystemContentDelete")
                .anyRequest().permitAll()//其他没有限定的请求，允许随意访问
                .and().anonymous();//对于没有配置权限的其他请求允许匿名访问
    }

}
```

## 访问接口

### 授权码访问

获取授权码:
```
http://localhost:8080/oauth/authorize?client_id=client&response_type=code
```

输入登录名密码后跳转到
```
https://blog.yinjinbiao.top/?code=eMr2Cy
```

根据授权码 code 获取 token:
```
http://localhost:8080/oauth/token?client_id=client&client_secret=secret&grant_type=authorization_code&code=eMr2Cy
```

### 密码模式访问

```
http://localhost:8080/oauth/token?grant_type=password&username=admin&password=123
```

### token
```json
{
    "access_token": "c2924eea-c57c-4556-8216-8b9bb86bdba6",
    "token_type": "bearer",
    "refresh_token": "183b8ddf-ec5b-410c-af98-bd3c1fb3b75a",
    "expires_in": 43199,
    "scope": "app"
}
```

## 使用 redis 存储 token

1. 加入依赖

```xml
        <!-- redis begin-->
        <dependency>
            <groupId>org.apache.commons</groupId>
            <artifactId>commons-pool2</artifactId>
        </dependency>
        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-data-redis</artifactId>
        </dependency>
        <!-- redis end-->

```

2. `application.yml` 加入配置
```yml
spring:
  redis:
    database: 0
    host: 127.0.0.1
    port: 6379
    password: 123456
    lettuce:
      pool:
        max-active: 100
```

3. 更改 `AuthorizationServerConfiguration` 中 `tokenstore`

```java
    @Autowired
    private AuthenticationManager authenticationManager;

        /**
     * token 的存储方式
     * @return
     */
    @Bean
    public TokenStore tokenStore(){
        return new RedisTokenStore(connectionFactory);
    }
```

## 参考资料
- [GitHub,Mybatis版本](https://github.com/JinbiaoYin/video)
- [Gitee,BeetlSQL版本](https://gitee.com/shuaibiao/springboot-springsecurity-oauth2)