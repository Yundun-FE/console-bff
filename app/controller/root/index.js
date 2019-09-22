'use strict';

const Controller = require('egg').Controller;
const PKG = require('../../../package.json');

class IndexController extends Controller {
  async version() {
    const { ctx } = this;
    const { name, version } = PKG;

    const servers = [
      {
        label: 'Admin V5',
        value: 'adminv5',
      },
      {
        label: 'Home V5',
        value: 'homev5',
      },
      {
        label: 'YUNDUN FE',
        value: 'fe',
      },
    ];

    ctx.body = { name, version, servers };
  }
}

module.exports = IndexController;
