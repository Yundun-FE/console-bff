'use strict';

const Controller = require('egg').Controller;

class ApiController extends Controller {
  async get() {
    const { server, token } = this.ctx.headers;
    const method = 'get';
    const url = `${server}${this.ctx.url}`;
    this.ctx.body = await this.ctx.service.api.fetch({ method, url, token });
  }

  async post() {
    const { server, token } = this.ctx.headers;
    const data = this.ctx.request.body;
    const method = 'post';
    const url = `${server}${this.ctx.url}`;
    this.ctx.body = await this.ctx.service.api.fetch({ method, url, token, data });
  }

  async put() {
    const { server, token } = this.ctx.headers;
    const data = this.ctx.request.body;
    const method = 'put';
    const url = `${server}${this.ctx.url}`;
    this.ctx.body = await this.ctx.service.api.fetch({ method, url, token, data });
  }

  async delete() {
    const { server, token } = this.ctx.headers;
    const data = this.ctx.request.body;
    const method = 'delete';
    const url = `${server}${this.ctx.url}`;
    this.ctx.body = await this.ctx.service.api.fetch({ method, url, token, data });
  }
}

module.exports = ApiController;
