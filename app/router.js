'use strict';

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/blog');
const con = mongoose.connection;
con.on('error', console.error.bind(console, '连接数据库失败'));
con.once('open', () => {
  console.log('连接成功');
});
/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  router.post('/add', controller.home.add);
};
