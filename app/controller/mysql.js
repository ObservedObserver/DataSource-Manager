'use strict';
const Controller = require('egg').Controller;

class MysqlController extends Controller {
  async sqlQuery() {
    const { config, sql } = this.ctx.request.body;
    const { service } = this.ctx;
    let result = await service.mysql.query({config, sql});
    let success = typeof result === 'string' ? false : true;
    this.ctx.body = {
      success,
      result
    };
  }
  async getDatabases () {
    const { config } = this.ctx.request.body;
    const { service } = this.ctx;
    let sql = 'SHOW DATABASES;';
    let result = await service.mysql.query({config, sql});
    let success = typeof result === 'string' ? false : true;
    this.ctx.body = {
      success,
      result
    }
  }
 }

module.exports = MysqlController;
