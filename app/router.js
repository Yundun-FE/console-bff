'use strict';

module.exports = app => {
  const { controller, service } = app;

  const router = app.router.namespace('/api');

  router.get('/', controller.root.index.version);
  router.post('/accounts/login', controller.accounts.login.login);
  router.get('/accounts/login/captcha', controller.accounts.login.captcha);
  router.post('/login', controller.auth.login);
  router.get('/token', controller.auth.token);
  router.get('/account/', controller.auth.token);

  router.get('/capi/adminv5/*', controller.capi.adminv5.get);
  router.post('/capi/adminv5/*', controller.capi.adminv5.post);
  router.put('/capi/adminv5/*', controller.capi.adminv5.put);
  router.delete('/capi/adminv5/*', controller.capi.adminv5.delete);

  router.post('/capi/homev5', controller.capi.homev5.index);

  // router.get('/api/*', controller.api.get);
  // router.post('/api/*', controller.api.post);
  // router.put('/api/*', controller.api.put);
  // router.delete('/api/*', controller.api.delete);

  router.get('/agent/:key/*', controller.agent.get);
  router.post('/agent/:key/*', controller.agent.post);
  router.put('/agent/:key/*', controller.agent.put);
  router.delete('/agent/:key/*', controller.agent.delete);
};
