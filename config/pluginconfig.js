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
  'vuepress-plugin-auto-sidebar': {},//自动生成侧边栏
  '@vuepress/last-updated' : {//最后更新时间插件
    transformer: (timestamp, lang) => {
      // 不要忘了安装 moment
      moment.locale('zh-CN')
      //return moment(timestamp).fromNow()
      return moment(timestamp).format('YYYY-MM-DD h:mm:ss')
    }
  },
  '@vuepress/medium-zoom': {
    selector: '.content__default img',
    // medium-zoom options here
    // See: https://github.com/francoischalifour/medium-zoom#options
    options: {
      margin: 16
    }
  }

}