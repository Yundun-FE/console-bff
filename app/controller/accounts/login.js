'use strict';

const Controller = require('egg').Controller;

class LoginController extends Controller {
  async login() {
    const form = this.ctx.request.body;
    const { action = 'adminv5' } = form;

    const res = await this.ctx.service.accounts.adminv5.login(form);
    this.ctx.body = res;
  }

  async captcha() {
    this.ctx.body = await this.ctx.service.accounts.adminv5.getCaptcha();
  }
}

module.exports = LoginController;
