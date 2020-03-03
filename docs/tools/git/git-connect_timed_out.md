---
git push Connection timed out
---

# 前言
使用代理访问git时，git push提交突然报错：ssh: connect to host github.com port 22: Connection timed out。
使用ssh -T git@github.com测试，依然无法连接。

# 解决方法
1. 进入ssh密钥存放目录，并新建文件config，如果存在则修改
cd ~/.ssh

vim config

Host github.com
User 注册github的邮箱
Hostname ssh.github.com
PreferredAuthentications publickey
IdentityFile ~/.ssh/id_rsa
Port 443

wq保存并退出

重新测试ssh -T git@github.com，出现提示yes即可。