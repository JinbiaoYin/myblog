---
title: 首页
---

## 介绍
Maven 是一个项目管理和综合工具。Maven 提供了开发人员构建一个完整的生命周期框架。开发团队可以自动完成项目的基础工具建设，Maven 使用标准的目录结构和默认构建生命周期。

### 本地仓库
Maven 的本地资源库是用来存储所有项目的依赖关系(插件 Jar 和其他文件，这些文件被 Maven 下载)到本地文件夹。很简单，当你建立一个 Maven 项目，所有相关文件将被存储在你的 Maven 本地仓库。

默认情况下，Maven 的本地资源库默认为 .m2 目录文件夹：

- Unix/Mac OS X：~/.m2
- Windows：C:\Documents and Settings\{your-username}\.m2

### 中央仓库
当你建立一个 Maven 的项目，Maven 会检查你的 `pom.xml` 文件，以确定哪些依赖下载。首先，Maven 将从本地资源库获得 Maven 的本地资源库依赖资源，如果没有找到，然后把它会从默认的 Maven 中央存储库 http://repo1.maven.org/maven2/ 查找下载。


### Maven POM
POM 代表项目对象模型。它是 Maven 中工作的基本单位，这是一个 XML 文件。它始终保存在该项目基本目录中的 pom.xml 文件。

POM 包含的项目是使用 Maven 来构建的，它用来包含各种配置信息。

POM 也包含了目标和插件。在执行任务或目标时，Maven 会使用当前目录中的 POM。它读取POM得到所需要的配置信息，然后执行目标。部分的配置可以在 POM 使用如下：

创建一个POM之前，应该要先决定项目组(`groupId`)，它的名字(`artifactId`)和版本，因为这些属性在项目仓库是唯一标识的。例如：
```xml
<project xmlns="http://maven.apache.org/POM/4.0.0"
   xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
   xsi:schemaLocation="http://maven.apache.org/POM/4.0.0
   http://maven.apache.org/xsd/maven-4.0.0.xsd">
   <modelVersion>4.0.0</modelVersion>
   <groupId>top.yinjinbiao</groupId>
   <artifactId>video-api</artifactId>
   <version>1.0</version>
   <packaging>jar</packaging>
<project>
```
**注意:**子模块可以继承父模块的`groupId`

## 常用命令
- maven clean : 清理编译的文件
- maven compile : 编译主目录的文件
- maven test : 编译并运行test目录的代码
- maven package : 打包
- maven install : 项目打包到本地仓库

## Maven 依赖机制
依赖有依赖范围，依赖范围对依赖的传递也有影响。
scope：
- complie(默认)
- provided
- runtime
- test

例如：假如有A,B,C,B依赖A,C依赖B，假如A中存在scope为provide和test的依赖，那么此依赖将不会传递给子模块。
runtime传递后还是runtime


## Maven 的生命周期

### Clean 生命周期
Clean

### Default 生命周期
Compile test package install deploy

## Site 生命周期
Site

::: tip
不同的生命周期的命令可以同时执行
例如：
mvn clean package
:::

## 版本冲突解决
### 路径近者优先原则
如果存在2个依赖，每个依赖中都依赖common-uploadFile且版本不同，
**则可以自己重新加入common-uploadFile依赖并指定版本，来解决冲突。**

### 第一声明者优先原则
如果存在2个依赖，每个依赖中都依赖common-uploadFile且版本不同，
**则以排在前面的依赖为准。**

### 排除原则
如果存在2个依赖，每个依赖中都依赖common-uploadFile且版本不同，
**则可以使用<exclusion>标签来排除不需要的依赖。**

### 版本锁定原则
使用`<dependencyManagement>``</dependencyManagement>`标签来锁定版本,以解决版本冲突问题。
例如：
```xml
<properties>
    <spring.version>4.2.4.RELEASE</spring.version>
</properties>
<dependencyManagement>
    <dependencies>
        <dependency>
            <groupId>org.springframework</groupId>
            <artifactId></artifactId>
            <version>${spring.version}</version>
        </dependency>
    </dependencies>
</dependencyManagement>
```

## 常用的远程仓库
如果你使用 Maven 自带默认的 settings.xml 配置，那么你很有可能在下载依赖的时候就卡住，因为我就被搞了半天。
下面是一些常用的远程仓库，最好将其加入到你的项目 pom.xml 中，而不是 settings.xml 中，这样别人 clone 你的代码时，可以方便的下载依赖。
```xml
        <repository>
            <id>sonatype-repos</id>
            <name>Sonatype Repository</name>
            <url>https://oss.sonatype.org/content/groups/public</url>
            <releases>
                <enabled>true</enabled>
            </releases>
            <snapshots>
                <enabled>false</enabled>
            </snapshots>
        </repository>
        <repository>
            <id>sonatype-repos-s</id>
            <name>Sonatype Repository</name>
            <url>https://oss.sonatype.org/content/repositories/snapshots</url>
            <releases>
                <enabled>false</enabled>
            </releases>
            <snapshots>
                <enabled>true</enabled>
            </snapshots>
        </repository>

        <repository>
            <id>spring-snapshots</id>
            <name>Spring Snapshots</name>
            <url>https://repo.spring.io/snapshot</url>
            <snapshots>
                <enabled>true</enabled>
            </snapshots>
        </repository>
        <repository>
            <id>spring-milestones</id>
            <name>Spring Milestones</name>
            <url>https://repo.spring.io/milestone</url>
            <snapshots>
                <enabled>false</enabled>
            </snapshots>
        </repository>
    </repositories>

    <pluginRepositories>
        <pluginRepository>
            <id>aliyun-repos</id>
            <name>Aliyun Repository</name>
            <url>http://maven.aliyun.com/nexus/content/groups/public</url>
            <releases>
                <enabled>true</enabled>
            </releases>
            <snapshots>
                <enabled>false</enabled>
            </snapshots>
        </pluginRepository>
    </pluginRepositories>
```

## 分模块开发
当需要分模块开发时，我们将所有的依赖在父工程中进行版本锁定，在子工程中指定所需要的依赖。
