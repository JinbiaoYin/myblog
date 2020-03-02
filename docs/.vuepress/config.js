const plugins = require('../../config/pluginconfig.js')
const nav = require('../../config/navconfig.js')
const sidebar = require('../../config/sidebarconfig/index.js')
module.exports = {
    title: "小二温不胜",
    description: '温不胜的blog',
    head: [//favicon配置
        ['link', { rel: 'icon', href: '/favicon.ico' }],
        ['link', { rel: 'manifest', href: '/manifest.json' }]   
    ],
    locales: {//多语言配置
        '/': {
            lang: 'zh-CN',
        }
    },
    themeConfig: {//主题配置
        repo: 'JinbiaoYin/myblog',
        docsDir: 'docs',
        editLinks: true,
        editLinkText: '编辑！',
        lastUpdated: '上次更新', // string | boolean
        displayAllHeaders: true,//展开所有侧边栏，默认为false
        plugins: plugins,
        nav: nav,
        sidebar: sidebar
      }
}