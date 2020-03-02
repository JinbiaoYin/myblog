const front = require('./front/index.js')
const backend = require('./backend/index.js')

module.exports = {
    //前端部分笔记
    '/front/': front,      
    //后端部分笔记
    '/backend/': [
      '',      /* /backend/ */
    ],    
    '/about': [
        '',        /* / */
    ],
    // fallback
    '/': [
      '',        /* / */
    ]
}