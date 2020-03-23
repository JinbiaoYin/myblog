---
title: Github   
---

目前我们使用到的 Git 命令都是在本地执行，如果你想通过 Git 分享你的代码或者与其他开发人员合作。 你就需要将数据放到一台其他开发人员能够连接的服务器上。

本例使用了 Gitee 作为远程仓库，Github 操作相同。


## SSH KEY
1. 打开**git bash**，输入`cd ~/.ssh`，检查是否已经有 SSH Key ，如果存在 `id_isa` 和 `id_isa.pub` ，就是已经生成密钥，不需再重新生成了。

<img :src="$withBase('/tools/git/ssh_login/查看是否存在密钥.jpg')">

2. 生成密钥，键入如下命令，一路回车，就可以成功生成。路径 `C:\Users\{用户名}\.ssh`

```
ssh-keygen -t rsa -C "731509863@qq.com"
```

<img :src="$withBase('/tools/git/ssh_login/生成密钥.jpg')">


3. 添加私钥到ssh-agent(这一步我没做，也成功了)


4. 登陆github，在设置中添加 ssh ，注意是将 `id_ras.pub` 即公钥交给github。

<img :src="$withBase('/tools/git/ssh_login/添加公钥到github.jpg')">

5. 测试

<img :src="$withBase('/tools/git/ssh_login/测试是否成功添加.jpg')">



## git remote
### 添加远程仓库
要添加一个新的远程仓库，可以指定一个简单的名字，以便将来引用,命令格式如下：
```sh
$ git remote add [shortname] [url]
```

本地 Git 仓库和 GitHub 仓库之间的传输是通过SSH加密的，所以我们需要根据以上步骤配置 SSH。我已经在 GitHub 上新建了一个仓库 `newrepo`。


```sh
$ git remote add origin git@gitee.com:shuaibiao/newrepo.git
$ git push -u origin master
Enumerating objects: 40, done.
Counting objects: 100% (40/40), done.
Delta compression using up to 6 threads
Compressing objects: 100% (37/37), done.
Writing objects: 100% (40/40), 3.86 KiB | 791.00 KiB/s, done.
Total 40 (delta 15), reused 0 (delta 0)
remote: Powered by GITEE.COM [GNK-3.8]
To gitee.com:shuaibiao/newrepo.git
 * [new branch]      master -> master
Branch 'master' set up to track remote branch 'master' from 'origin'.
```

### 查看已存在的远程仓库
```sh
$ git remote
origin
```
执行时加上 -v 参数，你还可以看到每个别名的实际链接地址
```sh
$ git remote -v 
origin  git@gitee.com:shuaibiao/newrepo.git (fetch)
origin  git@gitee.com:shuaibiao/newrepo.git (push)
```

### 删除远程仓库
```sh
$ git remote rm [别名]
```
例如删除远程仓库**origin**:
```sh
$ git remote rm origin
```

## git fetch
Git 有两个命令用来提取远程仓库的更新。
从远程仓库下载新分支与数据：
```sh
$ git fetch
```
该命令执行完后需要执行git merge 远程分支到你所在的分支。

从远端仓库提取数据并尝试合并到当前分支：
```sh
$ git merge
```
该命令就是在执行 git fetch 之后紧接着执行 git merge 远程分支到你所在的分支。

## git push
推送你的分支和数据到某个远端仓库：
```sh
$ git push [alias] [branch]
```
例如，新增 **gitee.txt**文件:
```sh
$ git add .
$ git commit -m '新增gitee.txt'
$ git push origin master
```
