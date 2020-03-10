---
title: 首页
---

## 介绍
本节记录工作中对JavaEE的学习。包含但不限于SpringCloud 微服务,SpringBoot,Nginx,MySQL,Oracle,ES,MQ,工作流等。

## 我的代码规范

1. Controller 中的方法，对于 `@RequestMapping` 注解来说，一定要加上请求类型 `RequestMethod` ，例如：
```java{1}
	@RequestMapping(value = "/save",method = RequestMethod.POST)
	public void save(BizDonator entity){
		bizDonatorService.save(entity);
	}
```

或者直接使用 `@PostMapping` ,例如：
```java{1}
	@PostMapping(value = "/save")
	public JsonResult save(BizDonator entity){
		return bizDonatorService.save(entity);
	}
```

对于单个参数如 `pageNumber`, `pageSize`等必填参数,一定要加上 `@RequestParam`，并指定`required=true`，例如：
```java{3,4}
	@GetMapping(value = "/page")
	public JsonResult page(BizDonator BizDonator,
			@RequestParam(value="pageNumber",defaultValue="1",required=true)int pageNumber, 
			@RequestParam(value="pageSize",defaultValue="10",required=true)int pageSize){
		return bizDonatorService.pageByExample(example,pageNumber,pageSize);
	}
```

如果使用 `RESTful` 风格接口，则使用 `PathVariable` 来占位，并指定 `required = true`。
```java{1,3,4}
@PostMapping(value = "page/{pageNumber}/{pageSize}")
public JsonResult page(BizDonator BizDonator,
        @PathVariable(value="pageNumber",required=true) int pageNumber,
        @PathVariable(value="pageSize",required=true) int pageSize
) {
    return page = bizDonatorService.page(BizDonator, pageNumber, pageSize);
}
```

2. **包命名：**如果是公司的项目，以公司的域名反转。

例如腾讯(tencent)，域名反转则为 com.tencent ，后面跟上项目名例如Tim，com.tencent.tim。

如果是自己的项目，则以自己的域名反转(没有则自定义)，例如我的域名为 yinjinbiao.top ， 反转则为 top.yinjinbiao ，如果的项目为 blog ，那么包命就是 top.yinjinbiao.blog。发布线上地址就是 [个人博客](https://blog.yinjinbiao.top) 。

3. **单体应用**的包划分。模块包命以业务划分为主，便于以后服务拆分。

例如 `top.yinjinbiao.video.admin.controller` , `top.yinjinbiao.video.admin.service` , `top.yinjinbiao.video.admin.dao`。

其中 `service` 只能调用自己包下的 `dao`。

`controller` 如果需要调用到其它模块下的 `service`，需要注明注释为跨包调用。 


3. XXXXX

## 参考资料
