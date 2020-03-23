---
title: 如何使用授权码模式
---

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