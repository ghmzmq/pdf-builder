const path = require("path");
let bookConfig = {
    title: "Vue.js(2.x)文档",
    authors: "流光",
    comments: "此文档由流光整理制作",
    language: "zh-hans",
    paperSize: "a4",
    tocXpath: {
        level1: "//h:title",
        level2: "//h:h2",
        level3: "//h:h3"
    },
    marginOption: {
        left: 18,
        right: 18,
        top: 38,
        bottom: 38
    },
    headerTpl: '<div style="margin:12px 0;padding-bottom: 10px;width:100%;overflow:hidden;border-bottom: 1px solid #eee;color: #5c6163;font-size:14px;">' +
        '<div style="float:right;">第 _PAGENUM_ 页</div>' +
        '<div>_SECTION_</div>' +
        '</div>',
    footerTpl: '<div style="margin:12px 0;padding-top: 10px;width:100%;overflow:hidden;border-top: 1px solid #eee;color: #5c6163;font-size:14px;">' +
        '<div style="float:right;">第 _PAGENUM_ 页</div>' +
        '<div>_SECTION_</div>' +
        '</div>',
    entryFile: path.resolve(__dirname, '../dist/html/index.html'),
};
module.exports = ()=> {
    return bookConfig;
};