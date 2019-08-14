'use strict';

const Service = require('egg').Service;
const { Base64 } = require('js-base64');

class AgentService extends Service {
  parseData(data) {
    data = decodeURIComponent(Base64.decode(data));
    const [ username, password, server ] = data.split('||');
    return {
      username,
      password,
      server,
    };
  }
}

module.exports = AgentService;
