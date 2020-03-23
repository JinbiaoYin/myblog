---
title: Git 创建仓库
---

## git init 
Git 使用 `git init` 命令来初始化一个仓库。`git init` 是使用 Git 的第一个命令。

在执行 `git init` 后，Git 仓库会生成一个 **.git** 目录，该目录包含了资源的所有元数据，其他的项目目录保持不变（不像 SVN 会在每个子目录生成 .svn 目录，Git 只在仓库的根目录生成 .git 目录）。例如：
```sh
$ git init newrepo
```

初始化后，会在 **newrepo** 目录下会出现一个名为 **.git** 的目录，所有 Git 需要的数据和资源都存放在这个目录中。

如果当前目录下有几个文件想要纳入版本控制，需要先用 `git add` 命令告诉 Git 开始对这些文件进行**跟踪**，然后提交：

```sh
$ git add README.md
$ git commit -m '初始化项目版本'
```
::: tip
以上命令将目录下新建的 **README.md** 文件先添加到暂存区，然后提交到本地仓库中。
:::


## git clone
我们使用 `git clone` 从现有 Git 仓库中拷贝项目（类似 svn checkout）。

克隆仓库的命令格式为：
```sh
git clone <repo>
```
如果我们需要克隆到指定的目录，可以使用以下命令格式：
```sh
git clone <repo> <directory>
```

**参数说明：**
- **repo**:Git 仓库。
- **directory**:本地目录。

比如，要克隆本项目的 Git 代码仓库，可以用以下的命令：
```sh
$ git clone git@gitee.com:shuaibiao/newrepo.git
```
执行该命令后，会在当前目录下创建一个名为 **newrepo** 的目录，其中包含一个 **.git** 的目录，用于保存下载下来的所有版本记录。

如果要自己定义要新建的项目目录名称，可以在上面的命令末尾指定新的名字：
```sh
$ git clone git@gitee.com:shuaibiao/newrepo.git myrepo
```
::: tip
上述命令如果 **myrepo** 改为 **newrepo**，两条命令等价。
:::