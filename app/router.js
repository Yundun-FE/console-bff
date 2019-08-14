'use strict';

module.exports = app => {
  const { router, controller, service } = app;

  router.get('/', controller.root.index.version);
  router.post('/login', controller.auth.login);
  router.get('/token', controller.auth.token);

  router.get('/api/*', controller.api.get);
  router.post('/api/*', controller.api.post);
  router.put('/api/*', controller.api.put);
  router.delete('/api/*', controller.api.delete);

  router.get('/agent/:key/*', controller.agent.get);
  router.post('/agent/:key/*', controller.agent.post);
  router.put('/agent/:key/*', controller.agent.put);
  router.delete('/agent/:key/*', controller.agent.delete);
};
