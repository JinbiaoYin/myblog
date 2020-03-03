# git使用ssh登陆

## 前言

管理Git项目上，很多时候都是直接使用https url克隆到本地，当然也有有些人使用SSH url克隆到本地。

## 为什么要使用ssh url
两种方式的主要区别在于：使用https url克隆对初学者来说会比较方便，复制https url然后到git Bash里面直接用clone命令克隆到本地就好了，但是每次fetch和push代码都需要输入账号和密码，这也是https方式的麻烦之处。
而使用SSH url克隆却需要在克隆之前先配置和添加好SSH key，因此，如果你想要使用SSH url克隆的话，你必须是这个项目的拥有者。否则你是无法添加SSH key的，另外ssh默认是每次fetch和push代码都不需要输入账号和密码，如果你想要每次都输入账号密码才能进行fetch和push也可以另外进行设置。

## 使用详解
1.打开git bash，输入cd ~/.ssh，检查是否已经有SSH Key，如果存在id_isa和id_isa.pub，就是已经生成密钥，不需再重新生成了。

2.生成密钥，键入如下命令，一路回车，就可以成功生成。路径C:\Users\{用户名}\.ssh
ssh-keygen -t rsa -C "731509863@qq.com"

3.添加私钥到ssh-agent


4.登陆github，在设置中添加ssh，注意是将id_ras.pub即公钥交给github。

5.测试

============================

一.前言
使用代理访问git时，git push提交突然报错：ssh: connect to host github.com port 22: Connection timed out。
使用ssh -T git@github.com测试，依然无法连接。

二.解决方法
进入ssh密钥存放目录，并新建文件config，如果存在则修改
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

