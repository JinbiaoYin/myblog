---
title: javax.persistence包的常用注解
---


- @Entity(name="")：用于标识该类是实体类
- @Table(name="",catalog="",scheme="")：用于表示数据库映射的表名，name用于指明数据库的表名 ，catalog 和 schema 用于设置表所属的数据库目录或模式，通常为数据库名
- @Id：指定表的主键
- @GeneratedValue(strategy="",generator="")：指定注解多种生成方式;
    - GenerationType.TABLE：容器指定用底层的数据表确保唯一；
    - GenerationType.SEQUENCE：使用数据库的SEQUENCE列来保证唯一（Oracle数据库通过序列来生成唯一ID）；
    - GenerationType.IDENTITY：使用数据库的IDENTITY列来保证唯一；
    - GenerationType.AUTO：由容器挑选一个合适的方式来保证唯一；
    - NONE：容器不负责主键的生成，由程序来完成。
- @Column(name="",unique="",nullable="",length="",insertable="",updatetable="",columnDefinition="",secondaryTable="")：将成员属性映射到关系表中的哪一列和该列的结构信息;
    - name：映射的列名。如：映射tbl_user表的name列，可以在name属性的上面或getName方法上面加入；
    - unique：表示该字段是否为唯一标识；
    - nullable：是否允许为空；
    - length：对于字符型列，length属性指定列的最大字符长度；
    - insertable：使用“INSERT”脚本插入数据时，是否需要插入该字段的值；
    - updatetable：使用“UPDATE”脚本插入数据时，是否需要更新该字段的值；
    - columnDefinition：定义建表时创建此列的DDL；
    - secondaryTable：从表名。如果此列不建在主表上（默认是主表），该属性定义该列所在从表的名字	
    - precision和scale：表示精度，当字段类型为double时，precision表示数值的总长度，scale表示小数点所占的位数。