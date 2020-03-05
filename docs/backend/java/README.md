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

2. XXXXX

3. XXXXX

## 参考资料
