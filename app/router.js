'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.post('createPost', '/mysql/query', controller.mysql.sqlQuery);
  router.post('createPost', '/mysql/getdbs', controller.mysql.getDatabases);
  router.options('/mysql/query', controller.mysql.sqlQuery);
  router.options('/mysql/getdbs', controller.mysql.getDatabases)
};
