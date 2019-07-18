---
title: 从HDFS上读取带lzo压缩的SequenceFile文件
lang: zh-CN
display: home
description: 从HDFS上读取带lzo压缩的SequenceFile文件的示例代码
image: '/images/7.jpg'
author: chaochao liu
date: 2017-12-27 19:53:41
tags:
---
#使用java代码从HDFS上读取带lzo压缩的SequenceFile文件


```java
import org.apache.hadoop.conf.Configuration;
import org.apache.hadoop.fs.*;
import org.apache.hadoop.io.*;

import java.io.*;
import java.util.*;

/**
 * Created by lcc on 17-7-31.
 */
 ```
 <!--more-->
 ```
public class readweibo {

    public static void main(String[] args) throws Exception {

        Configuration conf = new Configuration();

        Path seqFile = new Path("/weibo/01");
        conf.set("io.compression.codecs", "com.hadoop.compression.lzo.LzoCodec");
        conf.set("fs.default.name", "hdfs://lcc-desktop:9000");
        FileSystem fs = FileSystem.get(conf);
        FileStatus[] fileStatuses = fs.listStatus(seqFile);
        List<Integer> l = new LinkedList<Integer>();
        int tmp = 0;
        for (int j = 0; j < fileStatuses.length; j++) {
            SequenceFile.Reader reader = new SequenceFile.Reader(conf, SequenceFile.Reader.file(fileStatuses[j].getPath()));

            BytesWritable key = new BytesWritable();
            MapWritable value = new MapWritable();


            while (reader.next(key, value)) {
                //System.out.println(key);
                Set<Writable> vs = value.keySet();
                Iterator<Writable> it = vs.iterator();
                int i = 0;
                List<String> outkey=new LinkedList<String>();
                while (it.hasNext()) {
                    Writable wt=it.next();
                    outkey.add(wt.toString());

                    //System.out.println(weibokey.length);
                    //it.next();
                    i = i + 1;
                }
                if (!l.contains(i)) {
                    l.add(i);
                }
                tmp = tmp + 1;
                if(i==29)
                {
                    Iterator<String> ok=outkey.iterator();
                    while(ok.hasNext())
                    {
                        String oktmp=ok.next();
                        System.out.println(oktmp);
                    }
                    break;
                }
            }

        }
        //System.out.println(tmp);
        Iterator<Integer> itl = l.iterator();
        while (itl.hasNext()) {
            Integer itv = itl.next();
            //System.out.println(itv);
        }

    }
}
```
