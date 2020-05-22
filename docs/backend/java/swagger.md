---
title: swagger
---

## 手写文档存在的问题
- 文档需要更新的时候，需要再次发送一份给前端，也就是文档更新交流不及时。
- 接口返回结果不明确
- 不能直接在线测试接口，通常需要使用工具，比如：`Postman`
- 接口文档太多，不好管理

## 使用Swagger2

### Maven
增加 Swagger2 所需依赖，`pom.xml` 配置如下：

```xml
<!-- Swagger2 Begin -->
<dependency>
    <groupId>io.springfox</groupId>
    <artifactId>springfox-swagger2</artifactId>
    <version>2.9.2</version>
</dependency>
<dependency>
    <groupId>io.springfox</groupId>
    <artifactId>springfox-swagger-ui</artifactId>
    <version>2.9.2</version>
</dependency>
<!-- Swagger2 End -->
```

### 配置 Swagger2

注意：`RequestHandlerSelectors.basePackage("XXXXX")` 为 Controller 包路径，需要修改为自己项目的 `Controller` 不然生成的文档扫描不到注解，如下 19 行

创建一个名为 `Swagger2Configuration` 的 Java 配置类，代码如下：

```java{19}
package top.yinjinbiao.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import springfox.documentation.builders.ApiInfoBuilder;
import springfox.documentation.builders.PathSelectors;
import springfox.documentation.builders.RequestHandlerSelectors;
import springfox.documentation.service.ApiInfo;
import springfox.documentation.spi.DocumentationType;
import springfox.documentation.spring.web.plugins.Docket;

@Configuration
public class Swagger2Config {
    @Bean
    public Docket createRestApi() {
        return new Docket(DocumentationType.SWAGGER_2)
                .apiInfo(apiInfo())
                .select()
                .apis(RequestHandlerSelectors.basePackage("top.yinjinbiao.controller"))
                .paths(PathSelectors.any())
                .build();
    }

    private ApiInfo apiInfo() {
        return new ApiInfoBuilder()
                .title("本项目 API 文档")
                .description("本项目 API 网关接口")
                .termsOfServiceUrl("https://blog.yinjinbiao.top/backend/java/swagger.html")
                .version("1.0.0")
                .build();
    }
}
```



### 启用Swagger

Application 中加上注解 `@EnableSwagger2` 表示开启 Swagger

```java {11}
package top.yinjinbiao;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import springfox.documentation.swagger2.annotations.EnableSwagger2;
import tk.mybatis.spring.annotation.MapperScan;

@SpringBootApplication(scanBasePackages = "top.yinjinbiao")
@EnableSwagger2
@MapperScan(basePackages = {"top.yinjinbiao.common.mapper", "top.yinjinbiao.mapper"})
public class ServiceAdminApplication {
    public static void main(String[] args) {
        SpringApplication.run(ServiceAdminApplication.class, args);
    }
}
```

### 使用 Swagger2
在 Controller 中增加 Swagger2 相关注解，代码如下：

```java
/**
 * 用户注册
 *
 * @param tbUser
 * @return
 */
@ApiOperation(value = "用户注册", notes = "以实体类为参数，注意用户名和邮箱不要重复")
@PostMapping(value = {"/reg"})
public AbstractBaseResult reg(@ApiParam(name = "tbUser", value = "用户模型") TbUser tbUser) {
    // 数据校验
    AbstractBaseResult validator = validator(tbUser);
    if (validator != null) {
        return validator;
    }

    // 判断用户名是否重复
    if (!tbUserService.unique("username", tbUser.getUsername())) {
        return error("用户名重复，请重试", null);
    }

    // 判断邮箱是否重复
    if (!tbUserService.unique("email", tbUser.getEmail())) {
        return error("邮箱重复，请重试", null);
    }

    // 设置密码加密
    if (StringUtils.isNotBlank(tbUser.getPassword())) {
        tbUser.setPassword(DigestUtils.md5DigestAsHex(tbUser.getPassword().getBytes()));
    }

    // 密码为空
    else {
        return error("密码不可为空", null);
    }

    // 注册用户
    TbUser user = tbUserService.save(tbUser);
    if (user != null) {
        response.setStatus(HttpStatus.CREATED.value());
        // 发送注册成功通知到消息队列
        regService.sendEmail(user);
        return success(request.getRequestURI(), user);
    }

    return error("注册失败，请重试", null);
}
```
::: tip
上述代码加上了`@ApiOperation` 和 `@ApiParam`，它们是最常用的注解
如果不期望过于侵入代码，可以将`@ApiParam`用`@ApiImplicitParams`和`@ApiImplicitParam`代替
:::


### 访问 Swagger2
访问地址：`http://ip:port/swagger-ui.html`

## Swagger 常用注解说明
Swagger 通过注解表明该接口会生成文档，包括接口名、请求方法、参数、返回信息的等等。

### 常用注解
- `@Api`：修饰整个类，描述 Controller 的作用
- `@ApiOperation`：描述一个类的一个方法，或者说一个接口
- `@ApiParam`：单个参数描述
- `@ApiModel`：用对象来接收参数
- `@ApiProperty`：用对象接收参数时，描述对象的一个字段
- `@ApiResponse`：HTTP 响应其中 1 个描述
- `@ApiResponses`：HTTP 响应整体描述
- `@ApiIgnore`：使用该注解忽略这个API
- `@ApiError`：发生错误返回的信息
- `@ApiImplicitParam`：一个请求参数
- `@ApiImplicitParams`：多个请求参数

#### @Api
说明：用在请求的类上，表示对类的说明

常用参数：

- tags="说明该类的作用，非空时将覆盖 value 的值"
- value="描述类的作用"

其他参数：
- description 对 api 资源的描述，在 1.5 版本后不再支持
- basePath 基本路径可以不配置，在 1.5 版本后不再支持
- position 如果配置多个 Api 想改变显示的顺序位置，在 1.5 版本后不再支持
- produces 设置 MIME 类型列表（output），例："application/json, application/xml"，默认为空
- consumes 设置 MIME 类型列表（input），例："application/json, application/xml"，默认为空
- protocols 设置特定协议，例：http， https， ws， wss
- authorizations 获取授权列表（安全声明），如果未设置，则返回一个空的授权值。
- hidden 默认为 false，配置为 true 将在文档中隐藏

示例：
```java
@Api(tags="登录请求")
@Controller
public class LoginController {}
```

#### `@ApiOperation`
说明：用在请求的方法上，说明方法的用途、作用

常用参数：

- value="说明方法的用途、作用"
- notes="方法的备注说明"

其他参数：
- tags 操作标签，非空时将覆盖value的值
- response 响应类型（即返回对象）
- responseContainer 声明包装的响应容器（返回对象类型）。有效值为 "List", "Set" or "Map"。
- responseReference 指定对响应类型的引用。将覆盖任何指定的response（）类
- httpMethod 指定HTTP方法，"GET", "HEAD", "POST", "PUT", "DELETE", "OPTIONS" and "PATCH"
- position 如果配置多个Api 想改变显示的顺序位置，在1.5版本后不再支持
- nickname 第三方工具唯一标识，默认为空
- produces 设置MIME类型列表（output），例："application/json, application/xml"，默认为空
- consumes 设置MIME类型列表（input），例："application/json, application/xml"，默认为空
- protocols 设置特定协议，例：http， https， ws， wss。
- authorizations 获取授权列表（安全声明），如果未设置，则返回一个空的授权值。
- hidden 默认为false， 配置为true 将在文档中隐藏
- responseHeaders 响应头列表
- code 响应的HTTP状态代码。默认 200
- extensions 扩展属性列表数组

示例：
```java
@ResponseBody
@PostMapping(value="/login")
@ApiOperation(value = "登录检测", notes="根据用户名、密码判断该用户是否存在")
public UserModel login(@RequestParam(value = "name", required = false) String account,
@RequestParam(value = "pass", required = false) String password){}
```

#### `@ApiImplicitParams`
说明：用在请求的方法上，表示一组参数说明；`@ApiImplicitParam`：用在 `@ApiImplicitParams` 注解中，指定一个请求参数的各个方面

常用参数：

- name：参数名，参数名称可以覆盖方法参数名称，路径参数必须与方法参数一致
- value：参数的汉字说明、解释
- required：参数是否必须传，默认为 false （路径参数必填）
- paramType：参数放在哪个地方
   - header 请求参数的获取：@RequestHeader
   - query 请求参数的获取：@RequestParam
   - path（用于 restful 接口）--> 请求参数的获取：@PathVariable
   - body（不常用）
   - form（不常用）
- dataType：参数类型，默认 String，其它值 dataType="Integer"
- defaultValue：参数的默认值

其他参数（`@ApiImplicitParam`）：
- allowableValues 限制参数的可接受值。1.以逗号分隔的列表 2.范围值 3.设置最小值/最大值
- access 允许从API文档中过滤参数。
- allowMultiple 指定参数是否可以通过具有多个事件接受多个值，默认为 false
- example 单个示例
- examples 参数示例。仅适用于 BodyParameters

示例：
```java
@ResponseBody
@PostMapping(value="/login")
@ApiOperation(value = "登录检测", notes="根据用户名、密码判断该用户是否存在")
@ApiImplicitParams({
    @ApiImplicitParam(name = "name", value = "用户名", required = false, paramType = "query", dataType = "String"),
    @ApiImplicitParam(name = "pass", value = "密码", required = false, paramType = "query", dataType = "String")
})
public UserModel login(@RequestParam(value = "name", required = false) String account,
@RequestParam(value = "pass", required = false) String password){}
```

#### `@ApiModel`
说明：用于响应类上，表示一个返回响应数据的信息（这种一般用在 POST 创建的时候，使用 `@RequestBody` 这样的场景，请求参数无法使用 `@ApiImplicitParam` 注解进行描述的时候）；`@ApiModelProperty`：用在属性上，描述响应类的属性

其他参数(`@ApiModelProperty`)：
- value 此属性的简要说明。
- name 允许覆盖属性名称
- allowableValues 限制参数的可接受值。1.以逗号分隔的列表 2.范围值 3.设置最小值/最大值
- access 允许从 API 文档中过滤属性。
  - notes 目前尚未使用。
- dataType 参数的数据类型。可以是类名或者参数名，会覆盖类的属性名称。
- required 参数是否必传，默认为 false
- position 允许在类中对属性进行排序。默认为 0
- hidden 允许在 Swagger 模型定义中隐藏该属性。
- example 属性的示例。
- readOnly 将属性设定为只读。
- reference 指定对相应类型定义的引用，覆盖指定的任何参数值

示例：
```java
@ApiModel(value="用户登录信息", description="用于判断用户是否存在")
public class UserModel implements Serializable{

   private static final long serialVersionUID = 1L;

   /**
    * 用户名
    */
   @ApiModelProperty(value="用户名")
   private String account;

   /**
     * 密码
     */
    @ApiModelProperty(value="密码")
   private String password;
}
```

#### `@ApiResponses`
说明：用在请求的方法上，表示一组响应；`@ApiResponse`：用在 `@ApiResponses` 中，一般用于表达一个错误的响应信息

常用参数：
- code：数字，例如 400
- message：信息，例如 "请求参数没填好"
- response：抛出异常的类

示例：
```java
@ResponseBody
@PostMapping(value="/update/{id}")
@ApiOperation(value = "修改用户信息",notes = "打开页面并修改指定用户信息")
@ApiResponses({
    @ApiResponse(code=400,message="请求参数没填好"),
    @ApiResponse(code=404,message="请求路径没有或页面跳转路径不对")
})
public JsonResult update(@PathVariable String id, UserModel model){}
```


#### `@ApiParam`
说明：用在请求方法中，描述参数信息

常用参数：

- name：参数名称，参数名称可以覆盖方法参数名称，路径参数必须与方法参数一致
- value：参数的简要说明。
- defaultValue：参数默认值
- required：属性是否必填，默认为 false （路径参数必须填）

以实体类为参数：

```java
@ResponseBody
@PostMapping(value="/login")
@ApiOperation(value = "登录检测", notes="根据用户名、密码判断该用户是否存在")
public UserModel login(@ApiParam(name = "model", value = "用户信息Model") UserModel model){}
```

其他参数：
- allowableValues 限制参数的可接受值。1.以逗号分隔的列表 2.范围值 3.设置最小值/最大值
- access 允许从 API 文档中过滤参数。
- allowMultiple 指定参数是否可以通过具有多个事件接受多个值，默认为 false
- hidden 隐藏参数列表中的参数。
- example 单个示例
- examples 参数示例。仅适用于 BodyParameters

示例：

```java
@ResponseBody
@PostMapping(value="/login")
@ApiOperation(value = "登录检测", notes="根据用户名、密码判断该用户是否存在")
public UserModel login(@ApiParam(name = "name", value = "用户名", required = false) @RequestParam(value = "name", required = false) String account,
    @ApiParam(name = "pass", value = "密码", required = false) @RequestParam(value = "pass", required = false) String password){}
```