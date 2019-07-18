---
title: 断网环境下利用pip安装Python离线安装包
lang: zh-CN
display: home
description: 断网环境下利用pip安装Python离线安装包
image: '/images/9.jpg'
author: chaochao liu
date: 2017-12-27 19:52:20
tags:
---
从网站提供的编译好的包下载最新版本pip-8.1.2-py2.py3-none-any.whl和wheel-0.29.0-py2.py3-none-any.whl，在packages文件夹中。

从pip文档下载get-pip.py

python.exe get-pip.py --no-index --find-links=d:\python27\packages


##打包已安装的包

在D:python27目录下新建packages文件夹用来存储下载下来的所需安装包。
<!--more-->
在 D:Python27Scripts下启动cmd窗口。

pip list #查看安装的包
pip freeze >requirements.txt
pip install --download d:\python27\packages -r requirements.txt

##离线情况安装打包好的包
将packages文件夹和requirement.txt拷贝至离线机器上目录下，packages文件夹放在D:Python27下，requirement.txt放在D:Python27Scripts下。

requirements.txt文件放在pip.exe目录下。

pip install --no-index --find-index=d:\python27\packages -r requirements.txt

##补充
1.下载指定的包到指定文件夹

pip install --download d:\python27\packs pandas（-r requirements.txt）
2.安装指定的离线包

pip install --no-index --find-links=d:\python27\packs\ pandas （-r requirements.txt）
