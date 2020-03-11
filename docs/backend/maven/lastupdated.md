---
title: maven 正常无法下载依赖
---

## 问题
同一个项目，相同的项目，为什么我在家可以正常下载依赖，而在公司无法正常下载。

公司的网是网通的，家的网是电信的。

## 介绍 maven 配置仓库的几种方法

优先级逐渐递增。

### settings_mirror
在 Maven 的 `setting.xml` 中配置 <mirror/>，例如：

```xml
<mirrors>
  <mirror>
      <id>alimaven</id>
      <name>aliyun maven</name>
      <url>http://maven.aliyun.com/nexus/content/repositories/central/</url>
      <mirrorOf>central</mirrorOf>
  </mirror>
</mirrors>  
```

::: tip
`<mirrorOf>central</mirrorOf>` 表示 此镜像将会覆盖 `id` 为 `central` 的仓库。
:::

### pom_repositories
在项目的 `pom.xml` 中配置 `<repositories/>`。例如：

```xml
<repositories>
  <repository>
      <id>aliyun-repos</id>
      <name>Aliyun Repository</name>
      <url>http://maven.aliyun.com/nexus/content/groups/public</url>
      <releases>
          <enabled>true</enabled>
      </releases>
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

### pom_profile_repo
在项目的 `pom.xml` 中配置 `<profile/>` 类似上述

### settings_profile_repo

在 Maven 的 `settings.xml` 中 `<profile/>` 标签中配置。如下：

```xml
<profiles>  
  <profile>
    <activation>
        <!-- 默认激活此 profile -->
        <activeByDefault>true</activeByDefault>
    </activation>
    <repositories>
        <repository>
            <id>ustcsoft</id>
            <url>http://power.kdgcsoft.com:8181/nexus/content/groups/public/</url>
            <releases>
                <enabled>true</enabled>
            </releases>
            <snapshots>
                <enabled>true</enabled>
            </snapshots>
        </repository>
    </repositories>
    <pluginRepositories>
        <pluginRepository>
            <id>ustcsoft_plugin</id>
            <url>http://power.kdgcsoft.com:8181/nexus/content/groups/public/</url>
            <releases>
                <enabled>true</enabled>
            </releases>
            <snapshots>
                <enabled>false</enabled>
            </snapshots>
        </pluginRepository>
    </pluginRepositories>
  </profile>
</profiles> 
```


## Maven 无法正常下载依赖

一般是由于网络问题，建议本地项目配置 repository 为阿里云的仓库（一般公司都是配好的，如果没配，那就自己在 `settings.xml` 中配置阿里云镜像）。

如果配置阿里云镜像还是无法下载，且自己公司没有搭建私服，可以使用就近节点，例如我上家公司的私服。

在Maven `Settings.xml` 中配置就近节点的私服。

```xml
<profiles>  
  <profile>
    <activation>
        <!-- 默认激活此 profile -->
        <activeByDefault>true</activeByDefault>
    </activation>
    <repositories>
        <repository>
            <id>ustcsoft</id>
            <url>http://power.kdgcsoft.com:8181/nexus/content/groups/public/</url>
            <releases>
                <enabled>true</enabled>
            </releases>
            <snapshots>
                <enabled>true</enabled>
            </snapshots>
        </repository>
    </repositories>
    <pluginRepositories>
        <pluginRepository>
            <id>ustcsoft_plugin</id>
            <url>http://power.kdgcsoft.com:8181/nexus/content/groups/public/</url>
            <releases>
                <enabled>true</enabled>
            </releases>
            <snapshots>
                <enabled>false</enabled>
            </snapshots>
        </pluginRepository>
    </pluginRepositories>
  </profile>
</profiles> 
```


