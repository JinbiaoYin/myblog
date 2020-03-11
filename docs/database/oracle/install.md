---
title: Oracle 11g 安装
---

## 前言
以下载的安装包为两个压缩包为例。

## 安装
1. 将两个压缩包解压至同一目录。

2. 点击 `setup.exe` 开始安装，安装过程中选择 `桌面版`。
::: tip
输入的口令就是后面要用到的密码。
:::

3. 安装检查时，如果全部失败，点击忽略即可。

4. 安装完毕，点击口令管理，解锁 `scott` 用户，以备测试。

5. cmd下，输入`sqlplus`，若成功登录则成功。

## PL/SQL的配置
如果使用 PL/SQL ，则需要配置。若使用 Navicat，便省去这一麻烦。
1. 打开PL/SQL，不登录。

2. 进入 `tools` 下的 `preference(首选项)`,`connect(连接)`将 oracle 安装目录和 oci.dll 配置。如：

`主目录：D:\newapp\Administrator\product\11.2.0`

`oci：D:\app\Administrator\product\instantclient-basic-win32-10.2.0.5\instantclient_10_2\oci.dll`

::: tip
由于 PL/SQL 只有32位的dll,最好去网上下个oracle instantclient 32位客户端。
主要是需要 oci.dll 来连接数据库。
:::

3. 配置完毕，使用 `scott` 用户和密码测试登录。
::: tip
如果报 make sure ...32bit oci.dll 说明oci.dll配置出错，去确认你配置的oci.dll是否为32位的。
如果报tns错误，说明找不到tnsnames.ora,这时候先去检测你的环境变量有没有配置好。
:::

## 配置环境变量(待修改)
1. ORACLE_HOME：数据库的实例启动所需要的所有的程序和相关的文件（除了数据库外）。

新建一个变量ORACLE_HOME:D:\app\Administrator\product\11.2.0\dbhome_2，在path中添加：%ORACLE_HOME%\BIN

2. NLS_LANG：配置客户端的字符集。注意一般配置成 utf-8 的编码

`NLS_LANG:AMERICAN_AMERICA.UTF8`

3. TNS_ADMIN: 监听数据库tns，PL/SQL登陆时才能才能显示其中的数据库连接的信息。

`TNS_ADMIN:D:\install\instantclient_12_1\NETWORK\ADMIN`


## 参考资料
- [我的博客园](https://www.cnblogs.com/Begodpath/p/9307567.html)