// 入口文件

// 1.导包
const express = require('express');
const router = require('./router');
 
// 2.配置
const app = express();
// 3.挂载路由
router.use();
// 4.监听端口
router.listen(8000, () => {
    console.log('run it ----');
})