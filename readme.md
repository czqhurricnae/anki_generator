# 猪猪 的 anki 模版生成器

## 目的

根据指定 excel 生成对应的 anki 可识别的 excel.csv 文件

## 使用方法

1. [安装 node](https://nodejs.org/en/download/)
2. 下载代码（以下方式二选一）
   1. 如果有 git，使用 `git clone https://github.com/gaochengyidlmu/anki_generator.git`
   2. 直接在本页面下载代码 ![下载](assets/download.png)
3. 安装依赖
   1. mac 用户进入终端，cd 到代码目录(示例：`cd /Users/***/Documents/anki卡包/buildAnki`)，执行 `npm i`
   2. windows 用户进入 cmd，cd 到代码目录(请自行百度😅)，执行 `npm i`
4. 进入代码文件夹中，将 excel 文件移入文件夹
5. 执行 `node app.js 文件名`，例如 `node app.js example.xlsx`
6. 在本文件夹，能够查看到对应文件名的 csv 文件

### excel 模版

可以查看代码文件夹中的 excel.xlsx，按照该模版进行录入数据。
规则：

1. 问题选项 可以添加多列，每一列的列名以 '选项' 开头即可
2. sheet 名一定要是 anki

## 资源

欢迎大家将自己创建的 anki 模版进行分享，我将会保存在 resources 目录下。
