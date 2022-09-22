# 配置Git

打开cmd或者powershell，执行两条命令

git config --global user.name 随便写个名字（英文）

git config --global user.email 随便写个邮箱

# 如何跑起来这个项目

第一次把项目下载到电脑上时，执行cnpm install，完成依赖下载后项目目录里面会出现一个node_modules文件

然后执行cnpm run dev执行项目，然后会展示出如下信息，打开浏览器，进入http://127.0.0.1:5173/即可看到自己的项目
```
  VITE v3.0.9  ready in 1477 ms

  ➜  Local:   http://127.0.0.1:5173/
  ➜  Network: use --host to expose
```

# 如何提交代码到远程仓库

每次开始写代码前先git pull，然后可能会报错，出现冲突，到时候再说
写代码

git stash // 暂存代码
git pull // 如果有冲突解决冲突
git stach pop // 把更改弹出来
git add .
git commit -m "feat(ql-000): 改动了什么"
git push

# 项目优势
1. 将vue2+webpack升级为vue3+vite：
  1. 首先vue版本升级带来的好处，vue2的options API，容易造成代码屎山问题，相同逻辑的代码无法聚合，代码可读性低。而且对typescript支持不好，不方便引入类型支持，项目过大容易产生各种问题。升级到vue3使用compositon API，可以把相同逻辑的代码放到统一个地方，便于阅读，而且更接近与原生JavaScript，编写代码更加灵活。vue3相比vue2底层源码也有诸多改动，比如响应式采用proxy，生命周期created写起来更加方便，setup语法体验丝滑，代码更加利于丰装，以及各种性能提升。
  2. 再说说vite带来的好处，vite与传统webpack等构建工具思路不同，简单来说就是本地无需打包利用浏览器去解析当前请求的模块，内置esbuild，Go语言编写，其本身语言层面性能强于JavaScript。通过引入vite，我们项目的构建速度十几甚至几十倍。
2. 引入typescript的支持，众所周知JavaScript是一门弱类型动态语言，其原生工程化以及代码规范能力比较弱，所以微软推出typescript，类似于JavaScript的超级，为js补充类型系统。
3. 图片如果放在项目路径下在进行网络请求时速度较慢，所以我们采用阿里云oss图床服务，优化用户体验。图片采用webp格式，保持清晰的情况下，进行最大程度的压缩。开启图片渐进式加载，优化图片加载效果，优化用户体验。
4. git workflow，我们规范git提交流程，几天来已经有几十次提交记录，但是没有出现混乱的情况。举个例子：有时候因为远端代码和本地不同步倒是git push失败，需要先git pull，但是这时候我又不想先把自己的代码commit，因为这样会打乱commit记录，所以我们使用git stash，先暂存修改，然后pull，再把自己的修改给pop出来，完成commit。
5. 添加gitignore文件，在进行代码提交的时候忽略node_modules、编辑器配置文件、dist文件等等一切我们不想提交到远端的文件。
6. 部署到自己的服务器，方便项目展示。
