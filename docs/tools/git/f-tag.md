---
title: Git 标签
---


如果你达到一个重要的阶段，并希望永远记住那个特别的提交快照，你可以使用 git tag 给它打上标签。

Git 的标签虽然是版本库的快照，但其实它就是指向某个 commit 的指针（跟分支很像对不对？但是分支可以移动，标签不能移动），所以，创建和删除标签都是瞬间完成的。

比如说，我们想为我们的项目发布一个"1.0"版本。 我们可以用 `git tag -a v1.0` 命令给最新一次提交打上（HEAD）"v1.0"的标签。

`-a` 选项意为"创建一个带注解的标签"。 不用 `-a` 选项也可以执行的，但它不会记录这标签是啥时候打的，谁打的，也不会让你添加个标签的注解。 我推荐一直创建带注解的标签。

## git tag

### 给当前提交打标签
```sh
$ git tag v1.0
```

### 给已存在提交打标签
```sh
$ git tag -a v0.9 6496755
```

::: tip
执行 git tag -a 命令时，Git 会打开你的编辑器，让你写一句标签注解，就像你给提交写注解一样。
:::


### 查看已有标签
```sh
$ git tag
v0.9
v1.0
```

### 删除标签
```sh
$ git tag -d v0.9
Deleted tag 'v0.9' (was bb1f8be)
```

### 查看版本修改的内容
```sh
$ git show v1.0
tag v1.0
Tagger: yinjinbiao <731509863@qq.com>
Date:   Mon Mar 23 15:55:25 2020 +0800

v1.0版本

commit 7e750fe0a0167e252c4fc004a5ca1f2e6614f6a8 (HEAD -> master, tag: v1.0)
Merge: 4a50b3e 9b1d2a2
Author: yinjinbiao <731509863@qq.com>
Date:   Mon Mar 23 15:36:20 2020 +0800

    编辑冲突

diff --cc 1.txt
index bb390b9,9aced0d..4ec51c6
```

