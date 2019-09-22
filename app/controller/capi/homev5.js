'use strict';

const Controller = require('egg').Controller;

class Homev5Controller extends Controller {
  async index() {
    const { headers, methods } = this.ctx;
    const { cmd, data } = this.ctx.request.body;
    if (!cmd) throw new Error('NoCMD');

    this.ctx.body = {
      headers,
      methods,
    };
  }
}

module.exports = Homev5Controller;
