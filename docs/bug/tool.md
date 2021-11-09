# 那些年踩的坑——工具类

## Error: Could not find any Visual Studio installation to use

### 情景再现

![](/docsimg/bug-tool-1.png)

### 解决方案

方案 1: 根据报错提示安装最新版本的 visual studio, 并引入相关的 c++桌面开发工具;

```
gyp ERR! find VS You need to install the latest version of Visual Studio
gyp ERR! find VS including the "Desktop development with C++" workload.
gyp ERR! find VS For more information consult the documentation at:
gyp ERR! find VS https://github.com/nodejs/node-gyp#on-windows
```

报错友好, 提供了指引地址: https://github.com/nodejs/node-gyp#on-windows

### 具体操作

![](/docsimg/bug-tool-2.png)
![](/docsimg/bug-tool-3.png)

方案 2: 可以试下全局安装构建工具

```
npm install --global windows-build-tools
```

### Tips

相关依赖是否需要 python 环境? 需要可安装 2.7.x 版本

## nodemon热更新显示端口占用
### 解决方式

在项目根目录处添加`nodemon.json`配置文件:  

每次程序重启或者崩溃的时候先kill掉3000端口再跑程序

```js
{
    "events": {
      "restart": "kill -9 $(lsof -t -i:3000)", //子进程重启
      "crash": "kill -9 $(lsof -t -i:3000)"   //子进程崩溃
    },
   "delay": "3200"
}
```

