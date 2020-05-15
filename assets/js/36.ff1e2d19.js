(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{249:function(t,a,_){"use strict";_.r(a);var s=_(19),v=Object(s.a)({},(function(){var t=this,a=t.$createElement,_=t._self._c||a;return _("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[_("h2",{attrs:{id:"第1章-了解sql"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#第1章-了解sql"}},[t._v("#")]),t._v(" 第1章 了解SQL")]),t._v(" "),_("p",[t._v("模式（schema） 关于数据库和表的布局及特性的信息。有时，模式用作数据库的同义词。遗憾的是，模式的含义通常在上下文中并不是很清晰。")]),t._v(" "),_("p",[t._v("SQL不是一种专利语言，而且存在一个标准委员会，他们试图定义可供所有BMS使用的SQL语法，但事实上任意两个DBMS实现的SQL都不完全相同。")]),t._v(" "),_("h2",{attrs:{id:"第3章-使用mysql"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#第3章-使用mysql"}},[t._v("#")]),t._v(" 第3章 使用MySQL")]),t._v(" "),_("h3",{attrs:{id:"_3-2-选择数据库"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-选择数据库"}},[t._v("#")]),t._v(" 3.2 选择数据库")]),t._v(" "),_("p",[t._v("如果只连接了DBMS，没有打开任何数据库，在语句中需要使用"),_("code",[t._v("use")]),t._v("选择某数据库。")]),t._v(" "),_("div",{staticClass:"language-sql extra-class"},[_("pre",{pre:!0,attrs:{class:"language-sql"}},[_("code",[_("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("USE")]),t._v(" test_database"),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),_("p",[t._v("USE语句并不返回任何结果。")]),t._v(" "),_("h3",{attrs:{id:"_3-3-了解数据库和表"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_3-3-了解数据库和表"}},[t._v("#")]),t._v(" 3.3 了解数据库和表")]),t._v(" "),_("ul",[_("li",[t._v("使用"),_("code",[t._v("SHOW DATABASES;")]),t._v("显示连接中可用的数据库。")]),t._v(" "),_("li",[t._v("使用"),_("code",[t._v("SHOW TABLES;")]),t._v("获取数据库内的表。")]),t._v(" "),_("li",[t._v("使用"),_("code",[t._v("SHOW COLUMNS FROM test_table;")]),t._v("显示表中的列的信息，包含列名，数据类型，是否允许Null，是否为键，默认值及其它信息。可以使用"),_("code",[t._v("DESCRIBE test_table")]),t._v("代替"),_("code",[t._v("SHOW COLUMNS FROM test_table;")]),t._v("。")]),t._v(" "),_("li",[t._v("使用"),_("code",[t._v("SHOW STATUS;")]),t._v("，用于显示广泛的服务器状态信息；")]),t._v(" "),_("li",[_("code",[t._v("SHOW CREATE DATABASE test_database;")]),t._v("和"),_("code",[t._v("SHOW CREATE TABLE sys_user;")]),t._v("，分别用来显示创建数据库或表的MySQL语句。")]),t._v(" "),_("li",[_("code",[t._v("SHOW ERRORS")]),t._v("和"),_("code",[t._v("SHOW WARNINGS")]),t._v("，用来显示服务器错误或警告消息。")])]),t._v(" "),_("h2",{attrs:{id:"第4章-检索数据"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#第4章-检索数据"}},[t._v("#")]),t._v(" 第4章 检索数据")]),t._v(" "),_("p",[t._v("多条SQL语句必须以分号（;）分隔。如果你使用的是mysql命令行，必须加上分号来结束SQL语句。")]),t._v(" "),_("h3",{attrs:{id:"_4-1-select语句"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_4-1-select语句"}},[t._v("#")]),t._v(" 4.1 SELECT语句")]),t._v(" "),_("p",[t._v("请注意，SQL语句不区分大小写，因此SELECT与select是相同的。同样，写成Select也没有关系。许多SQL开发人员喜欢对所有SQL关键字使用大写，而对所有列和表名使用小写，这样做使代码更易于阅读和调试。")]),t._v(" "),_("h3",{attrs:{id:"_4-4-检索所有列"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_4-4-检索所有列"}},[t._v("#")]),t._v(" 4.4 检索所有列")]),t._v(" "),_("p",[t._v("一般，除非你确实需要表中的每个列，否则最好别使用*通配符。虽然使用通配符可能会使你自己省事，不用明确列出所需列，但检索不需要的列通常会降低检索和应用程序的性能。")]),t._v(" "),_("h3",{attrs:{id:"_4-5-检索不同的行"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_4-5-检索不同的行"}},[t._v("#")]),t._v(" 4.5 检索不同的行")]),t._v(" "),_("p",[_("code",[t._v("DISTINCT")]),t._v("关键字应用于所有列而不仅是前置它的列。")]),t._v(" "),_("h3",{attrs:{id:"_4-6-限制结果"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_4-6-限制结果"}},[t._v("#")]),t._v(" 4.6 限制结果")]),t._v(" "),_("p",[t._v("使用"),_("code",[t._v("LIMIT")]),t._v("限制结果的行数。"),_("code",[t._v("LIMIT 5")]),t._v("返回前五条，"),_("code",[t._v("LIMIT 5,5")]),t._v("返回从第五行开始的5行。检索出来的第一行为行0而不是行1。因此，"),_("code",[t._v("LIMIT 1,1")]),t._v("将检索出第二行而不是第一行。")]),t._v(" "),_("h2",{attrs:{id:"第5章-排序检索数据"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#第5章-排序检索数据"}},[t._v("#")]),t._v(" 第5章 排序检索数据")]),t._v(" "),_("h3",{attrs:{id:"_5-1-排序数据"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_5-1-排序数据"}},[t._v("#")]),t._v(" 5.1 排序数据")]),t._v(" "),_("p",[t._v("如果不明确规定排序顺序，则认为检索结果无顺序意义。")]),t._v(" "),_("h3",{attrs:{id:"_5-2-按多个列排序"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_5-2-按多个列排序"}},[t._v("#")]),t._v(" 5.2 按多个列排序")]),t._v(" "),_("p",[t._v("首先按第一列排序，然后按第二列排序。如果第一列都是唯一的，则不会按第二列排序。")]),t._v(" "),_("p",[t._v("在对文本性的数据进行排序时，A与 a相同吗？a位于B之前还是位于Z之后？这些问题不是理论问题，其答案取决于数据库如何设置。")]),t._v(" "),_("p",[t._v("在给出ORDER BY子句时，应该保证它位于FROM子句之后。如果使用LIMIT，它必须位于ORDER BY之后。")]),t._v(" "),_("h2",{attrs:{id:"第6章-过滤数据"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#第6章-过滤数据"}},[t._v("#")]),t._v(" 第6章 过滤数据")]),t._v(" "),_("p",[t._v("单引号用来限定字符串。如果将值与串类型的列进行比较，则需要限定引号。用来与数值列进行比较的值不用引号。")]),t._v(" "),_("h3",{attrs:{id:"_6-2-3-范围值检查"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_6-2-3-范围值检查"}},[t._v("#")]),t._v(" 6.2.3 范围值检查")]),t._v(" "),_("p",[t._v("BETWEEN ... AND ... 包含头也包含尾。相当于 >= and <=")]),t._v(" "),_("h2",{attrs:{id:"第7章-数据过滤"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#第7章-数据过滤"}},[t._v("#")]),t._v(" 第7章 数据过滤")]),t._v(" "),_("h3",{attrs:{id:"_7-2-in操作符"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_7-2-in操作符"}},[t._v("#")]),t._v(" 7.2 IN操作符")]),t._v(" "),_("p",[t._v("为什么要使用IN操作符？")]),t._v(" "),_("ul",[_("li",[t._v("在使用长的合法选项清单时，IN操作符的语法更清楚且更直观。")]),t._v(" "),_("li",[t._v("在使用IN时，计算的次序更容易管理（因为使用的操作符更少）。")]),t._v(" "),_("li",[t._v("IN操作符一般比OR操作符清单执行更快。")]),t._v(" "),_("li",[t._v("IN的最大优点是可以包含其他SELECT语句，使得能够更动态地建立WHERE子句。")])]),t._v(" "),_("h2",{attrs:{id:"第8章-用通配符进行过滤"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#第8章-用通配符进行过滤"}},[t._v("#")]),t._v(" 第8章 用通配符进行过滤")]),t._v(" "),_("h3",{attrs:{id:"_8-2-使用通配符的技巧"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_8-2-使用通配符的技巧"}},[t._v("#")]),t._v(" 8.2 使用通配符的技巧")]),t._v(" "),_("p",[t._v("通配符搜索的处理一般要比前面讨论的其他搜索所花时间更长。")]),t._v(" "),_("ul",[_("li",[t._v("不要过度使用通配符。如果其他操作符能达到相同的目的，应该使用其他操作符。")]),t._v(" "),_("li",[t._v("在确实需要使用通配符时，除非绝对有必要，否则不要把它们用在搜索模式的开始处。把通配符置于搜索模式的开始处，搜索起来是最慢的。")]),t._v(" "),_("li",[t._v("仔细注意通配符的位置。如果放错地方，可能不会返回想要的数据。")])]),t._v(" "),_("p",[t._v("MySQL默认的转义字符为''，如果要匹配字符串中带有'%'的，可以使用"),_("code",[t._v("like '%\\%%'")]),t._v("。如果要改变转义字符，使用"),_("code",[t._v("ESCAPE")]),t._v("。建议使用默认"),_("code",[t._v("\\")]),t._v("。")]),t._v(" "),_("div",{staticClass:"language-sql extra-class"},[_("pre",{pre:!0,attrs:{class:"language-sql"}},[_("code",[_("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("SELECT")]),t._v("\n\t"),_("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("\n"),_("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("FROM")]),t._v("\n\tsys_user t\n"),_("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("WHERE")]),t._v("\n\tt"),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("username "),_("span",{pre:!0,attrs:{class:"token operator"}},[t._v("LIKE")]),t._v(" "),_("span",{pre:!0,attrs:{class:"token string"}},[t._v("'%\\%%'")]),t._v("\n")])])]),_("h2",{attrs:{id:"第9章-用正则表达式进行搜索"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#第9章-用正则表达式进行搜索"}},[t._v("#")]),t._v(" 第9章 用正则表达式进行搜索")]),t._v(" "),_("div",{staticClass:"language-sql extra-class"},[_("pre",{pre:!0,attrs:{class:"language-sql"}},[_("code",[_("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("SELECT")]),t._v(" prod_name\n"),_("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("FROM")]),t._v(" products\n"),_("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("WHERE")]),t._v(" prod_name "),_("span",{pre:!0,attrs:{class:"token operator"}},[t._v("REGEXP")]),t._v(" "),_("span",{pre:!0,attrs:{class:"token string"}},[t._v("''")]),t._v("\n")])])]),_("p",[_("code",[t._v("REGEXP")]),t._v("为正则表达式匹配的关键字。 如果匹配串区分大小写，可用"),_("code",[t._v("REGEXP BINARY")]),t._v("。")]),t._v(" "),_("p",[t._v("多数正则表达式实现使用单个反斜杠转义特殊字符，以便能使用这些字符本身。但MySQL要求两个反斜杠（MySQL自己解释一个，正则表达式库解释另一个）。")]),t._v(" "),_("h2",{attrs:{id:"第10章-创建计算字段"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#第10章-创建计算字段"}},[t._v("#")]),t._v(" 第10章 创建计算字段")]),t._v(" "),_("h3",{attrs:{id:"_10-2-拼接字段"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_10-2-拼接字段"}},[t._v("#")]),t._v(" 10.2 拼接字段")]),t._v(" "),_("div",{staticClass:"custom-block tip"},[_("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),_("p",[t._v("多数DBMS使用+或||来实现拼接，MySQL则使用Concat()函数来实现。当把SQL语句转换成MySQL语句时一定要把这个区别铭记在心。")])]),t._v(" "),_("p",[t._v("Trim函数 MySQL支持"),_("code",[t._v("RTrim()")]),t._v("，还支持"),_("code",[t._v("LTrim()")]),t._v("（去掉串左边的空格）以及"),_("code",[t._v("Trim()")]),t._v("（去掉串左右两边的空格）。")]),t._v(" "),_("h2",{attrs:{id:"第11章-使用数据处理函数"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#第11章-使用数据处理函数"}},[t._v("#")]),t._v(" 第11章 使用数据处理函数")]),t._v(" "),_("h3",{attrs:{id:"_11-1-函数"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_11-1-函数"}},[t._v("#")]),t._v(" 11.1 函数")]),t._v(" "),_("p",[t._v("函数没有SQL的可移植性强。几乎每种主要的DBMS的实现都支持其他实现不支持的函数，而且有时差异还很大。")]),t._v(" "),_("h3",{attrs:{id:"_11-2-使用函数"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_11-2-使用函数"}},[t._v("#")]),t._v(" 11.2 使用函数")]),t._v(" "),_("h3",{attrs:{id:"_11-2-1-文本处理函数"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_11-2-1-文本处理函数"}},[t._v("#")]),t._v(" 11.2.1 文本处理函数")]),t._v(" "),_("ul",[_("li",[t._v("Upper()   将文本转换为大写")]),t._v(" "),_("li",[t._v("Left() 返回串左边的字符")]),t._v(" "),_("li",[t._v("Length() 返回串的长度")]),t._v(" "),_("li",[t._v("Locate() 找出串的一个子串")]),t._v(" "),_("li",[t._v("Lower() 将串转换为小写")]),t._v(" "),_("li",[t._v("LTrim() 去掉串左边的空格")]),t._v(" "),_("li",[t._v("Right() 返回串右边的字符")]),t._v(" "),_("li",[t._v("RTrim() 去掉串右边的空格")]),t._v(" "),_("li",[t._v("Soundex() 返回串的SOUNDEX值")]),t._v(" "),_("li",[t._v("SubString() 返回子串的字符")]),t._v(" "),_("li",[t._v("Upper() 将串转换为大写")])]),t._v(" "),_("h3",{attrs:{id:"_12-2-2-日期和时间处理函数"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_12-2-2-日期和时间处理函数"}},[t._v("#")]),t._v(" 12.2.2 日期和时间处理函数")]),t._v(" "),_("ul",[_("li",[t._v("AddDate() 增加一个日期（天、周等）")]),t._v(" "),_("li",[t._v("AddTime() 增加一个时间（时、分等）")]),t._v(" "),_("li",[t._v("CurDate() 返回当前日期")]),t._v(" "),_("li",[t._v("CurTime() 返回当前时间")]),t._v(" "),_("li",[t._v("Date() 返回日期时间的日期部分")]),t._v(" "),_("li",[t._v("DateDiff() 计算两个日期之差")]),t._v(" "),_("li",[t._v("Date_Add() 高度灵活的日期运算函数")]),t._v(" "),_("li",[t._v("Date_Format() 返回一个格式化的日期或时间串")]),t._v(" "),_("li",[t._v("Day() 返回一个日期的天数部分")]),t._v(" "),_("li",[t._v("DayOfWeek() 对于一个日期，返回对应的星期几")]),t._v(" "),_("li",[t._v("Hour() 返回一个时间的小时部分")]),t._v(" "),_("li",[t._v("Minute() 返回一个时间的分钟部分")]),t._v(" "),_("li",[t._v("Month() 返回一个日期的月份部分")]),t._v(" "),_("li",[t._v("Now() 返回当前日期和时间")]),t._v(" "),_("li",[t._v("Second() 返回一个时间的秒部分")]),t._v(" "),_("li",[t._v("Time() 返回一个日期时间的时间部分")]),t._v(" "),_("li",[t._v("Year() 返回一个日期的年份部分")])]),t._v(" "),_("p",[t._v("有时列数据类型是"),_("code",[t._v("datetime")]),t._v("，想要只根据日期筛选，则可以使用"),_("code",[t._v("Date()")]),t._v("。")]),t._v(" "),_("div",{staticClass:"language-sql extra-class"},[_("pre",{pre:!0,attrs:{class:"language-sql"}},[_("code",[_("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("SELECT")]),t._v(" cust_id"),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" order_num\n"),_("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("FROM")]),t._v(" orders\n"),_("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("WHERE")]),t._v(" "),_("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Date")]),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("order_date"),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),_("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),_("span",{pre:!0,attrs:{class:"token string"}},[t._v("'2005-09-01'")]),t._v("\n")])])]),_("h3",{attrs:{id:"_11-2-3-数值处理函数"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_11-2-3-数值处理函数"}},[t._v("#")]),t._v(" 11.2.3 数值处理函数")]),t._v(" "),_("ul",[_("li",[t._v("Abs() 返回一个数的绝对值")]),t._v(" "),_("li",[t._v("Cos() 返回一个角度的余弦")]),t._v(" "),_("li",[t._v("Exp() 返回一个数的指数值")]),t._v(" "),_("li",[t._v("Mod() 返回除操作的余数")]),t._v(" "),_("li",[t._v("Pi() 返回圆周率")]),t._v(" "),_("li",[t._v("Rand() 返回一个随机数")]),t._v(" "),_("li",[t._v("Sin() 返回一个角度的正弦")]),t._v(" "),_("li",[t._v("Sqrt() 返回一个数的平方根")]),t._v(" "),_("li",[t._v("Tan() 返回一个角度的正切")])]),t._v(" "),_("h2",{attrs:{id:"第12章-汇总数据"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#第12章-汇总数据"}},[t._v("#")]),t._v(" 第12章 汇总数据")]),t._v(" "),_("h3",{attrs:{id:"_12-1-聚集函数"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_12-1-聚集函数"}},[t._v("#")]),t._v(" 12.1 聚集函数")]),t._v(" "),_("ul",[_("li",[t._v("AVG() 返回某列的平均值")]),t._v(" "),_("li",[t._v("COUNT() 返回某列的行数")]),t._v(" "),_("li",[t._v("MAX() 返回某列的最大值")]),t._v(" "),_("li",[t._v("MIN() 返回某列的最小值")]),t._v(" "),_("li",[t._v("SUM() 返回某列值之和")])]),t._v(" "),_("div",{staticClass:"custom-block tip"},[_("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),_("p",[t._v("AVG()函数忽略列值为NULL的行。"),_("br"),t._v("\n使用COUNT(*)对表中行的数目进行计数，不管表列中包含的是空值（NULL）还是非空值。"),_("br"),t._v("\n使用COUNT(column)对特定列中具有值的行进行计数，忽略NULL值。")])]),t._v(" "),_("p",[t._v("可以在SUM()中使用计算表达式")]),t._v(" "),_("div",{staticClass:"language-sql extra-class"},[_("pre",{pre:!0,attrs:{class:"language-sql"}},[_("code",[_("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("SELECT")]),t._v(" "),_("span",{pre:!0,attrs:{class:"token function"}},[t._v("SUM")]),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("item_price"),_("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("quantity"),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),_("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("AS")]),t._v(" total_price\n"),_("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("FROM")]),t._v(" orderitems\n"),_("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("WHERE")]),t._v(" order_num "),_("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),_("span",{pre:!0,attrs:{class:"token number"}},[t._v("20005")]),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),_("h2",{attrs:{id:"第13章-分组数据"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#第13章-分组数据"}},[t._v("#")]),t._v(" 第13章 分组数据")]),t._v(" "),_("p",[t._v("HAVING和WHERE的差别"),_("br"),t._v("\nWHERE在数据分组前进行过滤，HAVING在数据分组后进行过滤。这是一个重要的区别，WHERE排除的行不包括在分组中。")]),t._v(" "),_("h3",{attrs:{id:"_13-5-select子句顺序"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_13-5-select子句顺序"}},[t._v("#")]),t._v(" 13.5 SELECT子句顺序")]),t._v(" "),_("p",[t._v("SELECT ... FROM ... WHERE ... GROUP BY ... HAVING ... ORDER BY ... LIMIT ...")]),t._v(" "),_("h2",{attrs:{id:"第14章-使用子查询"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#第14章-使用子查询"}},[t._v("#")]),t._v(" 第14章 使用子查询")]),t._v(" "),_("p",[t._v("包含子查询的SELECT语句难以阅读和调试，特别是它们较为复杂时更是如此。把子查询分解为多行并且适当地进行缩进，能极大地简化子查询的使用。")]),t._v(" "),_("h2",{attrs:{id:"第15章-连接表"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#第15章-连接表"}},[t._v("#")]),t._v(" 第15章 连接表")]),t._v(" "),_("p",[t._v("MySQL在运行时关联指定的每个表以处理联结。这种处理可能是非常耗费资源的，因此应该仔细，不要联结不必要的表。联结的表越多，性能下降越厉害。")]),t._v(" "),_("p",[t._v("为执行任一给定的SQL操作，一般存在不止一种方法。很少有绝对正确或绝对错误的方法。性能可能会受操作类型、表中数据量、是否存在索引或键以及其他一些条件的影响。")]),t._v(" "),_("h2",{attrs:{id:"第22章-使用视图"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#第22章-使用视图"}},[t._v("#")]),t._v(" 第22章 使用视图")]),t._v(" "),_("p",[t._v("视图是虚拟的表。与包含数据的表不一样，视图只包含使用时动态检索数据的查询。")]),t._v(" "),_("ul",[_("li",[t._v("视图用"),_("code",[t._v("CREATE VIEW")]),t._v("语句来创建。")]),t._v(" "),_("li",[t._v("使用"),_("code",[t._v("SHOW CREATE VIEW viewname;")]),t._v("来查看创建视图的语句。")]),t._v(" "),_("li",[t._v("用"),_("code",[t._v("DROP")]),t._v("删除视图，其语法为"),_("code",[t._v("DROP VIEW viewname;")]),t._v("。")]),t._v(" "),_("li",[t._v("更新视图时，可以先用DROP再用CREATE，也可以直接用"),_("code",[t._v("CREATE OR REPLACE VIEW")]),t._v("。")])]),t._v(" "),_("div",{staticClass:"language-sql extra-class"},[_("pre",{pre:!0,attrs:{class:"language-sql"}},[_("code",[_("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("CREATE")]),t._v(" "),_("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("VIEW")]),t._v(" test_shitu "),_("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("AS")]),t._v("\n"),_("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("SELECT")]),t._v(" cust_name"),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("cust_contact"),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" prod_id\n"),_("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("FROM")]),t._v(" customers"),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" orders"),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" orderitems\n"),_("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("WHERE")]),t._v(" customers"),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("cust_id "),_("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" orders"),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("cust_id\n"),_("span",{pre:!0,attrs:{class:"token operator"}},[t._v("AND")]),t._v(" orderitems"),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("order_num "),_("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" orders"),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("order_num"),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("    \n")])])]),_("p",[t._v("利用视图，可一次性编写基础的SQL，然后根据需要多次使用。")]),t._v(" "),_("h3",{attrs:{id:"_22-1-视图的用途"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_22-1-视图的用途"}},[t._v("#")]),t._v(" 22.1 视图的用途")]),t._v(" "),_("ul",[_("li",[t._v("连接表，一次连接多次使用。")]),t._v(" "),_("li",[t._v("格式化数据。")]),t._v(" "),_("li",[t._v("过滤不需要的数据。")])]),t._v(" "),_("h3",{attrs:{id:"_22-2-5-更新视图"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_22-2-5-更新视图"}},[t._v("#")]),t._v(" 22.2.5 更新视图")]),t._v(" "),_("p",[t._v("通常，视图是可更新的。更新一个视图将更新其基表。但是，并非所有视图都是可更新的。基本上可以说，如果MySQL不能正确地确定被更新的基数据，则不允许更新。如果视图定义中有以下操作，则不能进行视图的更新：")]),t._v(" "),_("ul",[_("li",[t._v("分组（使用GROUP BY和HAVING）；")]),t._v(" "),_("li",[t._v("联结")]),t._v(" "),_("li",[t._v("子查询")]),t._v(" "),_("li",[t._v("并")]),t._v(" "),_("li",[t._v("聚集函数（Min()、Count()、Sum()等）；")]),t._v(" "),_("li",[t._v("DISTINCT")]),t._v(" "),_("li",[t._v("导出（计算）列。\n看上去是大多视图都不允许更新，这是因为视图主要用于数据检索。")])]),t._v(" "),_("h2",{attrs:{id:"第23章-使用存储过程"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#第23章-使用存储过程"}},[t._v("#")]),t._v(" 第23章 使用存储过程")])])}),[],!1,null,null,null);a.default=v.exports}}]);