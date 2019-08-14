'use strict';

const Service = require('egg').Service;
const axios = require('axios');
const qs = require('qs');

function getQueryVariable(url, variable) {
  const query = url.split('?')[1];
  const vars = query.split('&');
  for (let i = 0; i < vars.length; i++) {
    const pair = vars[i].split('=');
    if (pair[0] === variable) {
      return pair[1];
    }
  }
  return false;
}

class SsoService extends Service {
  async getToken(server) {
    let res;
    try {
      res = await axios({
        url: `${server}/api/sso/V4/attach`,
        method: 'GET',
      });
    } catch (e) {
      throw new Error('getToken_Error');
    }

    const responseUrl = res.request.res.responseUrl;
    const token = getQueryVariable(responseUrl, 'token');
    return token;
  }

  async getTokenByKey(keyData) {
    const { username, password, server } = this.ctx.service.agent.parseData(keyData);
    const method = 'get';

    let token;
    token = await this.app.redis.get(keyData);
    if (!token) {
      const res = await this.ctx.service.sso.login({ username, password, server });
      token = res.token;
      this.app.redis.set(keyData, token);
    }
    return token;
  }

  async login({ username, password, server }) {
    const data = {
      username,
      password,
    };

    const token = await this.getToken(server);
    let res;
    try {
      res = await axios({
        url: `${server}/api/sso/V4/login`,
        method: 'POST',
        data: qs.stringify(data),
        headers: {
          Cookie: `sso_token_yundunv5=${token}`,
        },
      });
    } catch (e) {
      throw new Error('账号不正确');
    }

    const cookie = res.headers['set-cookie'][0];
    return { token, cookie };
  }
}

module.exports = SsoService;
