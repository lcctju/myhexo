---
title: Mongodb 占用服务器内存过大解决方案
lang: zh-CN
display: home
description: mongodb内存占用过大解决方案
image: /images/timg.jpeg
author: chaochaoliu
date: 2020-08-06T01:06:56.884Z
tags:
  - 问题解决;mongodb
---
mongodb开启的数据库默认会占用服务器一半的内存，用来缓存可能频繁查询的内容，以加快查询速度。而我们日常使用的服务器不只是用来开启一个mongodb数据库，还会有其他的用途。这就需要限制mongodb数据库的内存占用。

### 1. 运行中的mongodb内存释放

目前，正在运行的mongodb没有很好的内存回收机制，如果想回收内存，只能进入mongodb的admin数据库关闭所有数据库

``` 
mongo> use admin 
mongo> db.runCommand({closeAllDatabases:1})
```

### 2. 修改mongodb的配置文件

还有一种方法是开启数据库时，指定mongodb的配置文件 
```
./mongod -f /etc/mongodb.conf
```
在配置文件中设置内存占用，配置文件修改如下内容：

```
storage:
    dbPath: "/data/mongodb/data”   #数据目录
    directoryPerDB: true      #将不同DB的数据分子目录存储，基于dbPath，默认为 false
    engine: “wiredTiger"      #存储引擎，3.2后默认wiredTiger 可选 mmapv1
    wiredTiger:
        engineConfig:
            cacheSizeGB: 15     #默认最大缓存15GB。
```


### 3. 开启mongodb时增加内存占用参数

建议使用这种方案，在开启mongodb时添加 ```--wiredTigerCacheSizeGB 15``` 参数即可。表示mongodb最大内存限制15GB
