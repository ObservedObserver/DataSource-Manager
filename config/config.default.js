'use strict';

module.exports = appInfo => {
  const config = exports = {
    security: {
      csrf: {
        enable: false
      }
    },
    cors: {
      origin: '*',
      allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH,OPTIONS'
    }
  };

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1542441960876_8786';

  // add your config here
  config.middleware = [];

  return config;
};
