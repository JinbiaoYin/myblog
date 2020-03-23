---
title: Git 基本使用
---

## git add
`git add` 命令可将文件添加到缓存，如我们添加两个文件, **1.txt**,**2.txt**，查看项目的当前状态：
```sh
$ git status -s
?? 1.txt
?? 2.txt
```
::: tip
?? 表示未添加到暂存区。`git status` 命令用于查看项目的当前状态。
:::

接下来我们执行 `git add` 命令来添加文件：
```sh
$ git add 1.txt 2.txt
```

现在我们再执行 `git status`，就可以看到这两个文件已经加上去了。
```sh
$ git status -s
A  1.txt
A  2.txt
```
::: tip
可以使用 `git add .` 命令来添加当前项目的所有文件。
"<span style="color:#13A10E;">A</span>" 代表新增已添加到暂存区的文件
:::

修改了文件**1.txt**后，使用 `git status -s` 查看当前项目状态:
```sh
$ git status -s
AM 1.txt
A  2.txt
```
::: tip
"<span style="color:#13A10E;">A</span><span style="color:red;">M</span>" 状态的意思是，这个文件在我们将它添加到缓存之后又有改动。改动后我们再执行 `git add` 命令将其添加到缓存中：
:::
```
$ git add .
```

## git status
`git status` 以查看在你上次提交之后是否有修改。

上述命令加了 -s 参数，以获得**简短的结果输出**。
```sh
$ git status -s
A  1.txt
A  2.txt
```
::: tip
A 代表新增文件，M 代表修改文件。
<span style="color:red;">红色</span>未添加（`git add`）到缓存区，<span style="color:#13A10E;">蓝色</span>已添加到缓存区。
:::


## git diff
我修改了 **1.txt**，执行 `git diff` 来查看执行 `git status` 的结果的详细信息。
```sh
$ git status -s
AM 1.txt
A  2.txt

$ git diff
diff --git a/1.txt b/1.txt
index 0fcea84..0acf835 100644
--- a/1.txt
+++ b/1.txt
@@ -1,3 +1,5 @@
 <E7><AC><AC><E4><B8><80><E4><B8><AA><E6><96><87><E4><BB><B6>

-<E7><AC><AC><E4><B8><80><E6><AC><A1><E4><BF><AE><E6><94><B9><EF><BC><9A><E6><97><B6><E9><97><B4><EF><BC><9A>11<E7><82>
<B9>05<E5><88><86>
\ No newline at end of file
+<E7><AC><AC><E4><B8><80><E6><AC><A1><E4><BF><AE><E6><94><B9><EF><BC><9A><E6><97><B6><E9><97><B4><EF><BC><9A>11<E7><82>
<B9>05<E5><88><86>
+
+<E7><AC><AC><E4><BA><8C><E6><AC><A1><E4><BF><AE><E6><94><B9><EF><BC><9A><E6><97><B6><E9><97><B4><EF><BC><9A>11<E7><82>
<B9>12<E5><88><86>
\ No newline at end of file
```
`git status` 显示你上次提交更新后的更改或者写入缓存的改动， 而 `git diff` 一行一行地显示这些改动具体是啥。

当我们执行 `git add .`后，再执行 `git diff` 后，发现并无信息，加上 `--cached` 参数后：
```sh
$ git diff --cached
diff --git a/1.txt b/1.txt
new file mode 100644
index 0000000..0acf835
--- /dev/null
+++ b/1.txt
@@ -0,0 +1,5 @@
+<E7><AC><AC><E4><B8><80><E4><B8><AA><E6><96><87><E4><BB><B6>
+
+<E7><AC><AC><E4><B8><80><E6><AC><A1><E4><BF><AE><E6><94><B9><EF><BC><9A><E6><97><B6><E9><97><B4><EF><BC><9A>11<E7><82>
<B9>05<E5><88><86>
+
+<E7><AC><AC><E4><BA><8C><E6><AC><A1><E4><BF><AE><E6><94><B9><EF><BC><9A><E6><97><B6><E9><97><B4><EF><BC><9A>11<E7><82>
<B9>12<E5><88><86>
\ No newline at end of file
diff --git a/2.txt b/2.txt
new file mode 100644
index 0000000..85b2130
--- /dev/null
+++ b/2.txt
@@ -0,0 +1 @@
+<E7><AC><AC><E4><BA><8C><E4><B8><AA><E6><96><87><E4><BB><B6>
\ No newline at end of file
```
::: tip
- 尚未缓存的改动：**git diff**
- 查看已缓存的改动：**git diff --cached**
- 查看已缓存的与未缓存的所有改动：**git diff HEAD**
- 显示摘要而非整个 diff：**git diff --stat**
:::

## git commit
使用 `git add` 命令将快照的内容写入暂存区， 而执行 `git commit` 将缓存区内容添加到仓库中。

Git 为你的每一个提交都记录你的名字与电子邮箱地址，即上节的 `git config`。

使用 `-m` 选项以在命令行中提供提交注释。
```sh
$ git commit -m "第一次版本提交"
[master 3de0f1b] 第一次版本提交
 2 files changed, 6 insertions(+)
 create mode 100644 1.txt
 create mode 100644 2.txt
```

现在我们已经记录了快照。如果我们再执行 `git status`:
```sh
$ git status
On branch master
nothing to commit, working tree clean
```
以上输出说明我们在最近一次提交之后，没有做任何改动，是一个"working directory clean：干净的工作目录"。
如果你没有设置 -m 选项，Git 会尝试为你打开一个编辑器以填写提交信息。 如果 Git 在你对它的配置中找不到相关信息，默认会打开 vim。

**如果你觉得 git add 提交缓存的流程太过繁琐，Git 也允许你用 -a 选项跳过这一步**。命令格式如下：
```sh
$ git commit -am "修改1.txt"
[master e812a72] 修改1.txt
 1 file changed, 3 insertions(+), 1 deletion(-)
```

## git reset HEAD
`git reset HEAD` 命令用于取消已缓存的内容。

例如当我们修改了 **1.txt**，并执行了 `git add .`添加到缓存区，执行 `git status -s`，会查看到 **<span style="color:#13A10E;">M</span> 1.txt** 。
```sh
$ git reset HEAD
Unstaged changes after reset:
M       1.txt
```
再查看 `git status`
```sh
$ git status -s
 M 1.txt
```

简而言之，执行 `git reset HEAD` 以取消之前 `git add` 添加，但不希望包含在下一提交快照中的缓存。


## git rm
如果只是简单地从工作目录中手工删除文件，运行 `git status` 时就有 **Changes not staged for commit** 的提示。
要从 Git 中移除某个文件，就必须要从已跟踪文件清单中移除，然后提交。
```sh
$ git rm <file>
```
如果删除之前修改过并且已经放到暂存区域的话，则必须要用强制删除选项 `-f`
```sh
$ git rm -f <file>
```
如果把文件从暂存区域移除，但仍然希望保留在当前工作目录中，换句话说，仅是从跟踪清单中删除，使用 `--cached` 选项即可。
```sh
$ git rm --cached <file>
```
可以递归删除，即如果后面跟的是一个目录做为参数，则会递归删除整个目录中的所有子目录和文件：
```sh
$ git rm –r * 
```
进入某个目录中，执行此语句，会删除该目录下的所有文件和子目录。

## git mv
`git mv` 命令用于移动或重命名一个文件、目录、软连接。
例如将**3.txt**重命名为**1.txt**:
```sh
$ git mv 3.txt 31.txt
R  3.txt -> 31.txt
```




