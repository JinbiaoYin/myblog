const head = require('../../config/headconfig.js')
const plugins = require('../../config/pluginconfig.js')
const nav = require('../../config/navconfig.js')
module.exports = {
    title: "小二温不胜",
    description: '温不胜的blog',
    head: head,
    plugins: plugins,
    themeConfig: {//主题配置
        repo: 'JinbiaoYin/myblog',
        docsDir: 'docs',
        editLinks: true,
        editLinkText: '编辑！',
        lastUpdated: '上次更新', // string | boolean
        nav: nav
      }
}