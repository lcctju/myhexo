(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{220:function(a,e,o){"use strict";o.r(e);var t=o(0),n=Object(t.a)({},(function(){var a=this,e=a.$createElement,o=a._self._c||e;return o("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[o("p",[a._v("mongodb开启的数据库默认会占用服务器一半的内存，用来缓存可能频繁查询的内容，以加快查询速度。而我们日常使用的服务器不只是用来开启一个mongodb数据库，还会有其他的用途。这就需要限制mongodb数据库的内存占用。")]),a._v(" "),o("h3",{attrs:{id:"_1-运行中的mongodb内存释放"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#_1-运行中的mongodb内存释放"}},[a._v("#")]),a._v(" 1. 运行中的mongodb内存释放")]),a._v(" "),o("p",[a._v("目前，正在运行的mongodb没有很好的内存回收机制，如果想回收内存，只能进入mongodb的admin数据库关闭所有数据库")]),a._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[a._v("mongo> use admin \nmongo> db.runCommand({closeAllDatabases:1})\n")])])]),o("h3",{attrs:{id:"_2-修改mongodb的配置文件"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#_2-修改mongodb的配置文件"}},[a._v("#")]),a._v(" 2. 修改mongodb的配置文件")]),a._v(" "),o("p",[a._v("还有一种方法是开启数据库时，指定mongodb的配置文件")]),a._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[a._v("./mongod -f /etc/mongodb.conf\n")])])]),o("p",[a._v("在配置文件中设置内存占用，配置文件修改如下内容：")]),a._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[a._v('storage:\n    dbPath: "/data/mongodb/data”   #数据目录\n    directoryPerDB: true      #将不同DB的数据分子目录存储，基于dbPath，默认为 false\n    engine: “wiredTiger"      #存储引擎，3.2后默认wiredTiger 可选 mmapv1\n    wiredTiger:\n        engineConfig:\n            cacheSizeGB: 15     #默认最大缓存15GB。\n')])])]),o("h3",{attrs:{id:"_3-开启mongodb时增加内存占用参数"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#_3-开启mongodb时增加内存占用参数"}},[a._v("#")]),a._v(" 3. 开启mongodb时增加内存占用参数")]),a._v(" "),o("p",[a._v("建议使用这种方案，在开启mongodb时添加 "),o("code",[a._v("--wiredTigerCacheSizeGB 15")]),a._v(" 参数即可。表示mongodb最大内存限制15GB")])])}),[],!1,null,null,null);e.default=n.exports}}]);