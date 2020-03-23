---
title: 分支管理
---

## git branch
创建分支命令：
```sh
$ git branch
* master
```
此例的意思就是，我们有一个叫做 master 的分支，并且该分支是当前分支。
当你执行 git init 的时候，默认情况下 Git 就会为你创建 master 分支。

如果我们要手动创建一个分支。执行 `git branch (branchname)` 即可。
```sh
$ git branch testing

$ git branch
* master
  testing
```
现在我们可以看到，有了一个新分支 **testing**。

切换到**testing**分支，删除**3.txt**，并提交。
```
$ git checkout testing
Switched to branch 'testing'
$ git rm 3.txt
rm '3.txt'
$ git commit -m  "删除3.txt"
[testing 49db6c6] 删除3.txt
 1 file changed, 1 deletion(-)
 delete mode 100644 3.txt
```
::: tip
如果删除了**3.txt**，但没有 `git commit`，当切换分支到**master**再切换到**testing**，会发现删除的**3.txt**又回来了。这是因为`git rm`只删除了**工作区**的文件，没有删除**暂存区**的文件。当再执行`git checkout`切换分支时，不但会清除工作区中未提交的改动，也会清除暂存区中未提交的改动。
:::

可以使用 `git checkout -b (branchname)`来创建新分支并立即切换到该分支:
```sh
$ git checkout -b newtest
Switched to a new branch 'newtest'
```
使用分支将工作切分开来，从而让我们能够在不同开发环境中做事，并来回切换。

如果你想删除分支：
```sh
$ git branch -D (branchname)
```
删除**newtest**分支：
```sh
$ git branch -D newtest
Deleted branch newtest (was 49db6c6).
```

## git merge
一旦某分支有了独立内容，你终究会希望将它合并回到你的主分支。 
```sh
$ git merge testing
Removing 2.txt
Merge made by the 'recursive' strategy.
 2.txt | 1 -
 1 file changed, 1 deletion(-)
 delete mode 100644 2.txt
```

但是一旦存在冲突，
```sh
$ git merge change_site
Auto-merging 1.txt
CONFLICT (content): Merge conflict in 1.txt
Automatic merge failed; fix conflicts and then commit the result.
$ git status -s
UU 1.txt
```
打开文件，手动编辑冲突。
```
<<<<<<< HEAD
master主分支修改11行
=======
change_site分支中修改11行
>>>>>>> change_site
```
编辑完冲突后，重新提交`git commit -am '冲突解决'`。