---
title: Git 基础配置
---

## Git 配置
Git 提供了一个叫做 git config 的工具，专门用来配置或读取相应的工作环境变量。

这些环境变量，决定了 Git 在各个环节的具体工作方式和行为。这些变量可以存在三个地方：
- /etc/gitconfig 文件。安装目录/etc/gitconfig，系统中对所有用户都普遍使用的配置。若使用 git config --system，读写的就是这个文件。
- ~/.gitconfig 文件。用户目录下的配置文件，只适用于该用户。若使用 git config --global 选项，读写的就是这个文件。
- 当前项目的 Git 目录的配置文件，也就是工作目录的 .git/config 文件。这里的配置仅仅针对当前项目有效。每一个级别都会覆盖上层的相同配置。

### 用户信息
配置个人的用户名称和电子邮件地址：
```sh
$ git config --global user.name "runoob"
$ git config --global user.email test@runoob.com
```
::: tip
这里修改了 ~/.gitconfig 文件。如果使用了 --system ，那么更改的配置就是 Git 安装目录/etc/gitconfig 文件。如果要在特定的项目中使用，那么只要去掉选项即可。
:::

### 查看配置信息
1. 查看所有配置信息：
```sh
$ git config --list
diff.astextplain.textconv=astextplain
filter.lfs.clean=git-lfs clean -- %f
filter.lfs.smudge=git-lfs smudge -- %f
filter.lfs.process=git-lfs filter-process
filter.lfs.required=true
http.sslbackend=openssl
http.sslcainfo=C:/Program Files/Git/mingw64/ssl/certs/ca-bundle.crt
core.autocrlf=true
core.fscache=true
core.symlinks=false
credential.helper=manager
http.sslverify=false
user.name=yinjinbiao
user.email=731509863@qq.com
```
2. 也可以直接查阅某个环境变量的设定，只要把特定的名字跟在后面即可。
```sh
$ git config user.name
```