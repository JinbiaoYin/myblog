---
title: Maven Nexus
---

## 通过docker-compose安装nexus3  
进入Docker hub上拉取sonatype/nexus3，通过docker-compose.yml启动容器。  

## 在项目中使用nexus私服
在maven的 `setting.xml` 中配置 `servers` 节点，`nexus-releases` 为发行版仓库，`nexus-snapshots` 为快照版仓库，`id` 为Maven想要连接的id。
```xml
<server>  
  <id>nexus-releases</id>  
  <username>admin</username>  
  <password>admin123</password>  
</server>  
<server>  
  <id>nexus-snapshots</id>  
  <username>admin</username>  
  <password>admin123</password>  
</server>
```

在本地 `pom.xml` 中，配置自动化部署，其中 `id`必须与上述 `server` 中配置的一致，`url` 配置为私服地址。代表使用 `server` 中的账号密码可以连接相同 `id` 的仓库，实现上传。 
```xml
<distributionManagement>   
  <repository>  
    <id>nexus-releases</id>  
    <name>Nexus Release Repository</name>  
    <url>http://127.0.0.1:8081/repository/maven-releases/</url>  
  </repository>  
  <snapshotRepository>  
    <id>nexus-snapshots</id>  
    <name>Nexus Snapshot Repository</name>  
    <url>http://127.0.0.1:8081/repository/maven-snapshots/</url>  
  </snapshotRepository>  
</distributionManagement>
``` 

## Snapshots 与 Releases 的区别
- nexus-releases: 用于发布 Release 版本  
- nexus-snapshots: 用于发布 Snapshot 版本（快照版）  

**注意：**在项目 pom.xml 中设置的版本号添加 SNAPSHOT 标识的都会发布为 SNAPSHOT 版本，没有 SNAPSHOT 标识的都会发布为 RELEASE 版本。
SNAPSHOT 版本会自动加一个时间作为标识，如：1.0.0-SNAPSHOT 发布后为变成 1.0.0-SNAPSHOT-20180522.123456-1.jar
当使用mvn deploy时，会先在本地打包，然后上传到私服上。

## 上传第三方 JAR 包

Nexus 3.0 不支持页面上传，可使用 maven 命令：  Dfile为本地要上传的jar包地址，Durl为要上传到私服的哪个仓库中。DrepositoryId为仓库的id
如第三方JAR包：aliyun-sdk-oss-2.2.3.jar

``` 
mvn deploy:deploy-file 
  -DgroupId=com.aliyun.oss 
  -DartifactId=aliyun-sdk-oss 
  -Dversion=2.2.3 
  -Dpackaging=jar 
  -Dfile=D:\aliyun-sdk-oss-2.2.3.jar 
  -Durl=http://127.0.0.1:8081/repository/maven-releases/ 
  -DrepositoryId=nexus-releases
```

  建议在上传第三方 JAR 包时，创建单独的第三方 JAR 包管理仓库，便于管理有维护。（maven-3rd）  
  -DrepositoryId=nexus-releases 对应的是 settings.xml 中 Servers 配置的 ID 名称。（授权）
  
## 配置代理仓库

配置代理仓库后，项目可从私服上下载依赖。

repositories是私服maven仓库，pluginRepositories是插件仓库，maven-public是发行版和快照版的集合，下面可以单独配置。  在pom.xml中添加如下：url改成私服地址

``` xml
<repositories>  
    <repository>  
        <id>nexus</id>  
        <name>Nexus Repository</name>  
        <url>http://127.0.0.1:8081/repository/maven-public/</url>  
        <snapshots>  
            <enabled>true</enabled>  
        </snapshots>  
        <releases>  
            <enabled>true</enabled>  
        </releases>  
    </repository>  
</repositories>  
<pluginRepositories>  
    <pluginRepository>  
        <id>nexus</id>  
        <name>Nexus Plugin Repository</name>  
        <url>http://127.0.0.1:8081/repository/maven-public/</url>  
        <snapshots>  
            <enabled>true</enabled>  
        </snapshots>  
        <releases>  
            <enabled>true</enabled>  
        </releases>  
    </pluginRepository>  
</pluginRepositories>
``` 