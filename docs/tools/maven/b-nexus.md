---
title: 搭建 Maven Nexus 私服
---

## 安装

进入Docker hub上拉取sonatype/nexus3

```
docker pull sonatype/nexus3
```
新建/usr/local/docker/nexus/docker-compose.yml，通过docker-compose.yml启动容器。  

`docker-compose.yml`
```yml
version: '3.1'
services:
  nexus:
    restart: always
    image: sonatype/nexus3
    container_name: nexus
    ports:
      - 8081:8081
    volumes:
      - /usr/local/docker/nexus/data:/nexus-data
```

保存并启动：
```
docker-compose up -d
```

查看容器是否启动:
```
docker ps
```

::: tip

如果启动报错无权限，需要赋予数据卷的权限
```
chmod 777 data/
```

阿里云用户别忘了在阿里云控制台，把端口暴露出去。

打开http://ip:port/，登录名为 admin ,密码根据提示查找，我这里密码文件在 `/usr/local/docker/nexus/data/admin.password`,输入用户名密码即可登录。
登录后重设密码。
:::

  
## 配置使用

配置代理仓库后，项目可从私服上下载依赖。

repositories是私服maven仓库，pluginRepositories是插件仓库，maven-public是发行版和快照版的集合，下面可以单独配置。  在pom.xml中添加如下：url改成私服地址。
``` xml
<repositories>  
    <repository>  
        <id>nexus</id>  
        <name>Nexus Repository</name>  
        <url></url>  
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
        <url></url>  
        <snapshots>  
            <enabled>true</enabled>  
        </snapshots>  
        <releases>  
            <enabled>true</enabled>  
        </releases>  
    </pluginRepository>  
</pluginRepositories>
``` 
::: tip
url 避免写错，在部署好的nexus服务上可以直接拷贝。
:::


## 上传到私服
在maven的 `setting.xml` 中配置 `servers` 节点，`nexus-releases` 为发行版仓库，`nexus-snapshots` 为快照版仓库，`id` 为Maven想要连接的id。
```xml
<server>  
  <id>nexus-releases</id>  
  <username>admin</username>  
  <password></password>  
</server>  
<server>  
  <id>nexus-snapshots</id>  
  <username>admin</username>  
  <password></password>  
</server>
```

在本地 `pom.xml` 中，配置自动化部署，其中 `id`必须与上述 `server` 中配置的一致，`url` 配置为私服地址。代表使用 `server` 中的账号密码可以连接相同 `id` 的仓库，实现上传。 
```xml
<distributionManagement>   
  <repository>  
    <id>nexus-releases</id>  
    <name>Nexus Release Repository</name>  
    <url></url>  
  </repository>  
  <snapshotRepository>  
    <id>nexus-snapshots</id>  
    <name>Nexus Snapshot Repository</name>  
    <url></url>  
  </snapshotRepository>  
</distributionManagement>
``` 


## Snapshots 与 Releases 
- nexus-releases: 用于发布 Release 版本  
- nexus-snapshots: 用于发布 Snapshot 版本（快照版）  

**注意：**在项目 pom.xml 中设置的版本号添加 SNAPSHOT 标识的都会发布为 SNAPSHOT 版本，没有 SNAPSHOT 标识的都会发布为 RELEASE 版本。
SNAPSHOT 版本会自动加一个时间作为标识，如：1.0.0-SNAPSHOT 发布后为变成 1.0.0-SNAPSHOT-20180522.123456-1.jar
当使用mvn deploy时，会先在本地打包，然后上传到私服上。


## 上传本地 jar

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
  
