# pdf-builder
用于将网页文档转换为 PDF文档的工具



## 使用方法

```bash
# 编译项目(只需只需一次)
npm run build
# 启动server
npm run serve
# 然后用浏览器打开 http://localhost:5006/
# 根据提示进行即可
```

## 扩展方式

`tool/project/` 下的每个文件夹代表一个项目。

`fetch.js` 为在浏览器控制台下执行的抓取脚本

`main.js` 为服务端保存文档的node模块

