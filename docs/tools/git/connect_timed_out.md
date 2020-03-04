---
autoGroup-1: Git 遇到的坑
title: Git 报错 git push Connection timed out
---

## 问题描述
使用代理访问git时，git push提交突然报错：ssh: connect to host github.com port 22: Connection timed out。
使用ssh -T git@github.com测试，依然无法连接。

## 解决方法
1. 进入 ssh 密钥存放目录，并新建文件 config ，如果存在则修改，命令以此为
```
cd ~/.ssh
```
```
vim config
```
```
Host github.com
User 731509863@qq.com
Hostname ssh.github.com
PreferredAuthentications publickey
IdentityFile ~/.ssh/id_rsa
Port 443
```

esc，wq保存并退出。

2. 输入以下重新测试 

```
ssh -T git@github.com
```

出现提示，输入 yes 即可。