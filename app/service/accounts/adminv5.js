'use strict';

const Service = require('egg').Service;
const axios = require('axios');
const qs = require('qs');
const btoa = require('btoa');

class Adminv5Service extends Service {
  async login(form) {
    const PHPSESSID = this.ctx.headers.authorization;
    console.log(PHPSESSID);
    const res = await axios({
      url: 'http://adminv5.com/YundunAdminIndex/public/check_login',
      method: 'POST',
      headers: {
        Cookie: `PHPSESSID=${PHPSESSID}`,
      },
      data: qs.stringify({
        account: form.username,
        password: form.password,
        yzm: form.captcha,
      }),
    });

    const data = res.data;
    const { info: message } = data;

    return { message };
  }

  async getCaptcha() {
    const res = await axios({
      responseType: 'arraybuffer',
      url: 'http://adminv5.com/YundunAdminIndex/public/yzm',
    });

    const cookie = res.headers['set-cookie'][0];
    const accessToken = cookie.split(';')[0].split('=')[1];
    const data = 'data:image/png;base64,' + btoa(
      new Uint8Array(res.data)
        .reduce((data, byte) => data + String.fromCharCode(byte), '')
    );

    return {
      accessToken,
      data,
    };
  }
}

module.exports = Adminv5Service;

