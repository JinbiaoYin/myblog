const moment = require('moment')
module.exports = {
  '@vuepress/pwa': {
       serviceWorker: true,
       updatePopup: {
         message: "发现新内容可用",
         buttonText: "刷新"
       }
     },
  '@vuepress/back-to-top': true,//回到顶部插件
  '@vuepress/google-analytics': {//谷歌流量访问分析插件
    'ga': 'UA-159565514-1' 
  },
  'vuepress-plugin-auto-sidebar': {//自动生成侧边栏
    titleMode: "uppercase"
  },
  '@vuepress/last-updated' : {//最后更新时间插件
    transformer: (timestamp, lang) => {
      moment.locale('zh-CN')
      return moment(timestamp).format('YYYY-MM-DD HH:mm:ss')
    }
  },
  '@vuepress/medium-zoom': {
    selector: '.content__default img',
    options: {
      margin: 16
    }
  }

}