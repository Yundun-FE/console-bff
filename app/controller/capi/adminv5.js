'use strict';

const Controller = require('egg').Controller;

class ApiController extends Controller {
  async get() {
    const { server, Authorization: token } = this.ctx.headers;
    const method = 'get';
    const url = `http://adminv5.com/${this.ctx.url}`;
    this.ctx.body = await this.ctx.service.api.adminv5.fetch({ method, url, token });
  }

  async post() {
    const { server, authorization: token } = this.ctx.headers;
    const data = this.ctx.request.body;
    const method = 'post';
    // const url = `http://adminv5.com/${this.ctx.url}`;
    const url = 'http://adminv5.com/v5manage/webcdndomain/getWebCdnDomainList';
    this.ctx.body = await this.ctx.service.api.adminv5.fetch({ method, url, token, data });
  }

  async put() {
    const { server, Authorization: token } = this.ctx.headers;
    const data = this.ctx.request.body;
    const method = 'put';
    const url = `http://adminv5.com/${this.ctx.url}`;
    this.ctx.body = await this.ctx.service.api.adminv5.fetch({ method, url, token, data });
  }

  async delete() {
    const { server, Authorization: token } = this.ctx.headers;
    const data = this.ctx.request.body;
    const method = 'delete';
    const url = `http://adminv5.com/${this.ctx.url}`;
    this.ctx.body = await this.ctx.service.api.adminv5.fetch({ method, url, token, data });
  }
}

module.exports = ApiController;
