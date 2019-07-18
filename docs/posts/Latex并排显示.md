---
title: Latex并排显示
lang: zh-CN
display: home
description: Latex并排显示的示例代码
image: '/images/4.jpg'
author: chaochao liu
date: 2017-12-27 19:51:23
tags:
---
##在latex中并排显示代码
<!--more-->
``` latex

 \begin{columns}[T,onlytextwidth]
    \column{0.33\textwidth}
      Items
      \begin{itemize}
        \item Milk \item Eggs \item Potatos
      \end{itemize}

    \column{0.33\textwidth}
      Enumerations
      \begin{enumerate}
        \item First, \item Second and \item Last.
      \end{enumerate}

    \column{0.33\textwidth}
      Descriptions
      \begin{description}
        \item[PowerPoint] Meeh. \item[Beamer] Yeeeha.
      \end{description}
  \end{columns}
```
