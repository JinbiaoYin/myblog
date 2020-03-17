---
autoGroup-1: Docker
title: Docker
---


## Docker 基本概念
Docker 包含三个基本概念
- 镜像 （Image）
- 容器 （Container）
- 仓库 （Repository）
理解了这三个概念，就理解了 Docker 的整个生命周期。

**容器与镜像的关系类似于面向对象编程中的对象与类。**
| 镜像 | 类  |
|----|----|
| 容器 | 对象 |
| 镜像 | 类  |

## Docker 镜像
Docker 镜像是一个特殊的文件系统，除了提供容器运行时所需的程序、库、资源、配置等文件外，还包含了一些为运行时准备的一些配置参数（如匿名卷、环境变量、用户等）。**镜像不包含任何动态数据，其内容在构建之后也不会被改变。**

因为镜像包含操作系统完整的 root 文件系统，其体积往往是庞大的，**因此在 Docker 设计时，就充分利用 Union FS 的技术，将其设计为分层存储的架构。**所以严格来说，镜像并非是像一个 ISO 那样的打包文件，镜像只是一个虚拟的概念，其实际体现并非由一个文件组成，而是由一组文件系统组成，或者说，由多层文件系统联合组成。

**镜像构建时，会一层层构建，前一层是后一层的基础。**每一层构建完就不会再发生改变，后一层上的任何改变只发生在自己这一层。比如，删除前一层文件的操作，实际不是真的删除前一层的文件，而是仅在当前层标记为该文件已删除。在最终容器运行的时候，虽然不会看到这个文件，但是实际上该文件会一直跟随镜像。因此，在构建镜像的时候，需要额外小心，每一层尽量只包含该层需要添加的东西，任何额外的东西应该在该层构建结束前清理掉。

**分层存储的特征还使得镜像的复用、定制变的更为容易。甚至可以用之前构建好的镜像作为基础层，然后进一步添加新的层，以定制自己所需的内容，构建新的镜像。**

## Docker 容器
**镜像（`Image`）和容器（`Container`）的关系，就像是面向对象程序设计中的 `类` 和 `实例` 一样**，镜像是静态的定义，容器是镜像运行时的实体。容器可以被创建、启动、停止、删除、暂停等。

容器的实质是进程，但与直接在宿主执行的进程不同，容器进程运行于属于自己的独立的 命名空间。因此容器可以拥有自己的 root 文件系统、自己的网络配置、自己的进程空间，甚至自己的用户 ID 空间。容器内的进程是运行在一个隔离的环境里，使用起来，就好像是在一个独立于宿主的系统下操作一样。这种特性使得容器封装的应用比直接在宿主运行更加安全。也因为这种隔离的特性，很多人初学 Docker 时常常会混淆容器和虚拟机。

前面讲过镜像使用的是分层存储，容器也是如此。**每一个容器运行时，是以镜像为基础层，在其上创建一个当前容器的存储层，我们可以称这个为容器运行时读写而准备的存储层为容器存储层。**

**注意：**容器存储层的生存周期和容器一样，容器消亡时，容器存储层也随之消亡。因此，任何保存于容器存储层的信息都会随容器删除而丢失。

因此，按照 Docker 最佳实践的要求，容器不应该向其存储层内写入任何数据，容器存储层要保持无状态化。**所有的文件写入操作，都应该使用 数据卷（Volume）、或者绑定宿主目录，在这些位置的读写会跳过容器存储层，直接对宿主（或网络存储）发生读写，其性能和稳定性更高。**

**数据卷的生存周期独立于容器，容器消亡，数据卷不会消亡。因此，使用数据卷后，容器删除或者重新运行之后，数据却不会丢失。**

## Docker 仓库
镜像构建完成后，可以很容易的在当前宿主机上运行，但是，如果需要在其它服务器上使用这个镜像，我们就需要一个集中的存储、分发镜像的服务，`Docker Registry` 就是这样的服务。

**一个 `Docker Registry` 中可以包含多个仓库（`Repository`）；每个仓库可以包含多个标签（`Tag`）；每个标签对应一个镜像。**

通常，一个仓库会包含同一个软件不同版本的镜像，而标签就常用于对应该软件的各个版本。我们可以通过 <仓库名>:<标签> 的格式来指定具体是这个软件哪个版本的镜像。**如果不给出标签，将以 latest 作为默认标签。**

**以 Ubuntu 镜像 为例，ubuntu 是仓库的名字，其内包含有不同的版本标签，如，14.04, 16.04。我们可以通过 ubuntu:14.04，或者 ubuntu:16.04 来具体指定所需哪个版本的镜像。如果忽略了标签，比如 ubuntu，那将视为 ubuntu:latest。**

### 公有 Docker Registry
Docker Registry 公开服务是开放给用户使用、允许用户管理镜像的 Registry 服务。一般这类公开服务允许用户免费上传、下载公开的镜像，并可能提供收费服务供用户管理私有镜像。类似于 Maven 公共仓库。

最常使用的 Registry 公开服务是官方的 [Docker Hub](https://hub.docker.com/search?q=&type=image)，这也是默认的 Registry，并拥有大量的高质量的官方镜像。除此以外，还有 CoreOS 的 [Quay.io](https://quay.io/repository/)，CoreOS 相关的镜像存储在这里；Google 的 [Google Container Registry](https://cloud.google.com/container-registry/)，Kubernetes 的镜像使用的就是这个服务。

由于某些原因，在国内访问这些服务可能会比较慢。**国内的一些云服务商提供了针对 Docker Hub 的镜像服务（`Registry Mirror`），这些镜像服务被称为加速器**。常见的有 **阿里云加速器**、**DaoCloud 加速器** 等。使用加速器会直接从国内的地址下载 Docker Hub 的镜像，比直接从 Docker Hub 下载速度会提高很多。

国内也有一些云服务商提供类似于 Docker Hub 的公开服务。比如 时速云镜像仓库、网易云镜像服务、DaoCloud 镜像市场、阿里云镜像库 等。

### 私有 Docker Registry
除了使用公开服务外，用户还可以在本地搭建私有 Docker Registry。Docker 官方提供了 Docker Registry 镜像，可以直接使用做为私有 Registry 服务。**类似于 Maven Nexus搭建私服。**

开源的 Docker Registry 镜像只提供了 Docker Registry API 的服务端实现，足以支持 docker 命令，不影响使用。但不包含图形界面，以及镜像维护、用户管理、访问控制等高级功能。在官方的商业化版本 Docker Trusted Registry 中，提供了这些高级功能。

除了官方的 Docker Registry 外，还有第三方软件实现了 Docker Registry API，甚至提供了用户界面以及一些高级功能。比如，VMWare Harbor 和 Sonatype Nexus。

## Docker 安装
Docker 划分为 CE 和 EE。CE 即社区版（免费，支持周期三个月），EE 即企业版，强调安全，付费使用。

Docker CE 每月发布一个 Edge 版本 (17.03, 17.04, 17.05...)，每三个月发布一个 Stable 版本 (17.03, 17.06, 17.09...)，Docker EE 和 Stable 版本号保持一致，但每个版本提供一年维护。

### Ubuntu 安装 Docker
### 关于版本
配置：
- 阿里云1核2G内存1M带宽
- Ubuntu版本为 18.04（64位）

### 使用脚本自动安装
```sh
curl -fsSL get.docker.com -o get-docker.sh
```
::: tip
`curl` 实际是发送http请求的意思，即到get.docker.com中下载 docker 自动安装的 shell 脚本。
:::
```sh
sudo sh get-docker.sh --mirror Aliyun
```
::: tip
意思是将 shell 脚本中的 mirror 改为 Aliyun，并执行此脚本。然后等待下载，自动安装完成。
:::

**测试是否安装成功：**
```sh
docker version
```
::: tip
查看docker版本，API version：1.2为里程碑版本，写这篇笔记时，安装的是1.40版本。
:::

### 配置镜像加速器
鉴于国内网络问题，后续拉取 Docker 镜像十分缓慢，强烈建议安装 Docker 之后配置 国内镜像加速。

**在/etc/docker/下，新建`daemon.json`(不存在则新建)**
```sh
cd /etc/docker/
vi daemon.json
```
**键入如下配置，并保存**
```json
{  
    "registry-mirrors": [  
        "https://registry.docker-cn.com"  
    ]  
}  
```
**重启 Docker ,使配置生效，如下：**
```sh
systemctl restart docker
```

::: tip
成功安装后，继续安装 Docker Compose
:::

## Docker 安装 redis
安装完docker之后就可以使用 docker 命令。
以 redis 为例：
**拉取redis镜像，如果没指明版本，则自动下载lastest版**
```sh
docker pull redis
```
```sh
docker run -d -p 6379:6379 --name redis -v $PWD/data:/data redis --requirepass "123456" --appendonly yes
```
::: tip
-d 后台运行
-p 6379:6379 指定[主机端口]:[容器端口]
-v [主机路径]:[容器路径] 指定数据映射
:::


## 参考资料
[撸帝-个人博客](https://www.funtl.com/zh/docs-docker/)