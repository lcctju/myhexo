---
title: Ubuntu下的Texlive安装中文字体
lang: zh-CN
display: home
description: 在Linux服务器上配置Texlive的中文字体
image: '/images/6.jpg'
author: chaochao liu
date: 2019-07-17 08:25:34
tags:
---
在Linux服务器上，使用TEX Live的完整安装版基于pdflatex编译tex文件，运行命令如下：

```
pdflatex -synctex=1 -interaction=nonstopmode "main".tex
```

网上很多教程都是如何在Linux系统里安装字体，但是即使系统里已经安装中文字体，也会报如下错误：

<!--more-->

```
!pdfTeX error: pdflatex (file simhei.ttf): cannot open TrueType font file for reading 
```

这时需要将对应的中文字体保存到'usr/local/texlive/texmf-local/fonts/truetype'中，注意’truetype‘文件夹命名正确。然后执行

```
sudo mktexlsr（不需要路径输入命令）
```
