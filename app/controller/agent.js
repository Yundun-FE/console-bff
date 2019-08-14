'use strict';

const Controller = require('egg').Controller;

class ApiController extends Controller {
  async get() {
    const { key } = this.ctx.params;
    const { server } = this.ctx.service.agent.parseData(key);
    const method = 'get';
    const url = `${server}/api${this.ctx.url.split('api')[1]}`;
    const token = await this.ctx.service.sso.getTokenByKey(key);

    this.ctx.body = await this.ctx.service.api.fetch({ method, url, token });
  }

  async post() {
    const { key } = this.ctx.params;
    const { server } = this.ctx.service.agent.parseData(key);
    const method = 'post';
    const url = `${server}/api${this.ctx.url.split('api')[1]}`;
    const token = await this.ctx.service.sso.getTokenByKey(key);
    const data = this.ctx.request.body;

    this.ctx.body = await this.ctx.service.api.fetch({ method, url, token, data });
  }

  async put() {
    const { key } = this.ctx.params;
    const { server } = this.ctx.service.agent.parseData(key);
    const method = 'put';
    const url = `${server}/api${this.ctx.url.split('api')[1]}`;
    const token = await this.ctx.service.sso.getTokenByKey(key);
    const data = this.ctx.request.body;

    this.ctx.body = await this.ctx.service.api.fetch({ method, url, token, data });
  }

  async delete() {
    const { key } = this.ctx.params;
    const { server } = this.ctx.service.agent.parseData(key);
    const method = 'delete';
    const url = `${server}/api${this.ctx.url.split('api')[1]}`;
    const token = await this.ctx.service.sso.getTokenByKey(key);
    const data = this.ctx.request.body;

    this.ctx.body = await this.ctx.service.api.fetch({ method, url, token, data });
  }
}

module.exports = ApiController;
