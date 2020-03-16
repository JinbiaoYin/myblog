---
title: 各类型应用场景
---

## String

### 单值缓存
```
SET key value
GET key
```
### 对象缓存
1. 
```
SET user:1 value(json格式数据)
```
2. 
```
MSET user:1:name yinjinbiao user:1:age 24
MGET user:1:name user:1:age
```

### 分布式锁
```
SETNX product:10001 true //返回1代表获取锁成功
```
```
SETNX product:10001 false //返回0代表获取锁失败
```

执行业务操作...
```
DEL product:10001 //执行完业务释放锁
```
```
SET product:10001 true ex 10 nx //防止程序意外终止发生死锁
```

### 计数器

```
INCR article:readcount:{文章id}
```
```
GET article:readcount:{文章id}
```

### Web 集群 session 共享
spring session + redis 实现 session 共享

### 分布式系统全局序列号
```
INCRBY orderId 1000 //redis批量生成序列id，整型自增 id，提升性能
```

## Hash 
### 对象缓存
```
HMSET user 1:name yinjinbiao 1:age 24
```
```
HMGET user 1:name 1:age 
```

### 电商购物车

1. 以用户id为key
2. 商品id为field
3. 商品数量为value

购物车操作：
1. 添加商品 , 设置id为1001的用户添加1个id为10088的商品
```
hset cart:1001 10088 1
``` 
2. 增加数量 , 商品数量+1
```
hincrby cart:1001 10088 1
```
3. 获取商品总数 
```
hlen cart:1001 10088
```
4. 删除商品 
```
hdel cart:1001 10088
```
5. 获取商品总数 
```
hgetall cart:1001
```
::: tip
优点
- 同类数据归类整合储存，方便数据管理
- 相比string操作消耗内存与cpu更小
- 相比string储存更省空间

缺点
- 过期功能不能使用在field，只能用在key上面
- Redis集群架构下不适合大规模使用，集群数据倾斜，导致某一key数据过多压力过大。
:::

## List
可以实现的消息结构：

- Stack（栈） = LPUSH + LPOP
- Queue（队列） = LPUSH + RPOP
- Blocking MQ（阻塞队列） = LPUSH +BRPOP

### 微博和微信公众号消息流
我关注了程序员训练营
1. 程序员训练营发微博，消息ID为10018
```
LPUSH msg:{我的id} 10018
```
2. 查看最新微博消息， 返回0-5的消息
```
LRANGE msg:{我的id} 0 5
```

## Set
### 微信抽奖小程序
1. 点击参与抽奖，向活动101奖池中添加id为10001的用户

sadd act:101 10001

2. 查看所有抽奖用户
```
SMEMBERS act:101
```
3. 随机抽奖，中奖用户不从奖池删除
```
SRANDMEMBER act:101
```
4. 随机抽奖，中奖用户删除
```
SPOP act:101
```

### 微信微博点赞，收藏
1. 点赞
```
SADD like:{消息id} {用户id}
```
2. 取消点赞
```
SREM like:{消息id} {用户id}
```
3. 检查用户是否点过赞
```
SISMEMBER like:{消息id} {用户id}
```
4. 获取点赞的用户列表
```
SMEMBERS like:{消息id}
```
5. 获取点赞用户数
```
SCARD like:{消息id}
```

### 集合操作实现微博微信关注模型
1. 我关注的人
set1
2. 恺b关注的人
set2
3. 笑笑关注的人
set3

> 同时关注的人 
```
SINTER set1 set2 set3
```
> 关注的所有人 
```
SUNION set1 set2 set3
```
> 只有我关注的人 
```
SDIFF set1 set2 set3
```
> 我关注的笑笑也关注kaib ,返回1则表示，笑笑也关注了恺b
```
SISMEMBER set3 kaib
```

### 集合操作实现电商产品筛选


## ZSet
### 热搜排行榜
1. 点击新闻，将“唐艺昕肚子”这个微博，点击加1.
```
ZINCRBY hotNews:20200316 1 唐艺昕肚子
```
2. 展示当日排行版前十
```
ZREVRANGE key start stop 0 9 WITHSCORES
```
3. 七日搜索榜单计算
```
ZUNIONSTORE hotNews:20200310-20200316 7 hotNews:20200310 hotNews:20200311 ... gitNews:20200316
```
4. 展示七日排行榜
```
ZREVRANGE hotNews:20200310-20200316 0 9 WITHSCORES
```