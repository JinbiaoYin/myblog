---
title: 附：完整的 Maven Settings
---

## Maven settings.xml

```xml
<settings xmlns="http://maven.apache.org/SETTINGS/1.0.0"
      xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
      xsi:schemaLocation="http://maven.apache.org/SETTINGS/1.0.0
                          https://maven.apache.org/xsd/settings-1.0.0.xsd">

   <!--该值表示构建系统本地仓库的路径 -->
  <localRepository/>


  <interactiveMode/>


  <usePluginRegistry/>


<!-- 这个属性表示在Maven进行项目编译和部署等操作时是否允许Maven进行联网来下载所需要的信息。
    如果构建系统需要在离线模式下运行，则为true，默认为false。-->
  <offline/>


  <pluginGroups/>

<!-- 一般，仓库的下载和部署是在pom.xml文件中的repositories 和 distributionManagement 元素中定义的。然而，一般类似用户名、密码（有些仓库访问是需要安全认证的）等信息不应该在pom.xml文件中配置，这些信息可以配置在 settings.xml 中。-->
  <servers/>


<!-- 用于定义一系列的远程仓库的镜像。我们可以在pom中定义一个下载工件的时候所使用的远程仓库。但是有时候这个远程仓库会比较忙，所以这个时候人们就想着给它创建镜像以缓解远程仓库的压力，也就是说会把对远程仓库的请求转换到对其镜像地址的请求。每个远程仓库都会有一个id，这样我们就可以创建自己的mirror来关联到该仓库，那么以后需要从远程仓库下载工件的时候Maven就可以从我们定义好的mirror站点来下载，这可以很好的缓解我们远程仓库的压力。在我们定义的mirror中每个远程仓库都只能有一个mirror与它关联，也就是说你不能同时配置多个mirror的mirrorOf指向同一个repositoryId。-->
  <mirrors/>


<!-- 用来配置不同的代理。 -->
  <proxies/>


<!-- 根据环境参数来调整构建配置的列表。 -->
<!-- settings.xml中的profile元素是pom.xml中profile元素的裁剪版本。它包含了id、activation、repositories、pluginRepositories和 properties元素。这里的profile元素只包含这五个子元素是因为这里只关心构建系统这个整体（这正是settings.xml文件的角色定位），而非单独的项目对象模型设置。如果一个settings.xml中的profile被激活，它的值会覆盖任何其它定义在pom.xml中带有相同id的profile。当所有的约束条件都满足的时候就会激活这个profile。-->
  <profiles/>


  <activeProfiles/>


</settings>
```