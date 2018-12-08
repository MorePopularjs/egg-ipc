'use strict';

// module.exports = app => {
//   app.beforeStart(async () => {
//     // ensure memory cache exists before app ready
//     await app.runSchedule('force_refresh');
//   });

//   const { messenger } = app;

//   messenger.on('refresh', by => {
//     app.logger.info('start update by %s', by);
//     // create an anonymous context to access service
//     const ctx = app.createAnonymousContext();
//     // a convenient way to excute with generator function
//     // can replaced by `co`
//     ctx.runInBackground(async () => {
//       await ctx.service.source.update();
//       app.lastUpdateBy = by;
//     });
//   });
// };


// const RegistryClient = require('./registry_client');

// module.exports = app => {
//   app.registryClient = app.cluster(RegistryClient).create({});
//   app.beforeStart(async () => {
//     await app.registryClient.ready();
//     app.coreLogger.info('registry client is ready');

//     // 调用 subscribe 进行订阅
//     app.registryClient.subscribe({
//       dataId: 'demo.DemoService',
//     }, val => {
//       console.log('订阅一个方法');
//       console.log(val);
//       // ...
//     });
//     // 调用 getConfig 接口
//     const res = await app.registryClient.getConfig('demo.DemoService');
//     console.log(res);
//   });
// };


const APIClient = require('./APIClient'); // 上面那个模块
module.exports = app => {
  const config = app.config.apiClient;
  app.apiClient = new APIClient(Object.assign({}, config, { cluster: app.cluster }));
  // console.log('eeeee');
  // console.log();
  app.beforeStart(async () => {
    await app.apiClient.ready();
  });
};