---
title: Git 分支管理
---

## git branch
查看所有分支：
```sh
$ git branch
* master
```
::: tip
当你执行 `git init` 的时候，默认情况下 Git 就会创建 master 分支。
:::

若手动创建分支。执行 `git branch (branchname)` 即可。例如：
```sh
$ git branch testing

$ git branch
* master
  testing
```
现在有了个新分支 **testing**。

执行 `git checkout` 命令，切换到**testing**分支，删除**3.txt**，并提交。例如：
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


## git checkout

使用 `git checkout -b (branchname)`来创建新分支并立即切换到该分支:
```sh
$ git checkout -b newtest
Switched to a new branch 'newtest'
```
使用分支将工作切分开来，从而让我们能够在不同开发环境中做事，并来回切换。

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
手动解决冲突。
```
<<<<<<< HEAD
master主分支修改11行
=======
change_site分支中修改11行
>>>>>>> change_site
```
编辑完冲突后，重新提交`git commit -am '冲突解决'`。

## git rebase
与 `git merge` 不同的是，`git rebase` 会将所有的提交形成一条历史直线。
例如，有两个分支**master**和**dev**，当在**dev**上执行：
```sh
$ git rebase master
```
**dev**历史树为成为一条直线。
遇到冲突时解决后，执行：
```sh
$ git add .
$ git rebase --continue
```
会继续应用余下的补丁。然后再切换到**master**分支执行`git merge dev`

**注意：**`git rebase` 是一个比较危险的操作，它会重写历史，建议只在自己的分支上使用，不要在公共分支上使用它。

::: tip
使用规则：
当本地 master 分支和远端不一致，需要切换到本地 master 分支，并`git pull`，然后切换到你自己的分支，执行`git rebase master`，如果有冲突则解决后重新`git add .`，并执行`git rebase --continue`，之后就可以申请合并到主分支了。
:::