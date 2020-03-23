---
title: 查看提交历史
---

## git log
使用 `git log` 列出历史提交记录:
```sh
$ git log
Merge: 4a50b3e 9b1d2a2
Author: yinjinbiao <731509863@qq.com>
Date:   Mon Mar 23 15:36:20 2020 +0800

    编辑冲突

commit 4a50b3e5f7946cdb8e3d3ed83d6212cca0944f39
Author: yinjinbiao <731509863@qq.com>
Date:   Mon Mar 23 15:22:07 2020 +0800

    master修改1.txt

commit 9b1d2a2df5cb88d70d4de8de110e86efb6203922 (change_site)
Author: yinjinbiao <731509863@qq.com>
```
使用 `--oneline` 选项来查看历史记录的简洁版本:
```sh
$ git log --oneline
7e750fe (HEAD -> master) 编辑冲突
4a50b3e master修改1.txt
9b1d2a2 (change_site) change 1.txt
7e750fe (HEAD -> master) 编辑冲突
4a50b3e master修改1.txt
9b1d2a2 (change_site) change 1.txt
6496755 Merge branch 'testing'
33505a1 删除2.txt
6064315 删除3.txt
3e7162e merge
49db6c6 删除3.txt
43d3272 重命名3.txt
4af6876 新增3.txt
8815ae1 新增3.txt
eb59b34 新增3.txt
6e422a9 删除3.txt
6e49f86 修改1.txt
9beec30 提交3.txt
```
使用 `--graph` 选项，查看历史中什么时候出现分支，合并。
```sh
$ git log --graph
*   commit 7e750fe0a0167e252c4fc004a5ca1f2e6614f6a8 (HEAD -> master)
|\  Merge: 4a50b3e 9b1d2a2
| | Author: yinjinbiao <731509863@qq.com>
| | Date:   Mon Mar 23 15:36:20 2020 +0800
| | 
| |     编辑冲突
| |
| * commit 9b1d2a2df5cb88d70d4de8de110e86efb6203922 (change_site)
| | Author: yinjinbiao <731509863@qq.com>
| | Date:   Mon Mar 23 15:16:34 2020 +0800
| |
| |     change 1.txt
| |
* | commit 4a50b3e5f7946cdb8e3d3ed83d6212cca0944f39
|/  Author: yinjinbiao <731509863@qq.com>
|   Date:   Mon Mar 23 15:22:07 2020 +0800
```
用 `--reverse` 参数来逆向显示所有日志。
```sh
$ git log --reverse --oneline
efd6cb2 初始化项目版本
3de0f1b 第一次版本提交
e812a72 修改1.txt
9beec30 提交3.txt
6e49f86 修改1.txt
6e422a9 删除3.txt
eb59b34 新增3.txt
8815ae1 新增3.txt
4af6876 新增3.txt
43d3272 重命名3.txt
49db6c6 删除3.txt
3e7162e merge
6064315 删除3.txt
33505a1 删除2.txt
6496755 Merge branch 'testing'
```
如果只想查找指定用户的提交日志可以使用命令：`git log --author` , 例如
```sh
$ git log --author=yinjinbiao --oneline -5
7e750fe (HEAD -> master) 编辑冲突
4a50b3e master修改1.txt
9b1d2a2 (change_site) change 1.txt
6496755 Merge branch 'testing'
33505a1 删除2.txt
```
