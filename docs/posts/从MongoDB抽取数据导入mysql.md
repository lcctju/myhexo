---
title: 从MongoDB抽取数据导入mysql
lang: zh-CN
display: home
description: 从MongoDB抽取数据导入mysql示例代码
image: '/images/8.jpg'
author: chaochao liu
date: 2017-12-27 19:58:40
tags:
---

``` python
# -*- coding: utf-8 -*-
from pymongo import MongoClient
import io
import traceback
import sys
reload(sys)
sys.setdefaultencoding('utf8')
import MySQLdb

conn=MySQLdb.connect(host='127.0.0.1',port=3306,user='lcc',passwd='chaochaoliu',db='weibo_casc',charset='utf8mb4')
cur=conn.cursor()

sql='INSERT into cas values (%s,%s,%s,%s,%s,%s,%s,%s,%s,%s)'

```
<!--more-->
```
client1 = MongoClient('localhost', 1234)
client2 = MongoClient('localhost', 2341)
client3 = MongoClient('localhost', 3412)
#client4 = MongoClient('localhost', 4123)
client5 = MongoClient('localhost', 5123)
#client6 = MongoClient('localhost', 6123)

db1 = client1.test
db2 = client2.test
db3 = client3.test
#db4 = client4.test
db5 = client5.test
#db6 = client6.test

users=db1.users
blogs1 = db1.microblogs
blogs2 = db2.microblogs
blogs3 = db3.microblogs
#blogs4 = db4.microblogs
blogs5 = db5.microblogs
#blogs6 = db6.microblogs
#blogs=[blogs1,blogs2,blogs3,blogs4,blogs5,blogs6]
blogs=[blogs1,blogs2,blogs3,blogs5]

for data in users.find():
	try:
		userid=data['id']
		create_time=data['created_at']
		location=data['location']
		for b in blogs:
			param=[]
			try:
				for weibo in b.find({"user_id":userid}):
					try:
						id=weibo['_id']
						text=weibo['text']
						time=weibo['created_at']
						if weibo.has_key('retweeted_status'):
							ret="1"
							re_stat=weibo['retweeted_status']
							re_text=re_stat['text']
							re_time=re_stat['created_at']
							re_user=re_stat['user_id']
						else:
							ret="0"
							re_text=""
							re_time=""
							re_user=""
						param.append([str(id),str(userid),str(text.encode("utf8")),str(time),str(location.encode("utf8")),str(create_time),str(re_text.encode("utf8")),str(re_time),str(re_user),str(ret)])
					except:
						continue
				try:
					cur.executemany(sql,param)
					conn.commit()
				except:
					continue
			except:
				continue
	except:
		continue

cur.close()
conn.close()
client1.close()
client2.close()
client3.close()
client4.close()
client5.close()
client6.close()


```
