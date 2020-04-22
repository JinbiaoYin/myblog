module.exports = [
    { text: 'Home', link: '/' },
    { text: 'Guide', link: '/guide/' },
    { 
        text: '前端', items: [
            { text: 'Vue', link: '/front/vue/' },
        ]
    },
    { 
        text: '后端', items: [
            { text: 'Java', link: '/backend/java/' },
            { text: 'Go', link: '/backend/go/'},
            { text: '计算机网络', link: '/backend/internet/'},
        ]
    },
    { 
        text: '数据库', items: [    
            { text: 'MySQL', link: '/database/mysql/'},
            { text: 'Oracle', link: '/database/oracle/' },
            { text: 'Redis', link: '/database/redis/' },
        ]
    },
    { 
        text: '操作系统', items: [
            { text: 'Linux', link: '/os/linux/' },
        ]
    },
    { 
        text: '开发工具', items: [
            { text: 'Git', link: '/tools/git/' },
            { text: 'Navicat', link: '/tools/navicat/' },
            { text: 'Maven', link: '/tools/maven/' },
            { text: 'Nginx', link: '/tools/nginx/' },
        ]
    },
    { 
        text: '其它', items: [    
            { text: 'CICD', link: '/others/cicd/'},
            { text: 'SDK', link: '/others/sdk/' },
            { text: 'Issues', link: '/others/issues/' },
            { text: 'Utils', link: '/others/utils/' },
            { text: '工作记录', link: '/others/work/' },
            { text: '面试宝典', link: '/others/interview/' },
        ]
    }
]