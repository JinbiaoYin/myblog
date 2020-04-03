---
title: 简介
---

## 前言
Flowable和activiti相差不大，表结构基本相同。

其实这种工作流引擎，实际上是帮你设计了 n 多张表，然后帮你实现了操纵这些表的接口。如`RepositoryService`,`RuntimeService`,`TaskService`等。我们需要做的就是调用这些接口，根据自己的业务来做一些额外的判断。

## 表结构介绍
### 流程部署
流程部署涉及到的表和部分字段介绍：
- `act_ge_bytearray`。流程二进制表，流程部署后，流程文件信息和xml文件会以二进制的形式存储到这张表。
 - `name_`。文件路径
 - `deployment_id`。部署id，**流程部署表**的主键。
 - `bytes_`。文件二进制
- `act_re_deployment`。流程部署表。
 - `ID_`。流程部署表主键。
- `act_re_procdef`。流程定义表，
 - `ID_`。由**流程id:version:随机数**构成。
 - `NAME_`。流程名称
 - `KEY_`。流程id
 - `VERSION_`。流程版本。如果名称不变，每次部署版本号+1。
