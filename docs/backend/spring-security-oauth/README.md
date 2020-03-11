---
title: 介绍
---

## 什么是 OAuth
OAuth 协议为用户资源的授权提供了一个安全的，开放而又简易的标准。与以往的授权方式不同之处是 OAuth 的授权不会是第三方触及到用户的账号信息（如用户名密码），即第三方无需使用用户的用户名密码就可以申请获得该用户资源的授权，因此 OAuth 是安全的。

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

## 依赖

```xml
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-security</artifactId>
    <version>2.2.5.RELEASE</version>
</dependency>
<dependency>
    <groupId>org.springframework.security.oauth</groupId>
    <artifactId>spring-security-oauth2</artifactId>
    <version>2.4.0.RELEASE</version>
</dependency>
```

## 单独使用 Spring Security

新建 `SecurityConfig` , 继承 `WebSecurityConfigurerAdapter`

```java
package com.webframe.security;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.config.annotation.web.configurers.ExpressionUrlAuthorizationConfigurer;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;

import com.webframe.entity.SysPermission;
import com.webframe.security.handler.MyAuthenticationSuccessHandler;
import com.webframe.service.SysPermissionService;

@Configuration
@EnableWebSecurity
public class SecurityConfig extends WebSecurityConfigurerAdapter {
	
	@Autowired
	private MyAuthenticationSuccessHandler myAuthenticationSuccessHandler;
	@Autowired
	private MyUserDetailsService myUserDetailsService;
	@Autowired
	private SysPermissionService sysPermissionService;
	
	/**
	 * 用户认证和动态授权
	 */
    @Override
    protected void configure(AuthenticationManagerBuilder auth) throws Exception {
    	auth.userDetailsService(myUserDetailsService).passwordEncoder(passwordEncoder());
    }
    
    /**
     * 动态配置拦截请求资源
     */
    @Override
    public void configure(HttpSecurity http) throws Exception{
    	SysPermission example = new SysPermission();
    	ExpressionUrlAuthorizationConfigurer<HttpSecurity>.ExpressionInterceptUrlRegistry authorizeRequests = http.authorizeRequests();
    	List<SysPermission> list = sysPermissionService.findByExample(example);
    	for (SysPermission sysPermission : list) {
    		authorizeRequests.antMatchers(sysPermission.getUrl()).hasAnyAuthority(sysPermission.getCode());
		}
    	authorizeRequests.antMatchers("/login").permitAll().antMatchers("/**").fullyAuthenticated().and().formLogin().successHandler(myAuthenticationSuccessHandler)
    	.and().csrf().disable();
    }

   @Bean
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }
}

```

