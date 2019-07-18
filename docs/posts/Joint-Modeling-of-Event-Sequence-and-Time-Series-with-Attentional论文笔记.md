---
title: Joint Modeling of Event Sequence and Time Series with Attentional论文笔记
lang: zh-CN
display: home
description: Joint Modeling of Event Sequence and Time Series with Attentional论文笔记
image: '/images/3.jpg'
author: chaochao liu
date: 2018-11-30 10:58:49
tags:
---
### motivation

* 事件是异步产生的，事件发生的时间戳与时间序列不同，异步的事件产生的时间戳能够反映网络动力学
* 而时间序列数据能够反映背景环境的周期性更新，例如计算服务器的温度、病人的血压等
* 最近的一些研究有对连续时间点过程进行建模的[^1]、[^2]、[^3]、[^4]、[^5]，以及对时间序列建模的[^6]、[^7]、[^8]，但是大部分都是将这两种进行单独处理

<!--more-->


### 参考文献
[^1]: L. Li, H. Deng, A. Dong, Y. Chang, and H. Zha, “Identifying and labeling search tasks via query-based hawkes processes,” in KDD, 2014.
[^2]: L. Yu, P. Cui, F. Wang, C. Song, and S. Yang, “From micro to macro: Uncovering and predicting information cascading process with behavioral dynamics,” 2015.
[^3]: M. Farajtabar, Y. Wang, M. G. Rodriguez, S. Li, H. Zha, and L. Song, “Coevolve: A joint point process model for information diffusion and network co-evolution,” in Advances in Neural Information Processing Systems, 2015, pp. 1954–1962.
[^4]: N. Du, H. Dai, R. Trivedi, U. Upadhyay, M. Gomez-Rodriguez, and L. Song, “Recurrent marked temporal point processes: Embedding event history to vectore,” in KDD, 2016.
[^5]: M. Farajtabar, N. Du, M. G. Rodriguez, I. Valera, H. Zha, and L. Song, “Shaping social activity by incentivizing users,” in Advances in neural information processing systems, 2014, pp. 2474–2482.
[^6]: G. E. Box, G. M. Jenkins, G. C. Reinsel, and G. M. Ljung, Time series analysis: forecasting and control. John Wiley & Sons, 2015.
[^7]: C. Chatfield, The analysis of time series: an introduction. CRC press, 2016.
[^8]: V. Guralnik and J. Srivastava, “Event detection from time series data,” in Proceedings of the fifth ACM SIGKDD international conference on Knowledge discovery and data mining. ACM, 1999, pp. 33–42
