'use strict';

const Service = require('egg').Service;
const axios = require('axios');

const NOT_LOGIN_NUM = 16149;

class ApiService extends Service {
  async fetch({ method, url, token, data, key }) {
    let res = await this.send({ method, url, token, data });

    const { status } = res.data;
    // token 失效
    if (status && status.code === NOT_LOGIN_NUM) {
      token = await this.ctx.service.sso.getTokenByKey(key, true);
      res = await this.send({ method, url, token, data });
    }
    return res.data;
  }

  async send({ method, url, token, data }) {
    let res;
    try {
      res = await axios({
        url,
        method,
        data,
        headers: {
          Cookie: `sso_token_yundunv5=${token}`,
        },
      });

    } catch (e) {
      res = e.response;
    }
    return res;
  }

}

module.exports = ApiService;
