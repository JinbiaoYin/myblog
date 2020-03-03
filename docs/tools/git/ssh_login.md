---
title: Git 使用 ssh 登陆
---

## 问题描述
由于每次 git push 时都需要输入密码，比较麻烦，所以采用 ssh url 的方式来git push。

## 为什么要使用ssh url登录

管理Git项目上，很多时候都是直接使用https url克隆到本地，当然也有有些人使用SSH url克隆到本地。

两种方式的主要区别在于：使用https url克隆对初学者来说会比较方便，复制https url然后到git Bash里面直接用clone命令克隆到本地就好了，但是每次fetch和push代码都需要输入账号和密码，这也是https方式的麻烦之处。

而使用SSH url克隆却需要在克隆之前先配置和添加好SSH key，因此，如果你想要使用SSH url克隆的话，你必须是这个项目的拥有者。否则你是无法添加SSH key的，另外ssh默认是每次fetch和push代码都不需要输入账号和密码，如果你想要每次都输入账号密码才能进行fetch和push也可以另外进行设置。

## 操作步骤
1. 打开git bash，输入`cd ~/.ssh`，检查是否已经有 SSH Key ，如果存在 `id_isa` 和 `id_isa.pub` ，就是已经生成密钥，不需再重新生成了。

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



