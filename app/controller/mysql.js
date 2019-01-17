'use strict';
const Controller = require('egg').Controller;

class MysqlController extends Controller {
  async sqlQuery() {
    const { config, sql } = this.ctx.request.body;
    const { service } = this.ctx;
    const result = await service.mysql.query({ config, sql });
    const success = typeof result !== 'string';
    this.ctx.body = {
      success,
      result,
    };
  }
  async getDatabases() {
    const { config } = this.ctx.request.body;
    const { service } = this.ctx;
    const sql = 'SHOW DATABASES;';
    const result = await service.mysql.query({ config, sql });
    const success = typeof result !== 'string';
    this.ctx.body = {
      success,
      result,
    };
  }
}

module.exports = MysqlController;
