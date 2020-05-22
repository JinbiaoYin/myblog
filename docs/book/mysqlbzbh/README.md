---
title: 目录
---

## 第1章 了解SQL

模式（schema） 关于数据库和表的布局及特性的信息。有时，模式用作数据库的同义词。遗憾的是，模式的含义通常在上下文中并不是很清晰。

SQL不是一种专利语言，而且存在一个标准委员会，他们试图定义可供所有BMS使用的SQL语法，但事实上任意两个DBMS实现的SQL都不完全相同。

## 第3章 使用MySQL
### 3.2 选择数据库
如果只连接了DBMS，没有打开任何数据库，在语句中需要使用`use`选择某数据库。
```sql
USE test_database;
```
USE语句并不返回任何结果。

### 3.3 了解数据库和表
- 使用`SHOW DATABASES;`显示连接中可用的数据库。
- 使用`SHOW TABLES;`获取数据库内的表。
- 使用`SHOW COLUMNS FROM test_table;`显示表中的列的信息，包含列名，数据类型，是否允许Null，是否为键，默认值及其它信息。可以使用`DESCRIBE test_table`代替`SHOW COLUMNS FROM test_table;`。
- 使用`SHOW STATUS;`，用于显示广泛的服务器状态信息；
- `SHOW CREATE DATABASE test_database;`和`SHOW CREATE TABLE sys_user;`，分别用来显示创建数据库或表的MySQL语句。
- `SHOW ERRORS`和`SHOW WARNINGS`，用来显示服务器错误或警告消息。

## 第4章 检索数据
多条SQL语句必须以分号（;）分隔。如果你使用的是mysql命令行，必须加上分号来结束SQL语句。

### 4.1 SELECT语句
请注意，SQL语句不区分大小写，因此SELECT与select是相同的。同样，写成Select也没有关系。许多SQL开发人员喜欢对所有SQL关键字使用大写，而对所有列和表名使用小写，这样做使代码更易于阅读和调试。

### 4.4 检索所有列
一般，除非你确实需要表中的每个列，否则最好别使用*通配符。虽然使用通配符可能会使你自己省事，不用明确列出所需列，但检索不需要的列通常会降低检索和应用程序的性能。

### 4.5 检索不同的行
`DISTINCT`关键字应用于所有列而不仅是前置它的列。

### 4.6 限制结果
使用`LIMIT`限制结果的行数。`LIMIT 5`返回前五条，`LIMIT 5,5`返回从第五行开始的5行。检索出来的第一行为行0而不是行1。因此，`LIMIT 1,1`将检索出第二行而不是第一行。

## 第5章 排序检索数据
### 5.1 排序数据
如果不明确规定排序顺序，则认为检索结果无顺序意义。

### 5.2 按多个列排序
首先按第一列排序，然后按第二列排序。如果第一列都是唯一的，则不会按第二列排序。

在对文本性的数据进行排序时，A与 a相同吗？a位于B之前还是位于Z之后？这些问题不是理论问题，其答案取决于数据库如何设置。

在给出ORDER BY子句时，应该保证它位于FROM子句之后。如果使用LIMIT，它必须位于ORDER BY之后。

## 第6章 过滤数据
单引号用来限定字符串。如果将值与串类型的列进行比较，则需要限定引号。用来与数值列进行比较的值不用引号。

### 6.2.3 范围值检查
BETWEEN ... AND ... 包含头也包含尾。相当于 >= and <=

## 第7章 数据过滤
### 7.2 IN操作符
为什么要使用IN操作符？
- 在使用长的合法选项清单时，IN操作符的语法更清楚且更直观。
- 在使用IN时，计算的次序更容易管理（因为使用的操作符更少）。
- IN操作符一般比OR操作符清单执行更快。
- IN的最大优点是可以包含其他SELECT语句，使得能够更动态地建立WHERE子句。

## 第8章 用通配符进行过滤
### 8.2 使用通配符的技巧
通配符搜索的处理一般要比前面讨论的其他搜索所花时间更长。

- 不要过度使用通配符。如果其他操作符能达到相同的目的，应该使用其他操作符。
- 在确实需要使用通配符时，除非绝对有必要，否则不要把它们用在搜索模式的开始处。把通配符置于搜索模式的开始处，搜索起来是最慢的。
- 仔细注意通配符的位置。如果放错地方，可能不会返回想要的数据。

MySQL默认的转义字符为'\'，如果要匹配字符串中带有'%'的，可以使用`like '%\%%'`。如果要改变转义字符，使用`ESCAPE`。建议使用默认`\`。
```sql
SELECT
	*
FROM
	sys_user t
WHERE
	t.username LIKE '%\%%'
```

## 第9章 用正则表达式进行搜索
```sql
SELECT prod_name
FROM products
WHERE prod_name REGEXP ''
```
`REGEXP`为正则表达式匹配的关键字。 如果匹配串区分大小写，可用`REGEXP BINARY`。

 多数正则表达式实现使用单个反斜杠转义特殊字符，以便能使用这些字符本身。但MySQL要求两个反斜杠（MySQL自己解释一个，正则表达式库解释另一个）。

 ## 第10章 创建计算字段
 ### 10.2 拼接字段
 :::tip
 多数DBMS使用+或||来实现拼接，MySQL则使用Concat()函数来实现。当把SQL语句转换成MySQL语句时一定要把这个区别铭记在心。
 :::

Trim函数 MySQL支持`RTrim()`，还支持`LTrim()`（去掉串左边的空格）以及`Trim()`（去掉串左右两边的空格）。

## 第11章 使用数据处理函数
### 11.1 函数
函数没有SQL的可移植性强。几乎每种主要的DBMS的实现都支持其他实现不支持的函数，而且有时差异还很大。

### 11.2 使用函数
### 11.2.1 文本处理函数
- Upper()   将文本转换为大写
- Left() 返回串左边的字符
- Length() 返回串的长度
- Locate() 找出串的一个子串
- Lower() 将串转换为小写
- LTrim() 去掉串左边的空格
- Right() 返回串右边的字符
- RTrim() 去掉串右边的空格
- Soundex() 返回串的SOUNDEX值
- SubString() 返回子串的字符
- Upper() 将串转换为大写

### 12.2.2 日期和时间处理函数
- AddDate() 增加一个日期（天、周等）
- AddTime() 增加一个时间（时、分等）
- CurDate() 返回当前日期
- CurTime() 返回当前时间
- Date() 返回日期时间的日期部分
- DateDiff() 计算两个日期之差
- Date_Add() 高度灵活的日期运算函数
- Date_Format() 返回一个格式化的日期或时间串
- Day() 返回一个日期的天数部分
- DayOfWeek() 对于一个日期，返回对应的星期几
- Hour() 返回一个时间的小时部分
- Minute() 返回一个时间的分钟部分
- Month() 返回一个日期的月份部分
- Now() 返回当前日期和时间
- Second() 返回一个时间的秒部分
- Time() 返回一个日期时间的时间部分
- Year() 返回一个日期的年份部分

有时列数据类型是`datetime`，想要只根据日期筛选，则可以使用`Date()`。
```sql
SELECT cust_id, order_num
FROM orders
WHERE Date(order_date) = '2005-09-01'
```

### 11.2.3 数值处理函数
- Abs() 返回一个数的绝对值
- Cos() 返回一个角度的余弦
- Exp() 返回一个数的指数值
- Mod() 返回除操作的余数
- Pi() 返回圆周率
- Rand() 返回一个随机数
- Sin() 返回一个角度的正弦
- Sqrt() 返回一个数的平方根
- Tan() 返回一个角度的正切

## 第12章 汇总数据
### 12.1 聚集函数
- AVG() 返回某列的平均值
- COUNT() 返回某列的行数
- MAX() 返回某列的最大值
- MIN() 返回某列的最小值
- SUM() 返回某列值之和

:::tip
AVG()函数忽略列值为NULL的行。  
使用COUNT(*)对表中行的数目进行计数，不管表列中包含的是空值（NULL）还是非空值。  
使用COUNT(column)对特定列中具有值的行进行计数，忽略NULL值。
:::

可以在SUM()中使用计算表达式
```sql
SELECT SUM(item_price*quantity) AS total_price
FROM orderitems
WHERE order_num = 20005;
```

## 第13章 分组数据
HAVING和WHERE的差别  
WHERE在数据分组前进行过滤，HAVING在数据分组后进行过滤。这是一个重要的区别，WHERE排除的行不包括在分组中。

### 13.5 SELECT子句顺序
SELECT ... FROM ... WHERE ... GROUP BY ... HAVING ... ORDER BY ... LIMIT ...

## 第14章 使用子查询
包含子查询的SELECT语句难以阅读和调试，特别是它们较为复杂时更是如此。把子查询分解为多行并且适当地进行缩进，能极大地简化子查询的使用。

## 第15章 连接表
MySQL在运行时关联指定的每个表以处理联结。这种处理可能是非常耗费资源的，因此应该仔细，不要联结不必要的表。联结的表越多，性能下降越厉害。

为执行任一给定的SQL操作，一般存在不止一种方法。很少有绝对正确或绝对错误的方法。性能可能会受操作类型、表中数据量、是否存在索引或键以及其他一些条件的影响。


## 第22章 使用视图
视图是虚拟的表。与包含数据的表不一样，视图只包含使用时动态检索数据的查询。

- 视图用`CREATE VIEW`语句来创建。
- 使用`SHOW CREATE VIEW viewname;`来查看创建视图的语句。
- 用`DROP`删除视图，其语法为`DROP VIEW viewname;`。
- 更新视图时，可以先用DROP再用CREATE，也可以直接用`CREATE OR REPLACE VIEW`。

```sql
CREATE VIEW test_shitu AS
SELECT cust_name,cust_contact, prod_id
FROM customers, orders, orderitems
WHERE customers.cust_id = orders.cust_id
AND orderitems.order_num = orders.order_num;    
```

利用视图，可一次性编写基础的SQL，然后根据需要多次使用。

### 22.1 视图的用途
- 连接表，一次连接多次使用。
- 格式化数据。
- 过滤不需要的数据。

### 22.2.5 更新视图
通常，视图是可更新的。更新一个视图将更新其基表。但是，并非所有视图都是可更新的。基本上可以说，如果MySQL不能正确地确定被更新的基数据，则不允许更新。如果视图定义中有以下操作，则不能进行视图的更新：
- 分组（使用GROUP BY和HAVING）；
- 联结
- 子查询
- 并
- 聚集函数（Min()、Count()、Sum()等）；
- DISTINCT
- 导出（计算）列。
看上去是大多视图都不允许更新，这是因为视图主要用于数据检索。

## 第23章 使用存储过程
### 23.1 什么是存储过程
使用的大多数SQL语句都是针对一个或多个表的单条语句。并非所有操作都这么简单，经常会有一个完整的操作需要多条语句才能完成。

存储过程简单来说，就是为以后的使用而保存的一条或多条MySQL语句的集合。可将其视为批文件，虽然它们的作用不仅限于批处理。

用存储过程有3个主要的好处，即简单、安全、高性能。

存储过程实际上是一种函数。

### 23.2 使用存储过程
#### 23.3.1 执行存储过程
```sql
CALL test_procedure(@pricelow,@pricehigh,@priceaverage);
```
这句sql的作用是，调用并执行存储过程 test_produce,并传了3个参数。

#### 23.3.2 创建存储过程
```sql
CREATE PROCEDURE test_procedure()
BEGIN
	SELECT Avg(prod_price) AS priceaverge
	FROM products
END;
```
这句语句的意思是，创建一个名为 test_procedure 的存储过程，`BEGIN`和`END`用来限定存储过程体。这个存储过程没有参数，但后跟的()仍然需要。

:::tip  
mysql命令行客户机的分隔符为;。如果直接在存储过程体中使用;,会被判断为语句结束，而不是过程体的分隔符。为了在使用存储过程时，将过程体和整个存储过程的分隔符区别开，解决方法是临时更改命令行实用程序的语句分隔符。

除\符号外，任何字符都可以用作语句分隔符。

如果你使用的是mysql命令行实用程序，在使用存储过程时，注意临时更改语句分隔符。
:::

例如，在mysql命令行实用程序中，将语句分隔符临时更改为//。
```sql
DELIMITER //
CREATE PROCEDURE test_procedure()
BEGIN
	SELECT Avg(prod_price) AS priceaverage
	FROM products;
END //
DELIMITER;
```

#### 23.3.3 删除存储过程
```sql
DROP PROCEDURE test_procedure;
```
请注意没有使用后面的()。仅在创建时和调用时需要()。

如果存储过程不存在，将产生一个错误。想避免这个错误可使用`DROP PROCEDURE IF EXISTS`

#### 23.3.4 带参数的存储过程
```sql
CREATE PROCEDURE test_procedure(OUT pl BIGINT,OUT ph BIGINT,OUT pa BIGINT)
BEGIN
	SELECT MIN(user_id) INTO pl
  FROM sys_user;
	SELECT MAX(user_id) INTO ph
  FROM sys_user;
	SELECT AVG(user_id) INTO pa
  FROM sys_user;
END
```
此存储过程接受3个参数，`OUT`指出相应的参数用来从存储过程传出一个值。MySQL支持`IN`,`OUT`,`INOUT`类型的参数。`INTO`相当于赋值操作。

**调用带参数的存储过程：**
```sql
CALL test_procedure(@a,@b,@c);
SELECT @a,@b,@c
```
MySQL使用`@`来表示变量，上述调用 test_procedure存储过程，将返回参数临时存储在三个变量中，并不直接显示。需要再次使用`SELECT`查询结果。

**使用IN和OUT**
```sql
CREATE PROCEDURE test_procedure(IN userid BIGINT,OUT telphone VARCHAR(11))
BEGIN
	SELECT avg(tel) INTO telphone
	FROM sys_user
	WHERE user_id = userid;
END
```
调用
```sql
CALL test_procedure(9996993128955904,@tel);
SELECT @tel;
```

### 23.3.5 建立智能存储过程
上述存储过程中，只封装了简单的`SELECT`语句，这些存储过程直接用被封装的语句就可以完成。使用存储过程反而是过度设计了。

只有在存储过程内包含业务规则和智能处理时，它们的威力才真正显现出来。

```sql
CREATE PROCEDURE ordertotal(IN onum INT,IN taxtable BOOLEAN,OUT ototal DECIMAL(8,2))
BEGIN
	DECLARE total DECIMAL(8,2);
	DECLARE taxrate INT DEFAULT 6;
	SELECT Sum(item_price*quantity)
	FROM orderitems
	WHERE order_num = onumber
	INTO total;
	IF taxtable THEN
		SELECT total+(total/100*taxrate) INTO total;
	END IF;
	SELECT total INTO ototal;
END
```
使用`DECLARE`可以在存储过程中声明变量，使用`IF ... THEN ... END IF;`判断条件。

#### 23.3.6 检查存储过程
使用`SHOW CREATE PROCEDURE`查看存储过程定义。
```sql
SHOW CREATE PROCEDURE test_procedure
```

## 第24章 使用游标
### 24.1 什么是游标
MySQL检索操作返回一组称为结果集的行。这组返回的行都是与SQL语句相匹配的行（零行或多行）。使用简单的`SELECT`语句，例如，没有办法得到第一行、下一行或前10行，也不存在每次一行地处理所有行的简单方法（相对于成批地处理它们）。

有时，需要在检索出来的行中前进或后退一行或多行。这就是使用游标的原因。游标（cursor）是一个存储在MySQL服务器上的数据库查询，它不是一条SELECT语句，而是被该语句检索出来的结果集。在存储了游标之后，应用程序可以根据需要滚动或浏览其中的数据。

不像多数DBMS，MySQL游标只能用于存储过程（和函数）。

### 24.2 如何使用游标
```sql
CREATE PROCEDURE test_procedure()
BEGIN
	DECLARE done BOOLEAN DEFAULT 0;
	DECLARE o BIGINT;
	DECLARE ordernumbers CURSOR
	FOR
	SELECT user_id from sys_user;
	DECLARE CONTINUE HANDLER FOR SQLSTATE '02000' SET done = 1;
	OPEN ordernumbers;
	REPEAT
		FETCH ordernumbers INTO o;
	UNTIL done END REPEAT;
	CLOSE ordernumbers;
END
```
:::tip
使用`DECLARE ordernumbers CURSOR FOR ...`，为查询设置一个游标。`DECLARE CONTINUE HANDLER FOR SQLSTATE '02000' SET done = 1;`是在条件出现时被执行的代码。这里，它指出当SQLSTATE '02000'出现时，SET done=1。SQLSTATE为02000代表无更多数据。
:::

## 第25章 使用触发器
### 25.1 什么是触发器
如果我们想要某些语句在事件发生时自动执行。这时候就要使用触发器。触发器是MySQL响应以下任意语句而自动执行的一条MySQL语句。
- DELETE
- INSERT
- UPDATE
其它MySQL语句不支持触发器。

### 25.2 创建触发器
触发器必须在每个表中唯一，而不是在每个数据库中唯一。数据库中的两个表可具有相同名字的触发器。但是最好使用唯一的触发器名。
```sql
CREATE TRIGGER test_trigger AFTER INSERT ON sys_user
FOR EACH ROW SELECT 'User added' INTO @a;
```
只有表才支持触发器，视图不支持。每个表最多支持6个触发器（每条INSERT、UPDATE和DELETE的之前和之后）。

### 25.3 删除触发器
```sql
DROP TRIGGER test_trigger;
```
触发器不能更新或覆盖，只能删除重新创建。

### 25.4 触发器实例
**INSERT**
```sql
CREATE TRIGGER test_trigger AFTER INSERT ON sys_user
FOR EACH ROW 
BEGIN
	SELECT NEW.user_id INTO @a;
END
```
`INSERT`触发器内，可引用虚拟表`NEW`，访问被插入的行。
```sql
INSERT INTO `webframe`.`sys_user` (`user_id`, `loginname`, `username`, `password`) VALUES ('2', 'test', 'test', '638a0bd2e278d57416c5492042441920f46c20d312881c22');
SELECT @a;
```
**----------------DELETE-----------------**
```sql
CREATE TRIGGER test_trigger AFTER DELETE ON sys_user
FOR EACH ROW
BEGIN
	SELECT OLD.user_id INTO @a;
END
```
`DELETE`触发器内，可引用虚拟表`OLD`，访问被删除的行。
```sql
DELETE from sys_user where user_id = 1;
select @a;
```

**----------------UPDATE-----------------**
```sql
CREATE TRIGGER test_trigger BEFORE UPDATE ON sys_user
FOR EACH ROW
BEGIN
	SET NEW.username = UPPER(NEW.username);
END
```
在UPDATE触发器代码中，你可以引用一个名为OLD的虚拟表访问以前（UPDATE语句前）的值，引用一个名为NEW的虚拟表访问新更新的值；

在BEFORE UPDATE触发器中，NEW中的值可能也被更新（允许更改将要用于UPDATE语句中的值）；

每次更新一个行时，NEW.username中的值（将用来更新表行的值）都用Upper(NEW.username)替换。

### 25.4.4 关于触发器的进一步介绍
使用触发器，把更改（如果需要，甚至还有之前和之后的状态）记录到另一个表非常容易。可以用来做日志。

MySQL触发器中不支持CALL语句。这表示不能从触发器内调用存储过程。所需的存储过程代码需要复制到触发器内。


## 第26章 管理事务处理
事务处理用来管理`INSERT`、`UPDATE`和`DELETE`语句。你不能回退`SELECT`语句。（这样做也没有什么意义。）你不能回退`CREATE`或`DROP`操作。事务处理块中可以使用这两条语句，但如果你执行回退，它们不会被撤销。

### 26.2 控制事务处理
#### 26.2.3 使用保留点
有时候想部分回滚事务，这时候就要使用保留点。
```sql
SAVEPOINT point1;
ROLLBACK TO point1;
```
使用`SAVEPOINT`在语句中设置一个保留点，在回滚时设置回滚至保留点。

## 第28章 安全管理
### 28.2 管理用户
```sql
USE mysql;
SELECT user FROM user;
```

#### 28.2.1 创建用户账号
```sql
CREATE USER test IDENTITY BY '123456';
```
重命名用户名
```sql
RENAME USER test TO test1;
```

#### 28.2.2 删除用户
```sql
DROP USER test1;
```

#### 28.2.3 设置访问权限
新创建的用户账号没有访问权限。它们能登录MySQL，但不能看到数据，不能执行任何数据库操作。
```sql
SHOW GRANTS FOR test;
```

MySQL的权限用用户名和主机名结合定义。如果不指定主机名，则使用默认的主机名%

授权：
```sql
GRANT SELECT ON webframe.* TO test;
```

撤销权限，被撤销的访问权限必须存在，否则会出错。
```sql
REVOKE SELECT ON webframe.* FROM test;
```

查看用户权限
```sql
SHOW GRANTS FOR test;
```

权限对应表
<img :src="$withBase('/database/mysql/mysql_grant.jpg')">


#### 28.2.4 更改口令
```sql
SET PASSWORD FOR test = Password('123456');
```

不指定用户名时，默认更新当前登录用户口令。
```sql
SET PASSWORD = Password('123456');
```