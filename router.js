// 路由模块

// 1.导包
const express = require('express');
const c_user = require('./controllers/c_user');

// 2.实例化 router.js
const router = express.Router();
// 3.监听端口 实现函数
app.get('/', c_user.showSignin);

// 4.导出router
module.exports = router;