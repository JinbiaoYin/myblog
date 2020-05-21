# 介绍

## 生成在线查询
```sh
docker run -it --env-file=.env -e "CONFIG=$(cat config.json | jq -r tostring)" algolia/docsearch-scraper
```

## 我的开发规范
### 数据库设计（JPA版本）
- 每张表的主键都叫 id，外键就叫表名+id，表名和字段都为英文全小写，单词之间用_隔开。id 的数据类型为`unsigned bigint(19)`(0 到约 10 的 19 次方)，对应Java实体类为`Long`。
- 字符串类型基本定长的直接选用`char`,不定长的用`varchar`，全部要限定长度，对应实体类的`String`。长度超过5000的再用`text`。MySQL5.0.3之后varchar(n)这里的n表示字符数，不管是英文还是中文都能存放n个。
- 小数类型用`decimal`，禁止用`float`和`double`。
- 表达是否概念的字段，用 is_xxx，类型为`unsigned tinyint`(0-255)，对应实体类 xxx，类型为`Boolean`，例如 `is_del` 对应 `Boolean del`。
- 涉及到前端为`textarea`的，还是用`varchar`存储。
- 每个表中的必要字段，id,create_time,modify_time,create_by,modify_by,is_del。类型分别为`unsigned bigint`,`datetime`,`datetime`,`unsigned bigint`,`unsigned bigint`,`unsigned tinyint`。

### 实体类设计（JPA版本）
- 不使用 Hibernate 和 jpa 的 `@OneToMany`等建立orm表映射的注解。  
- 类上加`@Entity`,`@Table(name="")`,`@Data`标识实体类和实体类对应的表并使用`lombok`。`@Entity`默认将类名和相同的数据库表名以及属性和数据库的字段做映射，（也可不加`@Table`,直接用`@Entity(name="")`指定对应表。)`@Table`比`@Entity`强大一些，有更多的参数，但是`@Entity`是必须的。
- 每个字段用驼峰式进行自动映射，虽然大多可以自动映射，但是为避免出现问题，必须加上`@Column()`标识。涉及到上述`is_xxx`，实体类中直接起名为 xxx。
- 涉及到业务上必须有值的字段，一定要根据实际情况加上`@NotEmpty`或`@NotBlank`或`@NotNull`。
- `String`类型字段一定要加上`Length`并指定`max`大小，以便和数据库对应。
- 小数全部使用`BigDecimal`类型，用`Double`或`Float`计算必会产生误差，最后坑的雅痞。
- 日期类型上加上`@DateTimeFormat(pattern = "yyyy-MM-dd")`和`@JsonFormat(pattern="yyyy-MM-dd",timezone="GMT+8")`进行入参格式化和出参格式化。


### Controller 
- `Springboot`前后端分离项目直接使用`@RestController`和`@RequestMapping`。
- 方法上注解使用`@GetMapping`或`@PostMapping`，一律使用`ResponseResult`类做响应体。如果要使用`Swagger2`做接口文档，则再根据需要添加额外注解。
- Controller 层因不存在事务不做任何业务处理，最多只做传值赋值等非持久化操作。

### Service
- Service 必须存在一个接口层，以便后期根据不同实现切换，尽管现在只有一个实现。
- 实现类上加`@Service`。
- 方法上根据需要加`@Transactional`，注意设置`readOnly`属性是否只读(默认为`false`)。当设置`@Transactional(readOnly=true)`，链接会被设置为只读，如果这时候进行修改操作，就会报错并提示链接只读的。如果方法中仅运行了一条SQL，`@Transactional`没必要加。如果存在多行修改的SQL，必须加`@Transactional`。

### Dao（JPA版本）
- 接口继承`JpaRepositor`和`JpaSpecificationExecutor`，省去书写冗余代码。