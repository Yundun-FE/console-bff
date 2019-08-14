'use strict';

const Controller = require('egg').Controller;
const axios = require('axios');
const qs = require('qs');

class AuthController extends Controller {
  async token() {
    const { server } = this.ctx.request.body;
    this.ctx.body = await this.service.sso.getToken(server);
  }

  async login() {
    const { username, password, pass_secret, server } = this.ctx.request.body;
    const data = {
      username,
      password,
      pass_secret,
    };

    let res;
    const SSOToken = await this.ctx.service.sso.getToken(server);
    try {
      res = await axios({
        url: `${server}/api/sso/V4/login`,
        method: 'POST',
        data: qs.stringify(data),
        headers: {
          // Cookie: `sso_token_yundunv5=${SSOToken}`
          Cookie: `sso_token_yundunv5=${SSOToken}`,
        },
      });
    } catch (e) {
      throw new Error('账号不正确');
    }

    const cookie = res.headers['set-cookie'][0];
    const token = cookie.split(';')[0].split('=')[1];
    this.ctx.body = { cookie, token, SSOToken };
  }
}

module.exports = AuthController;
