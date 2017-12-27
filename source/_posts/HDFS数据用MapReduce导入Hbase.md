title: HDFS数据用MapReduce导入Hbase
author: chaochao liu
date: 2017-12-27 19:57:46
tags:
---
#对应代码如下


```java


package hbase;

import org.apache.hadoop.conf.Configuration;
import org.apache.hadoop.fs.Path;
import org.apache.hadoop.hbase.HBaseConfiguration;
import org.apache.hadoop.hbase.client.Put;
import org.apache.hadoop.hbase.io.ImmutableBytesWritable;
import org.apache.hadoop.hbase.mapreduce.TableMapReduceUtil;
import org.apache.hadoop.hbase.util.Bytes;
import org.apache.hadoop.io.*;
import org.apache.hadoop.mapreduce.Job;
import org.apache.hadoop.mapreduce.Mapper;
import org.apache.hadoop.mapreduce.lib.input.FileInputFormat;
import org.apache.hadoop.mapreduce.lib.input.SequenceFileInputFormat;
```
<!--more-->
```
import java.io.IOException;
import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.*;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

/**
 * Created by lcc on 2017/10/26.
 */
public class FromWeibo {

    public static class ToHbaseMap extends Mapper<BytesWritable, MapWritable, ImmutableBytesWritable, Put>{
        protected Date getPostDate(String down, String s){
            Date postdate=null;
            DateFormat downdf = new SimpleDateFormat("yyyy-MM-dd HH:mm");
            try {
                Date downd = downdf.parse(down);
                String reg = "<p class=\"release_date\">(.*?)</p>";
                Pattern pattern = Pattern.compile(reg);

                Matcher matcher = pattern.matcher(s);
                DateFormat df = new SimpleDateFormat("yyyy-MM-dd HH:mm");
                DateFormat df2 = new SimpleDateFormat("MM月dd日 HH:mm");
                if (matcher.find()) {
                    String out = matcher.group(1);
                    out = out.trim();
                    if (!out.equals("")) {
                        try {
                            postdate = df.parse(out);
                        } catch (Exception e) {
                            try {
                                postdate = df2.parse(out);
                                postdate.setYear(117);
                            } catch (Exception e2) {
                                String reg2 = "[1-9]\\d*";
                                Pattern pattern2 = Pattern.compile(reg2);
                                Matcher matcher2 = pattern2.matcher(out.trim());
                                if (matcher2.find()) {
                                    int m = Integer.parseInt(matcher2.group());
                                    postdate=new Date(downd.getTime()-m*60*1000);
                                } else {
                                    postdate=downd;
                                }
                            }
                        }
                    }
                }
            }
            catch (Exception ex) {

            }
            return postdate;
        }
        protected String getPostContent(String s) {
            String content = "";
            String reg = "<p class=\"content\">(.*?)</p>";
            Pattern pattern = Pattern.compile(reg);
            Matcher matcher = pattern.matcher(s);
            if (matcher.find()) {
                content = matcher.group(1);
            }
            return content;
        }
        protected Date getRepostDate(String s){
            Date d=null;
            DateFormat df = new SimpleDateFormat("yyyy-MM-dd HH:mm");
            try{
                d=df.parse(s);
            }catch (Exception e) {

            }
            return d;
        }
        protected void map(BytesWritable key, MapWritable value, Context context) throws IOException,InterruptedException{
            Set<Writable> vs = value.keySet();
            Iterator<Writable> it = vs.iterator();
            int i = 0;
            List<String> outkey=new LinkedList<String>();
            List<String> outvalue=new LinkedList<String>();
            while (it.hasNext()) {
                Writable wt=it.next();
                outkey.add(wt.toString());
                Writable wvalue=value.get(wt);
                outvalue.add(wvalue.toString());
            }


            try {
                if (outvalue.get(outkey.indexOf("type")).equals("q")) {
                    String down = outvalue.get(outkey.indexOf("download_date"));
                    String s = outvalue.get(outkey.indexOf("format_content"));

                    //被转发用户相关
                    String forward_user_url = outvalue.get(outkey.indexOf("forward_user_url"));
                    String forward_author = outvalue.get(outkey.indexOf("forward_author"));
                    String forward_uid = outvalue.get(outkey.indexOf("forward_uid"));
                    String verified = outvalue.get(outkey.indexOf("verified"));

                    //被转发微博相关
                    String refer_url = outvalue.get(outkey.indexOf("refer_url"));
                    String post_source = outvalue.get(outkey.indexOf("post_source"));
                    String forward_url = outvalue.get(outkey.indexOf("forward_url"));
                    Date postdate = getPostDate(down, s);
                    String Post = getPostContent(s);

                    //转发微博信息
                    Date release_date = getRepostDate(outvalue.get(outkey.indexOf("release_date")));
                    String title = outvalue.get(outkey.indexOf("title"));
                    String content = outvalue.get(outkey.indexOf("content"));
                    String comments_count = outvalue.get(outkey.indexOf("comments_count"));
                    String url = outvalue.get(outkey.indexOf("url"));
                    String attitudes_count = outvalue.get(outkey.indexOf("attitudes_count"));
                    String quote_count = outvalue.get(outkey.indexOf("quote_count"));

                    //发表者相关信息
                    String author = outvalue.get(outkey.indexOf("author"));
                    String user_url = outvalue.get(outkey.indexOf("user_url"));
                    String uid = outvalue.get(outkey.indexOf("uid"));

                    //媒体来源
                    String media_id = outvalue.get(outkey.indexOf("media_id"));
                    String media_name = outvalue.get(outkey.indexOf("media_name"));

                    //入库
                    if (postdate != null && release_date != null) {
                        DateFormat outdf = new SimpleDateFormat("yyyy-MM-dd HH:mm");
                        byte[] bRowKey = Bytes.toBytes(url);
                        ImmutableBytesWritable rowkey = new ImmutableBytesWritable(bRowKey);
                        Put put = new Put(bRowKey);


                        //"forward_user"列族
                        put.addImmutable("forward_user".getBytes(), "forward_user_url".getBytes(), forward_user_url.getBytes());
                        put.addImmutable("forward_user".getBytes(), "forward_author".getBytes(), forward_author.getBytes());
                        put.addImmutable("forward_user".getBytes(), "forward_uid".getBytes(), forward_uid.getBytes());
                        put.addImmutable("forward_user".getBytes(), "verified".getBytes(), verified.getBytes());

                        //"forward_weibo"列族
                        put.addImmutable("forward_weibo".getBytes(), "refer_url".getBytes(), refer_url.getBytes());
                        put.addImmutable("forward_weibo".getBytes(), "post_source".getBytes(), post_source.getBytes());
                        put.addImmutable("forward_weibo".getBytes(), "forward_url".getBytes(), forward_url.getBytes());
                        put.addImmutable("forward_weibo".getBytes(), "postdate".getBytes(), outdf.format(postdate).getBytes());
                        put.addImmutable("forward_weibo".getBytes(), "Post".getBytes(), Post.getBytes());


                        //"post"列族
                        put.addImmutable("post".getBytes(), "release_date".getBytes(), outdf.format(release_date).getBytes());
                        put.addImmutable("post".getBytes(), "title".getBytes(), title.getBytes());
                        put.addImmutable("post".getBytes(), "content".getBytes(), content.getBytes());
                        put.addImmutable("post".getBytes(), "comments_count".getBytes(), comments_count.getBytes());
                        put.addImmutable("post".getBytes(), "url".getBytes(), url.getBytes());
                        put.addImmutable("post".getBytes(), "attitudes_count".getBytes(), attitudes_count.getBytes());
                        put.addImmutable("post".getBytes(), "quote_count".getBytes(), quote_count.getBytes());


                        //"poster"列族
                        put.addImmutable("poster".getBytes(), "author".getBytes(), author.getBytes());
                        put.addImmutable("poster".getBytes(), "user_url".getBytes(), user_url.getBytes());
                        put.addImmutable("poster".getBytes(), "uid".getBytes(), uid.getBytes());


                        //"media"列族
                        put.addImmutable("media".getBytes(), "media_id".getBytes(), media_id.getBytes());
                        put.addImmutable("media".getBytes(), "media_name".getBytes(), media_name.getBytes());

                        context.write(rowkey, put);
                    }
                }
            }catch (Exception ex)
            {

            }

        }
    }
    public static void main(String[] args) throws Exception {
        System.setProperty("hadoop.home.dir","C:\\hadoop" );
        Configuration conf = HBaseConfiguration.create();
        conf.set("hbase.zookeeper.quorum", "TjuBD");
        conf.set("hbase.zookeeper.property.clientPort", "2181");
        conf.set("dfs.socket.timeout", "180000");
        Path seqFile = new Path("hdfs://172.28.9.62:8020/weibo/201701");
        conf.set("io.compression.codecs", "com.hadoop.compression.lzo.LzoCodec");
        conf.set("fs.default.name", "hdfs://172.28.9.62:8020");
        conf.set("mapreduce.input.fileinputformat.input.dir.recursive", "True");
        conf.set("hadoop.job.user", "hadoop");
        conf.set("mapreduce.framework.name", "yarn");
        conf.set("mapreduce.jobtracker.address", "172.28.9.62:9001");
        conf.set("yarn.resourcemanager.hostname", "172.28.9.62");
        conf.set("yarn.resourcemanager.admin.address", "172.28.9.62:8033");
        conf.set("yarn.resourcemanager.address", "172.28.9.62:8032");
        conf.set("mapreduce.job.jar", "C:\\Users\\lcc\\Desktop\\readfile\\target\\readfile-1.0-SNAPSHOT-jar-with-dependencies.jar");
        conf.set("yarn.resourcemanager.resource-tracker.address", "172.28.9.62:8036");
        conf.set("mapreduce.app-submission.cross-platform", "true");
        conf.set("yarn.resourcemanager.scheduler.address", "172.28.9.62:8030");
        Job job = Job.getInstance(conf, "FromWeiboToHbase");
        job.setJarByClass(FromWeibo.class);
        job.setInputFormatClass(SequenceFileInputFormat.class);
        FileInputFormat.setInputPaths(job, seqFile);
        job.setMapperClass(ToHbaseMap.class);
        TableMapReduceUtil.initTableReducerJob("weibo",null,job);
        job.setNumReduceTasks(0);
        TableMapReduceUtil.addDependencyJars(job);
        System.exit(job.waitForCompletion(true)?0:1);

    }
}

```