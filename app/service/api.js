'use strict';

const Service = require('egg').Service;
const axios = require('axios');

class ApiService extends Service {
  async fetch({ method, url, token, data }) {
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
    return res.data;
  }
}

module.exports = ApiService;
