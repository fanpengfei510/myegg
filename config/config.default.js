/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1558354146624_465';

  // add your middleware config here
  config.middleware = [];

  config.mongoose = {
    url :'mongodb://localhost:27017/blog',
    options : {useNewUrlParser: true}
  }
  // config.cors = {
  //   origin: '*', // 访问白名单,根据你自己的需要进行设置
  //   allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH'
  // };
  config.security = {
    csrf: {
      enable: false,
    }
  };
  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  return {
    ...config,
    ...userConfig,
  };
};
