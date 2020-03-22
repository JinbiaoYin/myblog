---
title: 代码规范
---

## Java 代码规范

1. Controller 中的方法，直接使用 `@PostMapping` 或 `@GetMapping`例如：
```java{1}
@ApiOperation(value = "保存", notes = "以article实体为参数")
@PostMapping("/save")
public ResponseResult save(@ApiParam(name = "bizArticle", value = "article实体") BizArticle bizArticle){
	return new ResponseResult(HttpStatus.OK.value(),"操作成功~", bizArticleService.insert(bizArticle));
}
```

对于单个参数如 `pageNumber`, `pageSize`等必填参数,一定要加上 `@RequestParam`，并指定`required=true`，如果使用 `RESTful` 风格接口，则使用 `PathVariable` 来占位，并指定 `required = true`。例如：
```java{3,4}
@ApiOperation(value = "分页查询", notes = "以article实体为参数")
@GetMapping(value = "/page/{pageNumber}/{pageSize}")
public ResponseResult page(@ApiParam(name = "pageNumber", value = "页码", required = true)@PathVariable("pageNumber") int pageNumber,
							@ApiParam(name = "pageSize", value = "每页显示多少条", required = true)@PathVariable("pageSize") int pageSize,
							@ApiParam(name = "bizArticle", value = "article实体") BizArticle bizArticle){
	return new ResponseResult(HttpStatus.OK.value(),"查询成功", bizArticleService.pageSelective(pageNumber,pageSize,bizArticle));
}
```

2. **包命名**如果是公司的项目，以公司的域名反转。

例如腾讯(tencent)，域名反转则为 com.tencent ，后面跟上项目名例如Tim，com.tencent.tim。

如果是自己的项目，则以自己的域名反转(没有则自定义)，例如我的域名为 yinjinbiao.top ， 反转则为 top.yinjinbiao ，如果的项目为 blog ，那么包命就是 top.yinjinbiao.blog。发布线上地址就是 [个人博客](https://blog.yinjinbiao.top) 。

3. **单体应用**的包划分。模块包命以业务划分为主，便于以后服务拆分。

例如 `top.yinjinbiao.video.admin.controller` , `top.yinjinbiao.video.admin.service` , `top.yinjinbiao.video.admin.dao`。

其中 `service` 只能调用自己包下的 `dao`。

`controller` 如果需要调用到其它模块下的 `service`，需要注明注释为跨包调用。 



4. 包名统一使用小写，使用单数形式，但是类名如果有复数含义，类名可以使用复数形式。正例：应用工具类包名为 com.alibaba.ai.util、类名为 MessageUtils（此规则参考 spring 的框架结构）

5. 在常量与变量的命名时，表示类型的名词放在词尾，以提升辨识度。如XXXXList,XXXXMap,XXXXCount。

6. 各层命名规约：
```
A) Service/DAO 层方法命名规约
	1） 获取单个对象的方法用 get 做前缀。
	2） 获取多个对象的方法用 list 做前缀，复数形式结尾如：listObjects。 
	3） 获取统计值的方法用 count 做前缀。
	4） 插入的方法用 save/insert 做前缀。
	5） 删除的方法用 remove/delete 做前缀。
	6） 修改的方法用 update 做前缀。
B) 领域模型命名规约
	1） 数据对象：xxxDO，xxx 即为数据表名。
	2） 数据传输对象：xxxDTO，xxx 为业务领域相关的名称。
	3） 展示对象：xxxVO，xxx 一般为网页名称。
```

7. 不要使用一个常量类维护所有常量，要按常量功能进行归类，分开维护。

说明：大而全的常量类，杂乱无章，使用查找功能才能定位到修改的常量，不利于理解和维护。

正例：缓存相关常量放在类 CacheConsts 下；系统配置相关常量放在类 ConfigConsts 下。

8. 不同逻辑、不同语义、不同业务的代码之间插入一个空行分隔开来以提升可读性。

9. 代码精简度大于代码执行效率。如果代码可封装，但是效率变低，在可接收范围内，需要对代码进行封装以提升代码可读性。

## MySQL 建表规范

1. 表达是与否概念的字段，必须使用 is_xxx 的方式命名，数据类型是 unsigned tinyint（1 表示是，0 表示否）。

**说明：** 任何字段如果为非负数，必须是 unsigned。

**注意：** POJO 类中的任何布尔类型的变量，都不要加 is 前缀，所以，需要在`<resultMap>`设置从 is_xxx
到 Xxx 的映射关系。数据库表示是与否的值，使用 tinyint 类型，坚持 is_xxx 的命名方式是为了明确其取
值含义与取值范围。

正例：表达逻辑删除的字段名 is_deleted，1 表示删除，0 表示未删除。

2. MySQL 在 Windows 下不区分大小写，但在 Linux 下区分大小写，所以表名，字段名一律使用小写字母或数字，禁止用数字开头，禁止两个下划线之间出现数字。表名不使用复数名词。

3. 小数使用 `decimal`，禁止使用 float 和 double。在存储的时候，float 和 double 都存在精度损失的问题，很可能在比较值的时候，得到不正确的
结果。如果存储的数据范围超过 decimal 的范围，建议将数据拆成整数和小数并分开存储。

4. 如果存储的字符串长度几乎相等，使用 char 定长字符串类型。varchar 是可变长字符串，不预先分配存储空间，长度不要超过 5000，如果存储长度大于此值，定义字段类型为 text，独立出来一张表，用主键来对应，避免影响其它字段索引效率。

5. 表必备 4 个字段：id, create_time, update_time, is_delete。其中 id 必为主键，类型为 bigint unsigned、单表时自增、步长为 1。create_time, update_time
的类型均为 datetime 类型。

6. 字段允许适当冗余，以提高查询性能，但必须考虑数据一致。冗余字段应遵循：
- 不是频繁修改的字段。
- 不是 varchar 超长字段，更不能是 text 字段。
- 不是唯一索引的字段

**例如：** 商品类目名称使用频率高，字段长度短，名称基本一不变，可在相关联的表中冗余存储类目名称，避免关联查询。

7. 单表行数超过 500 万行或者单表容量超过 2GB，才推荐进行分库分表。

**说明：**如果预计三年后的数据量根本达不到这个级别，请不要在创建表时就分库分表。

8. 如果字段存储数值不存在负数，则使用 `unsigned` 无符号值避免误存。

## MySQL SQL 语句规范

## MySQL ORM 映射规范


## 参考资料
