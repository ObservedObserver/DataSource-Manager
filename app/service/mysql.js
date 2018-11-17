const Service = require('egg').Service;
const mysqlQuery = require('../utils/mysql.promise.js');
class MysqlService extends Service {
  async query ({config, sql}) {
    let result;
    try {
      result = await mysqlQuery({config, sql});
    } catch (error) {
      switch (error.code) {
        case 'ER_ACCESS_DENIED_ERROR':
          result = '数据库拒绝访问';
          break;
        case 'ECONNREFUSED':
          result = '不可访问目标地址';
          break;
        case 'ER_BAD_DB_ERROR':
          result = '不存在数据库';
          break;
        default:
          result = error.toString()
      }
    }
    return result;
  }
}

module.exports = MysqlService;