title: 网络差的情况下用ipv6断点续传
author: chaochao liu
date: 2018-11-30 11:17:27
tags:
---
* 借助rsync
* rsync -6 -rP --rsh='ssh -p port' root@[ipv6]:/dir/file ./

* 用ssh 连接ipv6服务器
* ssh root@ipv6 -p port