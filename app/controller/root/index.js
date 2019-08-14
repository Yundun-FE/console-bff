'use strict';

const Controller = require('egg').Controller;
const PKG = require('../../../package.json');

class IndexController extends Controller {
  async version() {
    const { ctx } = this;
    const { name, version } = PKG;

    ctx.body = { name, version };
  }
}

module.exports = IndexController;
