---
title: MySQL 5.7 zip压缩版安装
---

## 前言
    科大国创期间，驻场开发，为方便开发故使用本地数据库。
    
    数据库sql脚本执行不成功，经查看是版本问题。
    
    为统一版本，故将原先的5.5版本更新至5.7版本。

## 卸载旧版本
1. 由于上个版本由msi安装包完成，因此在 `控制面版->卸载或更改程序` 中卸载MySQL，再手动将安装目录删除。

2. win+r，输入`regedit`，打开注册编辑器，在 `HKEY_LOCAL_MACHINE` -> `system` -> `ControlSet001`-> `service` 与 `HKEY_LOCAL_MACHINE` -> `system` -> `ControlSet002` -> `service` 中删除所有MySQL目录。

::: tip
如果没有完全删除，会一直卡在安装界面。
:::

## 安装
1. 将mysql中的my-default复制一份为my.ini，并删除my.ini中的配置。

2. 复制以下配置到my.ini中，根据自己的路径修改 `basedir` 和 `datadir`

```
[mysqld]
basedir=D:\\software\mysql-5.7.17-winx64
datadir=D:\\software\mysql-5.7.17-winx64\data
port = 3306
skip-grant-tables
sql-mode=STRICT_TRANS_TABLES,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION
# 允许最大连接数
max_connections=20
# 服务端使用的字符集默认为8比特编码的latin1字符集
character-set-server=utf8
# 创建新表时将使用的默认存储引擎
default-storage-engine=INNODB
[mysql]
# 设置mysql客户端默认字符集
default-character-set=utf8
#代码结束
```
3. 已管理员身份运行CMD，进入mysql的bin目录中

4. 输入以下命令生成 data 文件夹
```
mysqld --initialize
```

5. 输入以下命令安装服务
```
mysqld –-install
```

::: tip
安装失败是由于没有卸载干净，cmd输入 `sc delete mysql` ，再重新尝试install
:::

6. 启动服务
net start mysql

7. 用 Navicat 连接 Mysql ，初始密码为空。新建查询：

```sql
update mysql.user set authentication_string=password('你想输入的密码') where user='root' and Host ='localhost'; 
flush privileges;
```

8. 注释my.ini中的skip-grant-tables，前面加#即可。

9. 重启 mysql 服务，使刚刚的配置生效

```
net stop mysql

net start mysql
```
10. 重新打开Navicat，使用设置的密码连接。

::: tip
如果出现密码过期问题，就把 `skip-grant-tables` 重新加上，重启服务。
用navicat或者cmd窗口连接mysql，将 `user` 表的 `password_expired` 改为 N 就行。
再注释 `skip-grant-tables` ，重启服务。
:::

## 参考资料
- [我的博客园](https://www.cnblogs.com/Begodpath/p/9174841.html)