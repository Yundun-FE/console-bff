'use strict';

module.exports = appInfo => {
  const config = exports = {};

  config.keys = 'bff';

  config.middleware = [ 'errorHandler' ];

  config.server = {
    serviceList: [],
    defaultService: 'YUNDUN FE',
    defaultServer: '',
  };

  config.redis = {
    client: {
      port: 6379,
      host: '127.0.0.1',
      password: 'auth',
      db: 0,
    },
  };

  config.security = {
    csrf: {
      enable: false,
    },
  };

  return config;
};
